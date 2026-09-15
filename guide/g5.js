/* Identity & access · Encryption, keys & secrets · Threat protection & compliance */
(window.GUIDE = window.GUIDE || []).push(
{
  id: "iam",
  title: "Identity & access",
  lede: "Who can do what, in which account — and the guardrails that cap it.",
  triggers: [
    ["app on EC2 / ECS / Lambda needs AWS permissions", "IAM role (instance profile, task role, execution role)"],
    ["users in another AWS account need access", "Cross-account IAM role with a trust policy (sts:AssumeRole)"],
    ["a third-party vendor needs access to your account", "IAM role with an external ID"],
    ["stop every account in an OU from using a service or Region, even admins", "Service control policy (AWS Organizations)"],
    ["prevent disabling a security setting across accounts", "SCP that denies the action (e.g. s3:PutAccountPublicAccessBlock)"],
    ["no S3 object in the account may ever be public", "S3 Block Public Access at account level + SCP so nobody can turn it off"],
    ["cap the permissions a delegated admin can grant", "IAM permissions boundary"],
    ["single sign-on to many AWS accounts with corporate identities", "IAM Identity Center (with external IdP or AD)"],
    ["stand up a governed multi-account environment fast", "AWS Control Tower"],
    ["consolidated billing · central account management", "AWS Organizations"],
    ["sign-up and sign-in for web or mobile app users, social login", "Amazon Cognito user pool"],
    ["app users need temporary AWS credentials to reach S3/DynamoDB", "Amazon Cognito identity pool"],
    ["use existing on-prem Active Directory users for AWS, no sync", "AD Connector"],
    ["Microsoft AD running in AWS with trust to on-prem", "AWS Managed Microsoft AD"],
    ["share subnets, Transit Gateways, Resolver rules across accounts", "AWS Resource Access Manager"],
    ["find resources shared outside the account · validate policies", "IAM Access Analyzer"],
    ["require MFA for sensitive actions", "IAM condition `aws:MultiFactorAuthPresent`"],
    ["limit a bucket to principals in my organization", "Bucket policy with `aws:PrincipalOrgID`"],
    ["standardize tags across accounts", "Tag policies in Organizations"]
  ],
  services: [
    ["IAM users & groups", "", "Long-term identities with passwords or access keys; groups attach policies to many users.", "Rarely — prefer federation and roles.", "IAM roles"],
    ["IAM roles", "IAM role", "Identities assumed for temporary credentials by services, other accounts or federated users.", "Anything running on AWS, cross-account access.", "Access keys"],
    ["Identity-based policy", "", "JSON permissions attached to users, groups or roles.", "Normal permissions.", "Resource-based policy"],
    ["Resource-based policy", "", "Policy on the resource itself (bucket, queue, key, Lambda) naming principals, including other accounts.", "Cross-account grants without a role.", "Identity-based policy"],
    ["Permissions boundary", "", "Maximum permissions a user or role can ever have; grants nothing alone.", "Delegated admins who create roles.", "SCP"],
    ["AWS STS", "", "Issues temporary credentials: AssumeRole, AssumeRoleWithSAML, AssumeRoleWithWebIdentity.", "Federation, cross-account.", "—"],
    ["IAM Identity Center", "IAM Identity Center", "Workforce single sign-on to accounts and apps with permission sets; connects to AD or external IdPs.", "Employees across many accounts.", "Cognito (customers)"],
    ["AWS Organizations", "Organizations/SCP", "Groups accounts into OUs; consolidated billing; SCPs, tag, backup and AI opt-out policies.", "Multi-account governance.", "Control Tower"],
    ["Service control policies", "", "Caps on what member accounts' principals (including root) can do; never grant.", "Org-wide preventive guardrails.", "Permissions boundaries"],
    ["AWS Control Tower", "Control Tower", "Automated landing zone on Organizations with preventive and detective controls and Account Factory.", "Set up and govern multi-account quickly.", "Organizations alone"],
    ["AWS RAM", "RAM", "Shares resources with other accounts or the whole organization.", "Central networking, shared Resolver rules, License Manager.", "VPC peering"],
    ["Amazon Cognito", "Cognito", "User pools = app user directory with JWTs; identity pools = trade identities for temporary AWS credentials.", "Customer-facing app authentication.", "IAM Identity Center"],
    ["AWS Directory Service", "Directory Service", "Managed Microsoft AD, AD Connector (proxy to on-prem AD) or Simple AD (basic Samba).", "AD-aware apps, Windows workloads, SSO with AD.", "IAM Identity Center"],
    ["IAM Access Analyzer", "", "Finds external access, validates policies, generates least-privilege policies from activity.", "Audit what's exposed.", "Trusted Advisor"]
  ],
  compare: [
    {
      title: "Policy types",
      cols: ["Type", "Attached to", "Grants?", "Cue"],
      rows: [
        ["Identity-based", "user, group, role", "yes", "normal permissions"],
        ["Resource-based", "bucket, queue, key, function", "yes, even cross-account", "“allow another account without a role”"],
        ["Permissions boundary", "user or role", "no — sets a ceiling", "“admins can't escalate”"],
        ["Service control policy", "OU or account", "no — ceiling for everyone incl. member root", "“org-wide guardrail”"],
        ["Session policy", "assumed-role session", "no — narrows", "temporary tighter session"]
      ],
      note: "Evaluation: an explicit Deny anywhere wins, then an explicit Allow, otherwise implicit deny."
    },
    {
      title: "Cognito user pools vs identity pools",
      cols: ["", "User pool", "Identity pool"],
      rows: [
        ["Gives", "sign-up, sign-in, MFA, JWT tokens, social/SAML federation", "temporary AWS credentials through STS"],
        ["Used by", "API Gateway and ALB authorizers", "apps calling S3 or DynamoDB directly"],
        ["Cue", "“user directory for the app”", "“users upload straight to their S3 prefix”"]
      ]
    },
    {
      title: "Directory options",
      cols: ["", "AWS Managed Microsoft AD", "AD Connector", "Simple AD"],
      rows: [
        ["What it is", "real Microsoft AD in AWS, Multi-AZ", "proxy to on-prem AD, stores nothing", "Samba-based basic directory"],
        ["Trust with on-prem", "yes", "uses on-prem directly", "no"],
        ["Cue", "“AD-aware apps in AWS, trust”", "“use existing on-prem AD to sign in”", "“small, low cost”"]
      ]
    },
    {
      title: "Control Tower control types",
      cols: ["Control", "Built on", "When it acts", "Cue"],
      rows: [
        ["Proactive", "CloudFormation Hooks", "before a stack creates the resource — blocks it", "“block CloudFormation deployments that break a rule”"],
        ["Preventive", "service control policies", "at the API call — denies the action", "“accounts must never be able to do X”"],
        ["Detective", "AWS Config rules", "after the resource exists — reports it", "“detect / alert on non-compliant resources”"]
      ]
    },
    {
      title: "Multi-account toolkit",
      cols: ["Tool", "Job"],
      rows: [
        ["Organizations", "accounts, OUs, consolidated billing, SCPs"],
        ["Control Tower", "landing zone and controls built on Organizations"],
        ["IAM Identity Center", "one sign-in for people across accounts"],
        ["RAM", "share resources between accounts"],
        ["Firewall Manager", "security rules across accounts"],
        ["StackSets", "deploy CloudFormation to many accounts and Regions"]
      ]
    }
  ],
  traps: [
    "SCPs don't affect the management account and never grant access — IAM must still allow it.",
    "Never put access keys on EC2 or in code; roles give rotating temporary credentials.",
    "Root: MFA on, no access keys, use only for root-only tasks.",
    "Detect-and-fix after exposure (GuardDuty/Lambda, Trusted Advisor emails) loses to prevention (Block Public Access + SCP) when the question says data must never be exposed.",
    "Cross-account S3 needs both sides: the bucket policy allows the other account, and that account's IAM policy allows its user."
  ]
},
{
  id: "crypto",
  title: "Encryption, keys & secrets",
  lede: "Keys for data at rest, certificates for data in transit, and somewhere safe for passwords.",
  triggers: [
    ["managed encryption keys integrated with S3, EBS, RDS · audit use", "AWS KMS"],
    ["control who can decrypt · rotate keys · separate key admins", "KMS customer managed key with a key policy"],
    ["each customer sees only their data, employees see nothing", "One KMS key per customer; key policy allows kms:Decrypt only to that customer's role"],
    ["dedicated single-tenant HSM · you alone control keys", "AWS CloudHSM"],
    ["same key in several Regions for encrypted replication/DR", "KMS multi-Region keys"],
    ["bring your own key material", "KMS imported key material or custom key store (CloudHSM)"],
    ["free TLS certificates, auto-renewed, for ALB/CloudFront/API Gateway", "AWS Certificate Manager"],
    ["private certificates for internal services", "AWS Private CA"],
    ["rotate database credentials automatically", "AWS Secrets Manager"],
    ["store configuration and secrets cheaply, no rotation", "Systems Manager Parameter Store (SecureString)"],
    ["encrypt data larger than 4 KB with KMS", "Envelope encryption — GenerateDataKey"],
    ["HTTPS certificate directly on an EC2 instance", "ACM public certs can't be exported — terminate TLS on an ALB/CloudFront instead"],
    ["share an encrypted AMI or snapshot with another account", "Share it with that account ID + allow the account in the customer managed key's policy"],
    ["retrieve many secrets in one call", "Secrets Manager BatchGetSecretValue"]
  ],
  services: [
    ["AWS KMS", "KMS", "Managed keys stored in HSMs; integrates with most services; every use logged in CloudTrail; key policies, grants, rotation.", "Default answer for encryption at rest.", "CloudHSM"],
    ["AWS CloudHSM", "CloudHSM", "Single-tenant HSM cluster in your VPC; you manage users and keys; PKCS#11, JCE, CNG; can back a KMS custom key store.", "Contractual full key control, SSL offload, Oracle TDE.", "KMS"],
    ["AWS Certificate Manager", "ACM", "Provisions and renews public TLS certificates free for integrated services; imports third-party certs.", "HTTPS on ALB, CloudFront, API Gateway.", "KMS (data at rest)"],
    ["AWS Private CA", "", "Managed private certificate authority.", "Internal TLS, mTLS, device certificates.", "ACM public certs"],
    ["AWS Secrets Manager", "Secrets Manager", "Stores secrets with automatic rotation (native for RDS, Redshift, DocumentDB; Lambda otherwise) and cross-Region replication.", "Credentials that must rotate.", "Parameter Store"],
    ["Parameter Store", "Parameter Store", "Hierarchical config values and SecureString secrets; standard tier free; no built-in rotation.", "App config, cheap secret storage.", "Secrets Manager"]
  ],
  compare: [
    {
      title: "KMS key types",
      cols: ["", "AWS owned", "AWS managed (aws/s3…)", "Customer managed"],
      rows: [
        ["Visible in your account", "no", "yes", "yes"],
        ["You edit the key policy", "no", "no", "yes"],
        ["Rotation", "AWS", "automatic yearly", "optional automatic or on demand"],
        ["Usable cross-account", "no", "no", "yes"],
        ["Cost", "free", "usage only", "monthly + usage"],
        ["Cue", "default", "“encrypt, nothing to manage”", "“control, rotate, share, disable, audit”"]
      ]
    },
    {
      title: "KMS vs CloudHSM",
      cols: ["", "KMS", "CloudHSM"],
      rows: [
        ["Tenancy", "multi-tenant managed service", "single-tenant HSMs in your VPC"],
        ["Key control", "AWS runs HSMs; you control access with policies", "only you manage users and keys"],
        ["Integration", "native with most AWS services", "custom key store or apps via PKCS#11/JCE/CNG"],
        ["Availability", "built in", "you deploy HSMs across AZs"],
        ["Cue", "default encryption answer", "“dedicated HSM”, “full control of keys”"]
      ]
    },
    {
      title: "Secrets Manager vs Parameter Store",
      cols: ["", "Secrets Manager", "Parameter Store"],
      rows: [
        ["Rotation", "built in", "none built in"],
        ["Cost", "per secret per month", "standard tier free"],
        ["Cross-Region replication", "yes", "no"],
        ["Cue", "“rotate DB credentials every 30 days”", "“store config values, lowest cost”"]
      ]
    }
  ],
  traps: [
    "Reading an SSE-KMS object needs both s3:GetObject and kms:Decrypt — a bucket policy can't control decryption; the KMS key policy can.",
    "ACM certificates secure traffic in transit; they don't encrypt S3 data.",
    "Deleting a KMS key waits 7–30 days; disable it if unsure.",
    "Sharing an encrypted snapshot or AMI cross-account requires a customer managed key the other account may use.",
    "KMS keys are Regional — copying encrypted data to another Region re-encrypts with a key there, or use multi-Region keys."
  ]
},
{
  id: "detect",
  title: "Threat protection, detection & compliance",
  lede: "Firewalls for the web layer, detectors that watch logs, and the records auditors ask for.",
  triggers: [
    ["SQL injection · cross-site scripting · bad bots", "AWS WAF on CloudFront, ALB, API Gateway or AppSync"],
    ["limit requests per IP · HTTP floods", "WAF rate-based rule"],
    ["large DDoS · 24/7 response team · cost protection", "AWS Shield Advanced"],
    ["baseline network DDoS protection at no cost", "AWS Shield Standard (automatic)"],
    ["apply WAF, Shield, security groups, Network Firewall across all accounts", "AWS Firewall Manager"],
    ["detect compromised instances, crypto mining, unusual API calls", "Amazon GuardDuty"],
    ["scan EC2, container images, Lambda for CVEs", "Amazon Inspector"],
    ["find PII or sensitive data in S3", "Amazon Macie"],
    ["investigate the root cause of a finding", "Amazon Detective"],
    ["one view of security findings and best-practice checks", "AWS Security Hub"],
    ["record configuration changes · check rules · auto-remediate", "AWS Config (rules + SSM Automation)"],
    ["who made this API call · audit across the organization", "AWS CloudTrail (organization trail to S3)"],
    ["prove CloudTrail logs weren't altered", "CloudTrail log file integrity validation"],
    ["download AWS compliance reports (SOC, PCI, ISO)", "AWS Artifact"],
    ["collect audit evidence continuously", "AWS Audit Manager"],
    ["react automatically to a finding", "EventBridge rule → Lambda or SSM Automation"]
  ],
  services: [
    ["AWS WAF", "WAF", "Layer 7 web firewall with managed rules, rate limits, IP sets and geo matching.", "Protect web apps and APIs.", "Network Firewall · security groups"],
    ["AWS Shield", "Shield", "Standard: free L3/L4 DDoS protection for everyone. Advanced: enhanced detection, Shield Response Team, cost protection.", "DDoS resilience.", "WAF"],
    ["AWS Firewall Manager", "Firewall Manager", "Central policies for WAF, Shield Advanced, security groups, Network Firewall and DNS Firewall across Organizations.", "Consistent protection in every account.", "Security Hub"],
    ["Amazon GuardDuty", "GuardDuty", "ML threat detection over CloudTrail, VPC Flow Logs and DNS logs, plus S3, EKS, RDS and Lambda signals.", "Continuous threat detection with one click.", "Inspector · Macie"],
    ["Amazon Inspector", "Inspector", "Automated vulnerability and exposure scanning of EC2, ECR images and Lambda.", "Patch and CVE posture.", "GuardDuty"],
    ["Amazon Macie", "Macie", "Discovers sensitive data and risky access in S3.", "PII compliance for S3.", "Comprehend (text you send it)"],
    ["Amazon Detective", "Detective", "Builds graphs from logs to investigate incidents.", "Root-cause analysis.", "GuardDuty (detection)"],
    ["AWS Security Hub", "Security Hub", "Aggregates findings and runs security standard checks across accounts.", "Single pane for security posture.", "Config"],
    ["AWS Config", "Config", "Records resource configurations over time; managed and custom rules; conformance packs; remediation.", "Compliance history and drift from rules.", "CloudTrail"],
    ["AWS CloudTrail", "CloudTrail", "Logs API calls (management and data events); 90-day event history; trails to S3/CloudWatch; CloudTrail Lake.", "Auditing who did what.", "Config · Flow Logs"],
    ["AWS Artifact", "Artifact", "Self-service AWS compliance reports and agreements.", "Auditor requests AWS's certifications.", "Audit Manager"],
    ["AWS Audit Manager", "Audit Manager", "Maps your usage to frameworks and gathers evidence.", "Your own audit readiness.", "Artifact"]
  ],
  compare: [
    {
      title: "Which firewall",
      cols: ["", "Security group", "Network ACL", "AWS WAF", "Network Firewall", "Shield"],
      rows: [
        ["Layer", "3–4", "3–4", "7 (HTTP)", "3–7", "3–4 (Advanced adds 7 with WAF)"],
        ["Scope", "ENI", "subnet", "CloudFront, ALB, API Gateway, AppSync, Cognito", "whole VPC via routing", "edge and Regional resources"],
        ["Cue", "allow ports and sources", "deny an IP", "SQLi, XSS, rate limits, geo", "IPS, domain filtering, egress control", "DDoS"]
      ]
    },
    {
      title: "Detection services",
      cols: ["Service", "Looks at", "Finds"],
      rows: [
        ["GuardDuty", "CloudTrail, Flow Logs, DNS logs, S3/EKS/RDS/Lambda activity", "active threats"],
        ["Inspector", "EC2, ECR images, Lambda", "software vulnerabilities, network exposure"],
        ["Macie", "S3 objects", "sensitive data, public buckets"],
        ["Detective", "graph of logs", "root cause"],
        ["Security Hub", "findings from all the above + checks", "overall posture"],
        ["Config", "resource settings", "non-compliant configuration"],
        ["CloudTrail", "API calls", "who did what, when, from where"],
        ["Trusted Advisor", "account", "best-practice gaps, idle resources, limits"]
      ]
    },
    {
      title: "CloudTrail vs Config vs CloudWatch",
      cols: ["", "CloudTrail", "Config", "CloudWatch"],
      rows: [
        ["Answers", "who did it?", "what does it look like, is it compliant?", "how is it performing?"],
        ["Data", "API events", "configuration history", "metrics, logs, alarms"]
      ]
    }
  ],
  traps: [
    "WAF can't attach to an NLB or directly to EC2.",
    "Config detects and remediates; SCPs and IAM prevent. “Prevent” in the question means SCP.",
    "GuardDuty reads Flow Logs and DNS logs on its own — you don't have to enable them first.",
    "CloudTrail keeps 90 days of event history; create a trail to S3 for longer and query with Athena.",
    "Trusted Advisor and GuardDuty report problems; neither blocks anything."
  ]
}
);
