# -*- coding: utf-8 -*-
"""Classify SAA-C03 questions into the four official exam-guide domains.

Domain weights in the real exam (AWS SAA-C03 exam guide):
  1  Design Secure Architectures          30%
  2  Design Resilient Architectures       26%
  3  Design High-Performing Architectures 24%
  4  Design Cost-Optimized Architectures  20%

Scoring is three-layered, strongest signal first:
  1. the emphasised qualifier in the asked question ("MOST cost-effectively")
  2. requirement phrases stated in the scenario body
  3. the AWS services named in the correct answer, then in the stem
"""
import re, json, io, os, collections

SEC, REL, PERF, COST = "SEC", "REL", "PERF", "COST"
DOMAINS = [SEC, REL, PERF, COST]
DOMAIN_NAMES = {
    SEC:  "Design Secure Architectures",
    REL:  "Design Resilient Architectures",
    PERF: "Design High-Performing Architectures",
    COST: "Design Cost-Optimized Architectures",
}
DOMAIN_NUM = {SEC: 1, REL: 2, PERF: 3, COST: 4}
TARGET_WEIGHT = {SEC: 0.30, REL: 0.26, PERF: 0.24, COST: 0.20}

# ---------------------------------------------------------------- layer 1
# The capitalised qualifier is what AWS itself uses to signal the domain.
QUALIFIER = [
    (r"MOST cost[- ]effective|LOWEST cost|LEAST expensive|MOST cost[- ]efficient|LOWEST[- ]cost|LOWEST data transfer", COST, 26),
    (r"MOST secure|MOST securely|MOST protection|LEAST privilege", SEC, 26),
    (r"HIGHEST availability|LEAST downtime|MINIMUM downtime|LOWEST recovery time|MOST reliable|LEAST disruption|LEAST interruption", REL, 26),
    (r"LEAST latency|LOWEST latency|BEST performance|FASTEST|HIGHEST performance|MOST performant", PERF, 26),
]

# ------------------------------------------------------------- layer 1.5
# Intent stated in the asked sentence without capitalisation. The asked
# sentence names the thing being optimised, so it outranks anything the
# scenario merely mentions in passing.
ASK_INTENT = [
    (r"cost|expens|budget|spend|cheap|econom", COST, 20),
    (r"secure|securit|protect|encrypt|unauthori[sz]ed|privileg|complian|permission|access control", SEC, 20),
    (r"performance|performant|latenc|throughput|response time|faster|speed|\bIOPS\b|"
     r"scal(e|es|ing|able)|bottleneck|slow", PERF, 20),
    (r"high(ly)? available|availabilit|fault[- ]toleran|resilien|disaster recovery|"
     r"downtime|failover|durab|recover|outage|reliab|uninterrupted|decoupl", REL, 20),
]

# ---------------------------------------------------------------- layer 2
REQUIREMENT = [
    # --- cost -------------------------------------------------------------
    (r"\bcost[- ]effective|\bcosts?\b.{0,30}\b(reduce|lower|minimi[sz]e|decrease|optimi[sz]e|control|cut)|"
     r"\b(reduce|lower|minimi[sz]e|decrease|optimi[sz]e|cut)\b.{0,30}\bcosts?\b|"
     r"cost optimi|reduce .{0,20}spend|save money|within budget|cost savings|"
     r"expensive|billing|overprovision|over[- ]provision|right[- ]si[sz]e|idle .{0,20}(instance|resource)|"
     r"unused (resource|capacity|instance)|charges?\b|pay (only )?for what|data transfer (costs?|charges?|fees?)", COST, 12),
    # --- security ---------------------------------------------------------
    # encryption counts only when it is stated as a requirement -- "SSL encryption
    # is maxing out the CPU" is a performance scenario, not a security one.
    (r"(must|need(s)?|require(s|d)?|should|shall|has to|want(s)? to)[^.]{0,70}encrypt|"
     r"encrypt[a-z]*[^.]{0,40}(at rest|in transit|in flight)|(at rest|in transit)[^.]{0,30}encrypt|"
     r"encryption (requirement|key|polic)|encrypt[a-z]* (the )?(data|object|file|volume|snapshot|backup|database|bucket)|"
     r"\bKMS\b|customer[- ]managed key|key rotation|rotate .{0,20}(key|credential|secret|password)|"
     r"least[- ]privilege|unauthori[sz]ed|publicly (accessible|available)|public access|"
     r"sensitive (data|information)|personally identifiable|\bPII\b|confidential|classified|"
     r"compliance|regulator|audit(ing|ed)?\b|governance|\bHIPAA\b|\bPCI\b|\bGDPR\b|"
     r"(restrict|control|limit|grant|revoke) .{0,25}(access|permission)|access control|"
     r"credential|authenticat|authori[sz]ation|\bMFA\b|multi[- ]factor|hard[- ]?cod(e|ed|ing) .{0,20}(key|credential|password|secret)|"
     r"must not be (accessible|exposed|reachable)|never (traverse|leave|traverses) the (public )?internet|"
     r"without .{0,20}(traversing|going over|exposing to) the (public )?internet|private(ly)? (connect|access|reach)|"
     r"malicious|threat|vulnerab|malware|intrusion|DDoS|SQL injection|cross[- ]site|"
     r"tamper|immutab|write[- ]once|retention (policy|period|requirement)|legal hold", SEC, 11),
    # Access restriction is often phrased without any security vocabulary at
    # all -- "each team can access only the services it needs" is Domain 1.
    (r"access only|only .{0,35}(can|may|be able to|is able to|are able to) access|"
     r"(must|should|does|do|can)\s?not .{0,35}(have|be able to|allow|gain) .{0,20}access|"
     r"prevent .{0,35}(access|from accessing|from reading|from viewing)|deny .{0,25}access|"
     r"no (direct )?access|without .{0,20}(access to|exposing)|"
     r"instance metadata|\bIMDSv?2?\b|"
     r"each (team|customer|tenant|department|user|group|account) .{0,45}(only|own|its own|their own)|"
     r"segregat|isolat(e|ed|ion)|separate .{0,25}(permission|access|credential|key)", SEC, 11),
    # --- resilience -------------------------------------------------------
    (r"high(ly)? available|high availability|fault[- ]toleran|resilien|"
     r"disaster recovery|\bDR\b|\bRTO\b|\bRPO\b|recovery (time|point) objective|business continuity|"
     r"fail(s|ure|over|ed)?\b|outage|downtime|single point of failure|"
     r"if (an|one) Availability Zone|Availability Zone (fails|failure|outage|becomes unavailable)|"
     r"Region(al)? (fail|outage|unavailab)|continue to (operate|function|run|serve)|"
     r"withstand|survive|uninterrupted|without (any )?(data )?loss|durab(le|ility)|"
     r"back(ed)?[- ]?up|backup|restore|point[- ]in[- ]time recover|retain(ed|s)? .{0,20}(copy|backup)|"
     r"decoupl|loosely coupl|de[- ]couple|asynchronous|retry|retries|dead[- ]letter|"
     r"message(s)? (are|is|must) not (be )?lost|guarantee.{0,20}(delivery|processing|order)|"
     r"stateless|self[- ]healing|automatic(ally)? (recover|replace|heal)", REL, 11),
    # --- performance ------------------------------------------------------
    (r"performance|latenc(y|ies)|throughput|response time|\bIOPS\b|"
     r"millisecond|sub[- ]second|near[- ]real[- ]?time|real[- ]?time|"
     r"slow|bottleneck|degrad(e|ed|ation)|buffering|timeout|time out|"
     r"speed up|faster|accelerat|improve .{0,25}(read|write|query|load|render|speed|time)|"
     r"scal(e|es|ing|able) .{0,30}(to handle|for|with) .{0,25}(traffic|request|load|demand|user|spike|burst|growth)|"
     r"(handle|support|serve) .{0,25}(millions|thousands|spikes|bursts|unpredictable|peak)|"
     r"concurrent (user|request|connection)|read[- ]heavy|write[- ]heavy|read replica|caching|cache|"
     r"global(ly)? (distributed|dispersed)|users? (around|across) the (world|globe)|worldwide|"
     r"ingest|stream(ing|ed)?\b|\bETL\b|transform|analytics|data (lake|warehouse)|query (large|petabyte)", PERF, 11),
]

# ---------------------------------------------------------------- layer 3
# service -> {domain: weight}. Weights are small; services nudge, phrases decide.
SERVICES = [
    # security
    (r"\bIAM (role|policy|user|group)|assume(d)? role|\bSTS\b|instance profile|"
     r"service[- ]linked role|cross[- ]account role|identity[- ]based polic|resource[- ]based polic", {SEC: 9}),
    (r"\bAWS KMS\b|Key Management Service|CloudHSM|customer managed key|\bCMK\b|envelope encryption", {SEC: 10}),
    (r"Secrets Manager|Parameter Store|\bSSM parameter", {SEC: 9}),
    (r"\bAWS WAF\b|web application firewall|AWS Shield|Shield Advanced|Network Firewall|Firewall Manager", {SEC: 10}),
    (r"GuardDuty|Amazon Inspector|Amazon Macie|Security Hub|Detective|Access Analyzer|Audit Manager", {SEC: 10}),
    (r"AWS Organizations|service control polic|\bSCPs?\b|IAM Identity Center|AWS SSO|Control Tower|permission(s)? boundar", {SEC: 9}),
    (r"Amazon Cognito|Directory Service|AD Connector|Managed Microsoft AD|\bSAML\b|identity (provider|federation)|federat", {SEC: 9}),
    (r"security group|network ACL|\bNACL\b|bucket polic|Block Public Access|Object Ownership|\bACLs?\b", {SEC: 9}),
    (r"VPC endpoint|PrivateLink|gateway endpoint|interface endpoint", {SEC: 6, COST: 3}),
    (r"Certificate Manager|\bACM\b|TLS certificate|SSL certificate", {SEC: 8}),
    (r"CloudTrail|AWS Config\b|config rule|Session Manager|bastion|Systems Manager Session", {SEC: 8}),
    (r"signed URL|signed cookie|origin access (control|identity)|\bOAC\b|\bOAI\b|pre[- ]signed", {SEC: 8}),
    (r"AWS RAM|Resource Access Manager|Object Lock|Amazon Verified", {SEC: 7}),
    # resilience
    (r"Multi[- ]AZ|standby (instance|replica|database)", {REL: 11}),
    # merely describing a multi-AZ deployment is scene-setting, not a requirement
    (r"multiple Availability Zones|across .{0,15}Availability Zones|two Availability Zones", {REL: 4}),
    # fast snapshot restore is a launch-latency feature, not a backup feature
    (r"fast snapshot restore|warm(ed)? pool|pre[- ]?warm", {PERF: 10}),
    (r"AWS Backup|snapshot|point[- ]in[- ]time|versioning|Cross[- ]Region Replication|\bCRR\b|Same[- ]Region Replication|"
     r"Elastic Disaster Recovery|CloudEndure|pilot light|warm standby|backup and restore", {REL: 10}),
    (r"Auto Scaling group|Auto Scaling|scaling polic|health check|target group", {REL: 6, PERF: 3}),
    (r"Application Load Balancer|Network Load Balancer|Gateway Load Balancer|\bALB\b|\bNLB\b|Elastic Load Balanc", {REL: 6, PERF: 2}),
    (r"Amazon SQS|Simple Queue Service|dead[- ]letter queue|\bFIFO queue|visibility timeout", {REL: 10}),
    (r"Amazon SNS|Simple Notification Service|EventBridge|CloudWatch Events|Step Functions|"
     r"Amazon MQ|Simple Workflow|\bSWF\b|AppFlow", {REL: 8}),
    (r"Route 53 .{0,25}(failover|health check)|failover routing|Aurora Global Database|Global Database|"
     r"read replica .{0,20}promot|multi[- ]Region .{0,20}(deploy|architect|failover)", {REL: 9}),
    (r"Amazon ECS|Fargate|Amazon EKS|Kubernetes|container", {REL: 4, PERF: 3}),
    # performance
    (r"CloudFront|edge location|content delivery|\bCDN\b|Lambda@Edge|CloudFront Function", {PERF: 10}),
    (r"Global Accelerator|anycast", {PERF: 9, REL: 2}),
    (r"ElastiCache|Redis|Memcached|Amazon DAX|DynamoDB Accelerator|caching layer", {PERF: 11}),
    (r"read replica|Aurora replica|RDS Proxy|connection pool", {PERF: 9, REL: 2}),
    (r"Amazon Redshift|Amazon Athena|Amazon EMR|AWS Glue|Lake Formation|OpenSearch|Elasticsearch|"
     r"QuickSight|data warehouse|Redshift Spectrum|Amazon MSK|Kafka", {PERF: 9}),
    (r"Kinesis|Data Firehose|Data Streams|Amazon Managed Streaming", {PERF: 10}),
    (r"AWS DataSync|Transfer Family|Snowball|Snowmobile|Snowcone|Storage Gateway|Direct Connect|"
     r"Site[- ]to[- ]Site VPN|Transit Gateway|VPC peering", {PERF: 7}),
    (r"placement group|Elastic Fabric Adapter|\bEFA\b|Elastic Network Adapter|enhanced networking|"
     r"compute optimi[sz]ed instance|GPU|Nitro|dedicated host", {PERF: 8}),
    (r"\bio1\b|\bio2\b|\bgp3\b|\bgp2\b|Provisioned IOPS|throughput optimi[sz]ed|\bst1\b|instance store|"
     r"FSx for Lustre|FSx for OpenZFS|EFS .{0,20}(throughput|performance) mode|Max I/O", {PERF: 10}),
    (r"Amazon Timestream|Neptune|DocumentDB|Amazon Keyspaces|QLDB|MemoryDB|global secondary index|\bGSI\b|"
     r"DynamoDB Streams|partition key", {PERF: 7}),
    (r"Route 53 .{0,25}(latency|geolocation|geoproximity|weighted)|latency[- ]based routing", {PERF: 8}),
    # cost
    (r"Spot Instance|Spot Fleet|Reserved Instance|\bRIs?\b|Savings Plan|Compute Savings|"
     r"Dedicated Instance pricing|capacity reservation", {COST: 12}),
    (r"S3 Lifecycle|lifecycle (polic|rule|configuration)|Intelligent[- ]Tiering|"
     r"Glacier|Deep Archive|One Zone[- ]IA|Standard[- ]IA|Standard[- ]Infrequent|infrequent access|"
     r"transition .{0,25}(to|after) .{0,20}(days|Glacier|archive)|expire .{0,20}object", {COST: 11}),
    (r"Cost Explorer|AWS Budgets|Cost and Usage Report|\bCUR\b|Compute Optimizer|Trusted Advisor|"
     r"cost allocation tag|Billing Conductor|Savings Plans recommendation", {COST: 12}),
    (r"Aurora Serverless|DynamoDB on[- ]demand|on[- ]demand capacity|"
     r"provisioned capacity|Graviton|AWS Graviton|Instance Scheduler|stop .{0,20}instance", {COST: 9}),
    (r"NAT gateway|NAT instance|data transfer|egress|cross[- ]AZ traffic", {COST: 6}),
    # weak / shared
    (r"Amazon S3\b", {PERF: 1, COST: 1}),
    (r"AWS Lambda|serverless", {PERF: 2, REL: 2, COST: 2}),
    (r"Amazon EFS|Elastic File System|Amazon FSx", {PERF: 3, REL: 2}),
    (r"Amazon RDS|Amazon Aurora|DynamoDB", {PERF: 2, REL: 2}),
]

ASK_RE = re.compile(r"(which|what|how)\b[^.?]*\?\s*(\(choose (two|three)\.?\))?\s*$", re.I)


def asked(stem):
    """The final interrogative sentence -- where the qualifier lives."""
    m = ASK_RE.search(stem)
    if m:
        return m.group(0)
    tail = re.split(r"(?<=[.?])\s+", stem)
    return tail[-1] if tail else stem


def classify(q):
    stem, opts = q["stem"], q["options"]
    ask = asked(stem)
    body = stem[: len(stem) - len(ask)] if stem.endswith(ask) else stem
    correct = " ".join(opts[c] for c in q["answer"] if c in opts)
    distract = " ".join(opts[c] for c in opts if c not in q["answer"])

    score = collections.Counter()

    for pat, dom, w in QUALIFIER:
        if re.search(pat, ask, re.I) or re.search(pat, stem):
            score[dom] += w

    for pat, dom, w in ASK_INTENT:
        if re.search(pat, ask, re.I):
            score[dom] += w

    for pat, dom, w in REQUIREMENT:
        n = len(re.findall(pat, body, re.I))
        if n:
            score[dom] += min(n, 3) * w / 2.0 + w / 2.0
        if re.search(pat, ask, re.I):
            score[dom] += w * 0.8

    for pat, weights in SERVICES:
        in_correct = re.search(pat, correct, re.I)
        in_stem = re.search(pat, stem, re.I)
        in_dist = re.search(pat, distract, re.I)
        if not (in_correct or in_stem or in_dist):
            continue
        mult = 1.0 if in_correct else (0.6 if in_stem else 0.15)
        for dom, w in weights.items():
            score[dom] += w * mult

    if not score:
        score[REL] += 1
    ranked = sorted(DOMAINS, key=lambda d: (-score[d], d))
    top, second = ranked[0], ranked[1]
    total = sum(score.values()) or 1
    return dict(domain=top, runner_up=second,
                scores={d: round(score[d], 1) for d in DOMAINS},
                margin=round((score[top] - score[second]) / total, 3),
                certainty=round(score[top] / total, 3))


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    qs = json.load(io.open(os.path.join(here, "..", "data", "questions.json"), encoding="utf-8"))
    for q in qs:
        q.update(classify(q))
    out = os.path.join(here, "..", "data", "classified.json")
    json.dump(qs, io.open(out, "w", encoding="utf-8"), indent=1, ensure_ascii=False)

    dist = collections.Counter(q["domain"] for q in qs)
    n = len(qs)
    print("classified %d questions -> %s\n" % (n, out))
    print("%-38s%7s%9s%9s" % ("domain", "pool", "pool %", "exam %"))
    for d in DOMAINS:
        print("%d. %-35s%7d%8.1f%%%8.0f%%" % (DOMAIN_NUM[d], DOMAIN_NAMES[d], dist[d],
                                              dist[d] / n * 100, TARGET_WEIGHT[d] * 100))
    low = [q for q in qs if q["margin"] < 0.06]
    print("\nlow-margin (ambiguous) classifications: %d  (%.1f%%)" % (len(low), len(low) / n * 100))


if __name__ == "__main__":
    main()
