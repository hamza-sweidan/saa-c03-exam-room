# SAA-C03 Practice Exam 2

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

**1.** A company runs a container application by using Amazon Elastic Kubernetes Service (Amazon EKS). The application includes microservices that manage customers and place orders. The company needs to route incoming requests to the appropriate microservices. Which solution will meet this requirement MOST cost-effectively?

- **A.** Use the AWS Load Balancer Controller to provision a Network Load Balancer.
- **B.** Use the AWS Load Balancer Controller to provision an Application Load Balancer.
- **C.** Use an AWS Lambda function to connect the requests to Amazon EKS.
- **D.** Use Amazon API Gateway to connect the requests to Amazon EKS.

**2.** A company needs to use its on-premises LDAP directory service to authenticate its users to the AWS Management Console. The directory service is not compatible with Security Assertion Markup Language (SAML). Which solution meets these requirements?

- **A.** Enable AWS IAM Identity Center (AWS Single Sign-On) between AWS and the on-premises LDAP.
- **B.** Create an IAM policy that uses AWS credentials, and integrate the policy into LDAP.
- **C.** Set up a process that rotates the IAM credentials whenever LDAP credentials are updated.
- **D.** Develop an on-premises custom identity broker application or process that uses AWS Security Token Service (AWS STS) to get short- lived credentials.

**3.** A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture. What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?

- **A.** Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.
- **B.** Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.
- **C.** Use Amazon Athena directly with Amazon S3 to run the queries as needed.
- **D.** Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.

**4.** A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently. Which solution meets these requirements?

- **A.** Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager.
- **B.** Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.
- **C.** Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.
- **D.** Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database.

**5.** A company is migrating its on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The on-premises database must remain online and accessible during the migration. The Aurora database must remain synchronized with the on-premises database. Which combination of actions must a solutions architect take to meet these requirements? (Choose two.)

- **A.** Create an ongoing replication task.
- **B.** Create a database backup of the on-premises database.
- **C.** Create an AWS Database Migration Service (AWS DMS) replication server.
- **D.** Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT).
- **E.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database synchronization.

**6.** A company stores text files in Amazon S3. The text files include customer chat messages, date and time information, and customer personally identifiable information (PII). The company needs a solution to provide samples of the conversations to an external service provider for quality control. The external service provider needs to randomly pick sample conversations up to the most recent conversation. The company must not share the customer PII with the external service provider. The solution must scale when the number of customer conversations increases. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create an Object Lambda Access Point. Create an AWS Lambda function that redacts the PII when the function reads the file. Instruct the external service provider to access the Object Lambda Access Point.
- **B.** Create a batch process on an Amazon EC2 instance that regularly reads all new files, redacts the PII from the files, and writes the redacted files to a different S3 bucket. Instruct the external service provider to access the bucket that does not contain the PII.
- **C.** Create a web application on an Amazon EC2 instance that presents a list of the files, redacts the PII from the files, and allows the external service provider to download new versions of the files that have the PII redacted.
- **D.** Create an Amazon DynamoDB table. Create an AWS Lambda function that reads only the data in the files that does not contain PII. Configure the Lambda function to store the non-PII data in the DynamoDB table when a new file is written to Amazon S3. Grant the external service provider access to the DynamoDB table.

**7.** A company has a Java application that uses Amazon Simple Queue Service (Amazon SQS) to parse messages. The application cannot parse messages that are larger than 256 KB in size. The company wants to implement a solution to give the application the ability to parse messages as large as 50 MB. Which solution will meet these requirements with the FEWEST changes to the code?

- **A.** Use the Amazon SQS Extended Client Library for Java to host messages that are larger than 256 KB in Amazon S3.
- **B.** Use Amazon EventBridge to post large messages from the application instead of Amazon SQS.
- **C.** Change the limit in Amazon SQS to handle messages that are larger than 256 KB.
- **D.** Store messages that are larger than 256 KB in Amazon Elastic File System (Amazon EFS). Configure Amazon SQS to reference this location in the messages.

**8.** A solutions architect is designing a new service behind Amazon API Gateway. The request patterns for the service will be unpredictable and can change suddenly from 0 requests to over 500 per second. The total size of the data that needs to be persisted in a backend database is currently less than 1 GB with unpredictable future growth. Data can be queried using simple key-value requests. Which combination ofAWS services would meet these requirements? (Choose two.)

- **A.** AWS Fargate
- **B.** AWS Lambda
- **C.** Amazon DynamoDB
- **D.** Amazon EC2 Auto Scaling
- **E.** MySQL-compatible Amazon Aurora

**9.** An analytics company uses Amazon VPC to run its multi-tier services. The company wants to use RESTful APIs to offer a web analytics service to millions of users. Users must be verified by using an authentication service to access the APIs. Which solution will meet these requirements with the MOST operational efficiency?

- **A.** Configure an Amazon Cognito user pool for user authentication. Implement Amazon API Gateway REST APIs with a Cognito authorizer.
- **B.** Configure an Amazon Cognito identity pool for user authentication. Implement Amazon API Gateway HTTP APIs with a Cognito authorizer.
- **C.** Configure an AWS Lambda function to handle user authentication. Implement Amazon API Gateway REST APIs with a Lambda authorizer.
- **D.** Configure an IAM user to handle user authentication. Implement Amazon API Gateway HTTP APIs with an IAM authorizer.

**10.** A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.
- **B.** Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.
- **C.** Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.
- **D.** Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3.

**11.** A company has an online gaming application that has TCP and UDP multiplayer gaming capabilities. The company uses Amazon Route 53 to point the application traffic to multiple Network Load Balancers (NLBs) in different AWS Regions. The company needs to improve application performance and decrease latency for the online game in preparation for user growth. Which solution will meet these requirements?

- **A.** Add an Amazon CloudFront distribution in front of the NLBs. Increase the Cache-Control max-age parameter.
- **B.** Replace the NLBs with Application Load Balancers (ALBs). Configure Route 53 to use latency-based routing.
- **C.** Add AWS Global Accelerator in front of the NLBs. Configure a Global Accelerator endpoint to use the correct listener ports.
- **D.** Add an Amazon API Gateway endpoint behind the NLBs. Enable API caching. Override method caching for the different stages.

**12.** A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size. Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation. What should a solutions architect do to meet these requirements with the LEAST development effort?

- **A.** Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.
- **B.** Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.
- **C.** Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.
- **D.** Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII.

**13.** A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time. Which solution will meet this requirement with the LEAST operational overhead?

- **A.** Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).
- **B.** Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).
- **C.** Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery streams sources. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's destination.
- **D.** Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).

**14.** A company collects 10 GB of telemetry data daily from various machines. The company stores the data in an Amazon S3 bucket in a source data account. The company has hired several consulting agencies to use this data for analysis. Each agency needs read access to the data for its analysts. The company must share the data from the source data account by choosing a solution that maximizes security and operational efficiency. Which solution will meet these requirements?

- **A.** Configure S3 global tables to replicate data for each agency.
- **B.** Make the S3 bucket public for a limited time. Inform only the agencies.
- **C.** Configure cross-account access for the S3 bucket to the accounts that the agencies own.
- **D.** Set up an IAM user for each analyst in the source data account. Grant each user access to the S3 bucket.

**15.** A company is migrating a data center from its on-premises location to AWS. The company has several legacy applications that are hosted on individual virtual servers. Changes to the application designs cannot be made. Each individual virtual server currently runs as its own EC2 instance. A solutions architect needs to ensure that the applications are reliable and fault tolerant after migration to AWS. The applications will run on Amazon EC2 instances. Which solution will meet these requirements?

- **A.** Create an Auto Scaling group that has a minimum of one and a maximum of one. Create an Amazon Machine Image (AMI) of each application instance. Use the AMI to create EC2 instances in the Auto Scaling group Configure an Application Load Balancer in front of the Auto Scaling group.
- **B.** Use AWS Backup to create an hourly backup of the EC2 instance that hosts each application. Store the backup in Amazon S3 in a separate Availability Zone. Configure a disaster recovery process to restore the EC2 instance for each application from its most recent backup.
- **C.** Create an Amazon Machine Image (AMI) of each application instance. Launch two new EC2 instances from the AMI. Place each EC2 instance in a separate Availability Zone. Configure a Network Load Balancer that has the EC2 instances as targets.
- **D.** Use AWS Mitigation Hub Refactor Spaces to migrate each application off the EC2 instance. Break down functionality from each application into individual components. Host each application on Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type.

**16.** A company stores critical data in Amazon DynamoDB tables in the company's AWS account. An IT administrator accidentally deleted a DynamoDB table. The deletion caused a significant loss of data and disrupted the company's operations. The company wants to prevent this type of disruption in the future. Which solution will meet this requirement with the LEAST operational overhead?

- **A.** Configure a trail in AWS CloudTrail. Create an Amazon EventBridge rule for delete actions. Create an AWS Lambda function to automatically restore deleted DynamoDB tables.
- **B.** Create a backup and restore plan for the DynamoDB tables. Recover the DynamoDB tables manually.
- **C.** Configure deletion protection on the DynamoDB tables.
- **D.** Enable point-in-time recovery on the DynamoDB tables.

**17.** A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability. What should a solutions architect do to meet these requirements?

- **A.** Create an AWS Lambda function to apply the patch to all EC2 instances.
- **B.** Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.
- **C.** Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.
- **D.** Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances.

**18.** A company runs a real-time data ingestion solution on AWS. The solution consists of the most recent version of Amazon Managed Streaming for Apache Kafka (Amazon MSK). The solution is deployed in a VPC in private subnets across three Availability Zones. A solutions architect needs to redesign the data ingestion solution to be publicly available over the internet. The data in transit must also be encrypted. Which solution will meet these requirements with the MOST operational efficiency?

- **A.** Configure public subnets in the existing VPC. Deploy an MSK cluster in the public subnets. Update the MSK cluster security settings to enable mutual TLS authentication.
- **B.** Create a new VPC that has public subnets. Deploy an MSK cluster in the public subnets. Update the MSK cluster security settings to enable mutual TLS authentication.
- **C.** Deploy an Application Load Balancer (ALB) that uses private subnets. Configure an ALB security group inbound rule to allow inbound traffic from the VPC CIDR block for HTTPS protocol.
- **D.** Deploy a Network Load Balancer (NLB) that uses private subnets. Configure an NLB listener for HTTPS communication over the internet.

**19.** A company is migrating its data processing application to the AWS Cloud. The application processes several short-lived batch jobs that cannot be disrupted. Data is generated after each batch job is completed. The data is accessed for 30 days and retained for 2 years. The company wants to keep the cost of running the application in the AWS Cloud as low as possible. Which solution will meet these requirements?

- **A.** Migrate the data processing application to Amazon EC2 Spot Instances. Store the data in Amazon S3 Standard. Move the data to Amazon S3 Glacier Instant. Retrieval after 30 days. Set an expiration to delete the data after 2 years.
- **B.** Migrate the data processing application to Amazon EC2 On-Demand Instances. Store the data in Amazon S3 Glacier Instant Retrieval. Move the data to S3 Glacier Deep Archive after 30 days. Set an expiration to delete the data after 2 years.
- **C.** Deploy Amazon EC2 Spot Instances to run the batch jobs. Store the data in Amazon S3 Standard. Move the data to Amazon S3 Glacier Flexible Retrieval after 30 days. Set an expiration to delete the data after 2 years.
- **D.** Deploy Amazon EC2 On-Demand Instances to run the batch jobs. Store the data in Amazon S3 Standard. Move the data to Amazon S3 Glacier Deep Archive after 30 days. Set an expiration to delete the data after 2 years.

**20.** A company has migrated several applications to AWS in the past 3 months. The company wants to know the breakdown of costs for each of these applications. The company wants to receive a regular report that includes this information. Which solution will meet these requirements MOST cost-effectively?

- **A.** Use AWS Budgets to download data for the past 3 months into a .csv file. Look up the desired information.
- **B.** Load AWS Cost and Usage Reports into an Amazon RDS DB instance. Run SQL queries to get the desired information.
- **C.** Tag all the AWS resources with a key for cost and a value of the application's name. Activate cost allocation tags. Use Cost Explorerto get the desired information.
- **D.** Tag all the AWS resources with a key for cost and a value of the application's name. Use the AWS Billing and Cost Management console todownload bills for the past 3 months. Look up the desired information.

**21.** A company has separate AWS accounts for its finance, data analytics, and development departments. Because of costs and security concerns, the company wants to control which services each AWS account can use. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use AWS Systems Manager templates to control which AWS services each department can use.
- **B.** Create organization units (OUs) for each department in AWS Organizations. Attach service control policies (SCPs) to the OUs.
- **C.** Use AWS CloudFormation to automatically provision only the AWS services that each department can use.
- **D.** Set up a list of products in AWS Service Catalog in the AWS accounts to manage and control the usage of specific AWS services.

**22.** A company uses Amazon EC2, AWS Fargate, and AWS Lambda to run multiple workloads in the company's AWS account. The company wants to fully make use of its Compute Savings Plans. The company wants to receive notification when coverage of the Compute Savings Plans drops. Which solution will meet these requirements with the MOST operational efficiency?

- **A.** Create a daily budget for the Savings Plans by using AWS Budgets. Configure the budget with a coverage threshold to send notifications to the appropriate email message recipients.
- **B.** Create a Lambda function that runs a coverage report against the Savings Plans. Use Amazon Simple Email Service (Amazon SES) to email the report to the appropriate email message recipients.
- **C.** Create an AWS Budgets report for the Savings Plans budget. Set the frequency to daily.
- **D.** Create a Savings Plans alert subscription. Enable all notification options. Enter an email address to receive notifications.

**23.** A company has a mobile game that reads most of its metadata from an Amazon RDS DB instance. As the game increased in popularity, developers noticed slowdowns related to the game's metadata load times. Performance metrics indicate that simply scaling the database will not help. A solutions architect must explore all options that include capabilities for snapshots, replication, and sub-millisecond response times. What should the solutions architect recommend to solve these issues?

- **A.** Migrate the database to Amazon Aurora with Aurora Replicas.
- **B.** Migrate the database to Amazon DynamoDB with global tables.
- **C.** Add an Amazon ElastiCache for Redis layer in front of the database.
- **D.** Add an Amazon ElastiCache for Memcached layer in front of the database.

**24.** A company is developing a new mobile app. The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL injection. The company has minimal infrastructure and operational staff. The company needs to reduce its share of the responsibility in managing, updating, and securing servers for its AWS environment. What should a solutions architect recommend to meet these requirements?

- **A.** Configure AWS WAF rules and associate them with the ALB.
- **B.** Deploy the application using Amazon S3 with public hosting enabled.
- **C.** Deploy AWS Shield Advanced and add the ALB as a protected resource.
- **D.** Create a new ALB that directs traffic to an Amazon EC2 instance running a third-party firewall, which then passes the traffic to the current ALB.

**25.** A company’s application is running on Amazon EC2 instances within an Auto Scaling group behind an Elastic Load Balancing (ELB) load balancer. Based on the application's history, the company anticipates a spike in traffic during a holiday each year. A solutions architect must design a strategy to ensure that the Auto Scaling group proactively increases capacity to minimize any performance impact on application users. Which solution will meet these requirements?

- **A.** Create an Amazon CloudWatch alarm to scale up the EC2 instances when CPU utilization exceeds 90%.
- **B.** Create a recurring scheduled action to scale up the Auto Scaling group before the expected period of peak demand.
- **C.** Increase the minimum and maximum number of EC2 instances in the Auto Scaling group during the peak demand period.
- **D.** Configure an Amazon Simple Notification Service (Amazon SNS) notification to send alerts when there are autoscaling:EC2_INSTANCE_LAUNCH events.

**26.** A solutions architect is designing a three-tier web application. The architecture consists of an internet-facing Application Load Balancer (ALB) and a web tier that is hosted on Amazon EC2 instances in private subnets. The application tier with the business logic runs on EC2 instances in private subnets. The database tier consists of Microsoft SQL Server that runs on EC2 instances in private subnets. Security is a high priority for the company. Which combination of security group configurations should the solutions architect use? (Choose three.)

- **A.** Configure the security group for the web tier to allow inbound HTTPS traffic from the security group for the ALB.
- **B.** Configure the security group for the web tier to allow outbound HTTPS traffic to 0.0.0.0/0.
- **C.** Configure the security group for the database tier to allow inbound Microsoft SQL Server traffic from the security group for the application tier.
- **D.** Configure the security group for the database tier to allow outbound HTTPS traffic and Microsoft SQL Server traffic to the security group for the web tier.
- **E.** Configure the security group for the application tier to allow inbound HTTPS traffic from the security group for the web tier.
- **F.** Configure the security group for the application tier to allow outbound HTTPS traffic and Microsoft SQL Server traffic to the security group for the web tier.

**27.** A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks. Which solution meets these requirements?

- **A.** Enable Amazon GuardDuty on the account.
- **B.** Enable Amazon Inspector on the EC2 instances.
- **C.** Enable AWS Shield and assign Amazon Route 53 to it.
- **D.** Enable AWS Shield Advanced and assign the ELB to it.

**28.** A company has an API that receives real-time data from a fleet of monitoring devices. The API stores this data in an Amazon RDS DB instance for later analysis. The amount of data that the monitoring devices send to the API fluctuates. During periods of heavy traffic, the API often returns timeout errors. After an inspection of the logs, the company determines that the database is not capable of processing the volume of write traffic that comes from the API. A solutions architect must minimize the number of connections to the database and must ensure that data is not lost during periods of heavy traffic. Which solution will meet these requirements?

- **A.** Increase the size of the DB instance to an instance type that has more available memory.
- **B.** Modify the DB instance to be a Multi-AZ DB instance. Configure the application to write to all active RDS DB instances.
- **C.** Modify the API to write incoming data to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function that Amazon SQS invokes to write data from the queue to the database.
- **D.** Modify the API to write incoming data to an Amazon Simple Notification Service (Amazon SNS) topic. Use an AWS Lambda function that Amazon SNS invokes to write data from the topic to the database.

**29.** A company's software development team needs an Amazon RDS Multi-AZ cluster. The RDS cluster will serve as a backend for a desktop client that is deployed on premises. The desktop client requires direct connectivity to the RDS cluster. The company must give the development team the ability to connect to the cluster by using the client when the team is in the office. Which solution provides the required connectivity MOST securely?

- **A.** Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Use AWS Site-to-Site VPN with a customer gateway in the company's office.
- **B.** Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use AWS Site-to-Site VPN with a customer gateway in the company's office.
- **C.** Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use RDS security groups to allow the company's office IP ranges to access the cluster.
- **D.** Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Create a cluster user for each developer. Use RDS security groups to allow the users to access the cluster.

**30.** A manufacturing company has machine sensors that upload .csv files to an Amazon S3 bucket. These .csv files must be converted into images and must be made available as soon as possible for the automatic generation of graphical reports. The images become irrelevant after 1 month, but the .csv files must be kept to train machine learning (ML) models twice a year. The ML trainings and audits are planned weeks in advance. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

- **A.** Launch an Amazon EC2 Spot Instance that downloads the .csv files every hour, generates the image files, and uploads the images to the S3 bucket.
- **B.** Design an AWS Lambda function that converts the .csv files into images and stores the images in the S3 bucket. Invoke the Lambda function when a .csv file is uploaded.
- **C.** Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 Glacier 1 day after they are uploaded. Expire the image files after 30 days.
- **D.** Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 1 day after they are uploaded. Expire the image files after 30 days.
- **E.** Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 1 day after they are uploaded. Keep the image files in Reduced Redundancy Storage (RRS).

**31.** A company wants to ingest customer payment data into the company's data lake in Amazon S3. The company receives payment data every minute on average. The company wants to analyze the payment data in real time. Then the company wants to ingest the data into the data lake. Which solution will meet these requirements with the MOST operational efficiency?

- **A.** Use Amazon Kinesis Data Streams to ingest data. Use AWS Lambda to analyze the data in real time.
- **B.** Use AWS Glue to ingest data. Use Amazon Kinesis Data Analytics to analyze the data in real time.
- **C.** Use Amazon Kinesis Data Firehose to ingest data. Use Amazon Kinesis Data Analytics to analyze the data in real time.
- **D.** Use Amazon API Gateway to ingest data. Use AWS Lambda to analyze the data in real time.

**32.** A solutions architect is reviewing the resilience of an application. The solutions architect notices that a database administrator recently failed over the application's Amazon Aurora PostgreSQL database writer instance as part of a scaling exercise. The failover resulted in 3 minutes of downtime for the application. Which solution will reduce the downtime for scaling exercises with the LEAST operational overhead?

- **A.** Create more Aurora PostgreSQL read replicas in the cluster to handle the load during failover.
- **B.** Set up a secondary Aurora PostgreSQL cluster in the same AWS Region. During failover, update the application to use the secondary cluster's writer endpoint.
- **C.** Create an Amazon ElastiCache for Memcached cluster to handle the load during failover.
- **D.** Set up an Amazon RDS proxy for the database. Update the application to use the proxy endpoint.

**33.** A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function. Which solution meets these requirements?

- **A.** Add an execution role to the function with lambda:InvokeFunction as the action and * as the principal.
- **B.** Add an execution role to the function with lambda:InvokeFunction as the action and Service: lambda.amazonaws.com as the principal.
- **C.** Add a resource-based policy to the function with lambda:* as the action and Service: events.amazonaws.com as the principal.
- **D.** Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the principal.

**34.** A company wants to monitor its AWS costs for financial review. The cloud operations team is designing an architecture in the AWS Organizations management account to query AWS Cost and Usage Reports for all member accounts. The team must run this query once a month and provide a detailed analysis of the bill. Which solution is the MOST scalable and cost-effective way to meet these requirements?

- **A.** Enable Cost and Usage Reports in the management account. Deliver reports to Amazon Kinesis. Use Amazon EMR for analysis.
- **B.** Enable Cost and Usage Reports in the management account. Deliver the reports to Amazon S3 Use Amazon Athena for analysis.
- **C.** Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon S3 Use Amazon Redshift for analysis.
- **D.** Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon Kinesis. Use Amazon QuickSight tor analysis.

**35.** A gaming company is moving its public scoreboard from a data center to the AWS Cloud. The company uses Amazon EC2 Windows Server instances behind an Application Load Balancer to host its dynamic application. The company needs a highly available storage solution for the application. The application consists of static files and dynamic server-side code. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

- **A.** Store the static files on Amazon S3. Use Amazon CloudFront to cache objects at the edge.
- **B.** Store the static files on Amazon S3. Use Amazon ElastiCache to cache objects at the edge.
- **C.** Store the server-side code on Amazon Elastic File System (Amazon EFS). Mount the EFS volume on each EC2 instance to share the files.
- **D.** Store the server-side code on Amazon FSx for Windows File Server. Mount the FSx for Windows File Server volume on each EC2 instance to share the files.
- **E.** Store the server-side code on a General Purpose SSD (gp2) Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on each EC2 instance to share the files.

**36.** A solutions architect needs to design a system to store client case files. The files are core company assets and are important. The number of files will grow over time. The files must be simultaneously accessible from multiple application servers that run on Amazon EC2 instances. The solution must have built-in redundancy. Which solution meets these requirements?

- **A.** Amazon Elastic File System (Amazon EFS)
- **B.** Amazon Elastic Block Store (Amazon EBS)
- **C.** Amazon S3 Glacier Deep Archive
- **D.** AWS Backup

**37.** A company wants to run its experimental workloads in the AWS Cloud. The company has a budget for cloud spending. The company's CFO is concerned about cloud spending accountability for each department. The CFO wants to receive notification when the spending threshold reaches 60% of the budget. Which solution will meet these requirements?

- **A.** Use cost allocation tags on AWS resources to label owners. Create usage budgets in AWS Budgets. Add an alert threshold to receive notification when spending exceeds 60% of the budget.
- **B.** Use AWS Cost Explorer forecasts to determine resource owners. Use AWS Cost Anomaly Detection to create alert threshold notifications when spending exceeds 60% of the budget.
- **C.** Use cost allocation tags on AWS resources to label owners. Use AWS Support API on AWS Trusted Advisor to create alert threshold notifications when spending exceeds 60% of the budget.
- **D.** Use AWS Cost Explorer forecasts to determine resource owners. Create usage budgets in AWS Budgets. Add an alert threshold to receive notification when spending exceeds 60% of the budget.

**38.** A company wants to replicate existing and ongoing data changes from an on-premises Oracle database to Amazon RDS for Oracle. The amount of data to replicate varies throughout each day. The company wants to use AWS Database Migration Service (AWS DMS) for data replication. The solution must allocate only the capacity that the replication instance requires. Which solution will meet these requirements?

- **A.** Configure the AWS DMS replication instance with a Multi-AZ deployment to provision instances across multiple Availability Zones.
- **B.** Create an AWS DMS Serverless replication task to analyze and replicate the data while provisioning the required capacity.
- **C.** Use Amazon EC2 Auto Scaling to scale the size of the AWS DMS replication instance up or down based on the amount of data toreplicate.
- **D.** Provision AWS DMS replication capacity by using Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type to analyze and replicate the data while provisioning the required capacity.

**39.** A company wants to configure its Amazon CloudFront distribution to use SSL/TLS certificates. The company does not want to use the default domain name for the distribution. Instead, the company wants to use a different domain name for the distribution. Which solution will deploy the certificate without incurring any additional costs?

- **A.** Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.
- **B.** Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.
- **C.** Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.
- **D.** Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.

**40.** A company that runs its application on AWS uses an Amazon Aurora DB cluster as its database. During peak usage hours when multiple users access and read the data, the monitoring system shows degradation of database performance for the write queries. The company wants to increase the scalability of the application to meet peak usage demands. Which solution will meet these requirements MOST cost-effectively?

- **A.** Create a second Aurora DB cluster. Configure a copy job to replicate the users’ data to the new database. Update the application to use the second database to read the data.
- **B.** Create an Amazon DynamoDB Accelerator (DAX) cluster in front of the existing Aurora DB cluster. Update the application to use the DAX cluster for read-only queries. Write data directly to the Aurora DB cluster.
- **C.** Create an Aurora read replica in the existing Aurora DB cluster. Update the application to use the replica endpoint for read-only queries and to use the cluster endpoint for write queries.
- **D.** Create an Amazon Redshift cluster. Copy the users' data to the Redshift cluster. Update the application to connect to the Redshift cluster and to perform read-only queries on the Redshift cluster.

**41.** A company is hosting a three-tier ecommerce application in the AWS Cloud. The company hosts the website on Amazon S3 and integrates the website with an API that handles sales requests. The company hosts the API on three Amazon EC2 instances behind an Application Load Balancer (ALB). The API consists of static and dynamic front-end content along with backend workers that process sales requests asynchronously. The company is expecting a significant and sudden increase in the number of sales requests during events for the launch of new products. What should a solutions architect recommend to ensure that all the requests are processed successfully?

- **A.** Add an Amazon CloudFront distribution for the dynamic content. Increase the number of EC2 instances to handle the increase in traffic.
- **B.** Add an Amazon CloudFront distribution for the static content. Place the EC2 instances in an Auto Scaling group to launch new instances based on network traffic.
- **C.** Add an Amazon CloudFront distribution for the dynamic content. Add an Amazon ElastiCache instance in front of the ALB to reduce traffic for the API to handle.
- **D.** Add an Amazon CloudFront distribution for the static content. Add an Amazon Simple Queue Service (Amazon SQS) queue to receive requests from the website for later processing by the EC2 instances.

**42.** A company currently runs an on-premises stock trading application by using Microsoft Windows Server. The company wants to migrate the application to the AWS Cloud. The company needs to design a highly available solution that provides low-latency access to block storage across multiple Availability Zones. Which solution will meet these requirements with the LEAST implementation effort?

- **A.** Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2 instances. Install the application on both cluster nodes. Use Amazon FSx for Windows File Server as shared storage between the two cluster nodes.
- **B.** Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2 instances. Install the application on both cluster nodes. Use Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp3) volumes as storage attached to the EC2 instances. Set up application-level replication to sync data from one EBS volume in one Availability Zone to another EBS volume in the second Availability Zone.
- **C.** Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2 instance as active and the second EC2 instance in standby mode. Use an Amazon FSx for NetApp ONTAP Multi-AZ file system to access the data by using Internet Small Computer Systems Interface (iSCSI) protocol.
- **D.** Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2 instance as active and the second EC2 instance in standby mode. Use Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS SSD (io2) volumes as storage attached to the EC2 instances. Set up Amazon EBS level replication to sync data from one io2 volume in one Availability Zone to another io2 volume in the second Availability Zone.

**43.** A company collects data from thousands of remote devices by using a RESTful web services application that runs on an Amazon EC2 instance. The EC2 instance receives the raw data, transforms the raw data, and stores all the data in an Amazon S3 bucket. The number of remote devices will increase into the millions soon. The company needs a highly scalable solution that minimizes operational overhead. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

- **A.** Use AWS Glue to process the raw data in Amazon S3.
- **B.** Use Amazon Route 53 to route traffic to different EC2 instances.
- **C.** Add more EC2 instances to accommodate the increasing amount of incoming data.
- **D.** Send the raw data to Amazon Simple Queue Service (Amazon SQS). Use EC2 instances to process the data.
- **E.** Use Amazon API Gateway to send the raw data to an Amazon Kinesis data stream. Configure Amazon Kinesis Data Firehose to use the data stream as a source to deliver the data to Amazon S3.

**44.** A company wants to enhance its ecommerce order-processing application that is deployed on AWS. The application must process each order exactly once without affecting the customer experience during unpredictable traffic surges. Which solution will meet these requirements?

- **A.** Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Put all the orders in the SQS queue. Configure an AWS Lambda function as the target to process the orders.
- **B.** Create an Amazon Simple Notification Service (Amazon SNS) standard topic. Publish all the orders to the SNS standard topic. Configure the application as a notification target.
- **C.** Create a flow by using Amazon AppFlow. Send the orders to the flow. Configure an AWS Lambda function as the target to process the orders.
- **D.** Configure AWS X-Ray in the application to track the order requests. Configure the application to process the orders by pulling the orders from Amazon CloudWatch.

**45.** A solutions architect is implementing a complex Java application with a MySQL database. The Java application must be deployed on Apache Tomcat and must be highly available. What should the solutions architect do to meet these requirements?

- **A.** Deploy the application in AWS Lambda. Configure an Amazon API Gateway API to connect with the Lambda functions.
- **B.** Deploy the application by using AWS Elastic Beanstalk. Configure a load-balanced environment and a rolling deployment policy.
- **C.** Migrate the database to Amazon ElastiCache. Configure the ElastiCache security group to allow access from the application.
- **D.** Launch an Amazon EC2 instance. Install a MySQL server on the EC2 instance. Configure the application on the server. Create an AMI. Use the AMI to create a launch template with an Auto Scaling group.

**46.** A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly. What should a solutions architect recommend?

- **A.** Create a DynamoDB table in on-demand capacity mode.
- **B.** Create a DynamoDB table with a global secondary index.
- **C.** Create a DynamoDB table with provisioned capacity and auto scaling.
- **D.** Create a DynamoDB table in provisioned capacity mode, and configure it as a global table.

**47.** A company runs its production workload on Amazon EC2 instances with Amazon Elastic Block Store (Amazon EBS) volumes. A solutions architect needs to analyze the current EBS volume cost and to recommend optimizations. The recommendations need to include estimated monthly saving opportunities. Which solution will meet these requirements?

- **A.** Use Amazon Inspector reporting to generate EBS volume recommendations for optimization.
- **B.** Use AWS Systems Manager reporting to determine EBS volume recommendations for optimization.
- **C.** Use Amazon CloudWatch metrics reporting to determine EBS volume recommendations for optimization.
- **D.** Use AWS Compute Optimizer to generate EBS volume recommendations for optimization.

**48.** A company stores data in Amazon S3. According to regulations, the data must not contain personally identifiable information (PII). The company recently discovered that S3 buckets have some objects that contain PII. The company needs to automatically detect PII in S3 buckets and to notify the company’s security team. Which solution will meet these requirements?

- **A.** Use Amazon Macie. Create an Amazon EventBridge rule to filter the SensitiveData event type from Macie findings and to send an Amazon Simple Notification Service (Amazon SNS) notification to the security team.
- **B.** Use Amazon GuardDuty. Create an Amazon EventBridge rule to filter the CRITICAL event type from GuardDuty findings and to send an Amazon Simple Notification Service (Amazon SNS) notification to the security team.
- **C.** Use Amazon Macie. Create an Amazon EventBridge rule to filter the SensitiveData:S3Object/Personal event type from Macie findings and to send an Amazon Simple Queue Service (Amazon SQS) notification to the security team.
- **D.** Use Amazon GuardDuty. Create an Amazon EventBridge rule to filter the CRITICAL event type from GuardDuty findings and to send an Amazon Simple Queue Service (Amazon SQS) notification to the security team.

**49.** A company has an on-premises business application that generates hundreds of files each day. These files are stored on an SMB file share and require a low-latency connection to the application servers. A new company policy states all application-generated files must be copied to AWS. There is already a VPN connection to AWS. The application development team does not have time to make the necessary code modifications to move the application to AWS. Which service should a solutions architect recommend to allow the application to copy files to AWS?

- **A.** Amazon Elastic File System (Amazon EFS)
- **B.** Amazon FSx for Windows File Server
- **C.** AWS Snowball
- **D.** AWS Storage Gateway

**50.** A company runs a fleet of web servers using an Amazon RDS for PostgreSQL DB instance. After a routine compliance check, the company sets a standard that requires a recovery point objective (RPO) of less than 1 second for all its production databases. Which solution meets these requirements?

- **A.** Enable a Multi-AZ deployment for the DB instance.
- **B.** Enable auto scaling for the DB instance in one Availability Zone.
- **C.** Configure the DB instance in one Availability Zone, and create multiple read replicas in a separate Availability Zone.
- **D.** Configure the DB instance in one Availability Zone, and configure AWS Database Migration Service (AWS DMS) change data capture (CDC) tasks.

**51.** A financial company hosts a web application on AWS. The application uses an Amazon API Gateway Regional API endpoint to give users the ability to retrieve current stock prices. The company’s security team has noticed an increase in the number of API requests. The security team is concerned that HTTP flood attacks might take the application offline. A solutions architect must design a solution to protect the application from this type of attack. Which solution meets these requirements with the LEAST operational overhead?

- **A.** Create an Amazon CloudFront distribution in front of the API Gateway Regional API endpoint with a maximum TTL of 24 hours.
- **B.** Create a Regional AWS WAF web ACL with a rate-based rule. Associate the web ACL with the API Gateway stage.
- **C.** Use Amazon CloudWatch metrics to monitor the Count metric and alert the security team when the predefined rate is reached.
- **D.** Create an Amazon CloudFront distribution with Lambda@Edge in front of the API Gateway Regional API endpoint. Create an AWS Lambda function to block requests from IP addresses that exceed the predefined rate.

**52.** A company runs demonstration environments for its customers on Amazon EC2 instances. Each environment is isolated in its own VPC. The company’s operations team needs to be notified when RDP or SSH access to an environment has been established.

- **A.** Configure Amazon CloudWatch Application Insights to create AWS Systems Manager OpsItems when RDP or SSH access is detected.
- **B.** Configure the EC2 instances with an IAM instance profile that has an IAM role with the AmazonSSMManagedInstanceCore policy attached.
- **C.** Publish VPC flow logs to Amazon CloudWatch Logs. Create required metric filters. Create an Amazon CloudWatch metric alarm with a notification action for when the alarm is in the ALARM state.
- **D.** Configure an Amazon EventBridge rule to listen for events of type EC2 Instance State-change Notification. Configure an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the operations team to the topic.

**53.** A company’s application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. On the first day of every month at midnight, the application becomes much slower when the month-end financial calculation batch runs. This causes the CPU utilization of the EC2 instances to immediately peak to 100%, which disrupts the application. What should a solutions architect recommend to ensure the application is able to handle the workload and avoid downtime?

- **A.** Configure an Amazon CloudFront distribution in front of the ALB.
- **B.** Configure an EC2 Auto Scaling simple scaling policy based on CPU utilization.
- **C.** Configure an EC2 Auto Scaling scheduled scaling policy based on the monthly schedule.
- **D.** Configure Amazon ElastiCache to remove some of the workload from the EC2 instances.

**54.** A company has a mobile app for customers. The app’s data is sensitive and must be encrypted at rest. The company uses AWS Key Management Service (AWS KMS). The company needs a solution that prevents the accidental deletion of KMS keys. The solution must use Amazon Simple Notification Service (Amazon SNS) to send an email notification to administrators when a user attempts to delete a KMS key. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create an Amazon EventBridge rule that reacts when a user tries to delete a KMS key. Configure an AWS Config rule that cancels any deletion of a KMS key. Add the AWS Config rule as a target of the EventBridge rule. Create an SNS topic that notifies the administrators.
- **B.** Create an AWS Lambda function that has custom logic to prevent KMS key deletion. Create an Amazon CloudWatch alarm that is activated when a user tries to delete a KMS key. Create an Amazon EventBridge rule that invokes the Lambda function when the DeleteKey operation is performed. Create an SNS topic. Configure the EventBridge rule to publish an SNS message that notifies the administrators.
- **C.** Create an Amazon EventBridge rule that reacts when the KMS DeleteKey operation is performed. Configure the rule to initiate an AWS Systems Manager Automation runbook. Configure the runbook to cancel the deletion of the KMS key. Create an SNS topic. Configure the EventBridge rule to publish an SNS message that notifies the administrators.
- **D.** Create an AWS CloudTrail trail. Configure the trail to deliver logs to a new Amazon CloudWatch log group. Create a CloudWatch alarm based on the metric filter for the CloudWatch log group. Configure the alarm to use Amazon SNS to notify the administrators when the KMS DeleteKey operation is performed.

**55.** A solutions architect is designing a multi-tier application for a company. The application's users upload images from a mobile device. The application generates a thumbnail of each image and returns a message to the user to confirm that the image was uploaded successfully. The thumbnail generation can take up to 60 seconds, but the company wants to provide a faster response time to its users to notify them that the original image was received. The solutions architect must design the application to asynchronously dispatch requests to the different application tiers. What should the solutions architect do to meet these requirements?

- **A.** Write a custom AWS Lambda function to generate the thumbnail and alert the user. Use the image upload process as an event source to invoke the Lambda function.
- **B.** Create an AWS Step Functions workflow. Configure Step Functions to handle the orchestration between the application tiers and alert the user when thumbnail generation is complete.
- **C.** Create an Amazon Simple Queue Service (Amazon SQS) message queue. As images are uploaded, place a message on the SQS queue for thumbnail generation. Alert the user through an application message that the image was received.
- **D.** Create Amazon Simple Notification Service (Amazon SNS) notification topics and subscriptions. Use one subscription with the application to generate the thumbnail after the image upload is complete. Use a second subscription to message the user's mobile app by way of a push notification after thumbnail generation is complete.

**56.** A company is implementing a new application on AWS. The company will run the application on multiple Amazon EC2 instances across multiple Availability Zones within multiple AWS Regions. The application will be available through the internet. Users will access the application from around the world. The company wants to ensure that each user who accesses the application is sent to the EC2 instances that are closest to the user’s location. Which solution will meet these requirements?

- **A.** Implement an Amazon Route 53 geolocation routing policy. Use an internet-facing Application Load Balancer to distribute the traffic across all Availability Zones within the same Region.
- **B.** Implement an Amazon Route 53 geoproximity routing policy. Use an internet-facing Network Load Balancer to distribute the traffic across all Availability Zones within the same Region.
- **C.** Implement an Amazon Route 53 multivalue answer routing policy. Use an internet-facing Application Load Balancer to distribute the traffic across all Availability Zones within the same Region.
- **D.** Implement an Amazon Route 53 weighted routing policy. Use an internet-facing Network Load Balancer to distribute the traffic across all Availability Zones within the same Region.

**57.** A gaming company uses Amazon DynamoDB to store user information such as geographic location, player data, and leaderboards. The company needs to configure continuous backups to an Amazon S3 bucket with a minimal amount of coding. The backups must not affect availability of the application and must not affect the read capacity units (RCUs) that are defined for the table. Which solution meets these requirements?

- **A.** Use an Amazon EMR cluster. Create an Apache Hive job to back up the data to Amazon S3.
- **B.** Export the data directly from DynamoDB to Amazon S3 with continuous backups. Turn on point-in-time recovery for the table.
- **C.** Configure Amazon DynamoDB Streams. Create an AWS Lambda function to consume the stream and export the data to an Amazon S3 bucket.
- **D.** Create an AWS Lambda function to export the data from the database tables to Amazon S3 on a regular basis. Turn on point-in-time recovery for the table.

**58.** A city has deployed a web application running on Amazon EC2 instances behind an Application Load Balancer (ALB). The application's users have reported sporadic performance, which appears to be related to DDoS attacks originating from random IP addresses. The city needs a solution that requires minimal configuration changes and provides an audit trail for the DDoS sources. Which solution meets these requirements?

- **A.** Enable an AWS WAF web ACL on the ALB, and configure rules to block traffic from unknown sources.
- **B.** Subscribe to Amazon Inspector. Engage the AWS DDoS Response Team (DRT) to integrate mitigating controls into the service.
- **C.** Subscribe to AWS Shield Advanced. Engage the AWS DDoS Response Team (DRT) to integrate mitigating controls into the service.
- **D.** Create an Amazon CloudFront distribution for the application, and set the ALB as the origin. Enable an AWS WAF web ACL on the distribution, and configure rules to block traffic from unknown sources

**59.** A company has NFS servers in an on-premises data center that need to periodically back up small amounts of data to Amazon S3. Which solution meets these requirements and is MOST cost-effective?

- **A.** Set up AWS Glue to copy the data from the on-premises servers to Amazon S3.
- **B.** Set up an AWS DataSync agent on the on-premises servers, and sync the data to Amazon S3.
- **C.** Set up an SFTP sync using AWS Transfer for SFTP to sync data from on premises to Amazon S3.
- **D.** Set up an AWS Direct Connect connection between the on-premises data center and a VPC, and copy the data to Amazon S3.

**60.** A company is developing a marketing communications service that targets mobile app users. The company needs to send confirmation messages with Short Message Service (SMS) to its users. The users must be able to reply to the SMS messages. The company must store the responses for a year for analysis. What should a solutions architect do to meet these requirements?

- **A.** Create an Amazon Connect contact flow to send the SMS messages. Use AWS Lambda to process the responses.
- **B.** Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving.
- **C.** Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to process the responses.
- **D.** Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data stream to the SNS topic for analysis and archiving.

**61.** An international company has a subdomain for each country that the company operates in. The subdomains are formatted as example.com, country1.example.com, and country2.example.com. The company's workloads are behind an Application Load Balancer. The company wants to encrypt the website data that is in transit. Which combination of steps will meet these requirements? (Choose two.)

- **A.** Use the AWS Certificate Manager (ACM) console to request a public certificate for the apex top domain example com and a wildcard certificate for *.example.com.
- **B.** Use the AWS Certificate Manager (ACM) console to request a private certificate for the apex top domain example.com and a wildcard certificate for *.example.com.
- **C.** Use the AWS Certificate Manager (ACM) console to request a public and private certificate for the apex top domain example.com.
- **D.** Validate domain ownership by email address. Switch to DNS validation by adding the required DNS records to the DNS provider.
- **E.** Validate domain ownership for the domain by adding the required DNS records to the DNS provider.

**62.** A company hosts a multi-tier web application on Amazon Linux Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The company observes that the Auto Scaling group launches more On- Demand Instances when the application's end users access high volumes of static web content. The company wants to optimize cost. What should a solutions architect do to redesign the application MOST cost-effectively?

- **A.** Update the Auto Scaling group to use Reserved Instances instead of On-Demand Instances.
- **B.** Update the Auto Scaling group to scale by launching Spot Instances instead of On-Demand Instances.
- **C.** Create an Amazon CloudFront distribution to host the static web contents from an Amazon S3 bucket.
- **D.** Create an AWS Lambda function behind an Amazon API Gateway API to host the static website contents.

**63.** A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour. What should the solutions architect recommend to meet these requirements?

- **A.** Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.
- **B.** Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.
- **C.** Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB.
- **D.** Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot.

**64.** A company uses AWS Organizations for its multi-account AWS setup. The security organizational unit (OU) of the company needs to share approved Amazon Machine Images (AMIs) with the development OU. The AMIs are created by using AWS Key Management Service (AWS KMS) encrypted snapshots. Which solution will meet these requirements? (Choose two.)

- **A.** Add the development team's OU Amazon Resource Name (ARN) to the launch permission list for the AMIs.
- **B.** Add the Organizations root Amazon Resource Name (ARN) to the launch permission list for the AMIs.
- **C.** Update the key policy to allow the development team's OU to use the AWS KMS keys that are used to decrypt the snapshots.
- **D.** Add the development team’s account Amazon Resource Name (ARN) to the launch permission list for the AMIs.
- **E.** Recreate the AWS KMS key. Add a key policy to allow the Organizations root Amazon Resource Name (ARN) to use the AWS KMS key.

**65.** A medical company wants to perform transformations on a large amount of clinical trial data that comes from several customers. The company must extract the data from a relational database that contains the customer data. Then the company will transform the data by using a series of complex rules. The company will load the data to Amazon S3 when the transformations are complete. All data must be encrypted where it is processed before the company stores the data in Amazon S3. All data must be encrypted by using customer-specific keys. Which solution will meet these requirements with the LEAST amount of operational effort?

- **A.** Create one AWS Glue job for each customer. Attach a security configuration to each job that uses server-side encryption with Amazon S3 managed keys (SSE-S3) to encrypt the data.
- **B.** Create one Amazon EMR cluster for each customer. Attach a security configuration to each cluster that uses client-side encryption with a custom client-side root key (CSE-Custom) to encrypt the data.
- **C.** Create one AWS Glue job for each customer. Attach a security configuration to each job that uses client-side encryption with AWS KMS managed keys (CSE-KMS) to encrypt the data.
- **D.** Create one Amazon EMR cluster for each customer. Attach a security configuration to each cluster that uses server-side encryption with AWS KMS keys (SSE-KMS) to encrypt the data.

---

## Answer key -- Exam 2

`Consensus` is the share of ExamTopics voters choosing that answer. Anything
below 70% is genuinely contested -- open the discussion link before trusting it.

| # | Answer | Domain | Consensus | Source |
|---:|---|---|---:|---|
| 1 | **B** | 4. Design Cost-Optimized Architectures | 75% | [Q591](https://www.examtopics.com/discussions/amazon/view/119574-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 2 | **D** | 1. Design Secure Architectures | 100% | [Q761](https://www.examtopics.com/discussions/amazon/view/133326-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 3 | **C** | 3. Design High-Performing Architectures | 99% | [Q2](https://www.examtopics.com/discussions/amazon/view/84848-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 4 | **A** | 1. Design Secure Architectures | 100% | [Q86](https://www.examtopics.com/discussions/amazon/view/85753-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 5 | **A C** | 2. Design Resilient Architectures | 92% | [Q136](https://www.examtopics.com/discussions/amazon/view/85438-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 6 | **A** | 1. Design Secure Architectures | 94% | [Q756](https://www.examtopics.com/discussions/amazon/view/132947-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 7 | **A** | 2. Design Resilient Architectures | 100% | [Q344](https://www.examtopics.com/discussions/amazon/view/100202-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 8 | **B C** | 2. Design Resilient Architectures | 100% | [Q637](https://www.examtopics.com/discussions/amazon/view/125547-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 9 | **A** | 1. Design Secure Architectures | 88% | [Q792](https://www.examtopics.com/discussions/amazon/view/133031-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 10 | **C** | 3. Design High-Performing Architectures | 96% | [Q77](https://www.examtopics.com/discussions/amazon/view/85740-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 11 | **C** | 3. Design High-Performing Architectures | 100% | [Q530](https://www.examtopics.com/discussions/amazon/view/111271-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 12 | **B** | 1. Design Secure Architectures | 63% ⚠ | [Q46](https://www.examtopics.com/discussions/amazon/view/85264-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 13 | **A** | 3. Design High-Performing Architectures | 68% ⚠ | [Q117](https://www.examtopics.com/discussions/amazon/view/85802-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 14 | **C** | 1. Design Secure Architectures | 92% | [Q634](https://www.examtopics.com/discussions/amazon/view/125544-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 15 | **A** | 2. Design Resilient Architectures | 52% ⚠ | [Q892](https://www.examtopics.com/discussions/amazon/view/139807-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 16 | **C** | 2. Design Resilient Architectures | 100% | [Q727](https://www.examtopics.com/discussions/amazon/view/132907-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 17 | **D** | 1. Design Secure Architectures | 68% ⚠ | [Q50](https://www.examtopics.com/discussions/amazon/view/85026-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 18 | **A** | 3. Design High-Performing Architectures | 96% | [Q716](https://www.examtopics.com/discussions/amazon/view/132889-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 19 | **D** | 4. Design Cost-Optimized Architectures | 79% | [Q956](https://www.examtopics.com/discussions/amazon/view/145012-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 20 | **C** | 4. Design Cost-Optimized Architectures | 75% | [Q943](https://www.examtopics.com/discussions/amazon/view/145918-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 21 | **B** | 3. Design High-Performing Architectures | 89% | [Q548](https://www.examtopics.com/discussions/amazon/view/116977-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 22 | **A** | 4. Design Cost-Optimized Architectures | 65% ⚠ | [Q715](https://www.examtopics.com/discussions/amazon/view/132888-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 23 | **C** | 3. Design High-Performing Architectures | 80% | [Q776](https://www.examtopics.com/discussions/amazon/view/133008-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 24 | **A** | 1. Design Secure Architectures | 79% | [Q213](https://www.examtopics.com/discussions/amazon/view/95301-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 25 | **B** | 3. Design High-Performing Architectures | 80% | [Q846](https://www.examtopics.com/discussions/amazon/view/139063-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 26 | **A C E** | 1. Design Secure Architectures | 100% | [Q884](https://www.examtopics.com/discussions/amazon/view/139800-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 27 | **D** | 1. Design Secure Architectures | 100% | [Q35](https://www.examtopics.com/discussions/amazon/view/85203-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 28 | **C** | 3. Design High-Performing Architectures | 100% | [Q228](https://www.examtopics.com/discussions/amazon/view/95318-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 29 | **B** | 1. Design Secure Architectures | 82% | [Q992](https://www.examtopics.com/discussions/amazon/view/148461-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 30 | **B C** | 4. Design Cost-Optimized Architectures | 90% | [Q430](https://www.examtopics.com/discussions/amazon/view/109288-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 31 | **C** | 3. Design High-Performing Architectures | 93% | [Q501](https://www.examtopics.com/discussions/amazon/view/109421-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 32 | **D** | 2. Design Resilient Architectures | 77% | [Q526](https://www.examtopics.com/discussions/amazon/view/111245-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 33 | **D** | 1. Design Secure Architectures | 97% | [Q105](https://www.examtopics.com/discussions/amazon/view/85816-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 34 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q641](https://www.examtopics.com/discussions/amazon/view/125580-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 35 | **A D** | 3. Design High-Performing Architectures | 100% | [Q357](https://www.examtopics.com/discussions/amazon/view/100230-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 36 | **A** | 2. Design Resilient Architectures | 100% | [Q252](https://www.examtopics.com/discussions/amazon/view/95024-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 37 | **A** | 4. Design Cost-Optimized Architectures | 100% | [Q781](https://www.examtopics.com/discussions/amazon/view/133015-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 38 | **B** | 2. Design Resilient Architectures | 86% | [Q948](https://www.examtopics.com/discussions/amazon/view/144936-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 39 | **C** | 4. Design Cost-Optimized Architectures | 100% | [Q855](https://www.examtopics.com/discussions/amazon/view/137823-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 40 | **C** | 4. Design Cost-Optimized Architectures | 67% ⚠ | [Q864](https://www.examtopics.com/discussions/amazon/view/141661-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 41 | **D** | 2. Design Resilient Architectures | 73% | [Q328](https://www.examtopics.com/discussions/amazon/view/99704-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 42 | **C** | 2. Design Resilient Architectures | 52% ⚠ | [Q972](https://www.examtopics.com/discussions/amazon/view/146061-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 43 | **A E** | 3. Design High-Performing Architectures | 100% | [Q226](https://www.examtopics.com/discussions/amazon/view/95312-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 44 | **A** | 2. Design Resilient Architectures | 100% | [Q869](https://www.examtopics.com/discussions/amazon/view/138082-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 45 | **B** | 2. Design Resilient Architectures | 100% | [Q427](https://www.examtopics.com/discussions/amazon/view/109279-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 46 | **A** | 4. Design Cost-Optimized Architectures | 78% | [Q79](https://www.examtopics.com/discussions/amazon/view/85743-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 47 | **D** | 4. Design Cost-Optimized Architectures | 100% | [Q867](https://www.examtopics.com/discussions/amazon/view/137854-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 48 | **A** | 1. Design Secure Architectures | 87% | [Q533](https://www.examtopics.com/discussions/amazon/view/111432-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 49 | **D** | 3. Design High-Performing Architectures | 76% | [Q844](https://www.examtopics.com/discussions/amazon/view/138083-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 50 | **A** | 2. Design Resilient Architectures | 88% | [Q281](https://www.examtopics.com/discussions/amazon/view/99511-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 51 | **B** | 1. Design Secure Architectures | 100% | [Q399](https://www.examtopics.com/discussions/amazon/view/102167-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 52 | **C** | 1. Design Secure Architectures | 84% | [Q232](https://www.examtopics.com/discussions/amazon/view/95324-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 53 | **C** | 2. Design Resilient Architectures | 100% | [Q333](https://www.examtopics.com/discussions/amazon/view/99791-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 54 | **C** | 1. Design Secure Architectures | 86% | [Q793](https://www.examtopics.com/discussions/amazon/view/133032-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 55 | **C** | 2. Design Resilient Architectures | 94% | [Q322](https://www.examtopics.com/discussions/amazon/view/99753-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 56 | **B** | 3. Design High-Performing Architectures | 61% ⚠ | [Q976](https://www.examtopics.com/discussions/amazon/view/145571-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 57 | **B** | 2. Design Resilient Architectures | 87% | [Q490](https://www.examtopics.com/discussions/amazon/view/109577-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 58 | **C** | 1. Design Secure Architectures | 100% | [Q701](https://www.examtopics.com/discussions/amazon/view/132865-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 59 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q703](https://www.examtopics.com/discussions/amazon/view/132867-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 60 | **B** | 3. Design High-Performing Architectures | 90% | [Q201](https://www.examtopics.com/discussions/amazon/view/89080-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 61 | **A E** | 1. Design Secure Architectures | 100% | [Q644](https://www.examtopics.com/discussions/amazon/view/125582-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 62 | **C** | 4. Design Cost-Optimized Architectures | 100% | [Q441](https://www.examtopics.com/discussions/amazon/view/109423-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 63 | **B** | 2. Design Resilient Architectures | 100% | [Q71](https://www.examtopics.com/discussions/amazon/view/85603-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 64 | **A C** | 1. Design Secure Architectures | 100% | [Q777](https://www.examtopics.com/discussions/amazon/view/133009-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 65 | **C** | 3. Design High-Performing Architectures | 89% | [Q1007](https://www.examtopics.com/discussions/amazon/view/148544-exam-aws-certified-solutions-architect-associate-saa-c03/) |
