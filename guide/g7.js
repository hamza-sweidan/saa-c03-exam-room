/* Patterns you missed — built from the Gemini chat, checked against the bank's community votes */
(window.GUIDE = window.GUIDE || []).push(
{
  id: "missed",
  title: "Patterns you missed",
  lede: "Taken from your Gemini study chat and checked against the community votes in your question bank. Where Gemini and the community disagree, the community answer is shown and the conflict is spelled out.",
  triggers: [
    ["formatted HTML report emailed on a schedule", "EventBridge schedule → Lambda → Amazon SES (SNS can't build formatted email)"],
    ["self-managed Windows file shares on EC2 must become highly available", "FSx for Windows File Server, Multi-AZ"],
    ["moderate uploaded images with the least development effort", "Amazon Rekognition — a managed AI API beats SageMaker or a custom model"],
    ["convert each uploaded file, growth is rapid, cheapest", "Store in S3, S3 PUT event → Lambda, write results back to S3"],
    ["on-prem users need low-latency SMB to file shares in AWS over a VPN", "FSx for Windows in AWS + FSx File Gateway on premises (SMB over VPN is too chatty)"],
    ["developers in many time zones need small databases only while working", "Aurora Serverless offered through Service Catalog"],
    ["validated prototype infrastructure must deploy automatically again", "CloudFormation template — Elastic Beanstalk deploys code, it doesn't copy infrastructure"],
    ["stateless job over 60 minutes that can stop and restart anytime", "Spot Instances — Lambda stops at 15 minutes"],
    ["near real-time network traffic info from ENIs into OpenSearch", "VPC Flow Logs → CloudWatch Logs → Firehose → OpenSearch (CloudTrail never sees network traffic)"],
    ["embedded NoSQL on EC2 must become highly available with least overhead", "Auto Scaling across AZs + migrate the data to DynamoDB"],
    ["hundreds of EC2 instances must be recoverable with least effort", "AWS Backup plan — not Lambda snapshot scripts"],
    ["containers, disruption-tolerant, minimize cost and overhead", "Spot Instances in an EKS managed node group (community answer)"],
    ["share an encrypted AMI with one partner account", "Share the AMI launch permission with that account + allow the account in the KMS key policy"],
    ["another company polls your SQS queue using its own identity", "SQS access policy (resource-based) naming their account"],
    ["80 offices with 1 PB each, 1–2 Gbps links, 4 weeks", "Many Snowball Edge Storage Optimized devices shipped in parallel"],
    ["requests separated by type, must not be lost, least maintenance", "One SNS topic with message filtering → one SQS queue per type"]
  ],
  services: [],
  compare: [
    {
      title: "Questions you got wrong",
      cols: ["Bank question", "You picked", "Community answer", "The rule to keep"],
      rows: [
        ["Q51 · daily shipping report email", "D + E", "B + D · 70%", "Formatted email → SES. SNS only notifies."],
        ["Q54 · Windows shares on two EC2", "B", "C · 98%", "Windows SMB shares → FSx for Windows. S3 File Gateway is for on-prem apps."],
        ["Q57 · inappropriate images", "D", "B · 100%", "Least development effort → managed AI (Rekognition)."],
        ["Q63 · PDF to JPG converter", "C", "A · 99%", "Files live in S3; per-upload work is S3 event → Lambda."],
        ["Q64 · hybrid Windows files over VPN", "A", "D · 75%", "On-prem low latency needs a local cache: FSx File Gateway."],
        ["Q851 · dev PostgreSQL databases", "A", "C · 75%", "Intermittent use → Aurora Serverless, not start/stop scripts."],
        ["Q479 · prototype infrastructure", "D", "B · 81%", "Repeatable infrastructure → CloudFormation."],
        ["Q124 · dynamic batch job", "D", "A · 96%", "Interruptible and over 15 minutes → Spot, not Lambda."],
        ["Q676 · ENI traffic to OpenSearch", "C", "B · 90%", "Network traffic → Flow Logs; delivery to OpenSearch → Firehose."],
        ["Q693 · embedded NoSQL", "C", "D · 100%", "Self-managed database → managed service for least overhead."],
        ["Q602 · recover hundreds of EC2", "D", "C · 100%", "Managed feature beats custom Lambda scripts."],
        ["Q108 · car listings to many systems", "C", "A · 50% (D · 45%)", "Fan-out runs SNS → SQS, never SQS → SNS. This question is split."]
      ]
    },
    {
      title: "Where Gemini disagrees with your bank",
      cols: ["Topic", "Gemini said", "Community", "What to trust"],
      rows: [
        ["Q128 · containers on Spot", "A — EC2 Auto Scaling group", "B · 73% — EKS managed node group", "Your pick B was right. A managed node group handles Spot interruptions and runs the orchestrator; a bare Auto Scaling group gives you none."],
        ["Q49 · call transcripts", "D — Deep Archive + RDS metadata", "B · 70% (C · 23%)", "Intelligent-Tiering, lifecycle to Glacier Flexible Retrieval after a year, Athena for S3 data, Glacier Select for archives. Don't memorize D."],
        ["Q108 · car listings", "D", "A · 50%, D · 45%", "Genuinely split. RDS event notifications report instance events (failover, backups), not row changes — a weakness in D."],
        ["“EKS is never least overhead”", "absolute rule", "—", "Too absolute. EKS is right when Kubernetes is named or when the options are all container platforms, as in Q128."],
        ["S3 “Termination Protection”", "a way to stop bucket deletion", "—", "S3 has no such feature. Buckets must be empty to delete; deny s3:DeleteBucket with a bucket policy or SCP. Termination protection belongs to EC2 and CloudFormation."],
        ["Q789 · Control Tower", "A — proactive controls", "A · 61% (D · 39%)", "Agrees, but contested: proactive controls check CloudFormation before deployment; SCPs can't read template contents."]
      ],
      note: "Gemini matched the community on 30 of the 33 bank questions in your chat."
    }
  ],
  traps: [
    "An explanation that sounds certain isn't proof. Under 70% agreement means the community itself is split, so learn why each option could work.",
    "Picking the one option that isn't obviously bad works on the exam, but understand why it wins — reworded questions change the bad options."
  ]
}
);
