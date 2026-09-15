/* Integration & streaming · Analytics · Monitoring, management & cost · AI & other services */
(window.GUIDE = window.GUIDE || []).push(
{
  id: "integration",
  title: "Application integration & streaming",
  lede: "Queues, topics, event buses, workflows and streams — the glue that decouples everything else.",
  triggers: [
    ["decouple components · buffer requests · workers poll", "Amazon SQS"],
    ["preserve order · no duplicates", "SQS FIFO queue (message group ID)"],
    ["send one message to many subscribers (email, SQS, Lambda, HTTP)", "Amazon SNS"],
    ["same event to multiple target systems, each processing independently", "SNS topic fanned out to multiple SQS queues"],
    ["messages that keep failing", "Dead-letter queue"],
    ["message processed twice because processing outlasts the timeout", "Increase the SQS visibility timeout"],
    ["reduce empty receives and polling cost", "Long polling (wait time up to 20 s)"],
    ["message payload too large for SQS", "SQS Extended Client Library with S3"],
    ["route events from AWS services, SaaS partners or custom apps by content", "Amazon EventBridge"],
    ["run something on a cron schedule", "EventBridge Scheduler"],
    ["multi-step workflow · retries · branching · human approval", "AWS Step Functions"],
    ["existing apps using JMS/AMQP/MQTT/STOMP (ActiveMQ, RabbitMQ)", "Amazon MQ"],
    ["real-time stream · multiple consumers · replay · ordering by key", "Kinesis Data Streams"],
    ["load streaming data into S3/Redshift/OpenSearch/Splunk with no code", "Amazon Data Firehose (formerly Kinesis Data Firehose)"],
    ["real-time SQL or Flink analytics on a stream", "Managed Service for Apache Flink (formerly Kinesis Data Analytics)"],
    ["Apache Kafka · existing Kafka clients", "Amazon MSK"],
    ["ingest video from cameras", "Kinesis Video Streams"],
    ["pull data from Salesforce, SAP, Zendesk into S3/Redshift", "Amazon AppFlow"],
    ["send transactional or bulk email", "Amazon SES"],
    ["formatted HTML report emailed to several people every morning", "EventBridge schedule → Lambda pulls the data → Amazon SES sends it"],
    ["system alerts · SMS · push · alarm notifications", "Amazon SNS (plain notifications, not formatted email)"],
    ["one topic, route messages to different queues by type", "SNS message filtering to separate SQS queues"]
  ],
  services: [
    ["Amazon SQS", "SQS", "Fully managed pull queue; retention 1 min–14 days (default 4); visibility timeout default 30 s, max 12 h; delay up to 15 min.", "Decoupling, load leveling, worker pools.", "SNS · Kinesis"],
    ["SQS FIFO", "SQS FIFO", "Strict ordering per message group and exactly-once processing; 300 msg/s per action, 3,000 with batching; name ends in `.fifo`.", "Orders, payments, anything where sequence matters.", "Standard queue"],
    ["Amazon SNS", "SNS", "Push pub/sub topics to SQS, Lambda, HTTP, email, SMS, mobile push; message filtering; FIFO topics.", "Fan-out and notifications.", "SQS (no storage in SNS)"],
    ["Amazon EventBridge", "EventBridge", "Serverless event bus with content-based rules, SaaS partner sources, cross-account buses, archive and replay, schedules, Pipes.", "Event-driven architecture between services and apps.", "SNS"],
    ["AWS Step Functions", "Step Functions", "Visual state machines orchestrating Lambda and 200+ services; Standard (up to 1 year) or Express (up to 5 min, high volume).", "Orchestration, long workflows, approvals.", "SQS · EventBridge"],
    ["Amazon MQ", "Amazon MQ", "Managed ActiveMQ and RabbitMQ brokers.", "Lift existing message brokers without code changes.", "SQS/SNS for new cloud-native apps"],
    ["Kinesis Data Streams", "Kinesis Data Streams", "Sharded real-time stream; retention 24 h to 365 days; replay; each shard 1 MB/s or 1,000 records/s in, 2 MB/s out; on-demand mode.", "Clickstreams, telemetry, custom real-time processing.", "Firehose"],
    ["Amazon Data Firehose", "Firehose", "Fully managed delivery into S3, Redshift, OpenSearch, Splunk and HTTP endpoints; buffering, Lambda transforms, format conversion to Parquet.", "Near real-time loading with no consumers to run.", "Kinesis Data Streams"],
    ["Managed Service for Apache Flink", "Kinesis Data Analytics/Flink", "Serverless Apache Flink for real-time stream analytics.", "Windowed aggregations, anomaly detection on streams.", "Athena (at rest)"],
    ["Amazon MSK", "MSK", "Managed Apache Kafka (provisioned or serverless).", "Existing Kafka workloads.", "Kinesis Data Streams"],
    ["Kinesis Video Streams", "Kinesis Video", "Ingests and stores video streams for playback and ML.", "Cameras, Rekognition Video.", "MediaConvert"],
    ["Amazon AppFlow", "AppFlow", "Managed data flows from SaaS apps to AWS.", "Salesforce/SAP/Zendesk data into S3 or Redshift.", "DataSync · EventBridge"],
    ["Amazon SES", "SES", "Email sending and receiving at scale.", "Transactional and marketing email.", "SNS (email notifications only)"]
  ],
  compare: [
    {
      title: "SQS vs SNS vs EventBridge vs Kinesis",
      cols: ["", "SQS", "SNS", "EventBridge", "Kinesis Data Streams"],
      rows: [
        ["Model", "queue, consumers pull", "pub/sub, pushes", "event bus with rules", "stream, consumers read shards"],
        ["Consumers per message", "one", "every subscriber", "every matching target", "every app, independently"],
        ["Retention", "up to 14 days", "none", "optional archive", "24 h – 365 days"],
        ["Ordering", "FIFO queues", "FIFO topics", "no", "per partition key"],
        ["Replay", "no", "no", "yes (archive)", "yes"],
        ["Cue", "decouple, buffer, scale workers", "fan-out, notify", "route AWS/SaaS events, schedules", "real-time analytics, replay"]
      ]
    },
    {
      title: "Standard vs FIFO queues",
      cols: ["", "Standard", "FIFO"],
      rows: [
        ["Throughput", "nearly unlimited", "300 msg/s per action, 3,000 with batching (more in high-throughput mode)"],
        ["Delivery", "at least once — duplicates possible", "exactly-once processing"],
        ["Order", "best effort", "strict per message group"]
      ]
    },
    {
      title: "Streaming choices",
      cols: ["", "Kinesis Data Streams", "Data Firehose", "MSK"],
      rows: [
        ["You manage", "shards (or on-demand mode)", "nothing", "Kafka brokers (or serverless)"],
        ["Latency", "real time", "near real time, buffered", "real time"],
        ["Consumers", "your apps, Lambda, Flink", "fixed destinations", "Kafka clients"],
        ["Replay", "yes", "no", "yes"],
        ["Cue", "custom real-time processing", "deliver to S3/Redshift/OpenSearch with least ops", "existing Kafka"]
      ]
    },
    {
      title: "Step Functions workflow types",
      cols: ["", "Standard", "Express"],
      rows: [
        ["Duration", "up to 1 year", "up to 5 minutes"],
        ["Execution", "exactly once", "at least once (async)"],
        ["Cue", "long-running, human approval", "high-volume event processing"]
      ]
    }
  ],
  traps: [
    "Fan-out always goes SNS → SQS, never SQS → SNS. A queue delivers each message to one consumer.",
    "SNS stores nothing — subscribers that are down miss messages unless an SQS queue buffers them.",
    "Scale workers on queue backlog per instance (ApproximateNumberOfMessagesVisible ÷ instances).",
    "A hot Kinesis shard means a poor partition key — pick a higher-cardinality key or split the shard.",
    "Amazon MQ exists for protocol compatibility; brand-new designs scale further on SQS/SNS."
  ]
},
{
  id: "analytics",
  title: "Analytics",
  lede: "Querying, transforming and visualizing data that mostly already sits in S3.",
  triggers: [
    ["occasional SQL on files in S3 · serverless · pay per query", "Amazon Athena (+ Glue Data Catalog)"],
    ["cut Athena cost and speed it up", "Columnar formats (Parquet/ORC), compression, partitioning"],
    ["discover schemas of files in S3 automatically", "AWS Glue crawler → Data Catalog"],
    ["serverless ETL jobs", "AWS Glue"],
    ["process only new data on each ETL run", "Glue job bookmarks"],
    ["visual data cleaning without code", "AWS Glue DataBrew"],
    ["Hadoop · Spark · Hive · Presto clusters you can customize", "Amazon EMR"],
    ["data lake with table-, column- and row-level permissions", "AWS Lake Formation"],
    ["dashboards and BI for business users", "Amazon QuickSight"],
    ["petabyte warehouse with complex joins and steady BI load", "Amazon Redshift"],
    ["full-text search or log dashboards", "Amazon OpenSearch Service"],
    ["cheapest analysis of ALB/CloudTrail/Flow Logs already in S3", "Athena"]
  ],
  services: [
    ["Amazon Athena", "Athena", "Serverless Presto/Trino SQL over S3, billed per data scanned; uses Glue Data Catalog.", "Ad hoc queries, log analysis.", "Redshift Spectrum (with a cluster) · EMR"],
    ["AWS Glue", "Glue", "Serverless ETL (Spark), crawlers, Data Catalog, DataBrew, streaming ETL.", "Transform and catalog data lakes.", "EMR (you tune clusters)"],
    ["Amazon EMR", "EMR", "Managed big-data frameworks on EC2, EKS or serverless.", "Custom Spark/Hadoop jobs at scale.", "Glue"],
    ["AWS Lake Formation", "Lake Formation", "Builds and governs S3 data lakes with fine-grained permissions.", "Central data access control.", "S3 bucket policies"],
    ["Amazon QuickSight", "QuickSight", "Serverless BI dashboards with ML insights.", "Visualizations for business users.", "OpenSearch Dashboards"]
  ],
  compare: [
    {
      title: "Querying data",
      cols: ["", "Athena", "Redshift", "EMR", "OpenSearch"],
      rows: [
        ["Model", "serverless SQL on S3", "columnar warehouse", "managed Hadoop/Spark", "search and analytics engine"],
        ["Best for", "ad hoc queries", "frequent complex BI", "custom big-data processing", "text search, log analytics"],
        ["Operations", "none", "low", "medium to high", "low to medium"],
        ["Pricing", "per TB scanned", "nodes or RPUs", "instances", "nodes"]
      ]
    }
  ],
  traps: [
    "Occasional queries on S3 data: loading into Aurora, Redshift or EMR costs more than Athena.",
    "EMR: Spot for task nodes, On-Demand for primary and core nodes."
  ]
},
{
  id: "management",
  title: "Monitoring, management & cost",
  lede: "Seeing what's happening, changing fleets safely, and keeping the bill in check.",
  triggers: [
    ["metrics, alarms, dashboards, logs", "Amazon CloudWatch"],
    ["memory or disk usage of EC2", "CloudWatch agent"],
    ["query logs interactively", "CloudWatch Logs Insights"],
    ["alarm when ERROR appears in logs", "Metric filter + CloudWatch alarm"],
    ["stream logs in near real time to another service or account", "CloudWatch Logs subscription filter → Firehose / Kinesis / Lambda"],
    ["trace requests across microservices", "AWS X-Ray"],
    ["monitor endpoints with synthetic traffic", "CloudWatch Synthetics canaries"],
    ["recreate validated infrastructure automatically in more AZs or environments", "AWS CloudFormation"],
    ["deploy stacks to many accounts and Regions", "CloudFormation StackSets"],
    ["patch fleets · run commands · inventory · maintenance windows", "AWS Systems Manager"],
    ["users may launch only approved, standardized products", "AWS Service Catalog"],
    ["rightsizing for EC2, EBS, Lambda, ECS on Fargate", "AWS Compute Optimizer"],
    ["best-practice checks: cost, security, fault tolerance, limits", "AWS Trusted Advisor"],
    ["visualize and forecast spend · RI/SP recommendations", "AWS Cost Explorer"],
    ["alert or act when spend passes a threshold", "AWS Budgets (+ budget actions)"],
    ["most detailed line-item billing data", "AWS Cost and Usage Report (→ Athena, QuickSight)"],
    ["catch unexpected spend spikes", "AWS Cost Anomaly Detection"],
    ["costs by department or project", "Cost allocation tags (activate in Billing)"],
    ["notified of AWS maintenance events affecting my resources", "AWS Health Dashboard + EventBridge"],
    ["track software licence usage", "AWS License Manager"],
    ["diagram resources and their relationships across accounts and Regions", "Workload Discovery on AWS"],
    ["list software installed inside instances", "Systems Manager Inventory"]
  ],
  services: [
    ["Amazon CloudWatch", "CloudWatch", "Metrics (basic 5-min, detailed 1-min), alarms, dashboards, Logs, Logs Insights, anomaly detection, Container Insights.", "Operational monitoring and alerting.", "CloudTrail (API audit)"],
    ["AWS X-Ray", "X-Ray", "Distributed tracing with a service map.", "Latency bottlenecks across services.", "CloudWatch Logs"],
    ["AWS CloudFormation", "CloudFormation", "Infrastructure as code in YAML/JSON; change sets, drift detection, StackSets, DeletionPolicy.", "Repeatable environments.", "Elastic Beanstalk (deploys code) · Config (records)"],
    ["AWS Systems Manager", "Systems Manager", "Fleet operations: Session Manager, Run Command, Patch Manager, Parameter Store, Automation, State Manager, Inventory.", "Operate EC2 and on-prem servers.", "CloudFormation (provisioning)"],
    ["AWS Service Catalog", "Service Catalog", "Portfolio of approved CloudFormation-based products for self-service.", "Governed self-service provisioning.", "Control Tower"],
    ["AWS Trusted Advisor", "Trusted Advisor", "Checks across cost, performance, security, fault tolerance and service quotas; full set with Business/Enterprise Support.", "Account-wide best-practice review.", "Compute Optimizer"],
    ["AWS Compute Optimizer", "Compute Optimizer", "ML rightsizing recommendations from utilization.", "Over- or under-provisioned resources.", "Cost Explorer"],
    ["AWS Cost Explorer", "Cost Explorer", "Visualize, filter and forecast costs; RI and Savings Plans recommendations.", "Understanding spend.", "Budgets"],
    ["AWS Budgets", "Budgets", "Cost, usage, RI and SP budgets with alerts and automated actions.", "Stop overspend early.", "Cost Anomaly Detection"],
    ["Cost and Usage Report", "Cost and Usage Report", "Most granular billing export to S3.", "Custom analysis with Athena/QuickSight.", "Cost Explorer"],
    ["AWS Health Dashboard", "Health Dashboard", "Personalized view of AWS events affecting your account; EventBridge integration.", "Scheduled maintenance, service issues.", "CloudWatch"]
  ],
  compare: [
    {
      title: "Cost tools",
      cols: ["Tool", "Answers"],
      rows: [
        ["Cost Explorer", "“where did the money go, what will it be?”"],
        ["Budgets", "“warn me or act before I overspend”"],
        ["Cost and Usage Report", "“give me every line item”"],
        ["Cost Anomaly Detection", "“flag unexpected spikes”"],
        ["Compute Optimizer", "“which resources are the wrong size?”"],
        ["Trusted Advisor", "“which best practices am I missing?”"]
      ]
    },
    {
      title: "Systems Manager capabilities",
      cols: ["Capability", "Use"],
      rows: [
        ["Session Manager", "shell without SSH or bastion"],
        ["Run Command", "run scripts across fleets"],
        ["Patch Manager", "patch baselines and schedules"],
        ["Parameter Store", "configuration and secrets"],
        ["Automation", "runbooks, Config remediation"],
        ["State Manager", "keep instances in a defined state"],
        ["Inventory", "installed software"],
        ["Maintenance Windows", "schedule the above"]
      ]
    },
    {
      title: "CloudFormation vs Elastic Beanstalk vs Config",
      cols: ["", "CloudFormation", "Elastic Beanstalk", "Config"],
      rows: [
        ["Job", "define and deploy any infrastructure as code", "deploy application code onto managed infrastructure", "record and evaluate configuration"],
        ["Cue", "“replicate the validated stack automatically”", "“developers upload code”", "“track changes, check compliance”"]
      ]
    }
  ],
  traps: [
    "CloudWatch alarm actions: SNS, EC2 stop/terminate/reboot/recover, Auto Scaling policies.",
    "CloudFormation DeletionPolicy Retain or Snapshot keeps data when a stack is deleted; drift detection finds manual changes.",
    "Custom Lambda scripts lose to a managed feature (AWS Backup, Lifecycle, Config remediation) for least effort.",
    "Compute Savings Plans don't cover SageMaker — that needs a SageMaker Savings Plan."
  ]
},
{
  id: "ai",
  title: "AI services & the rest",
  lede: "Managed ML APIs you call instead of training models, plus end-user and edge services that appear occasionally.",
  triggers: [
    ["detect objects, faces, text or unsafe content in images/video", "Amazon Rekognition"],
    ["speech to text · call transcripts", "Amazon Transcribe"],
    ["text to lifelike speech", "Amazon Polly"],
    ["translate text", "Amazon Translate"],
    ["sentiment · entities · key phrases · PII in text", "Amazon Comprehend (Comprehend Medical for health)"],
    ["extract text, forms, tables from scanned documents", "Amazon Textract"],
    ["chatbot or voice bot", "Amazon Lex"],
    ["intelligent search over company documents", "Amazon Kendra"],
    ["product recommendations", "Amazon Personalize"],
    ["build, train and deploy custom models", "Amazon SageMaker AI"],
    ["generative AI with foundation models through an API", "Amazon Bedrock"],
    ["detect online fraud", "Amazon Fraud Detector"],
    ["virtual desktops for employees", "Amazon WorkSpaces"],
    ["stream one desktop application to a browser", "Amazon AppStream 2.0"],
    ["host a full-stack web or mobile front end with CI/CD", "AWS Amplify"],
    ["connect millions of IoT devices over MQTT", "AWS IoT Core"],
    ["convert video files to other formats", "AWS Elemental MediaConvert"]
  ],
  services: [
    ["Amazon Rekognition", "Rekognition", "Image and video analysis.", "Moderation, face search, labels.", "Textract"],
    ["Amazon Transcribe", "Transcribe", "Speech to text.", "Call center transcripts, subtitles.", "Polly"],
    ["Amazon Polly", "Polly", "Text to speech.", "Voice output.", "Transcribe"],
    ["Amazon Translate", "Translate", "Neural machine translation.", "Localize content.", "Comprehend"],
    ["Amazon Comprehend", "Comprehend", "Natural-language processing.", "Sentiment, entities, PII redaction in text.", "Macie (S3 data)"],
    ["Amazon Textract", "Textract", "Document OCR with forms and tables.", "Invoices, forms, IDs.", "Rekognition"],
    ["Amazon Lex", "Lex", "Conversational interfaces.", "Chat and voice bots.", "Kendra"],
    ["Amazon Kendra", "Kendra", "ML-powered enterprise search.", "Search across documents.", "OpenSearch"],
    ["Amazon Personalize", "Personalize", "Real-time recommendations.", "“customers who bought…”", "SageMaker"],
    ["Amazon SageMaker AI", "SageMaker", "Build, train, tune and host your own models.", "Custom ML.", "Managed AI APIs"],
    ["Amazon Bedrock", "Bedrock", "Serverless access to foundation models with knowledge bases and guardrails.", "Generative AI apps.", "SageMaker"],
    ["Amazon WorkSpaces", "WorkSpaces", "Managed virtual desktops.", "Remote employee desktops.", "AppStream 2.0"],
    ["Amazon AppStream 2.0", "AppStream", "Streams individual applications to browsers.", "One app without installing it.", "WorkSpaces"],
    ["AWS Amplify", "Amplify", "Front-end hosting and backend scaffolding with CI/CD.", "Web and mobile apps quickly.", "Elastic Beanstalk"],
    ["AWS IoT Core", "IoT Core", "Managed MQTT broker and device registry.", "Device fleets.", "Kinesis"]
  ],
  compare: [
    {
      title: "Input → output",
      cols: ["You have", "You want", "Service"],
      rows: [
        ["audio", "text", "Transcribe"],
        ["text", "audio", "Polly"],
        ["text", "another language", "Translate"],
        ["text", "sentiment, entities, PII", "Comprehend"],
        ["scanned document", "text, forms, tables", "Textract"],
        ["image or video", "labels, faces, moderation", "Rekognition"],
        ["conversation", "a bot", "Lex"],
        ["documents", "answers to questions", "Kendra"]
      ]
    }
  ],
  traps: [
    "Macie finds PII sitting in S3; Comprehend finds PII in text you send it; Rekognition moderates images."
  ]
}
);
