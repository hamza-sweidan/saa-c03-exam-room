/* Databases & caching */
(window.GUIDE = window.GUIDE || []).push(
{
  id: "databases",
  title: "Databases & caching",
  lede: "Relational, NoSQL, purpose-built engines, warehouses and caches — pick by data model first, then by scale and availability.",
  triggers: [
    ["managed relational · MySQL / PostgreSQL / MariaDB / Oracle / SQL Server", "Amazon RDS"],
    ["MySQL/PostgreSQL with more performance, 15 low-lag replicas, fast failover", "Amazon Aurora"],
    ["automatic failover to a standby in another AZ", "RDS Multi-AZ"],
    ["read-heavy · offload reporting queries", "Read replicas (or ElastiCache in front)"],
    ["too many connections · Lambda opening connections", "RDS Proxy"],
    ["relational workload that is intermittent or unpredictable", "Aurora Serverless v2"],
    ["developers in many time zones need small databases only while working", "Aurora Serverless (scales down when idle) offered through Service Catalog"],
    ["self-managed database on EC2 must become highly available with least effort", "Move it to the managed equivalent: DynamoDB for NoSQL, RDS/Aurora for relational"],
    ["relational DR across Regions, RPO ≈ 1 s, RTO < 1 min", "Aurora Global Database"],
    ["key-value · single-digit ms at any scale · serverless", "Amazon DynamoDB"],
    ["microsecond reads on DynamoDB without code rewrite", "DynamoDB Accelerator (DAX)"],
    ["multi-Region active-active NoSQL writes", "DynamoDB global tables"],
    ["run code when DynamoDB items change", "DynamoDB Streams → Lambda"],
    ["delete items automatically after a date", "DynamoDB TTL"],
    ["cache query results · store sessions · leaderboards", "Amazon ElastiCache (Redis OSS / Valkey)"],
    ["simplest multithreaded cache, no persistence", "ElastiCache for Memcached"],
    ["durable Redis-compatible primary database", "Amazon MemoryDB"],
    ["MongoDB compatible", "Amazon DocumentDB"],
    ["Apache Cassandra · CQL", "Amazon Keyspaces"],
    ["graph · relationships · social network · fraud rings · knowledge graph", "Amazon Neptune"],
    ["time series · IoT telemetry", "Amazon Timestream"],
    ["immutable, cryptographically verifiable history", "Amazon QLDB (retired 2025; older questions)"],
    ["data warehouse · OLAP · complex SQL over TB–PB", "Amazon Redshift"],
    ["query S3 files from Redshift without loading them", "Redshift Spectrum"],
    ["full-text search · log analytics dashboards", "Amazon OpenSearch Service"],
    ["need OS or admin access on the database host", "RDS Custom (Oracle, SQL Server)"],
    ["encrypt an existing unencrypted RDS database", "Snapshot → copy with encryption → restore → switch endpoint"],
    ["connect to RDS without storing a password", "IAM database authentication"],
    ["database is running out of storage", "RDS storage autoscaling"],
    ["undo a bad change on Aurora MySQL in minutes", "Aurora Backtrack"],
    ["copy production Aurora quickly for testing", "Aurora cloning"],
    ["rotate database credentials automatically", "AWS Secrets Manager"]
  ],
  services: [
    ["Amazon RDS", "RDS", "Managed relational engines on instances you size; automated backups (0–35 days), patching, snapshots.", "Existing relational app moving to managed.", "Aurora · RDS Custom"],
    ["RDS Multi-AZ", "Multi-AZ", "Synchronous standby in another AZ; automatic failover on the same endpoint. The standby serves no reads.", "High availability.", "Read replicas"],
    ["Multi-AZ DB cluster", "", "One writer plus two readable standbys in three AZs (MySQL, PostgreSQL); failover typically under 35 s.", "HA and read capacity together.", "Multi-AZ instance"],
    ["Read replicas", "Read replica", "Asynchronous, readable copies; in-Region or cross-Region; can be promoted manually.", "Read scaling, reporting, cross-Region DR.", "Multi-AZ"],
    ["RDS Proxy", "RDS Proxy", "Managed connection pool in front of RDS/Aurora; cuts failover time; IAM auth and Secrets Manager integration.", "Connection storms from Lambda or many clients.", "Read replicas"],
    ["RDS Custom", "", "RDS with access to the underlying OS for Oracle and SQL Server.", "Custom agents, patches or settings RDS forbids.", "EC2 self-managed"],
    ["Amazon Aurora", "Aurora", "MySQL- and PostgreSQL-compatible; shared storage with 6 copies across 3 AZs; up to 15 replicas; reader and custom endpoints.", "High performance and availability relational.", "RDS"],
    ["Aurora Serverless v2", "Aurora Serverless", "Aurora capacity that scales in fine increments with load.", "Variable, spiky or dev/test relational workloads.", "Provisioned Aurora"],
    ["Aurora Global Database", "Aurora Global", "One primary Region with read-only secondary Regions replicated in about a second; promote in under a minute.", "Global reads and cross-Region DR.", "Cross-Region read replicas"],
    ["Amazon DynamoDB", "DynamoDB", "Serverless key-value/document; single-digit ms; on-demand or provisioned capacity; 400 KB item limit; PITR up to 35 days.", "Massive scale, simple access patterns, serverless apps.", "RDS (joins, complex SQL)"],
    ["DAX", "DAX", "In-memory cache for DynamoDB with microsecond reads, API-compatible.", "Read-heavy DynamoDB needing microseconds.", "ElastiCache"],
    ["DynamoDB global tables", "DynamoDB Global Tables", "Multi-Region, multi-active replicated tables.", "Global low-latency writes, Regional failover.", "Aurora Global Database"],
    ["DynamoDB Streams", "DynamoDB Streams", "Ordered 24-hour log of item changes.", "Trigger Lambda, replicate, feed search indexes.", "Kinesis Data Streams"],
    ["Amazon ElastiCache", "ElastiCache", "Managed Redis OSS, Valkey or Memcached in-memory caches.", "Cache hot queries, session state, leaderboards, pub/sub.", "DAX (DynamoDB only)"],
    ["Amazon MemoryDB", "MemoryDB", "Redis-compatible in-memory database with a durable Multi-AZ transaction log.", "Primary database needing microsecond reads and durability.", "ElastiCache (cache)"],
    ["Amazon DocumentDB", "DocumentDB", "MongoDB-compatible JSON document database.", "Moving MongoDB workloads.", "DynamoDB"],
    ["Amazon Keyspaces", "Keyspaces", "Serverless Apache Cassandra-compatible wide-column store.", "Existing Cassandra/CQL apps.", "DynamoDB"],
    ["Amazon Neptune", "Neptune", "Graph database (Gremlin, openCypher, SPARQL).", "Highly connected data.", "DynamoDB"],
    ["Amazon Timestream", "Timestream", "Serverless time-series database.", "IoT and operational metrics over time.", "DynamoDB"],
    ["Amazon QLDB", "QLDB", "Ledger with an immutable, verifiable journal (end of support 2025).", "“cryptographically verifiable” history owned by one party.", "Managed Blockchain (many parties)"],
    ["Amazon Redshift", "Redshift", "Columnar data warehouse; provisioned RA3 or Serverless; Spectrum queries S3; concurrency scaling.", "BI and analytics over large structured data.", "RDS (OLTP) · Athena (ad hoc)"],
    ["Amazon OpenSearch Service", "OpenSearch", "Managed OpenSearch/Elasticsearch with Dashboards.", "Search boxes, log and clickstream analytics.", "Athena"]
  ],
  compare: [
    {
      title: "Multi-AZ vs read replicas",
      cols: ["", "Multi-AZ instance", "Multi-AZ DB cluster", "Read replica"],
      rows: [
        ["Purpose", "availability", "availability + reads", "read scale, DR"],
        ["Replication", "synchronous", "semi-synchronous", "asynchronous"],
        ["Readable secondary", "no", "yes (2)", "yes"],
        ["Cross-Region", "no", "no", "yes"],
        ["Failover", "automatic, same endpoint", "automatic, typically < 35 s", "manual promotion, new endpoint"]
      ]
    },
    {
      title: "RDS vs Aurora",
      cols: ["", "RDS", "Aurora"],
      rows: [
        ["Engines", "MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Db2", "MySQL- and PostgreSQL-compatible"],
        ["Storage", "EBS per instance, optional autoscaling", "shared cluster volume, 6 copies in 3 AZs, grows automatically"],
        ["Replicas", "up to 15 (engine dependent), async", "up to 15, typically ms of lag"],
        ["Failover", "Multi-AZ standby", "promote a replica, fast"],
        ["Extras", "RDS Custom, widest engine choice", "Serverless v2, Global Database, Backtrack, cloning"]
      ]
    },
    {
      title: "Purpose-built databases",
      cols: ["Need", "Service", "Model"],
      rows: [
        ["key-value at any scale", "DynamoDB", "key-value / document"],
        ["cache", "ElastiCache", "in-memory"],
        ["durable in-memory database", "MemoryDB", "Redis-compatible"],
        ["MongoDB", "DocumentDB", "document"],
        ["Cassandra", "Keyspaces", "wide-column"],
        ["relationships", "Neptune", "graph"],
        ["measurements over time", "Timestream", "time series"],
        ["verifiable ledger", "QLDB", "journal"],
        ["analytics warehouse", "Redshift", "columnar"],
        ["search", "OpenSearch", "inverted index"]
      ]
    },
    {
      title: "Caching choices",
      cols: ["", "ElastiCache Redis/Valkey", "ElastiCache Memcached", "DAX"],
      rows: [
        ["Works with", "any application", "any application", "DynamoDB only"],
        ["Persistence & replication", "yes, Multi-AZ failover, backups", "no", "cluster across AZs"],
        ["Data types", "strings, hashes, sorted sets, pub/sub, geo", "simple key-value", "DynamoDB items"],
        ["Exam cue", "sessions, leaderboards, HA cache", "simplest multithreaded cache", "microseconds for DynamoDB"]
      ]
    },
    {
      title: "DynamoDB capacity modes",
      cols: ["Mode", "Pick when"],
      rows: [
        ["On-demand", "new, unpredictable or spiky traffic; pay per request"],
        ["Provisioned + auto scaling", "predictable traffic; cheaper at steady load; reserved capacity saves more"]
      ]
    }
  ],
  traps: [
    "A Multi-AZ instance standby can't serve reads — reads go to replicas.",
    "RDS encryption is chosen at creation; an unencrypted database needs snapshot-copy-restore.",
    "Automated backups stop at 35 days; longer retention needs manual snapshots or AWS Backup.",
    "A stopped RDS instance starts again automatically after 7 days.",
    "DynamoDB items max 400 KB — keep large payloads in S3 with a pointer in the item.",
    "Query DynamoDB on a non-key attribute with a GSI; LSIs can only be created with the table.",
    "Aurora's reader endpoint balances across replicas; custom endpoints isolate analytics replicas.",
    "Redshift isn't for OLTP, and RDS isn't for petabyte analytics."
  ]
}
);
