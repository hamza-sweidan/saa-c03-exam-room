/* S3 · Block & file storage · Transfer, migration & backup */
(window.GUIDE = window.GUIDE || []).push(
{
  id: "s3",
  title: "Amazon S3",
  lede: "Object storage: 11 nines durability, unlimited capacity, objects up to 5 TB, strong read-after-write consistency.",
  triggers: [
    ["unknown or changing access patterns", "S3 Intelligent-Tiering"],
    ["infrequently accessed but needs millisecond access", "S3 Standard-IA"],
    ["infrequent and easily re-created · non-critical copy", "S3 One Zone-IA"],
    ["archive read about once a quarter, needs milliseconds", "S3 Glacier Instant Retrieval"],
    ["archive, retrieval in minutes to hours is fine", "S3 Glacier Flexible Retrieval (expedited 1–5 min)"],
    ["keep 7–10 years, retrieval within 12–48 hours", "S3 Glacier Deep Archive"],
    ["move to a cheaper class after N days · delete after N days", "S3 Lifecycle rules"],
    ["uploads from around the world to one bucket are slow", "S3 Transfer Acceleration (+ multipart upload)"],
    ["large files · resume and parallelize uploads", "Multipart upload (recommended > 100 MB, required > 5 GB)"],
    ["temporary access to a private object without AWS credentials", "Presigned URL"],
    ["cannot be deleted or overwritten for N years, even by root", "S3 Object Lock — compliance mode"],
    ["retention that specially permitted users can override", "S3 Object Lock — governance mode"],
    ["recover accidentally deleted or overwritten objects", "Versioning (+ MFA Delete)"],
    ["copy new objects to another Region automatically", "S3 Cross-Region Replication"],
    ["replicate objects that already exist", "S3 Batch Replication"],
    ["replication with a 15-minute SLA", "S3 Replication Time Control"],
    ["process each object as it is uploaded", "S3 Event Notifications → Lambda / SQS / SNS / EventBridge"],
    ["many apps or teams need different access to one bucket", "S3 Access Points"],
    ["one global endpoint over buckets in several Regions", "S3 Multi-Region Access Points"],
    ["bucket readable only through CloudFront", "Origin Access Control (OAC) + bucket policy"],
    ["action on millions of existing objects (copy, tag, encrypt, restore)", "S3 Batch Operations with S3 Inventory"],
    ["enforce HTTPS on a bucket", "Bucket policy denying `aws:SecureTransport = false`"],
    ["only requests from my VPC endpoint", "Bucket policy condition `aws:SourceVpce`"],
    ["only principals in my organization", "Bucket policy condition `aws:PrincipalOrgID`"],
    ["organization-wide storage usage insights", "S3 Storage Lens"],
    ["host a static website", "S3 static website hosting (+ CloudFront for HTTPS and caching)"],
    ["guarantee expedited Glacier retrievals are available", "Provisioned retrieval capacity"],
    ["recent files queried fast, older files rarely, delay acceptable", "Lifecycle to a Glacier class after the active period; Athena for data still in S3"],
    ["query archived objects without a full restore", "S3 Glacier Select (in older questions; closed to new customers)"],
    ["archived files must stay searchable", "Keep a metadata index in DynamoDB or RDS and restore only the object needed"]
  ],
  services: [
    ["S3 Standard", "S3", "Default class for frequently accessed data, stored across ≥ 3 AZs, no retrieval fee.", "Hot data, websites, analytics inputs.", "Intelligent-Tiering"],
    ["S3 Intelligent-Tiering", "S3 Intelligent-Tiering", "Moves objects between frequent, infrequent (after 30 days) and archive instant (after 90 days) tiers; optional deeper archive tiers; small per-object monitoring fee, no retrieval fees.", "Access pattern unknown or changing.", "Lifecycle rules when you know the pattern"],
    ["S3 Standard-IA", "S3 Standard-IA", "Lower storage price, per-GB retrieval fee, 30-day minimum, multi-AZ.", "Rarely read but must be instant: backups, DR copies.", "One Zone-IA"],
    ["S3 One Zone-IA", "S3 One Zone-IA", "Like Standard-IA but in one AZ — lost if that AZ is destroyed.", "Re-creatable data, secondary copies, thumbnails.", "Standard-IA for anything irreplaceable"],
    ["Glacier Instant Retrieval", "Glacier Instant", "Archive pricing with millisecond access; 90-day minimum; higher retrieval cost.", "Archives accessed about quarterly that need immediate access.", "Standard-IA"],
    ["Glacier Flexible Retrieval", "Glacier Flexible", "Expedited 1–5 min, Standard 3–5 h, Bulk 5–12 h (free); 90-day minimum.", "Archives restored occasionally where waiting is fine.", "Deep Archive"],
    ["Glacier Deep Archive", "Deep Archive", "Cheapest storage; Standard retrieval within 12 h, Bulk within 48 h; 180-day minimum.", "Regulatory retention for years, tape replacement.", "Flexible Retrieval"],
    ["S3 Express One Zone", "", "Directory buckets in one AZ with single-digit-ms latency.", "Latency-sensitive analytics or ML reading hot data.", "S3 Standard"],
    ["Versioning", "", "Keeps every version; a delete adds a delete marker.", "Protect against accidental deletes and overwrites; required for replication and Object Lock.", "Object Lock"],
    ["Object Lock", "S3 Object Lock", "WORM retention per object. Compliance mode: nobody, including root, can shorten or delete. Governance mode: users with special permission can. Legal hold: no end date.", "Regulatory immutability.", "Glacier Vault Lock (vault-level)"],
    ["Replication (CRR / SRR)", "S3 replication", "Asynchronous copy of new objects to a bucket in another or the same Region; needs versioning on both.", "DR, latency, compliance copies, aggregating logs.", "Batch Replication for existing objects"],
    ["Lifecycle rules", "S3 Lifecycle", "Transition objects to colder classes or expire them by age, prefix or tag.", "Known aging patterns; clean up old versions and incomplete multipart uploads.", "Intelligent-Tiering"],
    ["Transfer Acceleration", "S3 Transfer Acceleration", "Uploads enter at the nearest CloudFront edge and ride the AWS backbone to the bucket.", "Far-away clients uploading to a central bucket.", "CloudFront (downloads), DataSync (migrations)"],
    ["Presigned URL", "presigned URL", "Time-limited URL that carries the signer's permissions for one object.", "Let a user download or upload one object directly.", "CloudFront signed URLs"],
    ["Access Points", "S3 Access Points", "Named endpoints with their own policy, optionally VPC-only, on a shared bucket.", "Bucket policy grown unmanageable for many teams.", "Bucket policy"],
    ["Batch Operations", "", "Runs one operation across millions of objects listed by S3 Inventory.", "Re-encrypt, copy, tag, restore at scale.", "Lifecycle"],
    ["Event Notifications", "", "Sends object events to Lambda, SQS, SNS or EventBridge.", "Thumbnail on upload, ingest pipelines.", "CloudTrail data events (auditing)"],
    ["S3 Select", "", "SQL filter inside one CSV, JSON or Parquet object.", "Pull a subset of one object.", "Athena (many objects)"]
  ],
  compare: [
    {
      title: "Storage classes",
      cols: ["Class", "AZs", "First byte", "Min duration", "Retrieval fee", "Use"],
      rows: [
        ["Standard", "≥ 3", "ms", "—", "no", "hot data"],
        ["Intelligent-Tiering", "≥ 3", "ms (optional archive tiers: hours)", "—", "no · monitoring fee", "unknown patterns"],
        ["Standard-IA", "≥ 3", "ms", "30 days", "per GB", "infrequent, critical"],
        ["One Zone-IA", "1", "ms", "30 days", "per GB", "infrequent, re-creatable"],
        ["Glacier Instant Retrieval", "≥ 3", "ms", "90 days", "per GB (higher)", "quarterly-access archive"],
        ["Glacier Flexible Retrieval", "≥ 3", "1–5 min · 3–5 h · 5–12 h", "90 days", "per GB (bulk free)", "occasional restores"],
        ["Glacier Deep Archive", "≥ 3", "12 h · 48 h", "180 days", "per GB", "long-term compliance"]
      ]
    },
    {
      title: "Encryption at rest",
      cols: ["Option", "Who holds the key", "Key-use audit", "Pick when"],
      rows: [
        ["SSE-S3", "S3 (AES-256), default for new objects", "no", "no special requirement"],
        ["SSE-KMS", "KMS key (AWS managed or customer managed)", "yes, in CloudTrail", "control, rotate, audit, separate key admins"],
        ["DSSE-KMS", "KMS, two independent layers", "yes", "dual-layer encryption compliance"],
        ["SSE-C", "you send the key with every request", "you", "keys must be managed outside AWS, S3 still encrypts"],
        ["Client-side", "you encrypt before upload", "you", "AWS must never see plaintext"]
      ]
    },
    {
      title: "Controlling access",
      cols: ["Mechanism", "Use"],
      rows: [
        ["Bucket policy", "Cross-account grants, force HTTPS, limit to VPC endpoint or organization"],
        ["IAM policy", "What users and roles in your account may do"],
        ["Block Public Access", "Account- or bucket-wide guardrail that overrides public policies and ACLs"],
        ["ACLs", "Legacy; disabled by default (Bucket owner enforced)"],
        ["Presigned URL", "Time-limited access to one object"],
        ["Access Points", "Per-application policy or VPC-only access to a shared bucket"],
        ["CloudFront OAC", "Only your CloudFront distribution may read the bucket"]
      ]
    }
  ],
  traps: [
    "Lifecycle can move objects to Standard-IA or One Zone-IA only after 30 days in Standard.",
    "Replication doesn't copy existing objects or (by default) delete markers; use Batch Replication for what's already there.",
    "Object Lock needs versioning; legal holds are independent of retention periods.",
    "Each prefix handles 3,500 writes and 5,500 reads per second — spread keys over prefixes for more.",
    "Heavy SSE-KMS traffic can hit KMS request quotas — S3 Bucket Keys cut KMS calls and cost.",
    "S3 website endpoints are HTTP only; add CloudFront for HTTPS and a custom domain certificate.",
    "A site in bucket A loading assets from bucket B fails in the browser until CORS is set on bucket B.",
    "Add a lifecycle rule to abort incomplete multipart uploads — they cost storage invisibly."
  ]
},
{
  id: "blockfile",
  title: "Block & file storage",
  lede: "Disks attached to one instance, and file systems shared by many.",
  triggers: [
    ["shared file system for Linux instances across AZs", "Amazon EFS"],
    ["Windows file shares · SMB · Active Directory · DFS", "Amazon FSx for Windows File Server"],
    ["HPC · ML training · sub-ms · hundreds of GB/s · S3 linked", "Amazon FSx for Lustre"],
    ["NetApp · NFS + SMB + iSCSI from one system", "Amazon FSx for NetApp ONTAP"],
    ["ZFS · move Linux NFS with snapshots and clones", "Amazon FSx for OpenZFS"],
    ["database needs more than 16,000 IOPS", "EBS io2 Block Express (Provisioned IOPS SSD)"],
    ["general purpose SSD, set IOPS without growing the volume", "EBS gp3"],
    ["big sequential throughput · logs · data warehouse on EBS", "EBS st1 Throughput Optimized HDD"],
    ["lowest cost block storage for cold data", "EBS sc1 Cold HDD"],
    ["temporary data · buffers · scratch · highest local I/O", "Instance store"],
    ["one volume attached to several instances in one AZ", "EBS Multi-Attach (io1/io2)"],
    ["automate EBS snapshot schedules and retention", "Amazon Data Lifecycle Manager (or AWS Backup)"],
    ["volumes restored from snapshots must perform fully at once", "EBS Fast Snapshot Restore"],
    ["encrypt an existing unencrypted EBS volume", "Snapshot → copy the snapshot with encryption → create volume → swap"],
    ["cheap long-term retention of EBS snapshots", "EBS Snapshots Archive"],
    ["recover snapshots or AMIs deleted by mistake", "Recycle Bin"]
  ],
  services: [
    ["Amazon EBS", "EBS", "Network block storage for EC2 in one AZ; persists independently of the instance; incremental snapshots.", "Boot volumes, databases on EC2, low-latency block storage.", "EFS (shared) · instance store (ephemeral)"],
    ["gp3", "gp3", "SSD with 3,000 IOPS and 125 MB/s baseline at any size; add IOPS and throughput separately; about 20% cheaper than gp2.", "Default for boot and most workloads.", "gp2 (IOPS tied to size, burst credits)"],
    ["io2 Block Express · io1", "io2/io1", "Provisioned IOPS SSD; io2 Block Express up to 256,000 IOPS with 99.999% durability; supports Multi-Attach.", "Critical databases needing sustained IOPS and sub-ms latency.", "gp3 when ≤ 16,000 IOPS"],
    ["st1 · sc1", "st1/sc1", "HDD. st1 for big sequential throughput; sc1 cold and cheapest. Neither can boot.", "Log processing, ETL, warehouses (st1); rarely read data (sc1).", "S3 for archives"],
    ["Instance store", "Instance store", "Disks physically on the host; very high IOPS; data lost on stop, hibernate, termination or host failure.", "Caches, scratch, replicated data sets.", "EBS for anything that must survive"],
    ["EBS snapshots", "", "Point-in-time, incremental, Regional; copy across Regions and accounts; Archive tier ≈ 75% cheaper with 24–72 h restore.", "Backups, moving volumes across AZs or Regions.", "AMIs (whole instance image)"],
    ["Amazon EFS", "EFS", "Managed NFSv4 for Linux; thousands of clients across AZs; grows automatically; Standard or One Zone; IA and Archive classes via lifecycle.", "Shared POSIX storage for web farms, containers, Lambda.", "FSx for Windows (SMB)"],
    ["FSx for Windows File Server", "FSx Windows", "Managed Windows file server: SMB, NTFS, AD integration, DFS, Multi-AZ, shadow copies.", "Windows apps, home directories, SharePoint.", "EFS (Linux only)"],
    ["FSx for Lustre", "FSx Lustre", "Parallel file system with massive throughput; links to an S3 bucket; Scratch (temporary) or Persistent (replicated).", "HPC, ML training, rendering, financial modeling.", "EFS"],
    ["FSx for NetApp ONTAP", "FSx ONTAP", "Managed NetApp: NFS, SMB and iSCSI with snapshots, dedupe, SnapMirror.", "NetApp migration or mixed Windows/Linux/macOS access.", "FSx for Windows"],
    ["FSx for OpenZFS", "FSx OpenZFS", "Managed ZFS over NFS with very low latency, snapshots and clones.", "On-prem ZFS or Linux NFS moves.", "EFS"]
  ],
  compare: [
    {
      title: "EBS volume types",
      cols: ["Type", "Media", "Max IOPS", "Boot", "Use"],
      rows: [
        ["gp3", "SSD", "16,000 (exam figure)", "yes", "default general purpose"],
        ["gp2", "SSD", "16,000 (3 per GB, burst)", "yes", "older general purpose"],
        ["io2 Block Express", "SSD", "256,000", "yes", "critical databases, Multi-Attach"],
        ["io1", "SSD", "64,000", "yes", "older provisioned IOPS"],
        ["st1", "HDD", "500 · 500 MB/s", "no", "big data, logs"],
        ["sc1", "HDD", "250", "no", "cold data"]
      ]
    },
    {
      title: "File systems",
      cols: ["", "EFS", "FSx Windows", "FSx Lustre", "FSx ONTAP", "FSx OpenZFS"],
      rows: [
        ["Protocol", "NFS", "SMB", "Lustre (POSIX)", "NFS · SMB · iSCSI", "NFS"],
        ["Clients", "Linux", "Windows", "Linux", "Windows · Linux · macOS", "Linux · macOS · Windows"],
        ["Signature", "elastic, multi-AZ, serverless", "AD, DFS, NTFS", "HPC throughput, S3 link", "NetApp features", "ZFS snapshots"],
        ["Exam cue", "“shared Linux storage”", "“Windows shares”", "“HPC / ML”", "“NetApp / multi-protocol”", "“ZFS”"]
      ]
    },
    {
      title: "Block vs file vs object",
      cols: ["", "EBS", "Instance store", "EFS", "S3"],
      rows: [
        ["Type", "block", "block", "file", "object"],
        ["Attach", "1 instance (Multi-Attach io1/io2), 1 AZ", "1 host", "thousands, multi-AZ", "HTTPS API from anywhere"],
        ["Survives stop", "yes", "no", "yes", "yes"],
        ["Relative cost/GB", "medium", "included with instance", "higher", "lowest"]
      ]
    }
  ],
  traps: [
    "An EBS volume is locked to its AZ; to move it, snapshot and create the volume elsewhere.",
    "You can't encrypt a volume in place; turn on EBS encryption by default so new volumes are always encrypted.",
    "Small gp2 volumes run out of burst credits — gp3 gives the IOPS without buying a bigger disk.",
    "EFS throughput: Elastic for spiky loads, Provisioned for steady high throughput beyond size, Bursting scales with size.",
    "Windows and Linux both need the same share → FSx for NetApp ONTAP."
  ]
},
{
  id: "transfer",
  title: "Transfer, migration & backup",
  lede: "Getting data and servers into AWS, keeping on-premises apps connected to cloud storage, and protecting it all.",
  triggers: [
    ["on-prem apps keep using NFS/SMB, files land in S3, local cache", "S3 File Gateway"],
    ["on-prem users need low-latency access to FSx for Windows shares", "FSx File Gateway (no longer offered to new customers)"],
    ["iSCSI block volumes backed by AWS", "Volume Gateway — cached (primary data in S3) or stored (primary data on premises)"],
    ["replace physical tapes, keep existing backup software", "Tape Gateway → S3 Glacier Flexible Retrieval / Deep Archive"],
    ["terabytes to petabytes with limited bandwidth", "AWS Snowball Edge Storage Optimized"],
    ["compute and storage in a disconnected or rugged site", "Snowball Edge Compute Optimized"],
    ["online, scheduled copy from NFS/SMB/HDFS/object storage to S3, EFS or FSx", "AWS DataSync"],
    ["partners send files over SFTP / FTPS / FTP / AS2", "AWS Transfer Family"],
    ["lift-and-shift servers with minimal downtime", "AWS Application Migration Service (MGN)"],
    ["migrate a database with minimal downtime", "AWS DMS with ongoing replication (CDC)"],
    ["different database engine (Oracle → Aurora PostgreSQL)", "Schema Conversion Tool / DMS Schema Conversion, then DMS"],
    ["inventory on-prem servers and dependencies before migrating", "AWS Application Discovery Service"],
    ["track migration progress across tools", "AWS Migration Hub"],
    ["central backup policies across services, accounts and Regions", "AWS Backup"],
    ["backups nobody can delete, even root", "AWS Backup Vault Lock (compliance mode)"],
    ["replicate servers to AWS for fast failover, block-level", "AWS Elastic Disaster Recovery"],
    ["many distributed sites, each with lots of data, short deadline", "Several Snowball Edge devices per site, loaded in parallel"],
    ["one data center with more than 10 PB (older questions)", "AWS Snowmobile"],
    ["on-prem Windows files moving to AWS, both sides need low latency", "FSx for Windows in AWS + FSx File Gateway on premises"]
  ],
  services: [
    ["S3 File Gateway", "Storage Gateway", "VM or appliance on premises exposing NFS/SMB shares; files stored as S3 objects with a local cache.", "On-prem apps writing files that should live in S3.", "DataSync (one-off transfer)"],
    ["FSx File Gateway", "", "Local cache for FSx for Windows shares in branch offices; closed to new customers.", "Branch Windows users need fast access to cloud shares.", "S3 File Gateway"],
    ["Volume Gateway", "", "iSCSI volumes; cached mode keeps primary data in S3, stored mode keeps it on premises with async EBS-snapshot backups.", "Block storage extension or cloud backup for on-prem servers.", "Tape Gateway"],
    ["Tape Gateway", "", "Virtual tape library over iSCSI; tapes archived to Glacier classes.", "Retire physical tapes without changing backup software.", "AWS Backup"],
    ["Snowball Edge", "Snowball/Snow", "Rugged shipped device (≈ 80–210 TB) with optional compute; data imported to S3.", "Network transfer would take more than about a week.", "DataSync"],
    ["Snowcone · Snowmobile", "", "Snowcone (small, retired) and Snowmobile (100 PB truck, retired) still appear in older questions.", "Tiny edge site (Snowcone), exabyte move (Snowmobile).", "Snowball Edge"],
    ["AWS DataSync", "DataSync", "Agent-based online transfer with scheduling, verification and metadata preservation to S3, EFS or FSx.", "Recurring or one-time migrations over the network.", "Storage Gateway (ongoing hybrid access)"],
    ["AWS Transfer Family", "Transfer Family", "Managed SFTP, FTPS, FTP and AS2 endpoints backed by S3 or EFS.", "External partners that only speak file protocols.", "DataSync"],
    ["Application Migration Service", "MGN", "Continuous block replication of servers, then cutover to EC2.", "Rehost (lift-and-shift) physical, VMware or cloud servers.", "Elastic Disaster Recovery"],
    ["Database Migration Service", "DMS", "Replicates data between databases, including ongoing change capture.", "Minimal-downtime database moves, same or different engines.", "SCT (schema conversion)"],
    ["Schema Conversion Tool", "SCT", "Converts schemas and code between engines.", "Heterogeneous migrations.", "DMS"],
    ["Application Discovery Service", "Migration Hub/Discovery", "Collects server specs, utilization and dependencies.", "Planning a migration.", "Migration Hub"],
    ["AWS Backup", "AWS Backup", "Policy-based backups for EC2, EBS, RDS, Aurora, DynamoDB, EFS, FSx, S3 and more; cross-Region and cross-account copies.", "Centralized, auditable backups.", "Data Lifecycle Manager (EBS only)"],
    ["Elastic Disaster Recovery", "Elastic Disaster Recovery", "Continuous replication of servers into a low-cost staging area; launch in minutes.", "DR for on-prem or cloud servers with low RPO/RTO.", "MGN (migration)"]
  ],
  compare: [
    {
      title: "Getting data into AWS",
      cols: ["Option", "Network", "Scale", "Pick when"],
      rows: [
        ["S3 Transfer Acceleration", "internet", "limited by links", "global clients uploading to one bucket"],
        ["DataSync", "internet or Direct Connect", "up to about 10 Gbps per task", "online migration or recurring sync"],
        ["Storage Gateway", "internet or Direct Connect", "cached access", "on-prem apps keep NFS/SMB/iSCSI/tape"],
        ["Transfer Family", "internet", "file protocol endpoints", "partners using SFTP/FTPS/FTP/AS2"],
        ["Direct Connect", "private line", "1–100 Gbps", "ongoing hybrid traffic; weeks to set up"],
        ["Snowball Edge", "none — shipped", "tens to hundreds of TB per device", "slow or no link, huge data"]
      ],
      note: "Rule of thumb: if the network copy takes longer than about a week, ship a Snowball."
    },
    {
      title: "Storage Gateway types",
      cols: ["Type", "Protocol", "Data lives in", "Pick when"],
      rows: [
        ["S3 File Gateway", "NFS · SMB", "S3 objects", "files to S3, lifecycle to Glacier, analytics in cloud"],
        ["FSx File Gateway", "SMB", "FSx for Windows", "branch cache of Windows shares"],
        ["Volume Gateway — cached", "iSCSI", "S3, hot data cached locally", "extend on-prem storage into AWS"],
        ["Volume Gateway — stored", "iSCSI", "on premises, async backup to S3", "full dataset local, cloud backup"],
        ["Tape Gateway", "iSCSI VTL", "S3 → Glacier / Deep Archive", "replace tapes"]
      ]
    },
    {
      title: "Migration strategies — the 7 Rs",
      cols: ["Strategy", "Meaning", "AWS example"],
      rows: [
        ["Rehost", "lift and shift", "Application Migration Service"],
        ["Replatform", "lift, tinker, shift", "self-managed MySQL → RDS; app → Elastic Beanstalk"],
        ["Repurchase", "move to SaaS", "on-prem CRM → SaaS CRM"],
        ["Refactor", "re-architect cloud-native", "monolith → Lambda or containers"],
        ["Relocate", "move at hypervisor level", "VMware Cloud on AWS"],
        ["Retain", "keep for now", "—"],
        ["Retire", "switch off", "—"]
      ]
    }
  ],
  traps: [
    "DMS moves data; it doesn't convert schemas between engines — that's SCT.",
    "DataSync is for transferring; Storage Gateway is for ongoing hybrid access.",
    "Snowball imports land in S3 Standard; add a lifecycle rule to get them into Glacier.",
    "AWS Backup supports cross-account copies inside AWS Organizations — the standard answer for ransomware-resistant backups."
  ]
}
);
