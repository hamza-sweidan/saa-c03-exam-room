/* VPC · Load balancing, DNS & edge · Hybrid connectivity */
(window.GUIDE = window.GUIDE || []).push(
{
  id: "vpc",
  title: "VPC, down to the parts",
  lede: "A VPC is Regional; each subnet lives in exactly one AZ. Everything here decides how packets enter, leave, and stay private.",
  triggers: [
    ["private-subnet instances need internet for updates, no inbound", "NAT gateway in a public subnet — one per AZ for high availability"],
    ["IPv6 instances need outbound internet only", "Egress-only internet gateway"],
    ["what makes a subnet public", "Its route table sends `0.0.0.0/0` to an internet gateway (and instances have public IPs)"],
    ["block one IP address or range", "Network ACL deny rule (security groups can't deny)"],
    ["allow only the web tier to reach the database tier", "DB security group inbound rule that references the web tier's security group"],
    ["reach S3 or DynamoDB privately from the VPC, no NAT cost", "Gateway VPC endpoint + route table entry"],
    ["reach SQS, KMS, Secrets Manager, ECR, STS… privately", "Interface VPC endpoint (AWS PrivateLink)"],
    ["reach S3 privately from on-premises over VPN/Direct Connect", "Interface endpoint for S3 (gateway endpoints don't work from on-prem)"],
    ["offer one service to many VPCs or accounts, overlapping CIDRs", "PrivateLink endpoint service behind a Network Load Balancer"],
    ["connect two VPCs, simple and cheap", "VPC peering"],
    ["connect many VPCs and on-prem networks, transitive routing", "AWS Transit Gateway"],
    ["central team owns subnets, other accounts launch into them", "VPC sharing through AWS RAM"],
    ["capture traffic metadata to/from network interfaces · rejected connections", "VPC Flow Logs"],
    ["network traffic info in near real time into OpenSearch", "Flow Logs → CloudWatch Logs → subscription → Data Firehose → OpenSearch"],
    ["inspect actual packet contents · feed an IDS", "VPC Traffic Mirroring"],
    ["stateful firewall · IPS · domain allow-list for the whole VPC", "AWS Network Firewall"],
    ["insert third-party firewall appliances transparently", "Gateway Load Balancer + GWLB endpoints"],
    ["SSH/RDP to private instances without bastion or open ports", "Systems Manager Session Manager (or EC2 Instance Connect Endpoint)"],
    ["why can't instance A reach B", "VPC Reachability Analyzer"],
    ["on-prem DNS must resolve AWS private names, or the reverse", "Route 53 Resolver inbound / outbound endpoints"],
    ["HPC nodes need OS-bypass, lowest-latency networking", "Elastic Fabric Adapter (EFA)"],
    ["public IP that survives stop/start and can move to a standby", "Elastic IP address"],
    ["move a network identity (MAC, private IP) to a standby instance", "Detach and attach a secondary ENI"],
    ["VPC running out of IP addresses", "Add a secondary CIDR block and new subnets"],
    ["plan and track IP addresses across accounts", "Amazon VPC IPAM"]
  ],
  services: [
    ["VPC", "", "Isolated network in one Region; IPv4 CIDR from `/16` to `/28`; secondary CIDRs and IPv6 optional.", "Every workload.", "—"],
    ["Subnet", "", "A CIDR slice in one AZ. AWS reserves 5 addresses: `.0` network, `.1` router, `.2` DNS, `.3` reserved, last = broadcast. A `/24` leaves 251.", "Public subnets for load balancers, NAT, bastions; private for apps and databases.", "—"],
    ["Route table", "", "Where traffic goes. Each subnet uses one (else the main table). The `local` route can't be removed; the most specific prefix wins.", "Public vs private behaviour, endpoints, peering, TGW.", "—"],
    ["Internet gateway", "Internet gateway", "Horizontally scaled, highly available gateway, one per VPC; translates public IPv4 for instances.", "Two-way internet access.", "NAT gateway (outbound only)"],
    ["Egress-only IGW", "Egress-only IGW", "Outbound-only, stateful gateway for IPv6.", "IPv6 instances that must not accept inbound connections.", "NAT gateway (IPv4)"],
    ["NAT gateway", "NAT gateway", "Managed, AZ-scoped NAT in a public subnet with an Elastic IP; scales to 100 Gbps; no security groups; per-hour and per-GB charges.", "Private subnets reach the internet outbound.", "NAT instance · gateway endpoint for S3"],
    ["NAT instance", "NAT instance", "Self-managed EC2 NAT; disable source/destination check; you handle HA and scaling.", "Almost never — only when a question insists on self-managed or port forwarding.", "NAT gateway"],
    ["Security group", "Security group", "Stateful firewall on each ENI; allow rules only; return traffic automatic; can reference other security groups. Default: no inbound, all outbound.", "Allow ports and sources per instance or tier.", "Network ACL"],
    ["Network ACL", "NACL", "Stateless firewall on a subnet; numbered allow and deny rules, lowest number first; return traffic needs ephemeral ports `1024–65535`.", "Explicit deny of IPs or subnets.", "Security group"],
    ["Elastic IP", "", "Static public IPv4 in a Region you can remap between instances; charged.", "Fixed IP for allow-lists or failover.", "Global Accelerator (anycast IPs)"],
    ["ENI", "", "Virtual network card with private IPs, MAC and security groups; movable between instances in the same AZ.", "Dual-homed instances, licence tied to MAC, failover.", "—"],
    ["ENA · EFA", "", "ENA = enhanced networking. EFA = ENA plus OS-bypass for MPI/NCCL on Linux.", "High throughput (ENA); tightly coupled HPC/ML (EFA).", "—"],
    ["Bastion host", "Bastion", "Hardened EC2 in a public subnet used to SSH into private instances.", "Only when Session Manager isn't an option.", "Session Manager"],
    ["Session Manager", "Session Manager", "Shell access through the SSM agent; IAM-controlled; no inbound ports or keys; sessions logged to S3/CloudWatch.", "Secure admin access with least overhead.", "Bastion host"],
    ["VPC Flow Logs", "VPC Flow Logs", "Accepted/rejected IP traffic metadata per VPC, subnet or ENI to CloudWatch Logs, S3 or Firehose. No payloads.", "Troubleshooting, security analysis of traffic.", "CloudTrail (API calls) · Traffic Mirroring (packets)"],
    ["Traffic Mirroring", "", "Copies real packets from ENIs to a monitoring target.", "Deep packet inspection, IDS.", "Flow Logs"],
    ["Gateway endpoint", "VPC endpoint gateway", "Route-table target for S3 and DynamoDB only; free; same Region; not usable from on-prem or peered VPCs.", "Private, free S3/DynamoDB access.", "Interface endpoint"],
    ["Interface endpoint", "VPC endpoint interface", "ENI with a private IP (PrivateLink) for most AWS services and partner services; security groups; hourly + per-GB; reachable from on-prem.", "Private access to any other service or from on-prem.", "Gateway endpoint"],
    ["Endpoint policy", "", "Resource policy on an endpoint restricting which resources and actions pass; pair with bucket policy `aws:SourceVpce`.", "Stop data exfiltration to other buckets.", "—"],
    ["VPC peering", "VPC peering", "Private 1:1 link between two VPCs, cross-account and cross-Region; non-transitive; no overlapping CIDRs; routes on both sides.", "A few VPCs, lowest cost.", "Transit Gateway"],
    ["Transit Gateway", "Transit Gateway", "Regional hub router for VPCs, VPNs and Direct Connect; transitive; route tables for segmentation; inter-Region peering; ECMP across VPN tunnels; multicast.", "Many VPCs plus on-prem, one place to manage routing.", "VPC peering"],
    ["AWS Network Firewall", "Network Firewall", "Managed stateful/stateless firewall and IPS in firewall subnets; Suricata rules; domain filtering.", "Inspect and filter VPC traffic centrally.", "WAF (HTTP only) · security groups"],
    ["Gateway Load Balancer", "Gateway Load Balancer", "Layer 3 gateway that load-balances IP packets across third-party appliances using GENEVE on port 6081.", "Marketplace firewalls/IDS inline, transparently.", "NLB/ALB (they rewrite connections)"],
    ["Route 53 Resolver", "Route 53 Resolver", "VPC's built-in DNS at the `.2` address; inbound endpoints for on-prem queries, outbound endpoints + forwarding rules to on-prem DNS.", "Hybrid DNS.", "Private hosted zone"],
    ["VPC DNS attributes", "", "`enableDnsSupport` and `enableDnsHostnames` must be on for private hosted zones and interface-endpoint private DNS.", "Private DNS names don't resolve.", "—"],
    ["VPC sharing", "RAM", "Owner account shares subnets through RAM; participants launch into them.", "Centralized network, many accounts.", "Peering"],
    ["Reachability & Access Analyzers", "", "Reachability Analyzer tests one path and names the blocker; Network Access Analyzer finds unintended paths.", "Troubleshoot or audit connectivity.", "Flow Logs"]
  ],
  compare: [
    {
      title: "Security group vs network ACL",
      cols: ["", "Security group", "Network ACL"],
      rows: [
        ["Attached to", "ENI / instance", "subnet"],
        ["State", "stateful", "stateless — allow return traffic explicitly"],
        ["Rules", "allow only", "allow and deny"],
        ["Evaluation", "all rules together", "by rule number, first match wins"],
        ["Default", "no inbound, all outbound", "default NACL allows all; a new custom NACL denies all"],
        ["Can reference", "security groups, prefix lists", "CIDR ranges only"],
        ["Exam cue", "“allow app tier to DB tier”", "“block this IP range”"]
      ]
    },
    {
      title: "Getting out to the internet",
      cols: ["", "Internet gateway", "NAT gateway", "NAT instance", "Egress-only IGW"],
      rows: [
        ["Direction", "in + out", "out only (IPv4)", "out only", "out only (IPv6)"],
        ["Managed", "yes", "yes", "no", "yes"],
        ["High availability", "built in", "per AZ — deploy one per AZ", "you build it", "built in"],
        ["Security groups", "—", "no", "yes", "—"],
        ["Where", "attached to VPC", "public subnet", "public subnet", "attached to VPC"]
      ]
    },
    {
      title: "VPC endpoints",
      cols: ["", "Gateway endpoint", "Interface endpoint", "GWLB endpoint"],
      rows: [
        ["Services", "S3, DynamoDB", "most AWS services, PrivateLink services, S3", "appliances behind a GWLB"],
        ["Mechanism", "prefix-list route in route table", "ENI with private IP and DNS", "route table target"],
        ["Cost", "free", "per hour + per GB", "per hour + per GB"],
        ["From on-prem / peered VPC", "no", "yes", "—"],
        ["Controls", "endpoint policy", "security group + endpoint policy", "—"]
      ]
    },
    {
      title: "Connecting VPCs",
      cols: ["", "VPC peering", "Transit Gateway", "PrivateLink", "VPC sharing"],
      rows: [
        ["Topology", "1:1 links", "hub and spoke", "provider → consumers", "one VPC, many accounts"],
        ["Transitive", "no", "yes", "n/a", "n/a"],
        ["Overlapping CIDRs", "not allowed", "not allowed", "allowed", "n/a"],
        ["Scale", "messy beyond a handful", "thousands of attachments", "many consumers", "organization-wide"],
        ["Cost", "data transfer only", "per attachment + per GB", "endpoint hours + GB", "nothing extra"],
        ["Exam cue", "“two VPCs, lowest cost”", "“many VPCs + on-prem, simplify”", "“expose one app, not the network”", "“network team owns subnets”"]
      ]
    }
  ],
  traps: [
    "A single NAT gateway is a single point of failure for other AZs — one per AZ, each private subnet routing to its own AZ's gateway.",
    "Pulling lots of S3 data through a NAT gateway costs per-GB NAT charges; a free gateway endpoint removes cost and internet path.",
    "NACL deny rules must have a lower number than the allow rule they override.",
    "Forgetting ephemeral ports `1024–65535` on a NACL breaks responses.",
    "Peering has no edge-to-edge routing: you can't use the peer's internet gateway, NAT gateway, VPN or Direct Connect.",
    "Lambda attached to a VPC loses internet access unless its subnet routes to a NAT gateway.",
    "Flow Logs are metadata only, and CloudTrail never receives Flow Logs — packets are Traffic Mirroring, API calls are CloudTrail.",
    "NLB and ALB terminate or rewrite connections, so they can't insert inline appliances — that's Gateway Load Balancer.",
    "Subnet CIDRs can't be resized; plan ranges that don't overlap on-prem or other VPCs."
  ]
},
{
  id: "edge",
  title: "Load balancing, DNS & edge",
  lede: "Spreading traffic across targets, steering it between Regions, and serving it close to users.",
  triggers: [
    ["route by URL path or host name · HTTP/HTTPS · microservices", "Application Load Balancer"],
    ["TCP/UDP · millions of requests per second · ultra-low latency · static IP per AZ", "Network Load Balancer"],
    ["need a static IP and path-based routing", "NLB with an ALB as its target, or Global Accelerator in front of the ALB"],
    ["authenticate users at the load balancer", "ALB authentication with Cognito or OIDC"],
    ["users must return to the same instance", "Sticky sessions — better: keep session state in ElastiCache or DynamoDB"],
    ["global users · cache static and dynamic content", "Amazon CloudFront"],
    ["downloadable files, global, cheapest, no servers", "CloudFront + S3"],
    ["premium users access many protected files", "CloudFront signed cookies"],
    ["one protected file or link", "CloudFront signed URL (S3 presigned URL without CloudFront)"],
    ["block users from certain countries", "CloudFront geo restriction (or WAF geo match)"],
    ["protect specific sensitive form fields end to end", "CloudFront field-level encryption"],
    ["header rewrites, redirects at the edge in sub-ms", "CloudFront Functions"],
    ["edge code needing network calls or longer runtime", "Lambda@Edge"],
    ["serverless login plus low-latency authorization, served globally", "Cognito (authentication) + Lambda@Edge (authorization) + CloudFront"],
    ["fail over to a second origin on errors", "CloudFront origin group"],
    ["gaming · VoIP · IoT UDP · 2 static anycast IPs · fast Regional failover", "AWS Global Accelerator"],
    ["canary or blue/green by percentage in DNS", "Route 53 weighted routing"],
    ["send users to the lowest-latency Region", "Route 53 latency routing (A alias records)"],
    ["active-passive DR in DNS", "Route 53 failover routing + health checks"],
    ["content by user's country (laws, language, licensing)", "Route 53 geolocation routing"],
    ["shift traffic between Regions with a bias", "Route 53 geoproximity routing (Traffic Flow)"],
    ["return several healthy IPs, simple DNS spread", "Route 53 multivalue answer routing"],
    ["route by client IP range or ISP", "Route 53 IP-based routing"],
    ["point example.com (zone apex) at ELB, CloudFront or S3 site", "Route 53 alias record"],
    ["private DNS names inside VPCs", "Route 53 private hosted zone"],
    ["throttling, API keys, usage plans, caching for an API", "Amazon API Gateway (REST API)"],
    ["GraphQL · real-time subscriptions · offline sync", "AWS AppSync"]
  ],
  services: [
    ["Application Load Balancer", "ALB", "Layer 7 load balancer: routes on path, host, header, query and method; targets instances, IPs, containers or Lambda.", "Web apps, microservices, HTTPS termination with ACM.", "NLB"],
    ["Network Load Balancer", "NLB", "Layer 4 for TCP/UDP/TLS with static IPs per AZ (Elastic IPs allowed), preserves source IP, extreme throughput.", "Non-HTTP protocols, IP allow-listing, PrivateLink services.", "ALB"],
    ["Gateway Load Balancer", "Gateway Load Balancer", "Layer 3 load balancer for inline virtual appliances.", "Third-party firewalls and IDS.", "Network Firewall"],
    ["Classic Load Balancer", "", "Previous generation.", "Never pick for new designs.", "ALB · NLB"],
    ["Amazon CloudFront", "CloudFront", "Global CDN caching at edge locations; origins S3, ALB, EC2 or any HTTP server; HTTPS, WAF, Shield, OAC.", "Global low-latency delivery, offload origin, secure S3.", "Global Accelerator"],
    ["Lambda@Edge · CloudFront Functions", "", "Functions: lightweight JavaScript for viewer requests in sub-ms. Lambda@Edge: Node/Python with network access and longer runtime.", "Header/URL manipulation, auth checks, A/B at edge.", "Lambda in a Region"],
    ["AWS Global Accelerator", "Global Accelerator", "Two static anycast IPs that enter the AWS network at the nearest edge and route to healthy Regional endpoints. No caching.", "TCP/UDP apps, static IPs, fast cross-Region failover.", "CloudFront"],
    ["Amazon Route 53", "Route 53", "DNS with health checks, routing policies, domain registration, private hosted zones, DNSSEC.", "Steering traffic by health, latency, geography or weight.", "Global Accelerator"],
    ["Amazon API Gateway", "API Gateway", "Managed front door for REST, HTTP and WebSocket APIs; auth with IAM, Cognito or Lambda authorizers; throttling and caching.", "Serverless APIs in front of Lambda or other backends.", "ALB (simple HTTP routing)"],
    ["AWS AppSync", "AppSync", "Managed GraphQL and real-time pub/sub APIs.", "GraphQL front ends, mobile offline sync.", "API Gateway"]
  ],
  compare: [
    {
      title: "Load balancers",
      cols: ["", "ALB", "NLB", "GWLB"],
      rows: [
        ["Layer", "7 — HTTP, HTTPS, gRPC, WebSocket", "4 — TCP, UDP, TLS", "3 — IP packets (GENEVE)"],
        ["Routing", "path, host, header, query, method", "port", "flows to appliances"],
        ["Static IP", "no (DNS name only)", "yes, per AZ, Elastic IP allowed", "—"],
        ["Targets", "instances, IPs, Lambda, containers", "instances, IPs, ALB", "appliance instances or IPs"],
        ["Client IP seen by target", "X-Forwarded-For header", "preserved", "preserved"],
        ["Extras", "Cognito/OIDC auth, redirects, fixed responses, WAF, SNI", "PrivateLink, extreme performance", "third-party inspection"]
      ]
    },
    {
      title: "CloudFront vs Global Accelerator",
      cols: ["", "CloudFront", "Global Accelerator"],
      rows: [
        ["Traffic", "HTTP/HTTPS", "any TCP or UDP"],
        ["Caching", "yes, at edge locations", "no — proxies to endpoints"],
        ["IP addresses", "many, changing", "2 static anycast IPs"],
        ["Failover", "origin groups", "Regional endpoint health, under a minute"],
        ["Endpoints", "S3, ALB, EC2, any HTTP origin", "ALB, NLB, EC2, Elastic IP"],
        ["Exam cue", "static or dynamic web content, video", "gaming, VoIP, IoT, IP allow-lists, deterministic failover"]
      ]
    },
    {
      title: "Route 53 routing policies",
      cols: ["Policy", "Behaviour", "Health checks", "Cue"],
      rows: [
        ["Simple", "one record, values returned in random order", "no", "single resource"],
        ["Weighted", "split by weight", "yes", "canary, A/B, blue/green"],
        ["Latency", "Region with lowest latency for the user", "yes", "multi-Region performance"],
        ["Failover", "primary until unhealthy, then secondary", "required", "active-passive DR"],
        ["Geolocation", "by user's continent, country or state; add a default", "yes", "localization, compliance"],
        ["Geoproximity", "by distance with an adjustable bias", "yes", "shift load between Regions"],
        ["Multivalue answer", "up to 8 healthy records at random", "yes", "simple spread (not a load balancer)"],
        ["IP-based", "by client CIDR", "yes", "route by ISP or network"]
      ]
    },
    {
      title: "Alias vs CNAME",
      cols: ["", "Alias (A/AAAA)", "CNAME"],
      rows: [
        ["Points to", "AWS resource: ELB, CloudFront, S3 website, API Gateway, Global Accelerator, VPC endpoint", "any other host name"],
        ["Zone apex (example.com)", "yes", "no — subdomains only"],
        ["Query cost for AWS targets", "free", "charged"],
        ["Lookups", "resolved directly", "extra hop"],
        ["Can't target", "an EC2 instance DNS name", "—"]
      ]
    },
    {
      title: "Signed URLs, signed cookies, presigned URLs",
      cols: ["", "CloudFront signed URL", "CloudFront signed cookie", "S3 presigned URL"],
      rows: [
        ["Scope", "one file", "many files", "one S3 object"],
        ["Path", "through CloudFront", "through CloudFront", "straight to S3"],
        ["Signed by", "CloudFront key group", "CloudFront key group", "the IAM principal's credentials"],
        ["Cue", "“individual download link”", "“subscribers access all videos”", "“temporary upload or download to S3”"]
      ]
    },
    {
      title: "API Gateway API types",
      cols: ["", "REST API", "HTTP API", "WebSocket API"],
      rows: [
        ["Features", "usage plans, API keys, caching, request validation, WAF, private APIs", "cheaper and faster, JWT auth, fewer features", "persistent two-way connections"],
        ["Cue", "“throttle per customer”, “cache responses”", "“lowest-cost proxy to Lambda”", "“chat”, “live dashboards”"]
      ]
    }
  ],
  traps: [
    "A certificate for CloudFront must be in ACM in us-east-1; for an ALB, in the ALB's own Region.",
    "ALBs have no fixed IPs. Clients that allow-list IPs → NLB or Global Accelerator.",
    "Use Origin Access Control (not the older OAI) to lock S3 to CloudFront; S3 website endpoints can't use OAC.",
    "Cross-zone load balancing is on by default for ALB and off by default for NLB and GWLB.",
    "Deregistration delay lets in-flight requests finish before a target leaves.",
    "Route 53 health checks can't reach private IPs — base the health check on a CloudWatch alarm.",
    "Internal load balancers aren't reachable from the internet, so they can't serve public users.",
    "Geolocation ≠ lowest latency. Performance questions want latency routing."
  ]
},
{
  id: "hybrid-net",
  title: "Hybrid connectivity",
  lede: "Linking data centers, offices and remote users to VPCs.",
  triggers: [
    ["encrypted connection to on-prem quickly, over the internet", "AWS Site-to-Site VPN"],
    ["consistent latency · dedicated private bandwidth · not the internet", "AWS Direct Connect"],
    ["Direct Connect traffic must be encrypted", "IPsec VPN over Direct Connect, or MACsec on dedicated 10/100 Gbps ports"],
    ["cheapest backup for a Direct Connect link", "Site-to-Site VPN as backup"],
    ["maximum resiliency for critical workloads", "Two Direct Connect connections at each of two locations"],
    ["one Direct Connect to VPCs in several Regions", "Direct Connect gateway"],
    ["Direct Connect to many VPCs with transitive routing", "Direct Connect gateway + Transit Gateway (transit VIF)"],
    ["remote employees connect laptops to the VPC", "AWS Client VPN"],
    ["branch offices reach each other through AWS", "VPN CloudHub (or Transit Gateway)"],
    ["VPN throughput beyond one tunnel's 1.25 Gbps", "Transit Gateway with ECMP across VPN tunnels"],
    ["long-distance VPN performance", "Accelerated Site-to-Site VPN (on Transit Gateway)"],
    ["connectivity needed in days, not weeks", "Site-to-Site VPN — Direct Connect takes weeks"]
  ],
  services: [
    ["Site-to-Site VPN", "Site-to-Site VPN", "IPsec over the internet between your customer gateway and a virtual private gateway or Transit Gateway; two tunnels; about 1.25 Gbps per tunnel.", "Fast, cheap, encrypted hybrid link or DX backup.", "Direct Connect"],
    ["Virtual private gateway", "", "VPN/Direct Connect endpoint attached to a single VPC.", "One VPC to on-prem.", "Transit Gateway"],
    ["Customer gateway", "", "AWS object describing your on-prem device (public IP, BGP ASN).", "Every Site-to-Site VPN.", "—"],
    ["AWS Direct Connect", "Direct Connect", "Private circuit through a Direct Connect location; dedicated 1/10/100 Gbps or hosted from 50 Mbps via partners; not encrypted by default; weeks to deliver.", "Steady high-volume hybrid traffic, predictable latency, lower data transfer cost.", "Site-to-Site VPN"],
    ["Virtual interfaces (VIFs)", "", "Private VIF → a VPC; public VIF → AWS public endpoints like S3; transit VIF → Transit Gateway through a DX gateway.", "Choosing what the link reaches.", "—"],
    ["Direct Connect gateway", "", "Global object linking DX connections to VGWs or Transit Gateways in any Region.", "Multi-Region access from one connection.", "—"],
    ["AWS Client VPN", "Client VPN", "Managed OpenVPN-based remote access with AD, SAML or certificate auth.", "Remote users.", "Site-to-Site VPN"],
    ["VPN CloudHub", "", "Several customer gateways on one virtual private gateway so sites talk to each other.", "Branch-to-branch over AWS.", "Transit Gateway"]
  ],
  compare: [
    {
      title: "VPN vs Direct Connect",
      cols: ["", "Site-to-Site VPN", "Direct Connect"],
      rows: [
        ["Path", "internet, IPsec", "private dedicated line"],
        ["Setup time", "minutes to hours", "weeks to months"],
        ["Bandwidth", "about 1.25 Gbps per tunnel", "50 Mbps – 100 Gbps"],
        ["Latency", "variable", "consistent"],
        ["Encryption", "built in", "none by default"],
        ["Cost", "low", "port hours + data, higher"],
        ["Exam cue", "fast, cheap, backup", "consistent performance, large steady transfers"]
      ]
    },
    {
      title: "Direct Connect resiliency",
      cols: ["Level", "Design"],
      rows: [
        ["Development", "one connection at one location"],
        ["High", "one connection at each of two locations (or DX + VPN backup)"],
        ["Maximum", "two connections at each of two locations, on separate devices"]
      ]
    }
  ],
  traps: [
    "A public VIF reaches public AWS services, not your VPC.",
    "Questions that demand consistent latency or throughput rule out internet VPN.",
    "Overlapping on-prem and VPC CIDRs break routing — re-address or use PrivateLink/NAT."
  ]
}
);
