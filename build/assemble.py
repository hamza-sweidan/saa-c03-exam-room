# -*- coding: utf-8 -*-
"""Assemble full-length SAA-C03 practice exams from the classified pool.

Each exam mirrors the real thing:
  * 65 questions, 130 minutes, 720/1000 to pass (~54% raw)
  * domain counts follow the exam-guide weights exactly (19/17/16/13)
  * ~12% multiple-response (7 "choose two" + 1 "choose three")
  * questions interleaved, never grouped by domain, and never more than
    two in a row from the same domain or the same service family
  * a difficulty spread taken from the community-consensus percentage
  * no near-duplicate scenarios inside an exam or across exams
"""
import re, json, io, os, random, collections, itertools

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "data")

DOMAINS = ["SEC", "REL", "PERF", "COST"]
DOMAIN_NUM = {"SEC": 1, "REL": 2, "PERF": 3, "COST": 4}
DOMAIN_NAMES = {
    "SEC":  "Design Secure Architectures",
    "REL":  "Design Resilient Architectures",
    "PERF": "Design High-Performing Architectures",
    "COST": "Design Cost-Optimized Architectures",
}
# 30 / 26 / 24 / 20 of 65, allocated by largest remainder
EXAM_BLUEPRINT = {"SEC": 19, "REL": 17, "PERF": 16, "COST": 13}
EXAM_SIZE = sum(EXAM_BLUEPRINT.values())
MULTI_TARGET = {2: 7, 3: 1}          # choose-two / choose-three per exam
N_EXAMS = 6
TIME_LIMIT_MIN = 130
PASS_SCALED = 720

# ---------------------------------------------------------------- families
# Used only to stop three storage questions landing back to back.
FAMILIES = [
    ("Networking & CDN", r"CloudFront|Route 53|Global Accelerator|Direct Connect|Transit Gateway|"
                         r"VPC peering|VPN|NAT gateway|subnet|CIDR|PrivateLink|VPC endpoint|"
                         r"load balancer|\bALB\b|\bNLB\b|security group|network ACL"),
    ("Identity & Governance", r"\bIAM\b|Organizations|Identity Center|Cognito|Directory Service|"
                              r"\bSTS\b|\bSCP\b|Control Tower|permission|role|federat|Service Catalog"),
    ("Data protection",  r"\bKMS\b|CloudHSM|encrypt|Secrets Manager|Certificate Manager|Macie|"
                         r"Object Lock|GuardDuty|Inspector|Security Hub|\bWAF\b|Shield|CloudTrail|AWS Config"),
    ("Storage",          r"Amazon S3|\bEBS\b|\bEFS\b|\bFSx\b|Storage Gateway|Glacier|"
                         r"Intelligent-Tiering|lifecycle|Snowball|instance store"),
    ("Database",         r"\bRDS\b|Aurora|DynamoDB|Redshift|ElastiCache|DocumentDB|Neptune|"
                         r"Keyspaces|Timestream|MemoryDB|\bDAX\b|database"),
    ("Compute",          r"Amazon EC2|Auto Scaling|Lambda|Fargate|\bECS\b|\bEKS\b|Elastic Beanstalk|"
                         r"Spot|Reserved Instance|Savings Plan|Graviton|Lightsail|Batch"),
    ("App integration",  r"\bSQS\b|\bSNS\b|EventBridge|Step Functions|API Gateway|Amazon MQ|AppSync|AppFlow"),
    ("Analytics",        r"Kinesis|Athena|\bEMR\b|\bGlue\b|OpenSearch|QuickSight|Lake Formation|"
                         r"\bMSK\b|DataSync|Transfer Family|Data Firehose"),
    ("Management",       r"CloudWatch|Systems Manager|CloudFormation|Trusted Advisor|Cost Explorer|"
                         r"AWS Budgets|Compute Optimizer|AWS Backup|Resource Groups"),
]


def family(q):
    text = q["stem"] + " " + " ".join(q["options"].values())
    best, best_n = "General", 0
    for name, pat in FAMILIES:
        n = len(re.findall(pat, text, re.I))
        if n > best_n:
            best, best_n = name, n
    return best


def difficulty(q):
    """Community consensus as a difficulty proxy.

    Below 70% the community itself is split, so those questions are both the
    hardest and the most worth reading the discussion thread on.
    """
    c = q.get("confidence")
    if c is None:
        return "medium"
    if c >= 90:
        return "easy"
    if c >= 70:
        return "medium"
    return "hard"


# per-domain difficulty quota, summing to the blueprint counts above
DIFFICULTY_QUOTA = {
    "SEC":  {"easy": 11, "medium": 6, "hard": 2},
    "REL":  {"easy": 10, "medium": 5, "hard": 2},
    "PERF": {"easy": 9,  "medium": 5, "hard": 2},
    "COST": {"easy": 7,  "medium": 4, "hard": 2},
}


# ---------------------------------------------------------------- dedupe
STOP = set("a an the to of in on for and or with that this is are be will can from at as by "
           "company companies solution solutions architect requirements requirement meet meets "
           "which what should must needs need wants want use uses using aws amazon".split())


def shingles(text, k=4):
    words = [w for w in re.findall(r"[a-z0-9]+", text.lower()) if w not in STOP]
    return {" ".join(words[i:i + k]) for i in range(max(0, len(words) - k + 1))}


def dedupe(qs, threshold=0.45):
    """Drop later near-duplicates, comparing every question against every
    earlier one that shares any 4-word shingle."""
    sig = {q["id"]: shingles(q["stem"]) for q in qs}
    index = collections.defaultdict(set)
    keep, dropped = [], []
    for q in qs:
        s = sig[q["id"]]
        if not s:
            keep.append(q)
            continue
        counts = collections.Counter()
        for sh in s:
            for cid in index[sh]:
                counts[cid] += 1
        dup = None
        for cid, inter in counts.most_common(8):
            if inter / min(len(s), len(sig[cid])) >= threshold:
                dup = cid
                break
        if dup is not None:
            dropped.append((q["id"], dup))
            continue
        keep.append(q)
        for sh in s:
            index[sh].add(q["id"])
    return keep, dropped


# ---------------------------------------------------------------- ordering
def interleave(questions, rng, max_run=2):
    """Shuffle so the domain and service family keep changing, like the real exam."""
    best, best_cost = None, None
    for _ in range(400):
        pool = questions[:]
        rng.shuffle(pool)
        out, cost = [], 0
        remaining = pool[:]
        while remaining:
            pick = None
            for i, q in enumerate(remaining):
                d_run = sum(1 for p in out[-max_run:] if p["domain"] == q["domain"])
                f_run = sum(1 for p in out[-max_run:] if p["family"] == q["family"])
                if d_run < max_run and f_run < max_run:
                    pick = i
                    break
            if pick is None:
                pick, cost = 0, cost + 1
            out.append(remaining.pop(pick))
        # multi-response items land wherever the shuffle put them, except that
        # two must not sit next to each other and one must not open the exam
        pos = [i for i, q in enumerate(out) if q["nsel"] > 1]
        adjacent = sum(1 for a, b in zip(pos, pos[1:]) if b - a == 1)
        cost = cost * 100 + adjacent * 10 + (3 if 0 in pos else 0)
        if best_cost is None or cost < best_cost:
            best, best_cost = out, cost
    return best


# ---------------------------------------------------------------- build
def build():
    qs = json.load(io.open(os.path.join(DATA, "classified.json"), encoding="utf-8"))
    for q in qs:
        q["family"] = family(q)
        q["difficulty"] = difficulty(q)

    unique, dropped = dedupe(qs)
    print("pool %d -> %d after removing %d near-duplicate scenarios"
          % (len(qs), len(unique), len(dropped)))

    rng = random.Random(20260910)
    # one shuffled queue per (domain, difficulty, single-vs-multi) cell
    queues = collections.defaultdict(list)
    for q in unique:
        queues[(q["domain"], q["difficulty"], min(q["nsel"], 3))].append(q)
    for v in queues.values():
        rng.shuffle(v)

    def pop(domain, diffs, nsel, seen_families=None):
        """Take one unused question, preferring the listed difficulties in order.

        Within a cell, favour the service family this exam has least of, so a
        single paper does not end up two-thirds networking.
        """
        for d in diffs:
            qcell = queues[(domain, d, nsel)]
            if not qcell:
                continue
            if seen_families is None:
                return qcell.pop()
            i = min(range(len(qcell)), key=lambda j: seen_families[qcell[j]["family"]])
            return qcell.pop(i)
        return None

    ORDER = ["easy", "medium", "hard"]

    def fallback(diff):
        """Difficulties to try when the preferred cell is empty: nearest first."""
        i = ORDER.index(diff)
        return sorted(ORDER, key=lambda d: abs(ORDER.index(d) - i))

    # Deal to all exams round-robin rather than finishing one exam at a time,
    # so scarce service families are shared out instead of being consumed by
    # whichever exam happens to be built first.
    N = N_EXAMS
    picked = [[] for _ in range(N)]
    fams = [collections.Counter() for _ in range(N)]
    need = [{d: dict(DIFFICULTY_QUOTA[d]) for d in DOMAINS} for _ in range(N)]
    shortfall = collections.Counter()

    def charge(n, dom, q):
        need[n][dom][q["difficulty"]] = max(0, need[n][dom][q["difficulty"]] - 1)
        picked[n].append(q)
        fams[n][q["family"]] += 1

    # multi-response first -- the scarcest resource. Spread across domains in
    # blueprint order, and charge each one against its domain quota.
    order = sorted(DOMAINS, key=lambda d: -EXAM_BLUEPRINT[d])
    for nsel, total in sorted(MULTI_TARGET.items(), reverse=True):
        for i in range(total):
            for n in range(N):
                for cand in order[i % len(order):] + order[: i % len(order)]:
                    want = max(need[n][cand], key=lambda k: need[n][cand][k])
                    q = None
                    for d in fallback(want):
                        if need[n][cand][d] > 0:
                            q = pop(cand, [d], nsel, fams[n])
                            if q:
                                break
                    q = q or pop(cand, ORDER, nsel, fams[n])
                    if q:
                        charge(n, cand, q)
                        break

    # then the single-answer body, one quota cell at a time across all exams
    for d in DOMAINS:
        for diff in ORDER:
            for _ in range(DIFFICULTY_QUOTA[d][diff]):
                for n in range(N):
                    if need[n][d][diff] <= 0:
                        continue
                    q = pop(d, [diff], 1, fams[n]) or pop(d, fallback(diff), 1, fams[n])
                    if q:
                        charge(n, d, q)
                    else:
                        shortfall[(d, diff)] += 1
    if shortfall:
        print("    ! shortfall:", dict(shortfall))

    exams = []
    for n in range(N):
        ordered = interleave(picked[n], random.Random(20260910 + n))
        exams.append(dict(number=n + 1, questions=ordered))
        dist = collections.Counter(q["domain"] for q in ordered)
        diff = collections.Counter(q["difficulty"] for q in ordered)
        multi = collections.Counter(q["nsel"] for q in ordered)
        print("  exam %d: %d questions | %s | multi %s | %s"
              % (n + 1, len(ordered), dict(dist),
                 {k: v for k, v in multi.items() if k > 1}, dict(diff)))

    out = os.path.join(DATA, "exams.json")
    json.dump(dict(
        generated="SAA-C03 practice exam set",
        exam_size=EXAM_SIZE, time_limit_min=TIME_LIMIT_MIN, pass_scaled=PASS_SCALED,
        blueprint=EXAM_BLUEPRINT, domain_names=DOMAIN_NAMES, domain_num=DOMAIN_NUM,
        exams=[dict(number=e["number"], question_ids=[q["id"] for q in e["questions"]]) for e in exams],
        pool=unique,
    ), io.open(out, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print("\nwrote %s (%d exams, %d unique questions in pool)" % (out, len(exams), len(unique)))
    return exams, unique


if __name__ == "__main__":
    build()
