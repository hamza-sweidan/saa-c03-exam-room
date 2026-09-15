/* Reading the question · Compute · Containers & serverless
   Rows: services [name, bankKey, what it is, pick it when, don't confuse with]
         triggers [when the question says, the answer is] */
(window.GUIDE = window.GUIDE || []).push(
{
  id: "reading",
  title: "Reading the question",
  lede: "The last sentence decides. These qualifiers point at a family of answers before you even read the options.",
  triggers: [
    ["LEAST operational overhead · fewest management tasks", "Managed or serverless: Lambda, Fargate, DynamoDB, Aurora Serverless, S3 — anything beats a script on EC2"],
    ["MOST cost-effective · lowest cost", "The cheapest option that still meets every stated requirement: Spot for interruptible, Savings Plans/RIs for steady, lifecycle to colder S3 classes"],
    ["without changing application code · minimal code changes", "Drop-in managed equivalents: RDS Proxy, Amazon MQ, Aurora (MySQL/PostgreSQL compatible), EFS mount, S3 File Gateway"],
    ["highly available", "Multi-AZ: Auto Scaling group across ≥ 2 AZs behind a load balancer, RDS Multi-AZ, one NAT gateway per AZ"],
    ["fault tolerant · no impact if an AZ fails", "Enough capacity already running in the surviving AZs, not just capacity that can be replaced"],
    ["disaster recovery in another Region", "Cross-Region copies: Aurora Global Database, DynamoDB global tables, S3 CRR, AWS Backup cross-Region copy, Elastic Disaster Recovery"],
    ["decouple · tiers fail independently · spikes overwhelm the backend", "SQS queue between the tiers (SNS in front when several consumers need the same message)"],
    ["real-time with replay or many consumers", "Kinesis Data Streams"],
    ["near real-time delivery into S3 / Redshift / OpenSearch", "Amazon Data Firehose"],
    ["encrypted at rest and audit key usage · rotate keys", "SSE-KMS with a customer managed KMS key"],
    ["principle of least privilege", "IAM role with a narrowly scoped policy — never long-lived access keys on instances"],
    ["must not traverse the public internet", "VPC endpoints (gateway for S3/DynamoDB, interface for the rest) or Direct Connect"],
    ["global users · low latency · HTTP content", "CloudFront"],
    ["global users · TCP/UDP · static IP addresses", "Global Accelerator"],
    ["unpredictable · spiky · intermittent", "Pay-per-use capacity: Lambda, DynamoDB on-demand, Aurora Serverless v2, S3 Intelligent-Tiering"],
    ["steady state · 24/7 · 1 or 3 years", "Reserved Instances or Savings Plans"],
    ["can be interrupted · stateless · fault-tolerant batch", "Spot Instances"],
    ["cannot be deleted for N years, even by root (WORM)", "S3 Object Lock in compliance mode (or Glacier Vault Lock / Backup Vault Lock)"],
    ["who made the API call · audit trail", "CloudTrail"],
    ["resource configuration history · compliance of settings", "AWS Config"]
  ],
  services: [],
  compare: [
    {
      title: "Disaster recovery strategies",
      cols: ["Strategy", "RPO / RTO", "What runs in the recovery Region", "Cost"],
      rows: [
        ["Backup & restore", "hours", "Nothing — only backups and snapshots (AWS Backup, S3 CRR); rebuild with CloudFormation", "lowest"],
        ["Pilot light", "tens of minutes", "Data replicated live (DB replica); app servers off, AMIs ready, scaled up on failover", "low"],
        ["Warm standby", "minutes", "The full stack, always on but scaled down; scale out on failover", "medium"],
        ["Multi-site active/active", "near zero", "Full production in both Regions; Route 53 sends traffic to both", "highest"]
      ],
      note: "RPO = how much data you can lose. RTO = how long you can be down. Smaller numbers cost more."
    },
    {
      title: "One fact, many questions",
      cols: ["Know this", "It unlocks"],
      rows: [
        ["Some services put IAM in charge of the data itself (S3, DynamoDB, SQS, SNS, Lambda, Kinesis, KMS). Others keep their own login and IAM only guards the AWS management API around them: RDS/Aurora (DB username/password; IAM database authentication is opt-in and MySQL/PostgreSQL only), ElastiCache Redis (AUTH token / RBAC users), Amazon MQ (broker users), Managed Microsoft AD (AD credentials), Cognito User Pools (its own user directory).", "“Only this role may read the data” about a database or broker — look for a native credential feature (IAM DB auth, Secrets Manager, Redis AUTH), not an IAM policy on the data."],
        ["Lambda's retry behaviour depends on how it's invoked. Synchronous (API Gateway, ALB): no retry, the error goes straight to the caller. Asynchronous (S3, SNS, EventBridge): 2 automatic retries, then an on-failure destination or DLQ if one is configured. Poll-based (SQS, Kinesis, DynamoDB Streams): the Lambda service polls, and one bad batch can block the whole queue or shard.", "Any “messages are getting lost / stuck” or “add a DLQ” question — the fix depends on which of the three models the trigger uses."],
        ["A running EBS volume can be resized, switched from gp2 to gp3, or given more IOPS with no detach and no snapshot-and-recreate. Extend the OS filesystem afterward.", "Kills any “snapshot it, make a bigger volume, swap it in” answer when the question only asks to grow a live volume."],
        ["A WAF Web ACL and an ACM certificate for CloudFront must both be created in us-east-1, whatever Region the app runs in. For an ALB, both live in the ALB's own Region instead.", "“WAF or the certificate won't attach to my CloudFront distribution” — the fix is almost always the Region."],
        ["CloudTrail gives 90 days of management-event history for free, account-wide, with nothing configured. A trail is only needed for longer retention or for data events (S3 object-level, Lambda invocations), which cost per event and are off by default.", "“Cheapest way to see who touched this one S3 object” needs a trail with data events turned on — “just enable CloudTrail” isn't enough, it's already on."],
        ["CloudFront serves a new object instantly if it has a new key or path — no invalidation needed. Invalidation (which costs money past the free tier) is only for when the key can't change.", "“Users must see the update instantly, cheaply” — a versioned filename beats an invalidation."],
        ["Cross-account access without the other account assuming a role only works on resources with their own resource policy: S3 bucket, SQS queue, SNS topic, KMS key, Lambda function, Secrets Manager secret. Anything else (EC2, the database itself) needs a cross-account IAM role.", "“Give another account access without them switching identity” — check whether the target resource type has its own policy; if not, a role is unavoidable."]
      ]
    }
  ],
  traps: [
    "An option that works but adds servers you run (a cron script on EC2, a NAT instance, self-managed Kafka) loses to the managed option whenever the question says “least operational overhead”.",
    "The cheapest-looking option that breaks one requirement is wrong: One Zone-IA for irreplaceable data, Spot for jobs that must not stop, Deep Archive when retrieval must take minutes.",
    "Scaling up (bigger instance) rarely beats scaling out (more instances behind a load balancer) for availability questions.",
    "When two options both work, the one with fewer moving parts is usually the intended answer."
  ]
},
{
  id: "compute",
  title: "Compute: EC2",
  lede: "Virtual servers, how you pay for them, where they physically sit, and how they scale.",
  triggers: [
    ["in-memory database · large cache on EC2", "Memory optimized instances (R, X)"],
    ["HPC · batch processing · video encoding · high CPU", "Compute optimized instances (C)"],
    ["very high local I/O · NoSQL on local NVMe", "Storage optimized instances (I, D)"],
    ["ML training · graphics", "Accelerated computing (P, G; Trainium/Inferentia chips)"],
    ["better price-performance, workload runs on ARM", "Graviton instances (g in the name: m7g, c7g)"],
    ["bring your own per-socket / per-core licence", "Dedicated Hosts"],
    ["single-tenant hardware, no licensing need", "Dedicated Instances"],
    ["guarantee capacity in an AZ for a specific event", "On-Demand Capacity Reservation"],
    ["tightly coupled HPC, lowest latency between nodes", "Cluster placement group (+ EFA)"],
    ["a few critical instances must not share hardware", "Spread placement group"],
    ["HDFS · Cassandra · Kafka rack awareness", "Partition placement group"],
    ["keep CPU at 50% as load varies", "Target tracking scaling policy"],
    ["traffic jumps every Monday 9 AM", "Scheduled scaling"],
    ["recurring daily cycle, instances slow to boot", "Predictive scaling (and warm pools)"],
    ["run a script before an instance terminates (copy logs)", "Auto Scaling lifecycle hook"],
    ["resume with RAM state after stopping", "EC2 Hibernate"],
    ["instance fails system status check", "CloudWatch alarm with EC2 recover action"],
    ["bootstrap software at first launch", "User data script"],
    ["deploy a web app without managing infrastructure", "Elastic Beanstalk"],
    ["compute on premises with AWS APIs", "AWS Outposts"],
    ["single-digit ms to users in a specific metro", "Local Zones"],
    ["cover EC2, Fargate and Lambda with the fewest plans", "One Compute Savings Plan (SageMaker needs its own SageMaker Savings Plan)"],
    ["stateless batch over 60 minutes that can stop and restart anytime", "Spot Instances — Lambda is out at 15 minutes"]
  ],
  services: [
    ["Amazon EC2", "EC2", "Resizable virtual machines; you own the OS, patching and scaling.", "OS-level access, custom or legacy software, long-running processes.", "Lambda or Fargate when you don't want to manage servers"],
    ["Instance families", "", "`M`/`T` general (T = burstable CPU credits) · `C` compute · `R`/`X` memory · `I`/`D` storage · `P`/`G` GPU · `g` suffix = Graviton ARM.", "Match the bottleneck named in the question.", "—"],
    ["On-Demand", "", "Pay per second, no commitment.", "Short, unpredictable, must not be interrupted.", "Spot when interruption is fine"],
    ["Reserved Instances", "Reserved Instances", "1 or 3-year commitment to an instance type in a Region. Standard ≈ 72% off; Convertible ≈ 66% and exchangeable. Zonal RIs also reserve capacity.", "Steady 24/7 usage of a known instance type. RDS, ElastiCache, Redshift and OpenSearch have reserved nodes too.", "Savings Plans when family or Region may change"],
    ["Savings Plans", "Savings Plans", "Commit to $/hour for 1 or 3 years. Compute SP covers any family, size, Region, Fargate and Lambda (≈ 66%); EC2 Instance SP locks a family in a Region (≈ 72%).", "Steady spend but instance types, Regions or compute platform may change.", "Capacity Reservations (capacity, no discount)"],
    ["Spot Instances", "Spot", "Spare capacity at up to 90% off; AWS can reclaim with a 2-minute warning.", "Stateless, fault-tolerant, flexible: batch, CI, rendering, big data task nodes.", "Anything that can't be interrupted"],
    ["Dedicated Hosts", "Dedicated Hosts", "A whole physical server for you, with socket and core visibility.", "BYOL per socket/core (Windows Server, SQL Server, Oracle), host affinity.", "Dedicated Instances"],
    ["Dedicated Instances", "Dedicated Instances", "Single-tenant hardware without control over the host.", "Compliance demands no shared hardware, no licensing angle.", "Dedicated Hosts"],
    ["Capacity Reservations", "Capacity Reservation", "Reserve capacity in one AZ for any duration; billed whether used or not; no discount by itself.", "Guaranteed capacity for an event or DR, no 1-year term.", "Reserved Instances"],
    ["Placement groups", "Placement group", "Cluster = packed in one AZ; Spread = distinct racks, max 7 running instances per AZ; Partition = racks grouped into up to 7 partitions per AZ.", "Latency (cluster), isolation (spread), large replicated data stores (partition).", "—"],
    ["EC2 Auto Scaling", "Auto Scaling", "Keeps a group between min and max, replaces unhealthy instances, spreads across AZs using a launch template.", "Scale with demand, self-heal, HA.", "Application Auto Scaling (DynamoDB, ECS, Aurora replicas)"],
    ["EC2 Hibernate", "", "Writes RAM to the encrypted EBS root volume and restores it on start.", "Long warm-up or in-memory state that must survive stop/start.", "Stop (loses RAM)"],
    ["User data & metadata", "", "User data runs at first boot. Instance metadata at `169.254.169.254` (use IMDSv2) exposes instance ID and role credentials.", "Bootstrap installs; apps reading their own identity.", "—"],
    ["AMIs & Image Builder", "", "AMIs are Regional — copy them to other Regions. EC2 Image Builder automates building, patching and testing golden images.", "“golden image pipeline”, launch in another Region.", "—"],
    ["Elastic Beanstalk", "Elastic Beanstalk", "Upload code; it creates EC2, Auto Scaling, load balancer and monitoring for you.", "Developers deploy a web app fast without handling infrastructure.", "CloudFormation (you define everything)"],
    ["AWS Batch", "Batch", "Managed job queues and scheduler running jobs on EC2, Spot or Fargate.", "Many batch jobs, or jobs longer than Lambda's 15 minutes.", "Step Functions (orchestration), Lambda"],
    ["Amazon Lightsail", "Lightsail", "Simple fixed-price virtual servers with bundled storage and networking.", "Small site or WordPress for users with little AWS experience.", "EC2"],
    ["AWS Outposts", "Outposts", "AWS-managed racks installed in your own data center.", "Data or latency must stay on premises but you want AWS APIs.", "Local Zones"],
    ["Local Zones · Wavelength", "Local Zones/Wavelength", "Local Zones place AWS compute in big metros; Wavelength places it inside 5G carrier networks.", "Single-digit ms for a city (Local Zones) or 5G devices (Wavelength).", "Outposts"]
  ],
  compare: [
    {
      title: "Paying for EC2",
      cols: ["Option", "Commitment", "Discount", "Capacity guaranteed", "Best for"],
      rows: [
        ["On-Demand", "none", "0%", "no", "short, spiky, unknown"],
        ["Spot", "none", "up to 90%", "no — 2-min reclaim", "interruptible work"],
        ["Compute Savings Plan", "$/hour, 1 or 3 yr", "up to 66%", "no", "steady spend, flexible family/Region/Fargate/Lambda"],
        ["EC2 Instance SP · Standard RI", "1 or 3 yr", "up to 72%", "zonal RI only", "steady, fixed family"],
        ["Convertible RI", "1 or 3 yr", "up to 66%", "zonal RI only", "steady, may change family"],
        ["Capacity Reservation", "any duration", "0% alone", "yes", "guaranteed capacity in one AZ"],
        ["Dedicated Host", "on-demand or reserved", "—", "whole server", "per-core/socket BYOL"]
      ]
    },
    {
      title: "Placement groups",
      cols: ["Type", "Layout", "Limit", "Use"],
      rows: [
        ["Cluster", "same rack area, one AZ", "single AZ", "HPC, low latency, high throughput"],
        ["Spread", "each instance on distinct hardware", "7 running instances per AZ", "small set of critical instances"],
        ["Partition", "partitions on separate racks", "7 partitions per AZ, hundreds of instances", "HDFS, HBase, Cassandra, Kafka"]
      ]
    },
    {
      title: "Auto Scaling policies",
      cols: ["Policy", "How it works", "Pick when"],
      rows: [
        ["Target tracking", "Keeps a metric at a value (CPU 50%, requests per target)", "default for changing load"],
        ["Step · simple", "Adds or removes N instances when an alarm breaches", "graded reaction to thresholds"],
        ["Scheduled", "Changes min/max/desired at set times", "known calendar pattern"],
        ["Predictive", "Forecasts from history and scales ahead", "recurring cycles, slow boot"],
        ["Queue backlog", "Target tracking on queue depth ÷ instances (custom metric)", "workers consuming SQS"]
      ]
    }
  ],
  traps: [
    "Memory and disk-space utilization are not default EC2 metrics — install the CloudWatch agent.",
    "An Auto Scaling group using EC2 health checks won't replace an instance whose app is failing; switch to ELB health checks.",
    "The recover action keeps instance ID, private IPs, Elastic IP and EBS data — instance store data is lost.",
    "Default cooldown is 300 s; warm pools keep pre-initialized stopped instances for slow-booting apps.",
    "Spread placement groups can span AZs; cluster placement groups cannot.",
    "Scale-in picks the AZ with most instances, then the oldest launch template — use scale-in protection to keep specific instances."
  ]
},
{
  id: "serverless",
  title: "Containers & serverless compute",
  lede: "Run code without owning servers: functions, container orchestrators, and the serverless engine under them.",
  triggers: [
    ["run code when a file lands in S3 · event-driven · short tasks", "AWS Lambda"],
    ["job takes longer than 15 minutes", "Not Lambda — Fargate, ECS, AWS Batch or Step Functions to split it"],
    ["cold starts hurt latency", "Lambda provisioned concurrency"],
    ["Lambda exhausts database connections", "RDS Proxy"],
    ["run a Lambda on a schedule", "EventBridge Scheduler / scheduled rule"],
    ["containers without managing servers or clusters", "AWS Fargate (with ECS or EKS)"],
    ["already on Kubernetes · open-source tooling · portability", "Amazon EKS"],
    ["run Docker containers on AWS with the least learning curve", "Amazon ECS"],
    ["store container images privately, scan them", "Amazon ECR"],
    ["shared persistent storage for containers or Lambda", "Amazon EFS"],
    ["simplest deploy of a containerized web app or API", "AWS App Runner"]
  ],
  services: [
    ["AWS Lambda", "Lambda", "Functions triggered by events; pay per request and ms. Max 15 min, up to 10 GB memory and 10 GB `/tmp`, 1,000 concurrent executions per Region by default.", "Event glue, API backends, file processing, scheduled jobs, stream consumers.", "Fargate or Batch for long-running work"],
    ["Lambda concurrency", "", "Reserved concurrency caps and guarantees a function's share; provisioned concurrency keeps environments warm; SnapStart speeds Java starts.", "“cold start latency” or one function starving others.", "—"],
    ["Lambda in a VPC", "", "Gets ENIs in your subnets to reach private resources; needs a NAT gateway (or endpoints) for internet/AWS APIs.", "Function must reach RDS or ElastiCache in private subnets.", "—"],
    ["Amazon ECS", "ECS", "AWS's own container orchestrator: task definitions, services, cluster; launch type EC2 or Fargate.", "Containers on AWS without Kubernetes.", "EKS"],
    ["AWS Fargate", "Fargate", "Serverless compute engine for ECS and EKS tasks — no hosts to patch or scale.", "Containers with least operational overhead.", "ECS on EC2 (GPU, host control, cheapest at large steady scale)"],
    ["Amazon EKS", "EKS", "Managed Kubernetes control plane; nodes as managed node groups, self-managed, or Fargate.", "Existing Kubernetes, Helm charts, multi-cloud portability.", "ECS"],
    ["Amazon ECR", "ECR", "Private registry for container images with scanning and cross-Region replication.", "Image storage for ECS/EKS/Lambda container images.", "—"],
    ["AWS App Runner", "App Runner", "Deploys a web service from source or image; load balancing, TLS and scaling built in.", "Simplest HTTP container service.", "Elastic Beanstalk"],
    ["ECS/EKS Anywhere", "", "Run and manage containers on your own servers from AWS.", "Containers must run on premises.", "Outposts"]
  ],
  compare: [
    {
      title: "Where to run code",
      cols: ["", "Lambda", "Fargate", "ECS/EKS on EC2", "EC2", "Batch"],
      rows: [
        ["Max run time", "15 min", "unlimited", "unlimited", "unlimited", "unlimited"],
        ["You manage servers", "no", "no", "yes (hosts)", "yes", "no"],
        ["Scales to zero", "yes", "tasks yes", "hosts no", "no", "yes"],
        ["Billing", "requests + ms", "vCPU & GB per second", "instances", "instances", "underlying EC2/Spot/Fargate"],
        ["Pick on", "events, short tasks", "containers, no servers", "GPU, daemons, steady scale", "OS access, legacy", "queued batch jobs"]
      ]
    }
  ],
  traps: [
    "ECS task role = what the containers may call; task execution role = pull from ECR and write logs.",
    "An S3-triggered Lambda that writes back to the same bucket and prefix loops forever — write elsewhere.",
    "Put secrets in Secrets Manager or Parameter Store, not plain Lambda environment variables.",
    "API Gateway's default integration timeout is 29 s — long work should go async through SQS or Step Functions.",
    "An EC2 Auto Scaling group running containers has no orchestrator. For container questions prefer ECS/Fargate or an EKS managed node group, which also handles Spot interruptions."
  ]
}
);
