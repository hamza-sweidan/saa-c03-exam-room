# SAA-C03 Practice Exam 1

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

**1.** A company collects and processes data from a vendor. The vendor stores its data in an Amazon RDS for MySQL database in the vendor's own AWS account. The company’s VPC does not have an internet gateway, an AWS Direct Connect connection, or an AWS Site-to-Site VPN connection. The company needs to access the data that is in the vendor database. Which solution will meet this requirement?

- **A.** Instruct the vendor to sign up for the AWS Hosted Connection Direct Connect Program. Use VPC peering to connect the company's VPC and the vendor's VPC.
- **B.** Configure a client VPN connection between the company's VPC and the vendor's VPC. Use VPC peering to connect the company's VPC and the vendor's VPC.
- **C.** Instruct the vendor to create a Network Load Balancer (NLB). Place the NLB in front of the Amazon RDS for MySQL database. Use AWS PrivateLink to integrate the company's VPC and the vendor's VPC.
- **D.** Use AWS Transit Gateway to integrate the company's VPC and the vendor's VPC. Use VPC peering to connect the company’s VPC and the vendor's VPC.

**2.** A company is deploying a two-tier web application in a VPC. The web tier is using an Amazon EC2 Auto Scaling group with public subnets that span multiple Availability Zones. The database tier consists of an Amazon RDS for MySQL DB instance in separate private subnets. The web tier requires access to the database to retrieve product information. The web application is not working as intended. The web application reports that it cannot connect to the database. The database is confirmed to be up and running. All configurations for the network ACLs, security groups, and route tables are still in their default states. What should a solutions architect recommend to fix the application?

- **A.** Add an explicit rule to the private subnet’s network ACL to allow traffic from the web tier’s EC2 instances.
- **B.** Add a route in the VPC route table to allow traffic between the web tier’s EC2 instances and the database tier.
- **C.** Deploy the web tier's EC2 instances and the database tier’s RDS instance into two separate VPCs, and configure VPC peering.
- **D.** Add an inbound rule to the security group of the database tier’s RDS instance to allow traffic from the web tiers security group.

**3.** A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination. There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit. What should a solutions architect do to increase the application's performance?

- **A.** Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each instance.
- **B.** Create an Amazon S3 bucket Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.
- **C.** Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances.
- **D.** Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM.

**4.** A company has an Amazon S3 bucket that contains sensitive data files. The company has an application that runs on virtual machines in an on-premises data center. The company currently uses AWS IAM Identity Center. The application requires temporary access to files in the S3 bucket. The company wants to grant the application secure access to the files in the S3 bucket. Which solution will meet these requirements?

- **A.** Create an S3 bucket policy that permits access to the bucket from the public IP address range of the company’s on-premises data center.
- **B.** Use IAM Roles Anywhere to obtain security credentials in IAM Identity Center that grant access to the S3 bucket. Configure the virtual machines to assume the role by using the AWS CLI.
- **C.** Install the AWS CLI on the virtual machine. Configure the AWS CLI with access keys from an IAM user that has access to the bucket.
- **D.** Create an IAM user and policy that grants access to the bucket. Store the access key and secret key for the IAM user in AWS Secrets Manager. Configure the application to retrieve the access key and secret key at startup.

**5.** A company wants to migrate its three-tier application from on premises to AWS. The web tier and the application tier are running on third- party virtual machines (VMs). The database tier is running on MySQL. The company needs to migrate the application by making the fewest possible changes to the architecture. The company also needs a database solution that can restore data to a specific point in time. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Migrate the web tier and the application tier to Amazon EC2 instances in private subnets. Migrate the database tier to Amazon RDS for MySQL in private subnets.
- **B.** Migrate the web tier to Amazon EC2 instances in public subnets. Migrate the application tier to EC2 instances in private subnets. Migrate the database tier to Amazon Aurora MySQL in private subnets.
- **C.** Migrate the web tier to Amazon EC2 instances in public subnets. Migrate the application tier to EC2 instances in private subnets. Migrate the database tier to Amazon RDS for MySQL in private subnets.
- **D.** Migrate the web tier and the application tier to Amazon EC2 instances in public subnets. Migrate the database tier to Amazon Aurora MySQL in public subnets.

**6.** A company runs an application that uses Amazon RDS for PostgreSQL. The application receives traffic only on weekdays during business hours. The company wants to optimize costs and reduce operational overhead based on this usage. Which solution will meet these requirements?

- **A.** Use the Instance Scheduler on AWS to configure start and stop schedules.
- **B.** Turn off automatic backups. Create weekly manual snapshots of the database.
- **C.** Create a custom AWS Lambda function to start and stop the database based on minimum CPU utilization.
- **D.** Purchase All Upfront reserved DB instances.

**7.** A company's marketing data is uploaded from multiple sources to an Amazon S3 bucket. A series of data preparation jobs aggregate the data for reporting. The data preparation jobs need to run at regular intervals in parallel. A few jobs need to run in a specific order later. The company wants to remove the operational overhead of job error handling, retry logic, and state management. Which solution will meet these requirements?

- **A.** Use an AWS Lambda function to process the data as soon as the data is uploaded to the S3 bucket. Invoke other Lambda functions at regularly scheduled intervals.
- **B.** Use Amazon Athena to process the data. Use Amazon EventBridge Scheduler to invoke Athena on a regular internal.
- **C.** Use AWS Glue DataBrew to process the data. Use an AWS Step Functions state machine to run the DataBrew data preparation jobs.
- **D.** Use AWS Data Pipeline to process the data. Schedule Data Pipeline to process the data once at midnight.

**8.** A company has an application that runs on several Amazon EC2 instances. Each EC2 instance has multiple Amazon Elastic Block Store (Amazon EBS) data volumes attached to it. The application’s EC2 instance configuration and data need to be backed up nightly. The application also needs to be recoverable in a different AWS Region. Which solution will meet these requirements in the MOST operationally efficient way?

- **A.** Write an AWS Lambda function that schedules nightly snapshots of the application’s EBS volumes and copies the snapshots to a different Region.
- **B.** Create a backup plan by using AWS Backup to perform nightly backups. Copy the backups to another Region. Add the application’s EC2 instances as resources.
- **C.** Create a backup plan by using AWS Backup to perform nightly backups. Copy the backups to another Region. Add the application’s EBS volumes as resources.
- **D.** Write an AWS Lambda function that schedules nightly snapshots of the application's EBS volumes and copies the snapshots to a different Availability Zone.

**9.** A company wants to provide data scientists with near real-time read-only access to the company's production Amazon RDS for PostgreSQL database. The database is currently configured as a Single-AZ database. The data scientists use complex queries that will not affect the production database. The company needs a solution that is highly available. Which solution will meet these requirements MOST cost-effectively?

- **A.** Scale the existing production database in a maintenance window to provide enough power for the data scientists.
- **B.** Change the setup from a Single-AZ to a Multi-AZ instance deployment with a larger secondary standby instance. Provide the data scientists access to the secondary instance.
- **C.** Change the setup from a Single-AZ to a Multi-AZ instance deployment. Provide two additional read replicas for the data scientists.
- **D.** Change the setup from a Single-AZ to a Multi-AZ cluster deployment with two readable standby instances. Provide read endpoints to the data scientists.

**10.** A weather forecasting company collects temperature readings from various sensors on a continuous basis. An existing data ingestion process collects the readings and aggregates the readings into larger Apache Parquet files. Then the process encrypts the files by using client-side encryption with KMS managed keys (CSE-KMS). Finally, the process writes the files to an Amazon S3 bucket with separate prefixes for each calendar day. The company wants to run occasional SQL queries on the data to take sample moving averages for a specific calendar day. Which solution will meet these requirements MOST cost-effectively?

- **A.** Configure Amazon Athena to read the encrypted files. Run SQL queries on the data directly in Amazon S3.
- **B.** Use Amazon S3 Select to run SQL queries on the data directly in Amazon S3.
- **C.** Configure Amazon Redshift to read the encrypted files. Use Redshift Spectrum and Redshift query editor v2 to run SQL queries on the data directly in Amazon S3.
- **D.** Configure Amazon EMR Serverless to read the encrypted files. Use Apache SparkSQL to run SQL queries on the data directly in Amazon S3.

**11.** A company is migrating its workloads to AWS. The company has sensitive and critical data in on-premises relational databases that run on SQL Server instances. The company wants to use the AWS Cloud to increase security and reduce operational overhead for the databases. Which solution will meet these requirements?

- **A.** Migrate the databases to Amazon EC2 instances. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption.
- **B.** Migrate the databases to a Multi-AZ Amazon RDS for SQL Server DB instance. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption.
- **C.** Migrate the data to an Amazon S3 bucket. Use Amazon Macie to ensure data security.
- **D.** Migrate the databases to an Amazon DynamoDB table. Use Amazon CloudWatch Logs to ensure data security.

**12.** A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day. The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on- premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS. What should a solutions architect do to meet these requirements?

- **A.** Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.
- **B.** Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on- premises workloads and the cloud workloads to use the S3 File Gateway.
- **C.** Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway. depending on each workload's location.
- **D.** Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway.

**13.** A company manages a data lake in an Amazon S3 bucket that numerous applications access. The S3 bucket contains a unique prefix for each application. The company wants to restrict each application to its specific prefix and to have granular control of the objects under each prefix. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create dedicated S3 access points and access point policies for each application.
- **B.** Create an S3 Batch Operations job to set the ACL permissions for each object in the S3 bucket.
- **C.** Replicate the objects in the S3 bucket to new S3 buckets for each application. Create replication rules by prefix.
- **D.** Replicate the objects in the S3 bucket to new S3 buckets for each application. Create dedicated S3 access points for each application.

**14.** A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.
- **B.** Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.
- **C.** Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.
- **D.** Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.

**15.** A company uses Amazon API Gateway to manage its REST APIs that third-party service providers access. The company must protect the REST APIs from SQL injection and cross-site scripting attacks. What is the MOST operationally efficient solution that meets these requirements?

- **A.** Configure AWS Shield.
- **B.** Configure AWS WAF.
- **C.** Set up API Gateway with an Amazon CloudFront distribution. Configure AWS Shield in CloudFront.
- **D.** Set up API Gateway with an Amazon CloudFront distribution. Configure AWS WAF in CloudFront.

**16.** A company is building a new application that uses serverless architecture. The architecture will consist of an Amazon API Gateway REST API and AWS Lambda functions to manage incoming requests. The company wants to add a service that can send messages received from the API Gateway REST API to multiple target Lambda functions for processing. The service must offer message filtering that gives the target Lambda functions the ability to receive only the messages the functions need. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Send the requests from the API Gateway REST API to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe Amazon Simple Queue Service (Amazon SQS) queues to the SNS topic. Configure the target Lambda functions to poll the different SQS queues.
- **B.** Send the requests from the API Gateway REST API to Amazon EventBridge. Configure EventBridge to invoke the target Lambda functions.
- **C.** Send the requests from the API Gateway REST API to Amazon Managed Streaming for Apache Kafka (Amazon MSK). Configure Amazon MSK to publish the messages to the target Lambda functions.
- **D.** Send the requests from the API Gateway REST API to multiple Amazon Simple Queue Service (Amazon SQS) queues. Configure the target Lambda functions to poll the different SQS queues.

**17.** A company wants to use an AWS CloudFormation stack for its application in a test environment. The company stores the CloudFormation template in an Amazon S3 bucket that blocks public access. The company wants to grant CloudFormation access to the template in the S3 bucket based on specific user requests to create the test environment. The solution must follow security best practices. Which solution will meet these requirements?

- **A.** Create a gateway VPC endpoint for Amazon S3. Configure the CloudFormation stack to use the S3 object URL.
- **B.** Create an Amazon API Gateway REST API that has the S3 bucket as the target. Configure the CloudFormation stack to use the API Gateway URL.
- **C.** Create a presigned URL for the template object. Configure the CloudFormation stack to use the presigned URL.
- **D.** Allow public access to the template object in the S3 bucket. Block the public access after the test environment is created.

**18.** A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead. How should a solutions architect accomplish this?

- **A.** Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue.
- **B.** Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.
- **C.** Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.
- **D.** Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.

**19.** A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis. The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days. What is the MOST operationally efficient solution that meets these requirements?

- **A.** Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.
- **B.** Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.
- **C.** Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days.
- **D.** Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue.

**20.** A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances. The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS). What should a solutions architect recommend for communication between the microservices?

- **A.** Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue.
- **B.** Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic.
- **C.** Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.
- **D.** Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.

**21.** A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate. What should a solutions architect recommend to meet this requirement?

- **A.** Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.
- **B.** Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.
- **C.** Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).
- **D.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).

**22.** A global marketing company has applications that run in the ap-southeast-2 Region and the eu-west-1 Region. Applications that run in a VPC in eu-west-1 need to communicate securely with databases that run in a VPC in ap-southeast-2. Which network design will meet these requirements?

- **A.** Create a VPC peering connection between the eu-west-1 VPC and the ap-southeast-2 VPC. Create an inbound rule in the eu-west-1 application security group that allows traffic from the database server IP addresses in the ap-southeast-2 security group.
- **B.** Configure a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1 VPC. Update the subnet route tables. Create an inbound rule in the ap-southeast-2 database security group that references the security group ID of the application servers in eu-west-1.
- **C.** Configure a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1 VPUpdate the subnet route tables. Create an inbound rule in the ap-southeast-2 database security group that allows traffic from the eu-west-1 application server IP addresses.
- **D.** Create a transit gateway with a peering attachment between the eu-west-1 VPC and the ap-southeast-2 VPC. After the transit gateways are properly peered and routing is configured, create an inbound rule in the database security group that references the security group ID of the application servers in eu-west-1.

**23.** A solutions architect needs to optimize storage costs. The solutions architect must identify any Amazon S3 buckets that are no longer being accessed or are rarely accessed. Which solution will accomplish this goal with the LEAST operational overhead?

- **A.** Analyze bucket access patterns by using the S3 Storage Lens dashboard for advanced activity metrics.
- **B.** Analyze bucket access patterns by using the S3 dashboard in the AWS Management Console.
- **C.** Turn on the Amazon CloudWatch BucketSizeBytes metric for buckets. Analyze bucket access patterns by using the metrics data with Amazon Athena.
- **D.** Turn on AWS CloudTrail for S3 object monitoring. Analyze bucket access patterns by using CloudTrail logs that are integrated with Amazon CloudWatch Logs.

**24.** A company needs to provide its employees with secure access to confidential and sensitive files. The company wants to ensure that the files can be accessed only by authorized users. The files must be downloaded securely to the employees’ devices. The files are stored in an on-premises Windows file server. However, due to an increase in remote usage, the file server is running out of capacity. . Which solution will meet these requirements?

- **A.** Migrate the file server to an Amazon EC2 instance in a public subnet. Configure the security group to limit inbound traffic to the employees’ IP addresses.
- **B.** Migrate the files to an Amazon FSx for Windows File Server file system. Integrate the Amazon FSx file system with the on-premises Active Directory. Configure AWS Client VPN.
- **C.** Migrate the files to Amazon S3, and create a private VPC endpoint. Create a signed URL to allow download.
- **D.** Migrate the files to Amazon S3, and create a public VPC endpoint. Allow employees to sign on with AWS IAM Identity Center (AWS Single Sign-On).

**25.** A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its on-premises application in a hybrid environment. The application currently runs on containers on premises. The company needs a single container solution that can scale in an on-premises, hybrid, or cloud environment. The company must run new application containers in the AWS Cloud and must use a load balancer for HTTP traffic. Which combination of actions will meet these requirements? (Choose two.)

- **A.** Set up an ECS cluster that uses the AWS Fargate launch type for the cloud application containers. Use an Amazon ECS Anywhere external launch type for the on-premises application containers.
- **B.** Set up an Application Load Balancer for cloud ECS services.
- **C.** Set up a Network Load Balancer for cloud ECS services.
- **D.** Set up an ECS cluster that uses the AWS Fargate launch type. Use Fargate for the cloud application containers and the on-premises application containers.
- **E.** Set up an ECS cluster that uses the Amazon EC2 launch type for the cloud application containers. Use Amazon ECS Anywhere with an AWS Fargate launch type for the on-premises application containers.

**26.** A company hosts a web application on multiple Amazon EC2 instances. The EC2 instances are in an Auto Scaling group that scales in response to user demand. The company wants to optimize cost savings without making a long-term commitment. Which EC2 instance purchasing option should a solutions architect recommend to meet these requirements?

- **A.** Dedicated Instances only
- **B.** On-Demand Instances only
- **C.** A mix of On-Demand Instances and Spot Instances
- **D.** A mix of On-Demand Instances and Reserved Instances

**27.** A company uses Amazon RDS for PostgreSQL databases for its data tier. The company must implement password rotation for the databases. Which solution meets this requirement with the LEAST operational overhead?

- **A.** Store the password in AWS Secrets Manager. Enable automatic rotation on the secret.
- **B.** Store the password in AWS Systems Manager Parameter Store. Enable automatic rotation on the parameter.
- **C.** Store the password in AWS Systems Manager Parameter Store. Write an AWS Lambda function that rotates the password.
- **D.** Store the password in AWS Key Management Service (AWS KMS). Enable automatic rotation on the AWS KMS key.

**28.** A company hosts an application on Amazon EC2 On-Demand Instances in an Auto Scaling group. Application peak hours occur at the same time each day. Application users report slow application performance at the start of peak hours. The application performs normally 2-3 hours after peak hours begin. The company wants to ensure that the application works properly at the start of peak hours. Which solution will meet these requirements?

- **A.** Configure an Application Load Balancer to distribute traffic properly to the instances.
- **B.** Configure a dynamic scaling policy for the Auto Scaling group to launch new instances based on memory utilization.
- **C.** Configure a dynamic scaling policy for the Auto Scaling group to launch new instances based on CPU utilization.
- **D.** Configure a scheduled scaling policy for the Auto Scaling group to launch new instances before peak hours.

**29.** A company hosts an application on Amazon EC2 instances that run in a single Availability Zone. The application is accessible by using the transport layer of the Open Systems Interconnection (OSI) model. The company needs the application architecture to have high availability. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

- **A.** Configure new EC2 instances in a different Availability Zone. Use Amazon Route 53 to route traffic to all instances.
- **B.** Configure a Network Load Balancer in front of the EC2 instances.
- **C.** Configure a Network Load Balancer for TCP traffic to the instances. Configure an Application Load Balancer for HTTP and HTTPS traffic to the instances.
- **D.** Create an Auto Scaling group for the EC2 instances. Configure the Auto Scaling group to use multiple Availability Zones. Configure the Auto Scaling group to run application health checks on the instances.
- **E.** Create an Amazon CloudWatch alarm. Configure the alarm to restart EC2 instances that transition to a stopped state.

**30.** A company is building a data analysis platform on AWS by using AWS Lake Formation. The platform will ingest data from different sources such as Amazon S3 and Amazon RDS. The company needs a secure solution to prevent access to portions of the data that contain sensitive information. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create an IAM role that includes permissions to access Lake Formation tables.
- **B.** Create data filters to implement row-level security and cell-level security.
- **C.** Create an AWS Lambda function that removes sensitive information before Lake Formation ingests the data.
- **D.** Create an AWS Lambda function that periodically queries and removes sensitive information from Lake Formation tables.

**31.** A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule.
- **B.** Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.
- **C.** Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.
- **D.** Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets.

**32.** A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same AWS Region where the AMIs were created. The company needs to design an application that captures AWS API calls and sends alerts whenever the Amazon EC2 CreateImage API operation is called within the company’s account. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API call is detected.
- **B.** Configure AWS CloudTrail with an Amazon Simple Notification Service (Amazon SNS) notification that occurs when updated logs are sent to Amazon S3. Use Amazon Athena to create a new table and to query on CreateImage when an API call is detected.
- **C.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Configure the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call is detected.
- **D.** Configure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs. Create an AWS Lambda function to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic when a CreateImage API call is detected.

**33.** A company has an on-premises server that uses an Oracle database to process and store customer information. The company wants to use an AWS database service to achieve higher availability and to improve application performance. The company also wants to offload reporting from its primary database system. Which solution will meet these requirements in the MOST operationally efficient way?

- **A.** Use AWS Database Migration Service (AWS DMS) to create an Amazon RDS DB instance in multiple AWS Regions. Point the reporting functions toward a separate DB instance from the primary DB instance.
- **B.** Use Amazon RDS in a Single-AZ deployment to create an Oracle database. Create a read replica in the same zone as the primary DB instance. Direct the reporting functions to the read replica.
- **C.** Use Amazon RDS deployed in a Multi-AZ cluster deployment to create an Oracle database. Direct the reporting functions to use the reader instance in the cluster deployment.
- **D.** Use Amazon RDS deployed in a Multi-AZ instance deployment to create an Amazon Aurora database. Direct the reporting functions to the reader instances.

**34.** As part of budget planning, management wants a report of AWS billed items listed by user. The data will be used to create department budgets. A solutions architect needs to determine the most efficient way to obtain this report information. Which solution meets these requirements?

- **A.** Run a query with Amazon Athena to generate the report.
- **B.** Create a report in Cost Explorer and download the report.
- **C.** Access the bill details from the billing dashboard and download the bill.
- **D.** Modify a cost budget in AWS Budgets to alert with Amazon Simple Email Service (Amazon SES).

**35.** A company runs a highly available web application on Amazon EC2 instances behind an Application Load Balancer. The company uses Amazon CloudWatch metrics. As the traffic to the web application increases, some EC2 instances become overloaded with many outstanding requests. The CloudWatch metrics show that the number of requests processed and the time to receive the responses from some EC2 instances are both higher compared to other EC2 instances. The company does not want new requests to be forwarded to the EC2 instances that are already overloaded. Which solution will meet these requirements?

- **A.** Use the round robin routing algorithm based on the RequestCountPerTarget and ActiveConnectionCount CloudWatch metrics.
- **B.** Use the least outstanding requests algorithm based on the RequestCountPerTarget and ActiveConnectionCount CloudWatch metrics.
- **C.** Use the round robin routing algorithm based on the RequestCount and TargetResponseTime CloudWatch metrics.
- **D.** Use the least outstanding requests algorithm based on the RequestCount and TargetResponseTime CloudWatch metrics.

**36.** A company uses a Microsoft SQL Server database. The company's applications are connected to the database. The company wants to migrate to an Amazon Aurora PostgreSQL database with minimal changes to the application code. Which combination of steps will meet these requirements? (Choose two.)

- **A.** Use the AWS Schema Conversion Tool (AWS SCT) to rewrite the SQL queries in the applications.
- **B.** Enable Babelfish on Aurora PostgreSQL to run the SQL queries from the applications.
- **C.** Migrate the database schema and data by using the AWS Schema Conversion Tool (AWS SCT) and AWS Database Migration Service (AWS DMS).
- **D.** Use Amazon RDS Proxy to connect the applications to Aurora PostgreSQL.
- **E.** Use AWS Database Migration Service (AWS DMS) to rewrite the SQL queries in the applications.

**37.** A company runs a public three-tier web application in a VPC. The application runs on Amazon EC2 instances across multiple Availability Zones. The EC2 instances that run in private subnets need to communicate with a license server over the internet. The company needs a managed solution that minimizes operational maintenance. Which solution meets these requirements?

- **A.** Provision a NAT instance in a public subnet. Modify each private subnet's route table with a default route that points to the NAT instance.
- **B.** Provision a NAT instance in a private subnet. Modify each private subnet's route table with a default route that points to the NAT instance.
- **C.** Provision a NAT gateway in a public subnet. Modify each private subnet's route table with a default route that points to the NAT gateway.
- **D.** Provision a NAT gateway in a private subnet. Modify each private subnet's route table with a default route that points to the NAT gateway.

**38.** A company has a regional subscription-based streaming service that runs in a single AWS Region. The architecture consists of web servers and application servers on Amazon EC2 instances. The EC2 instances are in Auto Scaling groups behind Elastic Load Balancers. The architecture includes an Amazon Aurora global database cluster that extends across multiple Availability Zones. The company wants to expand globally and to ensure that its application has minimal downtime. Which solution will provide the MOST fault tolerance?

- **A.** Extend the Auto Scaling groups for the web tier and the application tier to deploy instances in Availability Zones in a second Region. Use an Aurora global database to deploy the database in the primary Region and the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region.
- **B.** Deploy the web tier and the application tier to a second Region. Add an Aurora PostgreSQL cross-Region Aurora Replica in the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region. Promote the secondary to primary as needed.
- **C.** Deploy the web tier and the application tier to a second Region. Create an Aurora PostgreSQL database in the second Region. Use AWS Database Migration Service (AWS DMS) to replicate the primary database to the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region.
- **D.** Deploy the web tier and the application tier to a second Region. Use an Amazon Aurora global database to deploy the database in the primary Region and the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region. Promote the secondary to primary as needed.

**39.** A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use anymore. Which set of services should a solutions architect recommend to meet these requirements?

- **A.** Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage
- **B.** Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage
- **C.** Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage
- **D.** Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage

**40.** An ecommerce company wants to use machine learning (ML) algorithms to build and train models. The company will use the models to visualize complex scenarios and to detect trends in customer data. The architecture team wants to integrate its ML models with a reporting platform to analyze the augmented data and use the data directly in its business intelligence dashboards. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use AWS Glue to create an ML transform to build and train models. Use Amazon OpenSearch Service to visualize the data.
- **B.** Use Amazon SageMaker to build and train models. Use Amazon QuickSight to visualize the data.
- **C.** Use a pre-built ML Amazon Machine Image (AMI) from the AWS Marketplace to build and train models. Use Amazon OpenSearch Service to visualize the data.
- **D.** Use Amazon QuickSight to build and train models by using calculated fields. Use Amazon QuickSight to visualize the data.

**41.** A company runs applications on Amazon EC2 instances in one AWS Region. The company wants to back up the EC2 instances to a second Region. The company also wants to provision EC2 resources in the second Region and manage the EC2 instances centrally from one AWS account. Which solution will meet these requirements MOST cost-effectively?

- **A.** Create a disaster recovery (DR) plan that has a similar number of EC2 instances in the second Region. Configure data replication.
- **B.** Create point-in-time Amazon Elastic Block Store (Amazon EBS) snapshots of the EC2 instances. Copy the snapshots to the second Region periodically.
- **C.** Create a backup plan by using AWS Backup. Configure cross-Region backup to the second Region for the EC2 instances.
- **D.** Deploy a similar number of EC2 instances in the second Region. Use AWS DataSync to transfer the data from the source Region to the second Region.

**42.** A company hosts a data lake on Amazon S3. The data lake ingests data in Apache Parquet format from various data sources. The company uses multiple transformation steps to prepare the ingested data. The steps include filtering of anomalies, normalizing of data to standard date and time values, and generation of aggregates for analyses. The company must store the transformed data in S3 buckets that data analysts access. The company needs a prebuilt solution for data transformation that does not require code. The solution must provide data lineage and data profiling. The company needs to share the data transformation steps with employees throughout the company. Which solution will meet these requirements?

- **A.** Configure an AWS Glue Studio visual canvas to transform the data. Share the transformation steps with employees by using AWS Glue jobs.
- **B.** Configure Amazon EMR Serverless to transform the data. Share the transformation steps with employees by using EMR Serverless jobs.
- **C.** Configure AWS Glue DataBrew to transform the data. Share the transformation steps with employees by using DataBrew recipes.
- **D.** Create Amazon Athena tables for the data. Write Athena SQL queries to transform the data. Share the Athena SQL queries with employees.

**43.** A company recently performed a lift and shift migration of its on-premises Oracle database workload to run on an Amazon EC2 memory optimized Linux instance. The EC2 Linux instance uses a 1 TB Provisioned IOPS SSD (io1) EBS volume with 64,000 IOPS. The database storage performance after the migration is slower than the performance of the on-premises database. Which solution will improve storage performance?

- **A.** Add more Provisioned IOPS SSD (io1) EBS volumes. Use OS commands to create a Logical Volume Management (LVM) stripe.
- **B.** Increase the Provisioned IOPS SSD (io1) EBS volume to more than 64,000 IOPS.
- **C.** Increase the size of the Provisioned IOPS SSD (io1) EBS volume to 2 TB.
- **D.** Change the EC2 Linux instance to a storage optimized instance type. Do not change the Provisioned IOPS SSD (io1) EBS volume.

**44.** A company runs an application on several Amazon EC2 instances that store persistent data on an Amazon Elastic File System (Amazon EFS) file system. The company needs to replicate the data to another AWS Region by using an AWS managed service solution. Which solution will meet these requirements MOST cost-effectively?

- **A.** Use the EFS-to-EFS backup solution to replicate the data to an EFS file system in another Region.
- **B.** Run a nightly script to copy data from the EFS file system to an Amazon S3 bucket. Enable S3 Cross-Region Replication on the S3 bucket.
- **C.** Create a VPC in another Region. Establish a cross-Region VPC peer. Run a nightly rsync to copy data from the original Region to the new Region.
- **D.** Use AWS Backup to create a backup plan with a rule that takes a daily backup and replicates it to another Region. Assign the EFS file system resource to the backup plan.

**45.** A company uses AWS Systems Manager for routine management and patching of Amazon EC2 instances. The EC2 instances are in an IP address type target group behind an Application Load Balancer (ALB). New security protocols require the company to remove EC2 instances from service during a patch. When the company attempts to follow the security protocol during the next patch, the company receives errors during the patching window. Which combination of solutions will resolve the errors? (Choose two.)

- **A.** Change the target type of the target group from IP address type to instance type.
- **B.** Continue to use the existing Systems Manager document without changes because it is already optimized to handle instances that are in an IP address type target group behind an ALB.
- **C.** Implement the AWSEC2-PatchLoadBalanacerInstance Systems Manager Automation document to manage the patching process.
- **D.** Use Systems Manager Maintenance Windows to automatically remove the instances from service to patch the instances.
- **E.** Configure Systems Manager State Manager to remove the instances from service and manage the patching schedule. Use ALB health checks to re-route traffic.

**46.** A company needs a backup strategy for its three-tier stateless web application. The web application runs on Amazon EC2 instances in an Auto Scaling group with a dynamic scaling policy that is configured to respond to scaling events. The database tier runs on Amazon RDS for PostgreSQL. The web application does not require temporary local storage on the EC2 instances. The company’s recovery point objective (RPO) is 2 hours. The backup strategy must maximize scalability and optimize resource utilization for this environment. Which solution will meet these requirements?

- **A.** Take snapshots of Amazon Elastic Block Store (Amazon EBS) volumes of the EC2 instances and database every 2 hours to meet the RPO.
- **B.** Configure a snapshot lifecycle policy to take Amazon Elastic Block Store (Amazon EBS) snapshots. Enable automated backups in Amazon RDS to meet the RPO.
- **C.** Retain the latest Amazon Machine Images (AMIs) of the web and application tiers. Enable automated backups in Amazon RDS and use point-in-time recovery to meet the RPO.
- **D.** Take snapshots of Amazon Elastic Block Store (Amazon EBS) volumes of the EC2 instances every 2 hours. Enable automated backups in Amazon RDS and use point-in-time recovery to meet the RPO.

**47.** A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit's account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators. Which solution will meet these requirements?

- **A.** Configure the company’s email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.
- **B.** Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.
- **C.** Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups.
- **D.** Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.

**48.** A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement. new documents cannot be modified or deleted after they are stored. What should a solutions architect do to meet this requirement?

- **A.** Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled.
- **B.** Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically.
- **C.** Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only.
- **D.** Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read- only mode.

**49.** A company runs its legacy web application on AWS. The web application server runs on an Amazon EC2 instance in the public subnet of a VPC. The web application server collects images from customers and stores the image files in a locally attached Amazon Elastic Block Store (Amazon EBS) volume. The image files are uploaded every night to an Amazon S3 bucket for backup. A solutions architect discovers that the image files are being uploaded to Amazon S3 through the public endpoint. The solutions architect needs to ensure that traffic to Amazon S3 does not use the public endpoint. Which solution will meet these requirements?

- **A.** Create a gateway VPC endpoint for the S3 bucket that has the necessary permissions for the VPC. Configure the subnet route table to use the gateway VPC endpoint.
- **B.** Move the S3 bucket inside the VPC. Configure the subnet route table to access the S3 bucket through private IP addresses.
- **C.** Create an Amazon S3 access point for the Amazon EC2 instance inside the VPConfigure the web application to upload by using the Amazon S3 access point.
- **D.** Configure an AWS Direct Connect connection between the VPC that has the Amazon EC2 instance and Amazon S3 to provide a dedicated network path.

**50.** A company recently migrated its entire IT environment to the AWS Cloud. The company discovers that users are provisioning oversized Amazon EC2 instances and modifying security group rules without using the appropriate change control process. A solutions architect must devise a strategy to track and audit these inventory and configuration changes. Which actions should the solutions architect take to meet these requirements? (Choose two.)

- **A.** Enable AWS CloudTrail and use it for auditing.
- **B.** Use data lifecycle policies for the Amazon EC2 instances.
- **C.** Enable AWS Trusted Advisor and reference the security dashboard.
- **D.** Enable AWS Config and create rules for auditing and compliance purposes.
- **E.** Restore previous resource configurations with an AWS CloudFormation template.

**51.** A company's application runs on Amazon EC2 instances that are in multiple Availability Zones. The application needs to ingest real-time data from third-party applications. The company needs a data ingestion solution that places the ingested raw data in an Amazon S3 bucket. Which solution will meet these requirements?

- **A.** Create Amazon Kinesis data streams for data ingestion. Create Amazon Kinesis Data Firehose delivery streams to consume the Kinesis data streams. Specify the S3 bucket as the destination of the delivery streams.
- **B.** Create database migration tasks in AWS Database Migration Service (AWS DMS). Specify replication instances of the EC2 instances as the source endpoints. Specify the S3 bucket as the target endpoint. Set the migration type to migrate existing data and replicate ongoing changes.
- **C.** Create and configure AWS DataSync agents on the EC2 instances. Configure DataSync tasks to transfer data from the EC2 instances to the S3 bucket.
- **D.** Create an AWS Direct Connect connection to the application for data ingestion. Create Amazon Kinesis Data Firehose delivery streams to consume direct PUT operations from the application. Specify the S3 bucket as the destination of the delivery streams.

**52.** A company has a workload in an AWS Region. Customers connect to and access the workload by using an Amazon API Gateway REST API. The company uses Amazon Route 53 as its DNS provider. The company wants to provide individual and secure URLs for all customers. Which combination of steps will meet these requirements with the MOST operational efficiency? (Choose three.)

- **A.** Register the required domain in a registrar. Create a wildcard custom domain name in a Route 53 hosted zone and record in the zone that points to the API Gateway endpoint.
- **B.** Request a wildcard certificate that matches the domains in AWS Certificate Manager (ACM) in a different Region.
- **C.** Create hosted zones for each customer as required in Route 53. Create zone records that point to the API Gateway endpoint.
- **D.** Request a wildcard certificate that matches the custom domain name in AWS Certificate Manager (ACM) in the same Region.
- **E.** Create multiple API endpoints for each customer in API Gateway.
- **F.** Create a custom domain name in API Gateway for the REST API. Import the certificate from AWS Certificate Manager (ACM).

**53.** A solutions architect has created two IAM policies: Policy1 and Policy2. Both policies are attached to an IAM group. A cloud engineer is added as an IAM user to the IAM group. Which action will the cloud engineer be able to perform?

- **A.** Deleting IAM users
- **B.** Deleting directories
- **C.** Deleting Amazon EC2 instances
- **D.** Deleting logs from Amazon CloudWatch Logs

**54.** A company wants to experiment with individual AWS accounts for its engineer team. The company wants to be notified as soon as the Amazon EC2 instance usage for a given month exceeds a specific threshold for each account. What should a solutions architect do to meet this requirement MOST cost-effectively?

- **A.** Use Cost Explorer to create a daily report of costs by service. Filter the report by EC2 instances. Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is exceeded.
- **B.** Use Cost Explorer to create a monthly report of costs by service. Filter the report by EC2 instances. Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is exceeded.
- **C.** Use AWS Budgets to create a cost budget for each account. Set the period to monthly. Set the scope to EC2 instances. Set an alert threshold for the budget. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded.
- **D.** Use AWS Cost and Usage Reports to create a report with hourly granularity. Integrate the report data with Amazon Athena. Use Amazon EventBridge to schedule an Athena query. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded.

**55.** A company wants to use the AWS Cloud to improve its on-premises disaster recovery (DR) configuration. The company's core production business application uses Microsoft SQL Server Standard, which runs on a virtual machine (VM). The application has a recovery point objective (RPO) of 30 seconds or fewer and a recovery time objective (RTO) of 60 minutes. The DR solution needs to minimize costs wherever possible. Which solution will meet these requirements?

- **A.** Configure a multi-site active/active setup between the on-premises server and AWS by using Microsoft SQL Server Enterprise with Always On availability groups.
- **B.** Configure a warm standby Amazon RDS for SQL Server database on AWS. Configure AWS Database Migration Service (AWS DMS) to use change data capture (CDC).
- **C.** Use AWS Elastic Disaster Recovery configured to replicate disk changes to AWS as a pilot light.
- **D.** Use third-party backup software to capture backups every night. Store a secondary set of backups in Amazon S3.

**56.** A payment processing company records all voice communication with its customers and stores the audio files in an Amazon S3 bucket. The company needs to capture the text from the audio files. The company must remove from the text any personally identifiable information (PII) that belongs to customers. What should a solutions architect do to meet these requirements?

- **A.** Process the audio files by using Amazon Kinesis Video Streams. Use an AWS Lambda function to scan for known PII patterns.
- **B.** When an audio file is uploaded to the S3 bucket, invoke an AWS Lambda function to start an Amazon Textract task to analyze the call recordings.
- **C.** Configure an Amazon Transcribe transcription job with PII redaction turned on. When an audio file is uploaded to the S3 bucket, invoke an AWS Lambda function to start the transcription job. Store the output in a separate S3 bucket.
- **D.** Create an Amazon Connect contact flow that ingests the audio files with transcription turned on. Embed an AWS Lambda function to scan for known PII patterns. Use Amazon EventBridge to start the contact flow when an audio file is uploaded to the S3 bucket.

**57.** A solutions architect is designing a disaster recovery (DR) strategy to provide Amazon EC2 capacity in a failover AWS Region. Business requirements state that the DR strategy must meet capacity in the failover Region. Which solution will meet these requirements?

- **A.** Purchase On-Demand Instances in the failover Region.
- **B.** Purchase an EC2 Savings Plan in the failover Region.
- **C.** Purchase regional Reserved Instances in the failover Region.
- **D.** Purchase a Capacity Reservation in the failover Region.

**58.** A company uses AWS to host its public ecommerce website. The website uses an AWS Global Accelerator accelerator for traffic from the internet. The Global Accelerator accelerator forwards the traffic to an Application Load Balancer (ALB) that is the entry point for an Auto Scaling group. The company recently identified a DDoS attack on the website. The company needs a solution to mitigate future attacks. Which solution will meet these requirements with the LEAST implementation effort?

- **A.** Configure an AWS WAF web ACL for the Global Accelerator accelerator to block traffic by using rate-based rules
- **B.** Configure an AWS Lambda function to read the ALB metrics to block attacks by updating a VPC network ACL
- **C.** Configure an AWS WAF web ACL on the ALB to block traffic by using rate-based rules
- **D.** Configure an Amazon CloudFront distribution in front of the Global Accelerator accelerator

**59.** A company runs an application that receives data from thousands of geographically dispersed remote devices that use UDP. The application processes the data immediately and sends a message back to the device if necessary. No data is stored. The company needs a solution that minimizes latency for the data transmission from the devices. The solution also must provide rapid failover to another AWS Region. Which solution will meet these requirements?

- **A.** Configure an Amazon Route 53 failover routing policy. Create a Network Load Balancer (NLB) in each of the two Regions. Configure the NLB to invoke an AWS Lambda function to process the data.
- **B.** Use AWS Global Accelerator. Create a Network Load Balancer (NLB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the NLProcess the data in Amazon ECS.
- **C.** Use AWS Global Accelerator. Create an Application Load Balancer (ALB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon ECS.
- **D.** Configure an Amazon Route 53 failover routing policy. Create an Application Load Balancer (ALB) in each of the two Regions. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon ECS.

**60.** A company uses an AWS Batch job to run its end-of-day sales process. The company needs a serverless solution that will invoke a third-party reporting application when the AWS Batch job is successful. The reporting application has an HTTP API interface that uses username and password authentication. Which solution will meet these requirements?

- **A.** Configure an Amazon EventBridge rule to match incoming AWS Batch job SUCCEEDED events. Configure the third-party API as an EventBridge API destination with a username and password. Set the API destination as the EventBridge rule target.
- **B.** Configure Amazon EventBridge Scheduler to match incoming AWS Batch job SUCCEEDED events. Configure an AWS Lambda function to invoke the third-party API by using a username and password. Set the Lambda function as the EventBridge rule target.
- **C.** Configure an AWS Batch job to publish job SUCCEEDED events to an Amazon API Gateway REST API. Configure an HTTP proxy integration on the API Gateway REST API to invoke the third-party API by using a username and password.
- **D.** Configure an AWS Batch job to publish job SUCCEEDED events to an Amazon API Gateway REST API. Configure a proxy integration on the API Gateway REST API to an AWS Lambda function. Configure the Lambda function to invoke the third-party API by using a username and password.

**61.** A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.
- **B.** Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.
- **C.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service (Amazon SNS) topic as the second rule's target.
- **D.** Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.

**62.** A company is deploying an application that processes streaming data in near-real time. The company plans to use Amazon EC2 instances for the workload. The network architecture must be configurable to provide the lowest possible latency between nodes. Which combination of network solutions will meet these requirements? (Choose two.)

- **A.** Enable and configure enhanced networking on each EC2 instance.
- **B.** Group the EC2 instances in separate accounts.
- **C.** Run the EC2 instances in a cluster placement group.
- **D.** Attach multiple elastic network interfaces to each EC2 instance.
- **E.** Use Amazon Elastic Block Store (Amazon EBS) optimized instance types.

**63.** A company seeks a storage solution for its application. The solution must be highly available and scalable. The solution also must function as a file system be mountable by multiple Linux instances in AWS and on premises through native protocols, and have no minimum size requirements. The company has set up a Site-to-Site VPN for access from its on-premises network to its VPC. Which storage solution meets these requirements?

- **A.** Amazon FSx Multi-AZ deployments
- **B.** Amazon Elastic Block Store (Amazon EBS) Multi-Attach volumes
- **C.** Amazon Elastic File System (Amazon EFS) with multiple mount targets
- **D.** Amazon Elastic File System (Amazon EFS) with a single mount target and multiple access points

**64.** A company’s application is deployed on Amazon EC2 instances and uses AWS Lambda functions for an event-driven architecture. The company uses nonproduction development environments in a different AWS account to test new features before the company deploys the features to production. The production instances show constant usage because of customers in different time zones. The company uses nonproduction instances only during business hours on weekdays. The company does not use the nonproduction instances on the weekends. The company wants to optimize the costs to run its application on AWS. Which solution will meet these requirements MOST cost-effectively?

- **A.** Use On-Demand Instances for the production instances. Use Dedicated Hosts for the nonproduction instances on weekends only.
- **B.** Use Reserved Instances for the production instances and the nonproduction instances. Shut down the nonproduction instances when not in use.
- **C.** Use Compute Savings Plans for the production instances. Use On-Demand Instances for the nonproduction instances. Shut down the nonproduction instances when not in use.
- **D.** Use Dedicated Hosts for the production instances. Use EC2 Instance Savings Plans for the nonproduction instances.

**65.** A company has an organization in AWS Organizations. The company runs Amazon EC2 instances across four AWS accounts in the root organizational unit (OU). There are three nonproduction accounts and one production account. The company wants to prohibit users from launching EC2 instances of a certain size in the nonproduction accounts. The company has created a service control policy (SCP) to deny access to launch instances that use the prohibited types. Which solutions to deploy the SCP will meet these requirements? (Choose two.)

- **A.** Attach the SCP to the root OU for the organization.
- **B.** Attach the SCP to the three nonproduction Organizations member accounts.
- **C.** Attach the SCP to the Organizations management account.
- **D.** Create an OU for the production account. Attach the SCP to the OU. Move the production member account into the new OU.
- **E.** Create an OU for the required accounts. Attach the SCP to the OU. Move the nonproduction member accounts into the new OU.

---

## Answer key -- Exam 1

`Consensus` is the share of ExamTopics voters choosing that answer. Anything
below 70% is genuinely contested -- open the discussion link before trusting it.

| # | Answer | Domain | Consensus | Source |
|---:|---|---|---:|---|
| 1 | **C** | 3. Design High-Performing Architectures | 95% | [Q810](https://www.examtopics.com/discussions/amazon/view/135264-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 2 | **D** | 1. Design Secure Architectures | 97% | [Q388](https://www.examtopics.com/discussions/amazon/view/102156-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 3 | **D** | 3. Design High-Performing Architectures | 96% | [Q123](https://www.examtopics.com/discussions/amazon/view/85943-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 4 | **B** | 1. Design Secure Architectures | 89% | [Q982](https://www.examtopics.com/discussions/amazon/view/148505-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 5 | **B** | 2. Design Resilient Architectures | 82% | [Q764](https://www.examtopics.com/discussions/amazon/view/132954-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 6 | **A** | 4. Design Cost-Optimized Architectures | 96% | [Q579](https://www.examtopics.com/discussions/amazon/view/116924-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 7 | **C** | 2. Design Resilient Architectures | 100% | [Q784](https://www.examtopics.com/discussions/amazon/view/133019-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 8 | **B** | 2. Design Resilient Architectures | 94% | [Q312](https://www.examtopics.com/discussions/amazon/view/99785-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 9 | **D** | 4. Design Cost-Optimized Architectures | 79% | [Q536](https://www.examtopics.com/discussions/amazon/view/111435-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 10 | **A** | 4. Design Cost-Optimized Architectures | 69% ⚠ | [Q975](https://www.examtopics.com/discussions/amazon/view/145367-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 11 | **B** | 2. Design Resilient Architectures | 100% | [Q901](https://www.examtopics.com/discussions/amazon/view/139853-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 12 | **D** | 3. Design High-Performing Architectures | 75% | [Q64](https://www.examtopics.com/discussions/amazon/view/85173-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 13 | **A** | 3. Design High-Performing Architectures | 85% | [Q903](https://www.examtopics.com/discussions/amazon/view/139857-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 14 | **C** | 1. Design Secure Architectures | 80% | [Q100](https://www.examtopics.com/discussions/amazon/view/85186-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 15 | **B** | 1. Design Secure Architectures | 88% | [Q623](https://www.examtopics.com/discussions/amazon/view/121172-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 16 | **A** | 2. Design Resilient Architectures | 50% ⚠ | [Q739](https://www.examtopics.com/discussions/amazon/view/132929-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 17 | **C** | 1. Design Secure Architectures | 71% | [Q907](https://www.examtopics.com/discussions/amazon/view/145006-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 18 | **A** | 2. Design Resilient Architectures | 100% | [Q149](https://www.examtopics.com/discussions/amazon/view/86784-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 19 | **A** | 4. Design Cost-Optimized Architectures | 87% | [Q40](https://www.examtopics.com/discussions/amazon/view/85204-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 20 | **A** | 2. Design Resilient Architectures | 95% | [Q181](https://www.examtopics.com/discussions/amazon/view/87647-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 21 | **B** | 1. Design Secure Architectures | 49% ⚠ | [Q82](https://www.examtopics.com/discussions/amazon/view/85615-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 22 | **C** | 1. Design Secure Architectures | 89% | [Q510](https://www.examtopics.com/discussions/amazon/view/109708-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 23 | **A** | 4. Design Cost-Optimized Architectures | 94% | [Q309](https://www.examtopics.com/discussions/amazon/view/99803-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 24 | **B** | 1. Design Secure Architectures | 93% | [Q332](https://www.examtopics.com/discussions/amazon/view/99792-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 25 | **A B** | 2. Design Resilient Architectures | 100% | [Q900](https://www.examtopics.com/discussions/amazon/view/140210-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 26 | **C** | 4. Design Cost-Optimized Architectures | 94% | [Q290](https://www.examtopics.com/discussions/amazon/view/100006-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 27 | **A** | 1. Design Secure Architectures | 100% | [Q847](https://www.examtopics.com/discussions/amazon/view/138644-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 28 | **D** | 3. Design High-Performing Architectures | 100% | [Q660](https://www.examtopics.com/discussions/amazon/view/126994-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 29 | **B D** | 4. Design Cost-Optimized Architectures | 100% | [Q876](https://www.examtopics.com/discussions/amazon/view/137849-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 30 | **B** | 1. Design Secure Architectures | 100% | [Q609](https://www.examtopics.com/discussions/amazon/view/121162-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 31 | **A** | 1. Design Secure Architectures | 100% | [Q13](https://www.examtopics.com/discussions/amazon/view/84728-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 32 | **C** | 2. Design Resilient Architectures | 77% | [Q206](https://www.examtopics.com/discussions/amazon/view/89086-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 33 | **D** | 3. Design High-Performing Architectures | 72% | [Q540](https://www.examtopics.com/discussions/amazon/view/111439-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 34 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q284](https://www.examtopics.com/discussions/amazon/view/99513-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 35 | **B** | 2. Design Resilient Architectures | 80% | [Q714](https://www.examtopics.com/discussions/amazon/view/132887-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 36 | **B C** | 3. Design High-Performing Architectures | 100% | [Q886](https://www.examtopics.com/discussions/amazon/view/139802-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 37 | **C** | 4. Design Cost-Optimized Architectures | 100% | [Q370](https://www.examtopics.com/discussions/amazon/view/102134-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 38 | **D** | 2. Design Resilient Architectures | 95% | [Q527](https://www.examtopics.com/discussions/amazon/view/111428-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 39 | **D** | 3. Design High-Performing Architectures | 57% ⚠ | [Q127](https://www.examtopics.com/discussions/amazon/view/85432-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 40 | **B** | 3. Design High-Performing Architectures | 100% | [Q432](https://www.examtopics.com/discussions/amazon/view/109291-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 41 | **C** | 4. Design Cost-Optimized Architectures | 63% ⚠ | [Q456](https://www.examtopics.com/discussions/amazon/view/109523-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 42 | **C** | 3. Design High-Performing Architectures | 100% | [Q812](https://www.examtopics.com/discussions/amazon/view/135265-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 43 | **A** | 3. Design High-Performing Architectures | 91% | [Q919](https://www.examtopics.com/discussions/amazon/view/145414-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 44 | **D** | 4. Design Cost-Optimized Architectures | 70% | [Q842](https://www.examtopics.com/discussions/amazon/view/137845-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 45 | **C D** | 2. Design Resilient Architectures | 92% | [Q1006](https://www.examtopics.com/discussions/amazon/view/148812-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 46 | **C** | 2. Design Resilient Architectures | 89% | [Q391](https://www.examtopics.com/discussions/amazon/view/102212-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 47 | **B** | 1. Design Secure Architectures | 86% | [Q137](https://www.examtopics.com/discussions/amazon/view/85997-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 48 | **A** | 1. Design Secure Architectures | 100% | [Q85](https://www.examtopics.com/discussions/amazon/view/85751-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 49 | **A** | 2. Design Resilient Architectures | 70% | [Q998](https://www.examtopics.com/discussions/amazon/view/148806-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 50 | **A D** | 1. Design Secure Architectures | 91% | [Q318](https://www.examtopics.com/discussions/amazon/view/99804-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 51 | **A** | 3. Design High-Performing Architectures | 78% | [Q818](https://www.examtopics.com/discussions/amazon/view/135270-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 52 | **A D F** | 1. Design Secure Architectures | 100% | [Q532](https://www.examtopics.com/discussions/amazon/view/111382-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 53 | **C** | 1. Design Secure Architectures | 90% | [Q253](https://www.examtopics.com/discussions/amazon/view/95008-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 54 | **C** | 4. Design Cost-Optimized Architectures | 95% | [Q238](https://www.examtopics.com/discussions/amazon/view/94996-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 55 | **B** | 2. Design Resilient Architectures | 58% ⚠ | [Q539](https://www.examtopics.com/discussions/amazon/view/111301-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 56 | **C** | 1. Design Secure Architectures | 100% | [Q393](https://www.examtopics.com/discussions/amazon/view/102322-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 57 | **D** | 2. Design Resilient Architectures | 93% | [Q585](https://www.examtopics.com/discussions/amazon/view/119642-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 58 | **C** | 3. Design High-Performing Architectures | 83% | [Q961](https://www.examtopics.com/discussions/amazon/view/145442-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 59 | **B** | 3. Design High-Performing Architectures | 100% | [Q408](https://www.examtopics.com/discussions/amazon/view/102185-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 60 | **A** | 1. Design Secure Architectures | 65% ⚠ | [Q809](https://www.examtopics.com/discussions/amazon/view/135695-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 61 | **B** | 3. Design High-Performing Architectures | 66% ⚠ | [Q41](https://www.examtopics.com/discussions/amazon/view/85446-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 62 | **A C** | 3. Design High-Performing Architectures | 100% | [Q746](https://www.examtopics.com/discussions/amazon/view/132936-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 63 | **C** | 2. Design Resilient Architectures | 100% | [Q487](https://www.examtopics.com/discussions/amazon/view/109665-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 64 | **C** | 4. Design Cost-Optimized Architectures | 87% | [Q770](https://www.examtopics.com/discussions/amazon/view/132998-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 65 | **B E** | 1. Design Secure Architectures | 90% | [Q709](https://www.examtopics.com/discussions/amazon/view/132876-exam-aws-certified-solutions-architect-associate-saa-c03/) |
