# -*- coding: utf-8 -*-
"""Pick the 65 questions most likely to still be in the live SAA-C03 pool.

The dump carries no dates and no "seen on my exam" notes, so the only usable
signal is when each question was reported. Every question links to an
ExamTopics discussion, and discussion ids are handed out site-wide in posting
order, so a higher id means the scenario was reported more recently. When a
scenario was reported again later (a near-duplicate that dedupe dropped from
the pool), the kept question takes the newer id.

The paper keeps the exam shape -- 19/17/16/13 by domain, 7 choose-two and
1 choose-three -- and fills every slot with the most recently reported
question that fits. None of this predicts a specific sitting; it only leans
toward the part of the bank that is least likely to have been retired.

Run after assemble.py. It adds a "likely" block to data/exams.json.
"""
import re, json, io, os, random, collections

import assemble

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "data")


def disc_id(q):
    m = re.search(r"/view/(\d+)-", q.get("discussion") or "")
    return int(m.group(1)) if m else 0


def build():
    path = os.path.join(DATA, "exams.json")
    meta = json.load(io.open(path, encoding="utf-8"))
    pool = {q["id"]: q for q in meta["pool"]}

    # latest report of each scenario, counting the near-duplicates dedupe dropped
    everything = json.load(io.open(os.path.join(DATA, "classified.json"), encoding="utf-8"))
    by_id = {q["id"]: q for q in everything}
    _, dropped = assemble.dedupe(everything)
    latest = {i: disc_id(q) for i, q in pool.items()}
    reports = collections.Counter({i: 1 for i in pool})
    for gone, kept in dropped:
        if kept in latest:
            latest[kept] = max(latest[kept], disc_id(by_id[gone]))
            reports[kept] += 1

    newest = sorted(pool.values(), key=lambda q: -latest[q["id"]])
    need = dict(assemble.EXAM_BLUEPRINT)
    picked, taken = [], set()

    def take(q):
        picked.append(q)
        taken.add(q["id"])
        need[q["domain"]] -= 1

    # multiple-response first, newest first, never pushing a domain past its count
    for nsel, total in sorted(assemble.MULTI_TARGET.items(), reverse=True):
        for q in newest:
            if total == 0:
                break
            if q["nsel"] == nsel and need[q["domain"]] > 0:
                take(q)
                total -= 1
    for q in newest:
        if q["nsel"] == 1 and q["id"] not in taken and need[q["domain"]] > 0:
            take(q)

    ordered = assemble.interleave(picked, random.Random(20260916))
    ids = [q["id"] for q in ordered]

    # how far back each domain had to reach, as a share of the bank
    rank = {q["id"]: i for i, q in enumerate(newest)}
    seen = {i for e in meta["exams"] for i in e["question_ids"]}
    print("most likely paper: %d questions" % len(ids))
    for d in assemble.DOMAINS:
        mine = [q for q in ordered if q["domain"] == d]
        deepest = max(rank[q["id"]] for q in mine)
        print("  %-4s %2d questions, all within the newest %d%% of the bank"
              % (d, len(mine), round((deepest + 1) / len(newest) * 100)))
    print("  multi-response:", dict(collections.Counter(q["nsel"] for q in ordered if q["nsel"] > 1)))
    print("  difficulty:", dict(collections.Counter(q["difficulty"] for q in ordered)))
    print("  reported more than once:", sum(1 for i in ids if reports[i] > 1))
    print("  already in papers 1-6:", len(seen & set(ids)))
    print("  discussion ids %d..%d (bank spans %d..%d)"
          % (min(latest[i] for i in ids), max(latest[i] for i in ids),
             min(latest.values()), max(latest.values())))

    meta["likely"] = dict(question_ids=ids)
    json.dump(meta, io.open(path, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print("\nwrote %s" % path)
    return ordered


if __name__ == "__main__":
    build()
