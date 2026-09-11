# SAA-C03 Practice Exam 3

65 questions | 130 minutes | passing score 720 of 1000 (about 36 of 65 correct)

Answer every question. There is no penalty for a wrong answer. Questions marked
*(Choose two.)* or *(Choose three.)* need exactly that many selections.

| Domain | This paper | Real exam |
|---|---:|---:|
| 1. Design Secure Architectures | 19 | 29% |
| 2. Design Resilient Architectures | 17 | 26% |
| 3. Design High-Performing Architectures | 16 | 25% |
| 4. Design Cost-Optimized Architectures | 13 | 20% |

---

**1.** A company's web application consists of multiple Amazon EC2 instances that run behind an Application Load Balancer in a VPC. An Amazon RDS for MySQL DB instance contains the data. The company needs the ability to automatically detect and respond to suspicious or unexpected behavior in its AWS environment. The company already has added AWS WAF to its architecture. What should a solutions architect do next to protect against threats?

- **A.** Use Amazon GuardDuty to perform threat detection. Configure Amazon EventBridge to filter for GuardDuty findings and to invoke an AWS Lambda function to adjust the AWS WAF rules.
- **B.** Use AWS Firewall Manager to perform threat detection. Configure Amazon EventBridge to filter for Firewall Manager findings and to invoke an AWS Lambda function to adjust the AWS WAF web ACL.
- **C.** Use Amazon Inspector to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.
- **D.** Use Amazon Macie to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.

**2.** A company is developing an application that will run on a production Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster has managed node groups that are provisioned with On-Demand Instances. The company needs a dedicated EKS cluster for development work. The company will use the development cluster infrequently to test the resiliency of the application. The EKS cluster must manage all the nodes. Which solution will meet these requirements MOST cost-effectively?

- **A.** Create a managed node group that contains only Spot Instances.
- **B.** Create two managed node groups. Provision one node group with On-Demand Instances. Provision the second node group with Spot Instances.
- **C.** Create an Auto Scaling group that has a launch configuration that uses Spot Instances. Configure the user data to add the nodes to the EKS cluster.
- **D.** Create a managed node group that contains only On-Demand Instances.

**3.** A solutions architect needs to connect a company's corporate network to its VPC to allow on-premises access to its AWS resources. The solution must provide encryption of all traffic between the corporate network and the VPC at the network layer and the session layer. The solution also must provide security controls to prevent unrestricted access between AWS and the on-premises systems. Which solution meets these requirements?

- **A.** Configure AWS Direct Connect to connect to the VPC. Configure the VPC route tables to allow and deny traffic between AWS and on premises as required.
- **B.** Create an IAM policy to allow access to the AWS Management Console only from a defined set of corporate IP addresses. Restrict user access based on job responsibility by using an IAM policy and roles.
- **C.** Configure AWS Site-to-Site VPN to connect to the VPConfigure route table entries to direct traffic from on premises to the VPConfigure instance security groups and network ACLs to allow only required traffic from on premises.
- **D.** Configure AWS Transit Gateway to connect to the VPC. Configure route table entries to direct traffic from on premises to the VPC. Configure instance security groups and network ACLs to allow only required traffic from on premises.

**4.** A company has a financial application that produces reports. The reports average 50 KB in size and are stored in Amazon S3. The reports are frequently accessed during the first week after production and must be stored for several years. The reports must be retrievable within 6 hours. Which solution meets these requirements MOST cost-effectively?

- **A.** Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Glacier after 7 days.
- **B.** Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Standard-Infrequent Access (S3 Standard-IA) after 7 days.
- **C.** Use S3 Intelligent-Tiering. Configure S3 Intelligent-Tiering to transition the reports to S3 Standard-Infrequent Access (S3 Standard-IA) and S3 Glacier.
- **D.** Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Glacier Deep Archive after 7 days.

**5.** A company runs a web application on multiple Amazon EC2 instances in a VPC. The application needs to write sensitive data to an Amazon S3 bucket. The data cannot be sent over the public internet. Which solution will meet these requirements?

- **A.** Create a gateway VPC endpoint for Amazon S3. Create a route in the VPC route table to the endpoint.
- **B.** Create an internal Network Load Balancer that has the S3 bucket as the target.
- **C.** Deploy the S3 bucket inside the VPCreate a route in the VPC route table to the bucket.
- **D.** Create an AWS Direct Connect connection between the VPC and an S3 regional endpoint.

**6.** A company is designing a web application on AWS. The application will use a VPN connection between the company’s existing data centers and the company's VPCs. The company uses Amazon Route 53 as its DNS service. The application must use private DNS records to communicate with the on-premises services from a VPC. Which solution will meet these requirements in the MOST secure manner?

- **A.** Create a Route 53 Resolver outbound endpoint. Create a resolver rule. Associate the resolver rule with the VPC.
- **B.** Create a Route 53 Resolver inbound endpoint. Create a resolver rule. Associate the resolver rule with the VPC.
- **C.** Create a Route 53 private hosted zone. Associate the private hosted zone with the VPC.
- **D.** Create a Route 53 public hosted zone. Create a record for each service to allow service communication

**7.** An ecommerce company is migrating its on-premises workload to the AWS Cloud. The workload currently consists of a web application and a backend Microsoft SQL database for storage. The company expects a high volume of customers during a promotional event. The new infrastructure in the AWS Cloud must be highly available and scalable. Which solution will meet these requirements with the LEAST administrative overhead?

- **A.** Migrate the web application to two Amazon EC2 instances across two Availability Zones behind an Application Load Balancer. Migrate the database to Amazon RDS for Microsoft SQL Server with read replicas in both Availability Zones.
- **B.** Migrate the web application to an Amazon EC2 instance that runs in an Auto Scaling group across two Availability Zones behind an Application Load Balancer. Migrate the database to two EC2 instances across separate AWS Regions with database replication.
- **C.** Migrate the web application to Amazon EC2 instances that run in an Auto Scaling group across two Availability Zones behind an Application Load Balancer. Migrate the database to Amazon RDS with Multi-AZ deployment.
- **D.** Migrate the web application to three Amazon EC2 instances across three Availability Zones behind an Application Load Balancer. Migrate the database to three EC2 instances across three Availability Zones.

**8.** A company runs its databases on Amazon RDS for PostgreSQL. The company wants a secure solution to manage the master user password by rotating the password every 30 days. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use Amazon EventBridge to schedule a custom AWS Lambda function to rotate the password every 30 days.
- **B.** Use the modify-db-instance command in the AWS CLI to change the password.
- **C.** Integrate AWS Secrets Manager with Amazon RDS for PostgreSQL to automate password rotation.
- **D.** Integrate AWS Systems Manager Parameter Store with Amazon RDS for PostgreSQL to automate password rotation.

**9.** A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead. Which solution will meet these requirements?

- **A.** Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content.
- **B.** Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing.
- **C.** Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website’s availability.
- **D.** Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.

**10.** A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support this architecture. The data points must be accessible from the REST API. Which action meets these requirements for storing and retrieving location data?

- **A.** Use Amazon Athena with Amazon S3.
- **B.** Use Amazon API Gateway with AWS Lambda.
- **C.** Use Amazon QuickSight with Amazon Redshift.
- **D.** Use Amazon API Gateway with Amazon Kinesis Data Analytics.

**11.** A company experienced a breach that affected several applications in its on-premises data center. The attacker took advantage of vulnerabilities in the custom applications that were running on the servers. The company is now migrating its applications to run on Amazon EC2 instances. The company wants to implement a solution that actively scans for vulnerabilities on the EC2 instances and sends a report that details the findings. Which solution will meet these requirements?

- **A.** Deploy AWS Shield to scan the EC2 instances for vulnerabilities. Create an AWS Lambda function to log any findings to AWS CloudTrail.
- **B.** Deploy Amazon Macie and AWS Lambda functions to scan the EC2 instances for vulnerabilities. Log any findings to AWS CloudTrail.
- **C.** Turn on Amazon GuardDuty. Deploy the GuardDuty agents to the EC2 instances. Configure an AWS Lambda function to automate the generation and distribution of reports that detail the findings.
- **D.** Turn on Amazon Inspector. Deploy the Amazon Inspector agent to the EC2 instances. Configure an AWS Lambda function to automate the generation and distribution of reports that detail the findings.

**12.** A healthcare company is developing an AWS Lambda function that publishes notifications to an encrypted Amazon Simple Notification Service (Amazon SNS) topic. The notifications contain protected health information (PHI). The SNS topic uses AWS Key Management Service (AWS KMS) customer managed keys for encryption. The company must ensure that the application has the necessary permissions to publish messages securely to the SNS topic. Which combination of steps will meet these requirements? (Choose three.)

- **A.** Create a resource policy for the SNS topic that allows the Lambda function to publish messages to the topic.
- **B.** Use server-side encryption with AWS KMS keys (SSE-KMS) for the SNS topic instead of customer managed keys.
- **C.** Create a resource policy for the encryption key that the SNS topic uses that has the necessary AWS KMS permissions.
- **D.** Specify the Lambda function's Amazon Resource Name (ARN) in the SNS topic's resource policy.
- **E.** Associate an Amazon API Gateway HTTP API with the SNS topic to control access to the topic by using API Gateway resource policies.
- **F.** Configure a Lambda execution role that has the necessary IAM permissions to use a customer managed key in AWS KMS.

**13.** A company needs to minimize the cost of its 1 Gbps AWS Direct Connect connection. The company's average connection utilization is less than 10%. A solutions architect must recommend a solution that will reduce the cost without compromising security. Which solution will meet these requirements?

- **A.** Set up a new 1 Gbps Direct Connect connection. Share the connection with another AWS account.
- **B.** Set up a new 200 Mbps Direct Connect connection in the AWS Management Console.
- **C.** Contact an AWS Direct Connect Partner to order a 1 Gbps connection. Share the connection with another AWS account.
- **D.** Contact an AWS Direct Connect Partner to order a 200 Mbps hosted connection for an existing AWS account.

**14.** A company has deployed a multi-account strategy on AWS by using AWS Control Tower. The company has provided individual AWS accounts to each of its developers. The company wants to implement controls to limit AWS resource costs that the developers incur. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Instruct each developer to tag all their resources with a tag that has a key of CostCenter and a value of the developer's name. Use the required- tags AWS Config managed rule to check for the tag. Create an AWS Lambda function to terminate resources that do not have the tag. Configure AWS Cost Explorer to send a daily report to each developer to monitor their spending.
- **B.** Use AWS Budgets to establish budgets for each developer account. Set up budget alerts for actual and forecast values to notify developers when they exceed or expect to exceed their assigned budget. Use AWS Budgets actions to apply a DenyAll policy to the developer's IAM role to prevent additional resources from being launched when the assigned budget is reached.
- **C.** Use AWS Cost Explorer to monitor and report on costs for each developer account. Configure Cost Explorer to send a daily report to each developer to monitor their spending. Use AWS Cost Anomaly Detection to detect anomalous spending and provide alerts.
- **D.** Use AWS Service Catalog to allow developers to launch resources within a limited cost range. Create AWS Lambda functions in each AWS account to stop running resources at the end of each work day. Configure the Lambda functions to resume the resources at the start of each work day.

**15.** A company needs to implement a new data retention policy for regulatory compliance. As part of this policy, sensitive documents that are stored in an Amazon S3 bucket must be protected from deletion or modification for a fixed period of time. Which solution will meet these requirements?

- **A.** Activate S3 Object Lock on the required objects and enable governance mode.
- **B.** Activate S3 Object Lock on the required objects and enable compliance mode.
- **C.** Enable versioning on the S3 bucket. Set a lifecycle policy to delete the objects after a specified period.
- **D.** Configure an S3 Lifecycle policy to transition objects to S3 Glacier Flexible Retrieval for the retention duration.

**16.** A company uses a three-tier web application to provide training to new employees. The application is accessed for only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and wants to minimize costs. What should a solutions architect do to meet these requirements?

- **A.** Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy. Update the trust relationship of the role. Set up automatic start and stop for the DB instance.
- **B.** Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.
- **C.** Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.
- **D.** Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event targets for the rules.

**17.** A company wants to restrict access to the content of its web application. The company needs to protect the content by using authorization techniques that are available on AWS. The company also wants to implement a serverless architecture for authorization and authentication that has low login latency. The solution must integrate with the web application and serve web content globally. The application currently has a small user base, but the company expects the application's user base to increase. Which solution will meet these requirements?

- **A.** Configure Amazon Cognito for authentication. Implement Lambda@Edge for authorization. Configure Amazon CloudFront to serve the web application globally.
- **B.** Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement AWS Lambda for authorization. Use an Application Load Balancer to serve the web application globally.
- **C.** Configure Amazon Cognito for authentication. Implement AWS Lambda for authorization. Use Amazon S3 Transfer Acceleration to serve the web application globally.
- **D.** Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement Lambda@Edge for authorization. Use AWS Elastic Beanstalk to serve the web application globally.

**18.** A company needs a solution to prevent AWS CloudFormation stacks from deploying AWS Identity and Access Management (IAM) resources that include an inline policy or “*” in the statement. The solution must also prohibit deployment of Amazon EC2 instances with public IP addresses. The company has AWS Control Tower enabled in its organization in AWS Organizations. Which solution will meet these requirements?

- **A.** Use AWS Control Tower proactive controls to block deployment of EC2 instances with public IP addresses and inline policies with elevated access or “*”.
- **B.** Use AWS Control Tower detective controls to block deployment of EC2 instances with public IP addresses and inline policies with elevated access or “*”.
- **C.** Use AWS Config to create rules for EC2 and IAM compliance. Configure the rules to run an AWS Systems Manager Session Manager automation to delete a resource when it is not compliant.
- **D.** Use a service control policy (SCP) to block actions for the EC2 instances and IAM resources if the actions lead to noncompliance.

**19.** A company has resources across multiple AWS Regions and accounts. A newly hired solutions architect discovers a previous employee did not provide details about the resources inventory. The solutions architect needs to build and map the relationship details of the various workloads across all accounts. Which solution will meet these requirements in the MOST operationally efficient way?

- **A.** Use AWS Systems Manager Inventory to generate a map view from the detailed view report.
- **B.** Use AWS Step Functions to collect workload details. Build architecture diagrams of the workloads manually.
- **C.** Use Workload Discovery on AWS to generate architecture diagrams of the workloads.
- **D.** Use AWS X-Ray to view the workload details. Build architecture diagrams with relationships.

**20.** A company uses Amazon FSx for NetApp ONTAP in its primary AWS Region for CIFS and NFS file shares. Applications that run on Amazon EC2 instances access the file shares. The company needs a storage disaster recovery (DR) solution in a secondary Region. The data that is replicated in the secondary Region needs to be accessed by using the same protocols as the primary Region. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create an AWS Lambda function to copy the data to an Amazon S3 bucket. Replicate the S3 bucket to the secondary Region.
- **B.** Create a backup of the FSx for ONTAP volumes by using AWS Backup. Copy the volumes to the secondary Region. Create a new FSx for ONTAP instance from the backup.
- **C.** Create an FSx for ONTAP instance in the secondary Region. Use NetApp SnapMirror to replicate data from the primary Region to the secondary Region.
- **D.** Create an Amazon Elastic File System (Amazon EFS) volume. Migrate the current data to the volume. Replicate the volume to the secondary Region.

**21.** A company is developing a new application on AWS. The application consists of an Amazon Elastic Container Service (Amazon ECS) cluster, an Amazon S3 bucket that contains assets for the application, and an Amazon RDS for MySQL database that contains the dataset for the application. The dataset contains sensitive information. The company wants to ensure that only the ECS cluster can access the data in the RDS for MySQL database and the data in the S3 bucket. Which solution will meet these requirements?

- **A.** Create a new AWS Key Management Service (AWS KMS) customer managed key to encrypt both the S3 bucket and the RDS for MySQL database. Ensure that the KMS key policy includes encrypt and decrypt permissions for the ECS task execution role.
- **B.** Create an AWS Key Management Service (AWS KMS) AWS managed key to encrypt both the S3 bucket and the RDS for MySQL database. Ensure that the S3 bucket policy specifies the ECS task execution role as a user.
- **C.** Create an S3 bucket policy that restricts bucket access to the ECS task execution role. Create a VPC endpoint for Amazon RDS for MySQL. Update the RDS for MySQL security group to allow access from only the subnets that the ECS cluster will generate tasks in.
- **D.** Create a VPC endpoint for Amazon RDS for MySQL. Update the RDS for MySQL security group to allow access from only the subnets that the ECS cluster will generate tasks in. Create a VPC endpoint for Amazon S3. Update the S3 bucket policy to allow access from only the S3 VPC endpoint.

**22.** A company has users all around the world accessing its HTTP-based application deployed on Amazon EC2 instances in multiple AWS Regions. The company wants to improve the availability and performance of the application. The company also wants to protect the application against common web exploits that may affect availability, compromise security, or consume excessive resources. Static IP addresses are required. What should a solutions architect recommend to accomplish this?

- **A.** Put the EC2 instances behind Network Load Balancers (NLBs) in each Region. Deploy AWS WAF on the NLBs. Create an accelerator using AWS Global Accelerator and register the NLBs as endpoints.
- **B.** Put the EC2 instances behind Application Load Balancers (ALBs) in each Region. Deploy AWS WAF on the ALBs. Create an accelerator using AWS Global Accelerator and register the ALBs as endpoints.
- **C.** Put the EC2 instances behind Network Load Balancers (NLBs) in each Region. Deploy AWS WAF on the NLBs. Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to the NLBs.
- **D.** Put the EC2 instances behind Application Load Balancers (ALBs) in each Region. Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to the ALBs. Deploy AWS WAF on the CloudFront distribution.

**23.** A company is designing a new internal web application in the AWS Cloud. The new application must securely retrieve and store multiple employee usernames and passwords from an AWS managed service. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS CloudFormation and the BatchGetSecretValue API to retrieve usernames and passwords from Parameter Store.
- **B.** Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and AWS Batch with the BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager.
- **C.** Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS CloudFormation and AWS Batch with the BatchGetSecretValue API to retrieve the usernames and passwords from Parameter Store.
- **D.** Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and the BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager.

**24.** A development team is collaborating with another company to create an integrated product. The other company needs to access an Amazon Simple Queue Service (Amazon SQS) queue that is contained in the development team's account. The other company wants to poll the queue without giving up its own account permissions to do so. How should a solutions architect provide access to the SQS queue?

- **A.** Create an instance profile that provides the other company access to the SQS queue.
- **B.** Create an IAM policy that provides the other company access to the SQS queue.
- **C.** Create an SQS access policy that provides the other company access to the SQS queue.
- **D.** Create an Amazon Simple Notification Service (Amazon SNS) access policy that provides the other company access to the SQS queue.

**25.** An ecommerce company wants to collect user clickstream data from the company's website for real-time analysis. The website experiences fluctuating traffic patterns throughout the day. The company needs a scalable solution that can adapt to varying levels of traffic. Which solution will meet these requirements?

- **A.** Use a data stream in Amazon Kinesis Data Streams in on-demand mode to capture the clickstream data. Use AWS Lambda to process the data in real time.
- **B.** Use Amazon Kinesis Data Firehose to capture the clickstream data. Use AWS Glue to process the data in real time.
- **C.** Use Amazon Kinesis Video Streams to capture the clickstream data. Use AWS Glue to process the data in real time.
- **D.** Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to capture the clickstream data. Use AWS Lambda to process the data in real time.

**26.** A data analytics company has 80 offices that are distributed globally. Each office hosts 1 PB of data and has between 1 and 2 Gbps of internet bandwidth. The company needs to perform a one-time migration of a large amount of data from its offices to Amazon S3. The company must complete the migration within 4 weeks. Which solution will meet these requirements MOST cost-effectively?

- **A.** Establish a new 10 Gbps AWS Direct Connect connection to each office. Transfer the data to Amazon S3.
- **B.** Use multiple AWS Snowball Edge storage-optimized devices to store and transfer the data to Amazon S3.
- **C.** Use an AWS Snowmobile to store and transfer the data to Amazon S3.
- **D.** Set up an AWS Storage Gateway Volume Gateway to transfer the data to Amazon S3.

**27.** A company needs to give a globally distributed development team secure access to the company's AWS resources in a way that complies with security policies. The company currently uses an on-premises Active Directory for internal authentication. The company uses AWS Organizations to manage multiple AWS accounts that support multiple projects. The company needs a solution to integrate with the existing infrastructure to provide centralized identity management and access control. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Set up AWS Directory Service to create an AWS managed Microsoft Active Directory on AWS. Establish a trust relationship with the on- premises Active Directory. Use IAM rotes that are assigned to Active Directory groups to access AWS resources within the company's AWS accounts.
- **B.** Create an IAM user for each developer. Manually manage permissions for each IAM user based on each user's involvement with each project. Enforce multi-factor authentication (MFA) as an additional layer of security.
- **C.** Use AD Connector in AWS Directory Service to connect to the on-premises Active Directory. Integrate AD Connector with AWS IAM Identity Center. Configure permissions sets to give each AD group access to specific AWS accounts and resources.
- **D.** Use Amazon Cognito to deploy an identity federation solution. Integrate the identity federation solution with the on-premises Active Directory. Use Amazon Cognito to provide access tokens for developers to access AWS accounts and resources.

**28.** A company is using AWS to design a web application that will process insurance quotes. Users will request quotes from the application. Quotes must be separated by quote type, must be responded to within 24 hours, and must not get lost. The solution must maximize operational efficiency and must minimize maintenance. Which solution meets these requirements?

- **A.** Create multiple Amazon Kinesis data streams based on the quote type. Configure the web application to send messages to the proper data stream. Configure each backend group of application servers to use the Kinesis Client Library (KCL) to pool messages from its own data stream.
- **B.** Create an AWS Lambda function and an Amazon Simple Notification Service (Amazon SNS) topic for each quote type. Subscribe the Lambda function to its associated SNS topic. Configure the application to publish requests for quotes to the appropriate SNS topic.
- **C.** Create a single Amazon Simple Notification Service (Amazon SNS) topic. Subscribe Amazon Simple Queue Service (Amazon SQS) queues to the SNS topic. Configure SNS message filtering to publish messages to the proper SQS queue based on the quote type. Configure each backend application server to use its own SQS queue.
- **D.** Create multiple Amazon Kinesis Data Firehose delivery streams based on the quote type to deliver data streams to an Amazon OpenSearch Service cluster. Configure the application to send messages to the proper delivery stream. Configure each backend group of application servers to search for the messages from OpenSearch Service and process them accordingly.

**29.** A large company wants to provide its globally located developers separate, limited size, managed PostgreSQL databases for development purposes. The databases will be low volume. The developers need the databases only when they are actively working. Which solution will meet these requirements MOST cost-effectively?

- **A.** Give the developers the ability to launch separate Amazon Aurora instances. Set up a process to shut down Aurora instances at the end of the workday and to start Aurora instances at the beginning of the next workday.
- **B.** Develop an AWS Service Catalog product that enforces size restrictions for launching Amazon Aurora instances. Give the developers access to launch the product when they need a development database.
- **C.** Create an Amazon Aurora Serverless cluster. Develop an AWS Service Catalog product to launch databases in the cluster with the default capacity settings. Grant the developers access to the product.
- **D.** Monitor AWS Trusted Advisor checks for idle Amazon RDS databases. Create a process to terminate identified idle RDS databases.

**30.** A company’s reporting system delivers hundreds of .csv files to an Amazon S3 bucket each day. The company must convert these files to Apache Parquet format and must store the files in a transformed data bucket. Which solution will meet these requirements with the LEAST development effort?

- **A.** Create an Amazon EMR cluster with Apache Spark installed. Write a Spark application to transform the data. Use EMR File System (EMRFS) to write files to the transformed data bucket.
- **B.** Create an AWS Glue crawler to discover the data. Create an AWS Glue extract, transform, and load (ETL) job to transform the data. Specify the transformed data bucket in the output step.
- **C.** Use AWS Batch to create a job definition with Bash syntax to transform the data and output the data to the transformed data bucket. Use the job definition to submit a job. Specify an array job as the job type.
- **D.** Create an AWS Lambda function to transform the data and output the data to the transformed data bucket. Configure an event notification for the S3 bucket. Specify the Lambda function as the destination for the event notification.

**31.** A company’s website provides users with downloadable historical performance reports. The website needs a solution that will scale to meet the company’s website demands globally. The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time. Which combination should a solutions architect recommend to meet these requirements?

- **A.** Amazon CloudFront and Amazon S3
- **B.** AWS Lambda and Amazon DynamoDB
- **C.** Application Load Balancer with Amazon EC2 Auto Scaling
- **D.** Amazon Route 53 with internal Application Load Balancers

**32.** A company needs to retain its AWS CloudTrail logs for 3 years. The company is enforcing CloudTrail across a set of AWS accounts by using AWS Organizations from the parent account. The CloudTrail target S3 bucket is configured with S3 Versioning enabled. An S3 Lifecycle policy is in place to delete current objects after 3 years. After the fourth year of use of the S3 bucket, the S3 bucket metrics show that the number of objects has continued to rise. However, the number of new CloudTrail logs that are delivered to the S3 bucket has remained consistent. Which solution will delete objects that are older than 3 years in the MOST cost-effective manner?

- **A.** Configure the organization’s centralized CloudTrail trail to expire objects after 3 years.
- **B.** Configure the S3 Lifecycle policy to delete previous versions as well as current versions.
- **C.** Create an AWS Lambda function to enumerate and delete objects from Amazon S3 that are older than 3 years.
- **D.** Configure the parent account as the owner of all objects that are delivered to the S3 bucket.

**33.** A company is using a fleet of Amazon EC2 instances to ingest data from on-premises data sources. The data is in JSON format and ingestion rates can be as high as 1 MB/s. When an EC2 instance is rebooted, the data in-flight is lost. The company’s data science team wants to query ingested data in near-real time. Which solution provides near-real-time data querying that is scalable with minimal data loss?

- **A.** Publish data to Amazon Kinesis Data Streams, Use Kinesis Data Analytics to query the data.
- **B.** Publish data to Amazon Kinesis Data Firehose with Amazon Redshift as the destination. Use Amazon Redshift to query the data.
- **C.** Store ingested data in an EC2 instance store. Publish data to Amazon Kinesis Data Firehose with Amazon S3 as the destination. Use Amazon Athena to query the data.
- **D.** Store ingested data in an Amazon Elastic Block Store (Amazon EBS) volume. Publish data to Amazon ElastiCache for Redis. Subscribe to the Redis channel to query the data.

**34.** A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

- **A.** Enable versioning on the S3 bucket.
- **B.** Enable MFA Delete on the S3 bucket.
- **C.** Create a bucket policy on the S3 bucket.
- **D.** Enable default encryption on the S3 bucket.
- **E.** Create a lifecycle policy for the objects in the S3 bucket.

**35.** A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets. A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.
- **B.** Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.
- **C.** Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through the transit gateway.
- **D.** Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance.

**36.** A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access. Which solution will meet these requirements?

- **A.** Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.
- **B.** Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups.
- **C.** Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.
- **D.** Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.

**37.** A company has migrated multiple Microsoft Windows Server workloads to Amazon EC2 instances that run in the us-west-1 Region. The company manually backs up the workloads to create an image as needed. In the event of a natural disaster in the us-west-1 Region, the company wants to recover workloads quickly in the us-west-2 Region. The company wants no more than 24 hours of data loss on the EC2 instances. The company also wants to automate any backups of the EC2 instances. Which solutions will meet these requirements with the LEAST administrative effort? (Choose two.)

- **A.** Create an Amazon EC2-backed Amazon Machine Image (AMI) lifecycle policy to create a backup based on tags. Schedule the backup to run twice daily. Copy the image on demand.
- **B.** Create an Amazon EC2-backed Amazon Machine Image (AMI) lifecycle policy to create a backup based on tags. Schedule the backup to run twice daily. Configure the copy to the us-west-2 Region.
- **C.** Create backup vaults in us-west-1 and in us-west-2 by using AWS Backup. Create a backup plan for the EC2 instances based on tag values. Create an AWS Lambda function to run as a scheduled job to copy the backup data to us-west-2.
- **D.** Create a backup vault by using AWS Backup. Use AWS Backup to create a backup plan for the EC2 instances based on tag values. Define the destination for the copy as us-west-2. Specify the backup schedule to run twice daily.
- **E.** Create a backup vault by using AWS Backup. Use AWS Backup to create a backup plan for the EC2 instances based on tag values. Specify the backup schedule to run twice daily. Copy on demand to us-west-2.

**38.** A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth. Which solution will meet these requirements?

- **A.** Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.
- **B.** Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.
- **C.** Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.
- **D.** Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.

**39.** A company is making a prototype of the infrastructure for its new website by manually provisioning the necessary infrastructure. This infrastructure includes an Auto Scaling group, an Application Load Balancer and an Amazon RDS database. After the configuration has been thoroughly validated, the company wants the capability to immediately deploy the infrastructure for development and production use in two Availability Zones in an automated fashion. What should a solutions architect recommend to meet these requirements?

- **A.** Use AWS Systems Manager to replicate and provision the prototype infrastructure in two Availability Zones
- **B.** Define the infrastructure as a template by using the prototype infrastructure as a guide. Deploy the infrastructure with AWS CloudFormation.
- **C.** Use AWS Config to record the inventory of resources that are used in the prototype infrastructure. Use AWS Config to deploy the prototype infrastructure into two Availability Zones.
- **D.** Use AWS Elastic Beanstalk and configure it to use an automated reference to the prototype infrastructure to automatically deploy new environments in two Availability Zones.

**40.** A company needs to provide customers with secure access to its data. The company processes customer data and stores the results in an Amazon S3 bucket. All the data is subject to strong regulations and security requirements. The data must be encrypted at rest. Each customer must be able to access only their data from their AWS account. Company employees must not be able to access the data. Which solution will meet these requirements?

- **A.** Provision an AWS Certificate Manager (ACM) certificate for each customer. Encrypt the data client-side. In the private certificate policy, deny access to the certificate for all principals except an IAM role that the customer provides.
- **B.** Provision a separate AWS Key Management Service (AWS KMS) key for each customer. Encrypt the data server-side. In the S3 bucket policy, deny decryption of data for all principals except an IAM role that the customer provides.
- **C.** Provision a separate AWS Key Management Service (AWS KMS) key for each customer. Encrypt the data server-side. In each KMS key policy, deny decryption of data for all principals except an IAM role that the customer provides.
- **D.** Provision an AWS Certificate Manager (ACM) certificate for each customer. Encrypt the data client-side. In the public certificate policy, deny access to the certificate for all principals except an IAM role that the customer provides.

**41.** A company has released a new version of its production application. The company's workload uses Amazon EC2, AWS Lambda, AWS Fargate, and Amazon SageMaker. The company wants to cost optimize the workload now that usage is at a steady state. The company wants to cover the most services with the fewest savings plans. Which combination of savings plans will meet these requirements? (Choose two.)

- **A.** Purchase an EC2 Instance Savings Plan for Amazon EC2 and SageMaker.
- **B.** Purchase a Compute Savings Plan for Amazon EC2, Lambda, and SageMaker.
- **C.** Purchase a SageMaker Savings Plan.
- **D.** Purchase a Compute Savings Plan for Lambda, Fargate, and Amazon EC2.
- **E.** Purchase an EC2 Instance Savings Plan for Amazon EC2 and Fargate.

**42.** A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems. Which design should a solutions architect recommend?

- **A.** Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.
- **B.** Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.
- **C.** Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets.
- **D.** Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets.

**43.** A company tracks customer satisfaction by using surveys that the company hosts on its website. The surveys sometimes reach thousands of customers every hour. Survey results are currently sent in email messages to the company so company employees can manually review results and assess customer sentiment. The company wants to automate the customer survey process. Survey results must be available for the previous 12 months. Which solution will meet these requirements in the MOST scalable way?

- **A.** Send the survey results data to an Amazon API Gateway endpoint that is connected to an Amazon Simple Queue Service (Amazon SQS) queue. Create an AWS Lambda function to poll the SQS queue, call Amazon Comprehend for sentiment analysis, and save the results to an Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.
- **B.** Send the survey results data to an API that is running on an Amazon EC2 instance. Configure the API to store the survey results as a new record in an Amazon DynamoDB table, call Amazon Comprehend for sentiment analysis, and save the results in a second DynamoDB table. Set the TTL for all records to 365 days in the future.
- **C.** Write the survey results data to an Amazon S3 bucket. Use S3 Event Notifications to invoke an AWS Lambda function to read the data and call Amazon Rekognition for sentiment analysis. Store the sentiment analysis results in a second S3 bucket. Use S3 lifecycle policies on each bucket to expire objects after 365 days.
- **D.** Send the survey results data to an Amazon API Gateway endpoint that is connected to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the SQS queue to invoke an AWS Lambda function that calls Amazon Lex for sentiment analysis and saves the results to an Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.

**44.** A company wants to improve the availability and performance of its hybrid application. The application consists of a stateful TCP-based workload hosted on Amazon EC2 instances in different AWS Regions and a stateless UDP-based workload hosted on premises. Which combination of actions should a solutions architect take to improve availability and performance? (Choose two.)

- **A.** Create an accelerator using AWS Global Accelerator. Add the load balancers as endpoints.
- **B.** Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to the load balancers.
- **C.** Configure two Application Load Balancers in each Region. The first will route to the EC2 endpoints, and the second will route to the on- premises endpoints.
- **D.** Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure a Network Load Balancer in each Region that routes to the on-premises endpoints.
- **E.** Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure an Application Load Balancer in each Region that routes to the on-premises endpoints.

**45.** A company has an application that customers use to upload images to an Amazon S3 bucket. Each night, the company launches an Amazon EC2 Spot Fleet that processes all the images that the company received that day. The processing for each image takes 2 minutes and requires 512 MB of memory. A solutions architect needs to change the application to process the images when the images are uploaded. Which change will meet these requirements MOST cost-effectively?

- **A.** Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an AWS Lambda function to read the messages from the queue and to process the images.
- **B.** Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an EC2 Reserved Instance to read the messages from the queue and to process the images.
- **C.** Use S3 Event Notifications to publish a message with image details to an Amazon Simple Notification Service (Amazon SNS) topic. Configure a container instance in Amazon Elastic Container Service (Amazon ECS) to subscribe to the topic and to process the images.
- **D.** Use S3 Event Notifications to publish a message with image details to an Amazon Simple Notification Service (Amazon SNS) topic. Configure an AWS Elastic Beanstalk application to subscribe to the topic and to process the images.

**46.** A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed. The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues. Which solution will meet these requirements?

- **A.** Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.
- **B.** Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.
- **C.** Create an Amazon FSx for Windows File Server file system to extend the company's storage space.
- **D.** Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.

**47.** A company wants to run applications in containers in the AWS Cloud. These applications are stateless and can tolerate disruptions within the underlying infrastructure. The company needs a solution that minimizes cost and operational overhead. What should a solutions architect do to meet these requirements?

- **A.** Use Spot Instances in an Amazon EC2 Auto Scaling group to run the application containers.
- **B.** Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.
- **C.** Use On-Demand Instances in an Amazon EC2 Auto Scaling group to run the application containers.
- **D.** Use On-Demand Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.

**48.** A company has a web application that includes an embedded NoSQL database. The application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group in a single Availability Zone. A recent increase in traffic requires the application to be highly available and for the database to be eventually consistent. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Replace the ALB with a Network Load Balancer. Maintain the embedded NoSQL database with its replication service on the EC2 instances.
- **B.** Replace the ALB with a Network Load Balancer. Migrate the embedded NoSQL database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS).
- **C.** Modify the Auto Scaling group to use EC2 instances across three Availability Zones. Maintain the embedded NoSQL database with its replication service on the EC2 instances.
- **D.** Modify the Auto Scaling group to use EC2 instances across three Availability Zones. Migrate the embedded NoSQL database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS).

**49.** A company uses an Amazon RDS for MySQL instance. To prepare for end-of-year processing, the company added a read replica to accommodate extra read-only queries from the company's reporting tool. The read replica CPU usage was 60% and the primary instance CPU usage was 60%. After end-of-year activities are complete, the read replica has a constant 25% CPU usage. The primary instance still has a constant 60% CPU usage. The company wants to rightsize the database and still provide enough performance for future growth. Which solution will meet these requirements?

- **A.** Delete the read replica Do not make changes to the primary instance
- **B.** Resize the read replica to a smaller instance size Do not make changes to the primary instance
- **C.** Resize the read replica to a larger instance size Resize the primary instance to a smaller instance size
- **D.** Delete the read replica Resize the primary instance to a larger instance

**50.** A company's infrastructure consists of hundreds of Amazon EC2 instances that use Amazon Elastic Block Store (Amazon EBS) storage. A solutions architect must ensure that every EC2 instance can be recovered after a disaster. What should the solutions architect do to meet this requirement with the LEAST amount of effort?

- **A.** Take a snapshot of the EBS storage that is attached to each EC2 instance. Create an AWS CloudFormation template to launch new EC2 instances from the EBS storage.
- **B.** Take a snapshot of the EBS storage that is attached to each EC2 instance. Use AWS Elastic Beanstalk to set the environment based on the EC2 template and attach the EBS storage.
- **C.** Use AWS Backup to set up a backup plan for the entire group of EC2 instances. Use the AWS Backup API or the AWS CLI to speed up the restore process for multiple EC2 instances.
- **D.** Create an AWS Lambda function to take a snapshot of the EBS storage that is attached to each EC2 instance and copy the Amazon Machine Images (AMIs). Create another Lambda function to perform the restores with the copied AMIs and attach the EBS storage.

**51.** A company has stored 10 TB of log files in Apache Parquet format in an Amazon S3 bucket. The company occasionally needs to use SQL to analyze the log files. Which solution will meet these requirements MOST cost-effectively?

- **A.** Create an Amazon Aurora MySQL database. Migrate the data from the S3 bucket into Aurora by using AWS Database Migration Service (AWS DMS). Issue SQL statements to the Aurora database.
- **B.** Create an Amazon Redshift cluster. Use Redshift Spectrum to run SQL statements directly on the data in the S3 bucket.
- **C.** Create an AWS Glue crawler to store and retrieve table metadata from the S3 bucket. Use Amazon Athena to run SQL statements directly on the data in the S3 bucket.
- **D.** Create an Amazon EMR cluster. Use Apache Spark SQL to run SQL statements directly on the data in the S3 bucket.

**52.** An image-hosting company stores its objects in Amazon S3 buckets. The company wants to avoid accidental exposure of the objects in the S3 buckets to the public. All S3 objects in the entire AWS account need to remain private. Which solution will meet these requirements?

- **A.** Use Amazon GuardDuty to monitor S3 bucket policies. Create an automatic remediation action rule that uses an AWS Lambda function to remediate any change that makes the objects public.
- **B.** Use AWS Trusted Advisor to find publicly accessible S3 buckets. Configure email notifications in Trusted Advisor when a change is detected. Manually change the S3 bucket policy if it allows public access.
- **C.** Use AWS Resource Access Manager to find publicly accessible S3 buckets. Use Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function when a change is detected. Deploy a Lambda function that programmatically remediates the change.
- **D.** Use the S3 Block Public Access feature on the account level. Use AWS Organizations to create a service control policy (SCP) that prevents IAM users from changing the setting. Apply the SCP to the account.

**53.** A new employee has joined a company as a deployment engineer. The deployment engineer will be using AWS CloudFormation templates to create multiple AWS resources. A solutions architect wants the deployment engineer to perform job activities while following the principle of least privilege. Which combination of actions should the solutions architect take to accomplish this goal? (Choose two.)

- **A.** Have the deployment engineer use AWS account root user credentials for performing AWS CloudFormation stack operations.
- **B.** Create a new IAM user for the deployment engineer and add the IAM user to a group that has the PowerUsers IAM policy attached.
- **C.** Create a new IAM user for the deployment engineer and add the IAM user to a group that has the AdministratorAccess IAM policy attached.
- **D.** Create a new IAM user for the deployment engineer and add the IAM user to a group that has an IAM policy that allows AWS CloudFormation actions only.
- **E.** Create an IAM role for the deployment engineer to explicitly define the permissions specific to the AWS CloudFormation stack and launch stacks using that IAM role.

**54.** A company has a business-critical application that runs on Amazon EC2 instances. The application stores data in an Amazon DynamoDB table. The company must be able to revert the table to any point within the last 24 hours. Which solution meets these requirements with the LEAST operational overhead?

- **A.** Configure point-in-time recovery for the table.
- **B.** Use AWS Backup for the table.
- **C.** Use an AWS Lambda function to make an on-demand backup of the table every hour.
- **D.** Turn on streams on the table to capture a log of all changes to the table in the last 24 hours. Store a copy of the stream in an Amazon S3 bucket.

**55.** A company runs multiple workloads in its on-premises data center. The company's data center cannot scale fast enough to meet the company's expanding business needs. The company wants to collect usage and configuration data about the on-premises servers and workloads to plan a migration to AWS. Which solution will meet these requirements?

- **A.** Set the home AWS Region in AWS Migration Hub. Use AWS Systems Manager to collect data about the on-premises servers.
- **B.** Set the home AWS Region in AWS Migration Hub. Use AWS Application Discovery Service to collect data about the on-premises servers.
- **C.** Use the AWS Schema Conversion Tool (AWS SCT) to create the relevant templates. Use AWS Trusted Advisor to collect data about the on- premises servers.
- **D.** Use the AWS Schema Conversion Tool (AWS SCT) to create the relevant templates. Use AWS Database Migration Service (AWS DMS) to collect data about the on-premises servers.

**56.** A company is running a legacy system on an Amazon EC2 instance. The application code cannot be modified, and the system cannot run on more than one instance. A solutions architect must design a resilient solution that can improve the recovery time for the system. What should the solutions architect recommend to meet these requirements?

- **A.** Enable termination protection for the EC2 instance.
- **B.** Configure the EC2 instance for Multi-AZ deployment.
- **C.** Create an Amazon CloudWatch alarm to recover the EC2 instance in case of failure.
- **D.** Launch the EC2 instance with two Amazon Elastic Block Store (Amazon EBS) volumes that use RAID configurations for storage redundancy.

**57.** A company hosts an internal serverless application on AWS by using Amazon API Gateway and AWS Lambda. The company’s employees report issues with high latency when they begin using the application each day. The company wants to reduce latency. Which solution will meet these requirements?

- **A.** Increase the API Gateway throttling limit.
- **B.** Set up a scheduled scaling to increase Lambda provisioned concurrency before employees begin to use the application each day.
- **C.** Create an Amazon CloudWatch alarm to initiate a Lambda function as a target for the alarm at the beginning of each day.
- **D.** Increase the Lambda function memory.

**58.** A company is deploying an application in three AWS Regions using an Application Load Balancer. Amazon Route 53 will be used to distribute traffic between these Regions. Which Route 53 configuration should a solutions architect use to provide the MOST high-performing experience?

- **A.** Create an A record with a latency policy.
- **B.** Create an A record with a geolocation policy.
- **C.** Create a CNAME record with a failover policy.
- **D.** Create a CNAME record with a geoproximity policy.

**59.** An ecommerce company is running a multi-tier application on AWS. The front-end and backend tiers both run on Amazon EC2, and the database runs on Amazon RDS for MySQL. The backend tier communicates with the RDS instance. There are frequent calls to return identical datasets from the database that are causing performance slowdowns. Which action should be taken to improve the performance of the backend?

- **A.** Implement Amazon SNS to store the database calls.
- **B.** Implement Amazon ElastiCache to cache the large datasets.
- **C.** Implement an RDS for MySQL read replica to cache database calls.
- **D.** Implement Amazon Kinesis Data Firehose to stream the calls to the database.

**60.** A company's application uses Network Load Balancers, Auto Scaling groups, Amazon EC2 instances, and databases that are deployed in an Amazon VPC. The company wants to capture information about traffic to and from the network interfaces in near real time in its Amazon VPC. The company wants to send the information to Amazon OpenSearch Service for analysis. Which solution will meet these requirements?

- **A.** Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the log data to the log group. Use Amazon Kinesis Data Streams to stream the logs from the log group to OpenSearch Service.
- **B.** Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the log data to the log group. Use Amazon Kinesis Data Firehose to stream the logs from the log group to OpenSearch Service.
- **C.** Create a trail in AWS CloudTrail. Configure VPC Flow Logs to send the log data to the trail. Use Amazon Kinesis Data Streams to stream the logs from the trail to OpenSearch Service.
- **D.** Create a trail in AWS CloudTrail. Configure VPC Flow Logs to send the log data to the trail. Use Amazon Kinesis Data Firehose to stream the logs from the trail to OpenSearch Service.

**61.** A company wants to create an application to store employee data in a hierarchical structured relationship. The company needs a minimum- latency response to high-traffic queries for the employee data and must protect any sensitive data. The company also needs to receive monthly email messages if any financial information is present in the employee data. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

- **A.** Use Amazon Redshift to store the employee data in hierarchies. Unload the data to Amazon S3 every month.
- **B.** Use Amazon DynamoDB to store the employee data in hierarchies. Export the data to Amazon S3 every month.
- **C.** Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly events to AWS Lambda.
- **D.** Use Amazon Athena to analyze the employee data in Amazon S3. Integrate Athena with Amazon QuickSight to publish analysis dashboards and share the dashboards with users.
- **E.** Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly notifications through an Amazon Simple Notification Service (Amazon SNS) subscription.

**62.** A company is using AWS DataSync to migrate millions of files from an on-premises system to AWS. The files are 10 KB in size on average. The company wants to use Amazon S3 for file storage. For the first year after the migration, the files will be accessed once or twice and must be immediately available. After 1 year, the files must be archived for at least 7 years. Which solution will meet these requirements MOST cost-effectively?

- **A.** Use an archive tool to group the files into large objects. Use DataSync to migrate the objects. Store the objects in S3 Glacier Instant Retrieval for the first year. Use a lifecycle configuration to transition the files to S3 Glacier Deep Archive after 1 year with a retention period of 7 years.
- **B.** Use an archive tool to group the files into large objects. Use DataSync to copy the objects to S3 Standard-Infrequent Access (S3 Standard-IA). Use a lifecycle configuration to transition the files to S3 Glacier Instant Retrieval after 1 year with a retention period of 7 years.
- **C.** Configure the destination storage class for the files as S3 Glacier Instant Retrieval. Use a lifecycle policy to transition the files to S3 Glacier Flexible Retrieval after 1 year with a retention period of 7 years.
- **D.** Configure a DataSync task to transfer the files to S3 Standard-Infrequent Access (S3 Standard-IA). Use a lifecycle configuration to transition the files to S3 Deep Archive after 1 year with a retention period of 7 years.

**63.** A global company runs its workloads on AWS. The company's application uses Amazon S3 buckets across AWS Regions for sensitive data storage and analysis. The company stores millions of objects in multiple S3 buckets daily. The company wants to identify all S3 buckets that are not versioning-enabled. Which solution will meet these requirements?

- **A.** Set up an AWS CloudTrail event that has a rule to identify all S3 buckets that are not versioning-enabled across Regions.
- **B.** Use Amazon S3 Storage Lens to identify all S3 buckets that are not versioning-enabled across Regions.
- **C.** Enable IAM Access Analyzer for S3 to identify all S3 buckets that are not versioning-enabled across Regions.
- **D.** Create an S3 Multi-Region Access Point to identify all S3 buckets that are not versioning-enabled across Regions.

**64.** A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job. What should the solutions architect recommend?

- **A.** Implement EC2 Spot Instances.
- **B.** Purchase EC2 Reserved Instances.
- **C.** Implement EC2 On-Demand Instances.
- **D.** Implement the processing on AWS Lambda.

**65.** A company is running a multi-tier web application on premises. The web application is containerized and runs on a number of Linux hosts connected to a PostgreSQL database that contains user records. The operational overhead of maintaining the infrastructure and capacity planning is limiting the company's growth. A solutions architect must improve the application's infrastructure. Which combination of actions should the solutions architect take to accomplish this? (Choose two.)

- **A.** Migrate the PostgreSQL database to Amazon Aurora.
- **B.** Migrate the web application to be hosted on Amazon EC2 instances.
- **C.** Set up an Amazon CloudFront distribution for the web application content.
- **D.** Set up Amazon ElastiCache between the web application and the PostgreSQL database.
- **E.** Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service (Amazon ECS).

---

## Answer key -- Exam 3

`Consensus` is the share of ExamTopics voters choosing that answer. Anything
below 70% is genuinely contested -- open the discussion link before trusting it.

| # | Answer | Domain | Consensus | Source |
|---:|---|---|---:|---|
| 1 | **A** | 1. Design Secure Architectures | 100% | [Q853](https://www.examtopics.com/discussions/amazon/view/137862-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 2 | **A** | 4. Design Cost-Optimized Architectures | 50% ⚠ | [Q677](https://www.examtopics.com/discussions/amazon/view/129827-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 3 | **C** | 1. Design Secure Architectures | 95% | [Q950](https://www.examtopics.com/discussions/amazon/view/144938-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 4 | **A** | 4. Design Cost-Optimized Architectures | 74% | [Q551](https://www.examtopics.com/discussions/amazon/view/116896-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 5 | **A** | 1. Design Secure Architectures | 100% | [Q866](https://www.examtopics.com/discussions/amazon/view/137855-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 6 | **A** | 1. Design Secure Architectures | 88% | [Q712](https://www.examtopics.com/discussions/amazon/view/132883-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 7 | **C** | 2. Design Resilient Architectures | 83% | [Q843](https://www.examtopics.com/discussions/amazon/view/138109-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 8 | **C** | 1. Design Secure Architectures | 100% | [Q669](https://www.examtopics.com/discussions/amazon/view/127660-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 9 | **B** | 2. Design Resilient Architectures | 94% | [Q190](https://www.examtopics.com/discussions/amazon/view/87536-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 10 | **D** | 3. Design High-Performing Architectures | 48% ⚠ | [Q107](https://www.examtopics.com/discussions/amazon/view/85212-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 11 | **D** | 1. Design Secure Architectures | 98% | [Q315](https://www.examtopics.com/discussions/amazon/view/99808-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 12 | **A C F** | 1. Design Secure Architectures | 71% | [Q929](https://www.examtopics.com/discussions/amazon/view/144981-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 13 | **D** | 4. Design Cost-Optimized Architectures | 83% | [Q499](https://www.examtopics.com/discussions/amazon/view/109515-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 14 | **B** | 1. Design Secure Architectures | 72% | [Q883](https://www.examtopics.com/discussions/amazon/view/139799-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 15 | **B** | 1. Design Secure Architectures | 88% | [Q925](https://www.examtopics.com/discussions/amazon/view/145213-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 16 | **D** | 4. Design Cost-Optimized Architectures | 83% | [Q152](https://www.examtopics.com/discussions/amazon/view/86046-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 17 | **A** | 1. Design Secure Architectures | 100% | [Q871](https://www.examtopics.com/discussions/amazon/view/138553-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 18 | **A** | 1. Design Secure Architectures | 61% ⚠ | [Q789](https://www.examtopics.com/discussions/amazon/view/133025-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 19 | **C** | 2. Design Resilient Architectures | 97% | [Q454](https://www.examtopics.com/discussions/amazon/view/109433-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 20 | **C** | 2. Design Resilient Architectures | 100% | [Q635](https://www.examtopics.com/discussions/amazon/view/125545-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 21 | **A** | 1. Design Secure Architectures | 51% ⚠ | [Q663](https://www.examtopics.com/discussions/amazon/view/126798-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 22 | **B** | 3. Design High-Performing Architectures | 84% | [Q754](https://www.examtopics.com/discussions/amazon/view/132945-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 23 | **D** | 1. Design Secure Architectures | 100% | [Q970](https://www.examtopics.com/discussions/amazon/view/147459-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 24 | **C** | 2. Design Resilient Architectures | 100% | [Q765](https://www.examtopics.com/discussions/amazon/view/132956-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 25 | **A** | 3. Design High-Performing Architectures | 93% | [Q888](https://www.examtopics.com/discussions/amazon/view/139803-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 26 | **B** | 4. Design Cost-Optimized Architectures | 91% | [Q778](https://www.examtopics.com/discussions/amazon/view/133010-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 27 | **C** | 1. Design Secure Architectures | 79% | [Q1018](https://www.examtopics.com/discussions/amazon/view/148826-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 28 | **C** | 2. Design Resilient Architectures | 100% | [Q311](https://www.examtopics.com/discussions/amazon/view/99627-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 29 | **C** | 4. Design Cost-Optimized Architectures | 75% | [Q851](https://www.examtopics.com/discussions/amazon/view/139065-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 30 | **B** | 3. Design High-Performing Architectures | 100% | [Q214](https://www.examtopics.com/discussions/amazon/view/95154-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 31 | **A** | 3. Design High-Performing Architectures | 96% | [Q132](https://www.examtopics.com/discussions/amazon/view/86654-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 32 | **B** | 4. Design Cost-Optimized Architectures | 94% | [Q227](https://www.examtopics.com/discussions/amazon/view/95314-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 33 | **A** | 3. Design High-Performing Architectures | 74% | [Q320](https://www.examtopics.com/discussions/amazon/view/99752-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 34 | **A B** | 2. Design Resilient Architectures | 97% | [Q44](https://www.examtopics.com/discussions/amazon/view/84750-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 35 | **D** | 2. Design Resilient Architectures | 83% | [Q19](https://www.examtopics.com/discussions/amazon/view/84727-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 36 | **B** | 3. Design High-Performing Architectures | 86% | [Q16](https://www.examtopics.com/discussions/amazon/view/84732-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 37 | **B D** | 2. Design Resilient Architectures | 100% | [Q508](https://www.examtopics.com/discussions/amazon/view/109530-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 38 | **B** | 3. Design High-Performing Architectures | 88% | [Q6](https://www.examtopics.com/discussions/amazon/view/84875-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 39 | **B** | 2. Design Resilient Architectures | 81% | [Q479](https://www.examtopics.com/discussions/amazon/view/109461-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 40 | **C** | 1. Design Secure Architectures | 75% | [Q696](https://www.examtopics.com/discussions/amazon/view/132859-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 41 | **C D** | 4. Design Cost-Optimized Architectures | 92% | [Q885](https://www.examtopics.com/discussions/amazon/view/139801-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 42 | **A** | 2. Design Resilient Architectures | 50% ⚠ | [Q108](https://www.examtopics.com/discussions/amazon/view/85427-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 43 | **A** | 3. Design High-Performing Architectures | 100% | [Q1005](https://www.examtopics.com/discussions/amazon/view/148811-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 44 | **A D** | 3. Design High-Performing Architectures | 100% | [Q905](https://www.examtopics.com/discussions/amazon/view/144916-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 45 | **A** | 4. Design Cost-Optimized Architectures | 100% | [Q904](https://www.examtopics.com/discussions/amazon/view/139858-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 46 | **B** | 3. Design High-Performing Architectures | 85% | [Q9](https://www.examtopics.com/discussions/amazon/view/84680-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 47 | **B** | 2. Design Resilient Architectures | 73% | [Q128](https://www.examtopics.com/discussions/amazon/view/85404-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 48 | **D** | 2. Design Resilient Architectures | 100% | [Q693](https://www.examtopics.com/discussions/amazon/view/132855-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 49 | **B** | 3. Design High-Performing Architectures | 50% ⚠ | [Q939](https://www.examtopics.com/discussions/amazon/view/145680-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 50 | **C** | 2. Design Resilient Architectures | 100% | [Q602](https://www.examtopics.com/discussions/amazon/view/121212-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 51 | **C** | 4. Design Cost-Optimized Architectures | 100% | [Q788](https://www.examtopics.com/discussions/amazon/view/133024-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 52 | **D** | 1. Design Secure Architectures | 96% | [Q412](https://www.examtopics.com/discussions/amazon/view/102189-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 53 | **D E** | 1. Design Secure Architectures | 100% | [Q387](https://www.examtopics.com/discussions/amazon/view/102155-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 54 | **A** | 2. Design Resilient Architectures | 100% | [Q768](https://www.examtopics.com/discussions/amazon/view/132960-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 55 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q786](https://www.examtopics.com/discussions/amazon/view/133022-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 56 | **D** | 2. Design Resilient Architectures | 53% ⚠ | [Q757](https://www.examtopics.com/discussions/amazon/view/133082-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 57 | **B** | 3. Design High-Performing Architectures | 100% | [Q597](https://www.examtopics.com/discussions/amazon/view/119465-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 58 | **A** | 2. Design Resilient Architectures | 88% | [Q692](https://www.examtopics.com/discussions/amazon/view/132854-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 59 | **B** | 3. Design High-Performing Architectures | 100% | [Q386](https://www.examtopics.com/discussions/amazon/view/102154-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 60 | **B** | 3. Design High-Performing Architectures | 90% | [Q676](https://www.examtopics.com/discussions/amazon/view/129718-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 61 | **B E** | 1. Design Secure Architectures | 100% | [Q278](https://www.examtopics.com/discussions/amazon/view/99940-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 62 | **A** | 4. Design Cost-Optimized Architectures | 49% ⚠ | [Q918](https://www.examtopics.com/discussions/amazon/view/145420-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 63 | **B** | 1. Design Secure Architectures | 100% | [Q889](https://www.examtopics.com/discussions/amazon/view/139804-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 64 | **A** | 4. Design Cost-Optimized Architectures | 96% | [Q124](https://www.examtopics.com/discussions/amazon/view/86038-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 65 | **A E** | 3. Design High-Performing Architectures | 98% | [Q129](https://www.examtopics.com/discussions/amazon/view/86658-exam-aws-certified-solutions-architect-associate-saa-c03/) |
