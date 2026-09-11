# SAA-C03 Practice Exam 5

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

**1.** A company has an on-premises application that uses SFTP to collect financial data from multiple vendors. The company is migrating to the AWS Cloud. The company has created an application that uses Amazon S3 APIs to upload files from vendors. Some vendors run their systems on legacy applications that do not support S3 APIs. The vendors want to continue to use SFTP-based applications to upload data. The company wants to use managed services for the needs of the vendors that use legacy applications. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create an AWS Database Migration Service (AWS DMS) instance to replicate data from the storage of the vendors that use legacy applications to Amazon S3. Provide the vendors with the credentials to access the AWS DMS instance.
- **B.** Create an AWS Transfer Family endpoint for vendors that use legacy applications.
- **C.** Configure an Amazon EC2 instance to run an SFTP server. Instruct the vendors that use legacy applications to use the SFTP server to upload data.
- **D.** Configure an Amazon S3 File Gateway for vendors that use legacy applications to upload files to an SMB file share.

**2.** A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges. What is the MOST cost-effective way for the company to avoid Regional data transfer charges?

- **A.** Launch the NAT gateway in each Availability Zone.
- **B.** Replace the NAT gateway with a NAT instance.
- **C.** Deploy a gateway VPC endpoint for Amazon S3.
- **D.** Provision an EC2 Dedicated Host to run the EC2 instances.

**3.** A company runs containers in a Kubernetes environment in the company's local data center. The company wants to use Amazon Elastic Kubernetes Service (Amazon EKS) and other AWS managed services. Data must remain locally in the company's data center and cannot be stored in any remote site or cloud to maintain compliance. Which solution will meet these requirements?

- **A.** Deploy AWS Local Zones in the company's data center.
- **B.** Use an AWS Snowmobile in the company's data center.
- **C.** Install an AWS Outposts rack in the company's data center.
- **D.** Install an AWS Snowball Edge Storage Optimized node in the data center.

**4.** A company wants to provide users with access to AWS resources. The company has 1,500 users and manages their access to on-premises resources through Active Directory user groups on the corporate network. However, the company does not want users to have to maintain another identity to access the resources. A solutions architect must manage user access to the AWS resources while preserving access to the on-premises resources. What should the solutions architect do to meet these requirements?

- **A.** Create an IAM user for each user in the company. Attach the appropriate policies to each user.
- **B.** Use Amazon Cognito with an Active Directory user pool. Create roles with the appropriate policies attached.
- **C.** Define cross-account roles with the appropriate policies attached. Map the roles to the Active Directory groups.
- **D.** Configure Security Assertion Markup Language (SAML) 2 0-based federation. Create roles with the appropriate policies attached Map the roles to the Active Directory groups.

**5.** A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity. Which architecture offers the HIGHEST availability?

- **A.** Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.
- **B.** Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.
- **C.** Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.
- **D.** Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled.

**6.** A company uses an Amazon CloudFront distribution to serve content pages for its website. The company needs to ensure that clients use a TLS certificate when accessing the company's website. The company wants to automate the creation and renewal of the TLS certificates. Which solution will meet these requirements with the MOST operational efficiency?

- **A.** Use a CloudFront security policy to create a certificate.
- **B.** Use a CloudFront origin access control (OAC) to create a certificate.
- **C.** Use AWS Certificate Manager (ACM) to create a certificate. Use DNS validation for the domain.
- **D.** Use AWS Certificate Manager (ACM) to create a certificate. Use email validation for the domain.

**7.** A company runs a critical, customer-facing application on Amazon Elastic Kubernetes Service (Amazon EKS). The application has a microservices architecture. The company needs to implement a solution that collects, aggregates, and summarizes metrics and logs from the application in a centralized location. Which solution meets these requirements?

- **A.** Run the Amazon CloudWatch agent in the existing EKS cluster. View the metrics and logs in the CloudWatch console.
- **B.** Run AWS App Mesh in the existing EKS cluster. View the metrics and logs in the App Mesh console.
- **C.** Configure AWS CloudTrail to capture data events. Query CloudTrail by using Amazon OpenSearch Service.
- **D.** Configure Amazon CloudWatch Container Insights in the existing EKS cluster. View the metrics and logs in the CloudWatch console.

**8.** A company runs database workloads on AWS that are the backend for the company's customer portals. The company runs a Multi-AZ database cluster on Amazon RDS for PostgreSQL. The company needs to implement a 30-day backup retention policy. The company currently has both automated RDS backups and manual RDS backups. The company wants to maintain both types of existing RDS backups that are less than 30 days old. Which solution will meet these requirements MOST cost-effectively?

- **A.** Configure the RDS backup retention policy to 30 days for automated backups by using AWS Backup. Manually delete manual backups that are older than 30 days.
- **B.** Disable RDS automated backups. Delete automated backups and manual backups that are older than 30 days. Configure the RDS backup retention policy to 30 days for automated backups.
- **C.** Configure the RDS backup retention policy to 30 days for automated backups. Manually delete manual backups that are older than 30 days.
- **D.** Disable RDS automated backups. Delete automated backups and manual backups that are older than 30 days automatically by using AWS CloudFormation. Configure the RDS backup retention policy to 30 days for automated backups.

**9.** A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer that has sticky sessions enabled. The web server currently hosts the user session state. The company wants to ensure high availability and avoid user session state loss in the event of a web server outage. Which solution will meet these requirements?

- **A.** Use an Amazon ElastiCache for Memcached instance to store the session data. Update the application to use ElastiCache for Memcached to store the session state.
- **B.** Use Amazon ElastiCache for Redis to store the session state. Update the application to use ElastiCache for Redis to store the session state.
- **C.** Use an AWS Storage Gateway cached volume to store session data. Update the application to use AWS Storage Gateway cached volume to store the session state.
- **D.** Use Amazon RDS to store the session state. Update the application to use Amazon RDS to store the session state.

**10.** A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS. Which solution will meet these requirements?

- **A.** Create stage variables in API Gateway with Name="Endpoint-URL" and Value="Company Domain Name" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM).
- **B.** Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.
- **C.** Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.
- **D.** Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name.

**11.** A company is building an application on AWS that connects to an Amazon RDS database. The company wants to manage the application configuration and to securely store and retrieve credentials for the database and other services. Which solution will meet these requirements with the LEAST administrative overhead?

- **A.** Use AWS AppConfig to store and manage the application configuration. Use AWS Secrets Manager to store and retrieve the credentials.
- **B.** Use AWS Lambda to store and manage the application configuration. Use AWS Systems Manager Parameter Store to store and retrieve the credentials.
- **C.** Use an encrypted application configuration file. Store the file in Amazon S3 for the application configuration. Create another S3 file to store and retrieve the credentials.
- **D.** Use AWS AppConfig to store and manage the application configuration. Use Amazon RDS to store and retrieve the credentials.

**12.** A company wants to migrate its web applications from on premises to AWS. The company is located close to the eu-central-1 Region. Because of regulations, the company cannot launch some of its applications in eu-central-1. The company wants to achieve single-digit millisecond latency. Which solution will meet these requirements?

- **A.** Deploy the applications in eu-central-1. Extend the company’s VPC from eu-central-1 to an edge location in Amazon CloudFront.
- **B.** Deploy the applications in AWS Local Zones by extending the company's VPC from eu-central-1 to the chosen Local Zone.
- **C.** Deploy the applications in eu-central-1. Extend the company’s VPC from eu-central-1 to the regional edge caches in Amazon CloudFront.
- **D.** Deploy the applications in AWS Wavelength Zones by extending the company’s VPC from eu-central-1 to the chosen Wavelength Zone.

**13.** A company runs an application on a group of Amazon Linux EC2 instances. For compliance reasons, the company must retain all application log files for 7 years. The log files will be analyzed by a reporting tool that must be able to access all the files concurrently. Which storage solution meets these requirements MOST cost-effectively?

- **A.** Amazon Elastic Block Store (Amazon EBS)
- **B.** Amazon Elastic File System (Amazon EFS)
- **C.** Amazon EC2 instance store
- **D.** Amazon S3

**14.** A company wants to use Amazon FSx for Windows File Server for its Amazon EC2 instances that have an SMB file share mounted as a volume in the us-east-1 Region. The company has a recovery point objective (RPO) of 5 minutes for planned system maintenance or unplanned service disruptions. The company needs to replicate the file system to the us-west-2 Region. The replicated data must not be deleted by any user for 5 years. Which solution will meet these requirements?

- **A.** Create an FSx for Windows File Server file system in us-east-1 that has a Single-AZ 2 deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in compliance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.
- **B.** Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in governance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.
- **C.** Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in compliance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.
- **D.** Create an FSx for Windows File Server file system in us-east-1 that has a Single-AZ 2 deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in governance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.

**15.** A company uses Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) to run its self-managed database. The company has 350 TB of data spread across all EBS volumes. The company takes daily EBS snapshots and keeps the snapshots for 1 month. The daily change rate is 5% of the EBS volumes. Because of new regulations, the company needs to keep the monthly snapshots for 7 years. The company needs to change its backup strategy to comply with the new regulations and to ensure that data is available with minimal administrative effort. Which solution will meet these requirements MOST cost-effectively?

- **A.** Keep the daily snapshot in the EBS snapshot standard tier for 1 month. Copy the monthly snapshot to Amazon S3 Glacier Deep Archive with a 7-year retention period.
- **B.** Continue with the current EBS snapshot policy. Add a new policy to move the monthly snapshot to Amazon EBS Snapshots Archive with a 7-year retention period.
- **C.** Keep the daily snapshot in the EBS snapshot standard tier for 1 month. Keep the monthly snapshot in the standard tier for 7 years. Use incremental snapshots.
- **D.** Keep the daily snapshot in the EBS snapshot standard tier. Use EBS direct APIs to take snapshots of all the EBS volumes every month. Store the snapshots in an Amazon S3 bucket in the Infrequent Access tier for 7 years.

**16.** A company needs to ingest and handle large amounts of streaming data that its application generates. The application runs on Amazon EC2 instances and sends data to Amazon Kinesis Data Streams, which is configured with default settings. Every other day, the application consumes the data and writes the data to an Amazon S3 bucket for business intelligence (BI) processing. The company observes that Amazon S3 is not receiving all the data that the application sends to Kinesis Data Streams. What should a solutions architect do to resolve this issue?

- **A.** Update the Kinesis Data Streams default settings by modifying the data retention period.
- **B.** Update the application to use the Kinesis Producer Library (KPL) to send the data to Kinesis Data Streams.
- **C.** Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.
- **D.** Turn on S3 Versioning within the S3 bucket to preserve every version of every object that is ingested in the S3 bucket.

**17.** A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company. How should security groups be configured in this situation? (Choose two.)

- **A.** Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.
- **B.** Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.
- **C.** Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier.
- **D.** Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier.
- **E.** Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier.

**18.** A global company runs its applications in multiple AWS accounts in AWS Organizations. The company's applications use multipart uploads to upload data to multiple Amazon S3 buckets across AWS Regions. The company wants to report on incomplete multipart uploads for cost compliance purposes. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Configure AWS Config with a rule to report the incomplete multipart upload object count.
- **B.** Create a service control policy (SCP) to report the incomplete multipart upload object count.
- **C.** Configure S3 Storage Lens to report the incomplete multipart upload object count.
- **D.** Create an S3 Multi-Region Access Point to report the incomplete multipart upload object count.

**19.** A solutions architect needs to help a company optimize the cost of running an application on AWS. The application will use Amazon EC2 instances, AWS Fargate, and AWS Lambda for compute within the architecture. The EC2 instances will run the data ingestion layer of the application. EC2 usage will be sporadic and unpredictable. Workloads that run on EC2 instances can be interrupted at any time. The application front end will run on Fargate, and Lambda will serve the API layer. The front- end utilization and API layer utilization will be predictable over the course of the next year. Which combination of purchasing options will provide the MOST cost-effective solution for hosting this application? (Choose two.)

- **A.** Use Spot Instances for the data ingestion layer
- **B.** Use On-Demand Instances for the data ingestion layer
- **C.** Purchase a 1-year Compute Savings Plan for the front end and API layer.
- **D.** Purchase 1-year All Upfront Reserved instances for the data ingestion layer.
- **E.** Purchase a 1-year EC2 instance Savings Plan for the front end and API layer.

**20.** A company runs an environment where data is stored in an Amazon S3 bucket. The objects are accessed frequently throughout the day. The company has strict da ta encryption requirements for data that is stored in the S3 bucket. The company currently uses AWS Key Management Service (AWS KMS) for encryption. The company wants to optimize costs associated with encrypting S3 objects without making additional calls to AWS KMS. Which solution will meet these requirements?

- **A.** Use server-side encryption with Amazon S3 managed keys (SSE-S3).
- **B.** Use an S3 Bucket Key for server-side encryption with AWS KMS keys (SSE-KMS) on the new objects.
- **C.** Use client-side encryption with AWS KMS customer managed keys.
- **D.** Use server-side encryption with customer-provided keys (SSE-C) stored in AWS KMS.

**21.** A company is designing a cloud communications platform that is driven by APIs. The application is hosted on Amazon EC2 instances behind a Network Load Balancer (NLB). The company uses Amazon API Gateway to provide external users with access to the application through APIs. The company wants to protect the platform against web exploits like SQL injection and also wants to detect and mitigate large, sophisticated DDoS attacks. Which combination of solutions provides the MOST protection? (Choose two.)

- **A.** Use AWS WAF to protect the NLB.
- **B.** Use AWS Shield Advanced with the NLB.
- **C.** Use AWS WAF to protect Amazon API Gateway.
- **D.** Use Amazon GuardDuty with AWS Shield Standard
- **E.** Use AWS Shield Standard with Amazon API Gateway.

**22.** A company is deploying an application that processes large quantities of data in parallel. The company plans to use Amazon EC2 instances for the workload. The network architecture must be configurable to prevent groups of nodes from sharing the same underlying hardware. Which networking solution meets these requirements?

- **A.** Run the EC2 instances in a spread placement group.
- **B.** Group the EC2 instances in separate accounts.
- **C.** Configure the EC2 instances with dedicated tenancy.
- **D.** Configure the EC2 instances with shared tenancy.

**23.** A company uses Amazon EC2 instances and stores data on Amazon Elastic Block Store (Amazon EBS) volumes. The company must ensure that all data is encrypted at rest by using AWS Key Management Service (AWS KMS). The company must be able to control rotation of the encryption keys. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create a customer managed key. Use the key to encrypt the EBS volumes.
- **B.** Use an AWS managed key to encrypt the EBS volumes. Use the key to configure automatic key rotation.
- **C.** Create an external KMS key with imported key material. Use the key to encrypt the EBS volumes.
- **D.** Use an AWS owned key to encrypt the EBS volumes.

**24.** A company has multiple Windows file servers on premises. The company wants to migrate and consolidate its files into an Amazon FSx for Windows File Server file system. File permissions must be preserved to ensure that access rights do not change. Which solutions will meet these requirements? (Choose two.)

- **A.** Deploy AWS DataSync agents on premises. Schedule DataSync tasks to transfer the data to the FSx for Windows File Server file system.
- **B.** Copy the shares on each file server into Amazon S3 buckets by using the AWS CLI. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.
- **C.** Remove the drives from each file server. Ship the drives to AWS for import into Amazon S3. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.
- **D.** Order an AWS Snowcone device. Connect the device to the on-premises network. Launch AWS DataSync agents on the device. Schedule DataSync tasks to transfer the data to the FSx for Windows File Server file system.
- **E.** Order an AWS Snowball Edge Storage Optimized device. Connect the device to the on-premises network. Copy data to the device by using the AWS CLI. Ship the device back to AWS for import into Amazon S3. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.

**25.** A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance. Which solution meets these requirements MOST cost-effectively?

- **A.** Stop the DB instance when tests are completed. Restart the DB instance when required.
- **B.** Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.
- **C.** Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.
- **D.** Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required.

**26.** An online photo-sharing company stores its photos in an Amazon S3 bucket that exists in the us-west-1 Region. The company needs to store a copy of all new photos in the us-east-1 Region. Which solution will meet this requirement with the LEAST operational effort?

- **A.** Create a second S3 bucket in us-east-1. Use S3 Cross-Region Replication to copy photos from the existing S3 bucket to the second S3 bucket.
- **B.** Create a cross-origin resource sharing (CORS) configuration of the existing S3 bucket. Specify us-east-1 in the CORS rule's AllowedOrigin element.
- **C.** Create a second S3 bucket in us-east-1 across multiple Availability Zones. Create an S3 Lifecycle rule to save photos into the second S3 bucket.
- **D.** Create a second S3 bucket in us-east-1. Configure S3 event notifications on object creation and update events to invoke an AWS Lambda function to copy photos from the existing S3 bucket to the second S3 bucket.

**27.** A company is running a batch application on Amazon EC2 instances. The application consists of a backend with multiple Amazon RDS databases. The application is causing a high number of reads on the databases. A solutions architect must reduce the number of database reads while ensuring high availability. What should the solutions architect do to meet this requirement?

- **A.** Add Amazon RDS read replicas.
- **B.** Use Amazon ElastiCache for Redis.
- **C.** Use Amazon Route 53 DNS caching
- **D.** Use Amazon ElastiCache for Memcached.

**28.** An online learning company is migrating to the AWS Cloud. The company maintains its student records in a PostgreSQL database. The company needs a solution in which its data is available and online across multiple AWS Regions at all times. Which solution will meet these requirements with the LEAST amount of operational overhead?

- **A.** Migrate the PostgreSQL database to a PostgreSQL cluster on Amazon EC2 instances.
- **B.** Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance with the Multi-AZ feature turned on.
- **C.** Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Create a read replica in another Region.
- **D.** Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Set up DB snapshots to be copied to another Region.

**29.** A company is moving its data management application to AWS. The company wants to transition to an event-driven architecture. The architecture needs to be more distributed and to use serverless concepts while performing the different aspects of the workflow. The company also wants to minimize operational overhead. Which solution will meet these requirements?

- **A.** Build out the workflow in AWS Glue. Use AWS Glue to invoke AWS Lambda functions to process the workflow steps.
- **B.** Build out the workflow in AWS Step Functions. Deploy the application on Amazon EC2 instances. Use Step Functions to invoke the workflow steps on the EC2 instances.
- **C.** Build out the workflow in Amazon EventBridge. Use EventBridge to invoke AWS Lambda functions on a schedule to process the workflow steps.
- **D.** Build out the workflow in AWS Step Functions. Use Step Functions to create a state machine. Use the state machine to invoke AWS Lambda functions to process the workflow steps.

**30.** A company runs an Oracle database on premises. As part of the company’s migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database's underlying operating system. Which solution will meet these requirements?

- **A.** Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.
- **B.** Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.
- **C.** Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region.
- **D.** Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.

**31.** A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date. Which solution will meet these requirements?

- **A.** Use S3 Object Lock in governance mode with a legal hold of 1 year.
- **B.** Use S3 Object Lock in compliance mode with a retention period of 365 days.
- **C.** Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.
- **D.** Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly.

**32.** A solutions architect is designing an application that helps users fill out and submit registration forms. The solutions architect plans to use a two-tier architecture that includes a web application server tier and a worker tier. The application needs to process submitted forms quickly. The application needs to process each form exactly once. The solution must ensure that no data is lost. Which solution will meet these requirements?

- **A.** Use an Amazon Simple Queue Service (Amazon SQS) FIFO queue between the web application server tier and the worker tier to store and forward form data.
- **B.** Use an Amazon API Gateway HTTP API between the web application server tier and the worker tier to store and forward form data.
- **C.** Use an Amazon Simple Queue Service (Amazon SQS) standard queue between the web application server tier and the worker tier to store and forward form data.
- **D.** Use an AWS Step Functions workflow. Create a synchronous workflow between the web application server tier and the worker tier that stores and forwards form data.

**33.** A social media company is creating a rewards program website for its users. The company gives users points when users create and upload videos to the website. Users redeem their points for gifts or discounts from the company's affiliated partners. A unique ID identifies users. The partners refer to this ID to verify user eligibility for rewards. The partners want to receive notification of user IDs through an HTTP endpoint when the company gives users points. Hundreds of vendors are interested in becoming affiliated partners every day. The company wants to design an architecture that gives the website the ability to add partners rapidly in a scalable way. Which solution will meet these requirements with the LEAST implementation effort?

- **A.** Create an Amazon Timestream database to keep a list of affiliated partners. Implement an AWS Lambda function to read the list. Configure the Lambda function to send user IDs to each partner when the company gives users points.
- **B.** Create an Amazon Simple Notification Service (Amazon SNS) topic. Choose an endpoint protocol. Subscribe the partners to the topic. Publish user IDs to the topic when the company gives users points.
- **C.** Create an AWS Step Functions state machine. Create a task for every affiliated partner. Invoke the state machine with user IDs as input when the company gives users points.
- **D.** Create a data stream in Amazon Kinesis Data Streams. Implement producer and consumer applications. Store a list of affiliated partners in the data stream. Send user IDs when the company gives users points.

**34.** A company has 150 TB of archived image data stored on-premises that needs to be moved to the AWS Cloud within the next month. The company’s current network connection allows up to 100 Mbps uploads for this purpose during the night only. What is the MOST cost-effective mechanism to move this data and meet the migration deadline?

- **A.** Use AWS Snowmobile to ship the data to AWS.
- **B.** Order multiple AWS Snowball devices to ship the data to AWS.
- **C.** Enable Amazon S3 Transfer Acceleration and securely upload the data.
- **D.** Create an Amazon S3 VPC endpoint and establish a VPN to upload the data.

**35.** A company has a Microsoft .NET application that runs on an on-premises Windows Server. The application stores data by using an Oracle Database Standard Edition server. The company is planning a migration to AWS and wants to minimize development changes while moving the application. The AWS application environment should be highly available. Which combination of actions should the company take to meet these requirements? (Choose two.)

- **A.** Refactor the application as serverless with AWS Lambda functions running .NET Core.
- **B.** Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment.
- **C.** Replatform the application to run on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).
- **D.** Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Amazon DynamoDB in a Multi-AZ deployment.
- **E.** Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment.

**36.** A manufacturing company runs its report generation application on AWS. The application generates each report in about 20 minutes. The application is built as a monolith that runs on a single Amazon EC2 instance. The application requires frequent updates to its tightly coupled modules. The application becomes complex to maintain as the company adds new features. Each time the company patches a software module, the application experiences downtime. Report generation must restart from the beginning after any interruptions. The company wants to redesign the application so that the application can be flexible, scalable, and gradually improved. The company wants to minimize application downtime. Which solution will meet these requirements?

- **A.** Run the application on AWS Lambda as a single function with maximum provisioned concurrency.
- **B.** Run the application on Amazon EC2 Spot Instances as microservices with a Spot Fleet default allocation strategy.
- **C.** Run the application on Amazon Elastic Container Service (Amazon ECS) as microservices with service auto scaling.
- **D.** Run the application on AWS Elastic Beanstalk as a single application environment with an all-at-once deployment strategy.

**37.** A consulting company provides professional services to customers worldwide. The company provides solutions and tools for customers to expedite gathering and analyzing data on AWS. The company needs to centrally manage and deploy a common set of solutions and tools for customers to use for self-service purposes. Which solution will meet these requirements?

- **A.** Create AWS CloudFormation templates for the customers.
- **B.** Create AWS Service Catalog products for the customers.
- **C.** Create AWS Systems Manager templates for the customers.
- **D.** Create AWS Config items for the customers.

**38.** A research company runs experiments that are powered by a simulation application and a visualization application. The simulation application runs on Linux and outputs intermediate data to an NFS share every 5 minutes. The visualization application is a Windows desktop application that displays the simulation output and requires an SMB file system. The company maintains two synchronized file systems. This strategy is causing data duplication and inefficient resource usage. The company needs to migrate the applications to AWS without making code changes to either application. Which solution will meet these requirements?

- **A.** Migrate both applications to AWS Lambda. Create an Amazon S3 bucket to exchange data between the applications.
- **B.** Migrate both applications to Amazon Elastic Container Service (Amazon ECS). Configure Amazon FSx File Gateway for storage.
- **C.** Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to Windows EC2 instances. Configure Amazon Simple Queue Service (Amazon SQS) to exchange data between the applications.
- **D.** Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to Windows EC2 instances. Configure Amazon FSx for NetApp ONTAP for storage.

**39.** An ecommerce company runs an application in the AWS Cloud that is integrated with an on-premises warehouse solution. The company uses Amazon Simple Notification Service (Amazon SNS) to send order messages to an on-premises HTTPS endpoint so the warehouse application can process the orders. The local data center team has detected that some of the order messages were not received. A solutions architect needs to retain messages that are not delivered and analyze the messages for up to 14 days. Which solution will meet these requirements with the LEAST development effort?

- **A.** Configure an Amazon SNS dead letter queue that has an Amazon Kinesis Data Stream target with a retention period of 14 days.
- **B.** Add an Amazon Simple Queue Service (Amazon SQS) queue with a retention period of 14 days between the application and Amazon SNS.
- **C.** Configure an Amazon SNS dead letter queue that has an Amazon Simple Queue Service (Amazon SQS) target with a retention period of 14 days.
- **D.** Configure an Amazon SNS dead letter queue that has an Amazon DynamoDB target with a TTL attribute set for a retention period of 14 days.

**40.** A company that uses AWS is building an application to transfer data to a product manufacturer. The company has its own identity provider (IdP). The company wants the IdP to authenticate application users while the users use the application to transfer data. The company must use Applicability Statement 2 (AS2) protocol. Which solution will meet these requirements?

- **A.** Use AWS DataSync to transfer the data. Create an AWS Lambda function for IdP authentication.
- **B.** Use Amazon AppFlow flows to transfer the data. Create an Amazon Elastic Container Service (Amazon ECS) task for IdP authentication.
- **C.** Use AWS Transfer Family to transfer the data. Create an AWS Lambda function for IdP authentication.
- **D.** Use AWS Storage Gateway to transfer the data. Create an Amazon Cognito identity pool for IdP authentication.

**41.** A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A solutions architect needs to create a highly available solution that operates with as little manual intervention as possible. Which solutions meet these requirements? (Choose two.)

- **A.** Create an Amazon RDS DB instance in Multi-AZ mode.
- **B.** Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.
- **C.** Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load.
- **D.** Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load.
- **E.** Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application load.

**42.** A company deploys Amazon EC2 instances that run in a VPC. The EC2 instances load source data into Amazon S3 buckets so that the data can be processed in the future. According to compliance laws, the data must not be transmitted over the public internet. Servers in the company's on-premises data center will consume the output from an application that runs on the EC2 instances. Which solution will meet these requirements?

- **A.** Deploy an interface VPC endpoint for Amazon EC2. Create an AWS Site-to-Site VPN connection between the company and the VPC.
- **B.** Deploy a gateway VPC endpoint for Amazon S3. Set up an AWS Direct Connect connection between the on-premises network and the VPC.
- **C.** Set up an AWS Transit Gateway connection from the VPC to the S3 buckets. Create an AWS Site-to-Site VPN connection between the company and the VPC.
- **D.** Set up proxy EC2 instances that have routes to NAT gateways. Configure the proxy EC2 instances to fetch S3 data and feed the application instances.

**43.** A company has migrated a fleet of hundreds of on-premises virtual machines (VMs) to Amazon EC2 instances. The instances run a diverse fleet of Windows Server versions along with several Linux distributions. The company wants a solution that will automate inventory and updates of the operating systems. The company also needs a summary of common vulnerabilities of each instance for regular monthly reviews. What should a solutions architect recommend to meet these requirements?

- **A.** Set up AWS Systems Manager Patch Manager to manage all the EC2 instances. Configure AWS Security Hub to produce monthly reports.
- **B.** Set up AWS Systems Manager Patch Manager to manage all the EC2 instances. Deploy Amazon Inspector, and configure monthly reports.
- **C.** Set up AWS Shield Advanced, and configure monthly reports. Deploy AWS Config to automate patch installations on the EC2 instances.
- **D.** Set up Amazon GuardDuty in the account to monitor all EC2 instances. Deploy AWS Config to automate patch installations on the EC2 instances.

**44.** A company is preparing a new data platform that will ingest real-time streaming data from multiple sources. The company needs to transform the data before writing the data to Amazon S3. The company needs the ability to use SQL to query the transformed data. Which solutions will meet these requirements? (Choose two.)

- **A.** Use Amazon Kinesis Data Streams to stream the data. Use Amazon Kinesis Data Analytics to transform the data. Use Amazon Kinesis Data Firehose to write the data to Amazon S3. Use Amazon Athena to query the transformed data from Amazon S3.
- **B.** Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to stream the data. Use AWS Glue to transform the data and to write the data to Amazon S3. Use Amazon Athena to query the transformed data from Amazon S3.
- **C.** Use AWS Database Migration Service (AWS DMS) to ingest the data. Use Amazon EMR to transform the data and to write the data to Amazon S3. Use Amazon Athena to query the transformed data from Amazon S3.
- **D.** Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to stream the data. Use Amazon Kinesis Data Analytics to transform the data and to write the data to Amazon S3. Use the Amazon RDS query editor to query the transformed data from Amazon S3.
- **E.** Use Amazon Kinesis Data Streams to stream the data. Use AWS Glue to transform the data. Use Amazon Kinesis Data Firehose to write the data to Amazon S3. Use the Amazon RDS query editor to query the transformed data from Amazon S3.

**45.** A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing and new data by using SL. The company stores the data in an Amazon S3 bucket. The data requires encryption and must be replicated to a different AWS Region. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region kays (SSE-KMS). Use Amazon Athena to query the data.
- **B.** Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.
- **C.** Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon Athena to query the data.
- **D.** Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon RDS to query the data.

**46.** A company copies 200 TB of data from a recent ocean survey onto AWS Snowball Edge Storage Optimized devices. The company has a high performance computing (HPC) cluster that is hosted on AWS to look for oil and gas deposits. A solutions architect must provide the cluster with consistent sub-millisecond latency and high-throughput access to the data on the Snowball Edge Storage Optimized devices. The company is sending the devices back to AWS. Which solution will meet these requirements?

- **A.** Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an AWS Storage Gateway file gateway to use the S3 bucket. Access the file gateway from the HPC cluster instances.
- **B.** Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an Amazon FSx for Lustre file system, and integrate it with the S3 bucket. Access the FSx for Lustre file system from the HPC cluster instances.
- **C.** Create an Amazon S3 bucket and an Amazon Elastic File System (Amazon EFS) file system. Import the data into the S3 bucket. Copy the data from the S3 bucket to the EFS file system. Access the EFS file system from the HPC cluster instances.
- **D.** Create an Amazon FSx for Lustre file system. Import the data directly into the FSx for Lustre file system. Access the FSx for Lustre file system from the HPC cluster instances.

**47.** A company stores several petabytes of data across multiple AWS accounts. The company uses AWS Lake Formation to manage its data lake. The company's data science team wants to securely share selective data from its accounts with the company's engineering team for analytical purposes. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Copy the required data to a common account. Create an IAM access role in that account. Grant access by specifying a permission policy that includes users from the engineering team accounts as trusted entities.
- **B.** Use the Lake Formation permissions Grant command in each account where the data is stored to allow the required engineering team users to access the data.
- **C.** Use AWS Data Exchange to privately publish the required data to the required engineering team accounts.
- **D.** Use Lake Formation tag-based access control to authorize and grant cross-account permissions for the required data to the engineering team accounts.

**48.** A company is building a game system that needs to send unique events to separate leaderboard, matchmaking, and authentication services concurrently. The company needs an AWS event-driven system that guarantees the order of the events. Which solution will meet these requirements?

- **A.** Amazon EventBridge event bus
- **B.** Amazon Simple Notification Service (Amazon SNS) FIFO topics
- **C.** Amazon Simple Notification Service (Amazon SNS) standard topics
- **D.** Amazon Simple Queue Service (Amazon SQS) FIFO queues

**49.** A company is migrating five on-premises applications to VPCs in the AWS Cloud. Each application is currently deployed in isolated virtual networks on premises and should be deployed similarly in the AWS Cloud. The applications need to reach a shared services VPC. All the applications must be able to communicate with each other. If the migration is successful, the company will repeat the migration process for more than 100 applications. Which solution will meet these requirements with the LEAST administrative overhead?

- **A.** Deploy software VPN tunnels between the application VPCs and the shared services VPC. Add routes between the application VPCs in their subnets to the shared services VPC.
- **B.** Deploy VPC peering connections between the application VPCs and the shared services VPC. Add routes between the application VPCs in their subnets to the shared services VPC through the peering connection.
- **C.** Deploy an AWS Direct Connect connection between the application VPCs and the shared services VPAdd routes from the application VPCs in their subnets to the shared services VPC and the applications VPCs. Add routes from the shared services VPC subnets to the applications VPCs.
- **D.** Deploy a transit gateway with associations between the transit gateway and the application VPCs and the shared services VPC. Add routes between the application VPCs in their subnets and the application VPCs to the shared services VPC through the transit gateway.

**50.** A company is migrating a Linux-based web server group to AWS. The web servers must access files in a shared file store for some content. The company must not make any changes to the application. What should a solutions architect do to meet these requirements?

- **A.** Create an Amazon S3 Standard bucket with access to the web servers.
- **B.** Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin.
- **C.** Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on all web servers.
- **D.** Configure a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume to all web servers.

**51.** A company wants to direct its users to a backup static error page if the company's primary website is unavailable. The primary website's DNS records are hosted in Amazon Route 53. The domain is pointing to an Application Load Balancer (ALB). The company needs a solution that minimizes changes and infrastructure overhead. Which solution will meet these requirements?

- **A.** Update the Route 53 records to use a latency routing policy. Add a static error page that is hosted in an Amazon S3 bucket to the records so that the traffic is sent to the most responsive endpoints.
- **B.** Set up a Route 53 active-passive failover configuration. Direct traffic to a static error page that is hosted in an Amazon S3 bucket when Route 53 health checks determine that the ALB endpoint is unhealthy.
- **C.** Set up a Route 53 active-active configuration with the ALB and an Amazon EC2 instance that hosts a static error page as endpoints. Configure Route 53 to send requests to the instance only if the health checks fail for the ALB.
- **D.** Update the Route 53 records to use a multivalue answer routing policy. Create a health check. Direct traffic to the website if the health check passes. Direct traffic to a static error page that is hosted in Amazon S3 if the health check does not pass.

**52.** A company has an Amazon Elastic File System (Amazon EFS) file system that contains a reference dataset. The company has applications on Amazon EC2 instances that need to read the dataset. However, the applications must not be able to change the dataset. The company wants to use IAM access control to prevent the applications from being able to modify or delete the dataset. Which solution will meet these requirements?

- **A.** Mount the EFS file system in read-only mode from within the EC2 instances.
- **B.** Create a resource policy for the EFS file system that denies the elasticfilesystem:ClientWrite action to the IAM roles that are attached to the EC2 instances.
- **C.** Create an identity policy for the EFS file system that denies the elasticfilesystem:ClientWrite action on the EFS file system.
- **D.** Create an EFS access point for each application. Use Portable Operating System Interface (POSIX) file permissions to allow read-only access to files in the root directory.

**53.** A finance company uses an on-premises search application to collect streaming data from various producers. The application provides real- time updates to search and visualization features. The company is planning to migrate to AWS and wants to use an AWS native solution. Which solution will meet these requirements?

- **A.** Use Amazon EC2 instances to ingest and process the data streams to Amazon S3 buckets tor storage. Use Amazon Athena to search the data. Use Amazon Managed Grafana to create visualizations.
- **B.** Use Amazon EMR to ingest and process the data streams to Amazon Redshift for storage. Use Amazon Redshift Spectrum to search the data. Use Amazon QuickSight to create visualizations.
- **C.** Use Amazon Elastic Kubernetes Service (Amazon EKS) to ingest and process the data streams to Amazon DynamoDB for storage. Use Amazon CloudWatch to create graphical dashboards to search and visualize the data.
- **D.** Use Amazon Kinesis Data Streams to ingest and process the data streams to Amazon OpenSearch Service. Use OpenSearch Service to search the data. Use Amazon QuickSight to create visualizations.

**54.** A company runs several websites on AWS for its different brands. Each website generates tens of gigabytes of web traffic logs each day. A solutions architect needs to design a scalable solution to give the company's developers the ability to analyze traffic patterns across all the company's websites. This analysis by the developers will occur on demand once a week over the course of several months. The solution must support queries with standard SQL. Which solution will meet these requirements MOST cost-effectively?

- **A.** Store the logs in Amazon S3. Use Amazon Athena tor analysis.
- **B.** Store the logs in Amazon RDS. Use a database client for analysis.
- **C.** Store the logs in Amazon OpenSearch Service. Use OpenSearch Service for analysis.
- **D.** Store the logs in an Amazon EMR cluster Use a supported open-source framework for SQL-based analysis.

**55.** A company runs its application on an Oracle database. The company plans to quickly migrate to AWS because of limited resources for the database, backup administration, and data center maintenance. The application uses third-party database features that require privileged access. Which solution will help the company migrate the database to AWS MOST cost-effectively?

- **A.** Migrate the database to Amazon RDS for Oracle. Replace third-party features with cloud services.
- **B.** Migrate the database to Amazon RDS Custom for Oracle. Customize the database settings to support third-party features.
- **C.** Migrate the database to an Amazon EC2 Amazon Machine Image (AMI) for Oracle. Customize the database settings to support third-party features.
- **D.** Migrate the database to Amazon RDS for PostgreSQL by rewriting the application code to remove dependency on Oracle APEX.

**56.** A company uses AWS Organizations. The company wants to operate some of its AWS accounts with different budgets. The company wants to receive alerts and automatically prevent provisioning of additional resources on AWS accounts when the allocated budget threshold is met during a specific period. Which combination of solutions will meet these requirements? (Choose three.)

- **A.** Use AWS Budgets to create a budget. Set the budget amount under the Cost and Usage Reports section of the required AWS accounts.
- **B.** Use AWS Budgets to create a budget. Set the budget amount under the Billing dashboards of the required AWS accounts.
- **C.** Create an IAM user for AWS Budgets to run budget actions with the required permissions.
- **D.** Create an IAM role for AWS Budgets to run budget actions with the required permissions.
- **E.** Add an alert to notify the company when each account meets its budget threshold. Add a budget action that selects the IAM identity created with the appropriate config rule to prevent provisioning of additional resources.
- **F.** Add an alert to notify the company when each account meets its budget threshold. Add a budget action that selects the IAM identity created with the appropriate service control policy (SCP) to prevent provisioning of additional resources.

**57.** An ecommerce company is running a seasonal online sale. The company hosts its website on Amazon EC2 instances spanning multiple Availability Zones. The company wants its website to manage sudden traffic increases during the sale. Which solution will meet these requirements MOST cost-effectively?

- **A.** Create an Auto Scaling group that is large enough to handle peak traffic load. Stop half of the Amazon EC2 instances. Configure the Auto Scaling group to use the stopped instances to scale out when traffic increases.
- **B.** Create an Auto Scaling group for the website. Set the minimum size of the Auto Scaling group so that it can handle high traffic volumes without the need to scale out.
- **C.** Use Amazon CloudFront and Amazon ElastiCache to cache dynamic content with an Auto Scaling group set as the origin. Configure the Auto Scaling group with the instances necessary to populate CloudFront and ElastiCache. Scale in after the cache is fully populated.
- **D.** Configure an Auto Scaling group to scale out as traffic increases. Create a launch template to start new instances from a preconfigured Amazon Machine Image (AMI).

**58.** A company is launching an application on AWS. The application uses an Application Load Balancer (ALB) to direct traffic to at least two Amazon EC2 instances in a single target group. The instances are in an Auto Scaling group for each environment. The company requires a development environment and a production environment. The production environment will have periods of high traffic. Which solution will configure the development environment MOST cost-effectively?

- **A.** Reconfigure the target group in the development environment to have only one EC2 instance as a target.
- **B.** Change the ALB balancing algorithm to least outstanding requests.
- **C.** Reduce the size of the EC2 instances in both environments.
- **D.** Reduce the maximum number of EC2 instances in the development environment’s Auto Scaling group.

**59.** A company has a web application hosted over 10 Amazon EC2 instances with traffic directed by Amazon Route 53. The company occasionally experiences a timeout error when attempting to browse the application. The networking team finds that some DNS queries return IP addresses of unhealthy instances, resulting in the timeout error. What should a solutions architect implement to overcome these timeout errors?

- **A.** Create a Route 53 simple routing policy record for each EC2 instance. Associate a health check with each record.
- **B.** Create a Route 53 failover routing policy record for each EC2 instance. Associate a health check with each record.
- **C.** Create an Amazon CloudFront distribution with EC2 instances as its origin. Associate a health check with the EC2 instances.
- **D.** Create an Application Load Balancer (ALB) with a health check in front of the EC2 instances. Route to the ALB from Route 53.

**60.** A company uses AWS Organizations to run workloads within multiple AWS accounts. A tagging policy adds department tags to AWS resources when the company creates tags. An accounting team needs to determine spending on Amazon EC2 consumption. The accounting team must determine which departments are responsible for the costs regardless ofAWS account. The accounting team has access to AWS Cost Explorer for all AWS accounts within the organization and needs to access all reports from Cost Explorer. Which solution meets these requirements in the MOST operationally efficient way?

- **A.** From the Organizations management account billing console, activate a user-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.
- **B.** From the Organizations management account billing console, activate an AWS-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.
- **C.** From the Organizations member account billing console, activate a user-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by the tag name, and filter by EC2.
- **D.** From the Organizations member account billing console, activate an AWS-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.

**61.** A solutions architect is designing a payment processing application that runs on AWS Lambda in private subnets across multiple Availability Zones. The application uses multiple Lambda functions and processes millions of transactions each day. The architecture must ensure that the application does not process duplicate payments. Which solution will meet these requirements?

- **A.** Use Lambda to retrieve all due payments. Publish the due payments to an Amazon S3 bucket. Configure the S3 bucket with an event notification to invoke another Lambda function to process the due payments.
- **B.** Use Lambda to retrieve all due payments. Publish the due payments to an Amazon Simple Queue Service (Amazon SQS) queue. Configure another Lambda function to poll the SQS queue and to process the due payments.
- **C.** Use Lambda to retrieve all due payments. Publish the due payments to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Configure another Lambda function to poll the FIFO queue and to process the due payments.
- **D.** Use Lambda to retrieve all due payments. Store the due payments in an Amazon DynamoDB table. Configure streams on the DynamoDB table to invoke another Lambda function to process the due payments.

**62.** A company needs to store data from its healthcare application. The application’s data frequently changes. A new regulation requires audit access at all levels of the stored data. The company hosts the application on an on-premises infrastructure that is running out of storage capacity. A solutions architect must securely migrate the existing data to AWS while satisfying the new regulation. Which solution will meet these requirements?

- **A.** Use AWS DataSync to move the existing data to Amazon S3. Use AWS CloudTrail to log data events.
- **B.** Use AWS Snowcone to move the existing data to Amazon S3. Use AWS CloudTrail to log management events.
- **C.** Use Amazon S3 Transfer Acceleration to move the existing data to Amazon S3. Use AWS CloudTrail to log data events.
- **D.** Use AWS Storage Gateway to move the existing data to Amazon S3. Use AWS CloudTrail to log management events.

**63.** A company has a static website that is hosted on Amazon CloudFront in front of Amazon S3. The static website uses a database backend. The company notices that the website does not reflect updates that have been made in the website’s Git repository. The company checks the continuous integration and continuous delivery (CI/CD) pipeline between the Git repository and Amazon S3. The company verifies that the webhooks are configured properly and that the CI/CD pipeline is sending messages that indicate successful deployments. A solutions architect needs to implement a solution that displays the updates on the website. Which solution will meet these requirements?

- **A.** Add an Application Load Balancer.
- **B.** Add Amazon ElastiCache for Redis or Memcached to the database layer of the web application.
- **C.** Invalidate the CloudFront cache.
- **D.** Use AWS Certificate Manager (ACM) to validate the website’s SSL certificate.

**64.** A company is migrating from a monolithic architecture for a web application that is hosted on Amazon EC2 to a serverless microservices architecture. The company wants to use AWS services that support an event-driven, loosely coupled architecture. The company wants to use the publish/subscribe (pub/sub) pattern. Which solution will meet these requirements MOST cost-effectively?

- **A.** Configure an Amazon API Gateway REST API to invoke an AWS Lambda function that publishes events to an Amazon Simple Queue Service (Amazon SQS) queue. Configure one or more subscribers to read events from the SQS queue.
- **B.** Configure an Amazon API Gateway REST API to invoke an AWS Lambda function that publishes events to an Amazon Simple Notification Service (Amazon SNS) topic. Configure one or more subscribers to receive events from the SNS topic.
- **C.** Configure an Amazon API Gateway WebSocket API to write to a data stream in Amazon Kinesis Data Streams with enhanced fan-out. Configure one or more subscribers to receive events from the data stream.
- **D.** Configure an Amazon API Gateway HTTP API to invoke an AWS Lambda function that publishes events to an Amazon Simple Notification Service (Amazon SNS) topic. Configure one or more subscribers to receive events from the topic.

**65.** A company has a web application that runs on premises. The application experiences latency issues during peak hours. The latency issues occur twice each month. At the start of a latency issue, the application's CPU utilization immediately increases to 10 times its normal amount. The company wants to migrate the application to AWS to improve latency. The company also wants to scale the application automatically when application demand increases. The company will use AWS Elastic Beanstalk for application deployment. Which solution will meet these requirements?

- **A.** Configure an Elastic Beanstalk environment to use burstable performance instances in unlimited mode. Configure the environment to scale based on requests.
- **B.** Configure an Elastic Beanstalk environment to use compute optimized instances. Configure the environment to scale based on requests.
- **C.** Configure an Elastic Beanstalk environment to use compute optimized instances. Configure the environment to scale on a schedule.
- **D.** Configure an Elastic Beanstalk environment to use burstable performance instances in unlimited mode. Configure the environment to scale on predictive metrics.

---

## Answer key -- Exam 5

`Consensus` is the share of ExamTopics voters choosing that answer. Anything
below 70% is genuinely contested -- open the discussion link before trusting it.

| # | Answer | Domain | Consensus | Source |
|---:|---|---|---:|---|
| 1 | **B** | 3. Design High-Performing Architectures | 100% | [Q816](https://www.examtopics.com/discussions/amazon/view/135268-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 2 | **C** | 4. Design Cost-Optimized Architectures | 99% | [Q42](https://www.examtopics.com/discussions/amazon/view/85205-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 3 | **C** | 1. Design Secure Architectures | 100% | [Q805](https://www.examtopics.com/discussions/amazon/view/135262-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 4 | **D** | 1. Design Secure Architectures | 89% | [Q624](https://www.examtopics.com/discussions/amazon/view/125336-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 5 | **D** | 2. Design Resilient Architectures | 98% | [Q111](https://www.examtopics.com/discussions/amazon/view/85910-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 6 | **C** | 1. Design Secure Architectures | 100% | [Q577](https://www.examtopics.com/discussions/amazon/view/117037-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 7 | **D** | 3. Design High-Performing Architectures | 94% | [Q615](https://www.examtopics.com/discussions/amazon/view/121154-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 8 | **C** | 4. Design Cost-Optimized Architectures | 89% | [Q989](https://www.examtopics.com/discussions/amazon/view/148459-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 9 | **B** | 2. Design Resilient Architectures | 91% | [Q589](https://www.examtopics.com/discussions/amazon/view/119487-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 10 | **C** | 1. Design Secure Architectures | 95% | [Q56](https://www.examtopics.com/discussions/amazon/view/85266-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 11 | **A** | 1. Design Secure Architectures | 100% | [Q742](https://www.examtopics.com/discussions/amazon/view/132932-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 12 | **B** | 3. Design High-Performing Architectures | 77% | [Q684](https://www.examtopics.com/discussions/amazon/view/129726-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 13 | **D** | 4. Design Cost-Optimized Architectures | 100% | [Q221](https://www.examtopics.com/discussions/amazon/view/95307-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 14 | **C** | 2. Design Resilient Architectures | 100% | [Q618](https://www.examtopics.com/discussions/amazon/view/121219-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 15 | **B** | 4. Design Cost-Optimized Architectures | 50% ⚠ | [Q841](https://www.examtopics.com/discussions/amazon/view/137844-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 16 | **A** | 3. Design High-Performing Architectures | 72% | [Q402](https://www.examtopics.com/discussions/amazon/view/102175-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 17 | **A C** | 1. Design Secure Architectures | 99% | [Q74](https://www.examtopics.com/discussions/amazon/view/85346-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 18 | **C** | 1. Design Secure Architectures | 100% | [Q628](https://www.examtopics.com/discussions/amazon/view/125459-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 19 | **A C** | 4. Design Cost-Optimized Architectures | 91% | [Q140](https://www.examtopics.com/discussions/amazon/view/86083-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 20 | **B** | 1. Design Secure Architectures | 78% | [Q1009](https://www.examtopics.com/discussions/amazon/view/148814-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 21 | **B C** | 1. Design Secure Architectures | 93% | [Q180](https://www.examtopics.com/discussions/amazon/view/87640-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 22 | **A** | 3. Design High-Performing Architectures | 87% | [Q584](https://www.examtopics.com/discussions/amazon/view/119485-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 23 | **A** | 1. Design Secure Architectures | 88% | [Q681](https://www.examtopics.com/discussions/amazon/view/129723-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 24 | **A D** | 3. Design High-Performing Architectures | 96% | [Q500](https://www.examtopics.com/discussions/amazon/view/109689-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 25 | **C** | 4. Design Cost-Optimized Architectures | 80% | [Q30](https://www.examtopics.com/discussions/amazon/view/85030-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 26 | **A** | 2. Design Resilient Architectures | 86% | [Q621](https://www.examtopics.com/discussions/amazon/view/121222-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 27 | **A** | 2. Design Resilient Architectures | 61% ⚠ | [Q193](https://www.examtopics.com/discussions/amazon/view/89134-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 28 | **C** | 3. Design High-Performing Architectures | 82% | [Q241](https://www.examtopics.com/discussions/amazon/view/95000-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 29 | **D** | 2. Design Resilient Architectures | 91% | [Q351](https://www.examtopics.com/discussions/amazon/view/100371-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 30 | **C** | 2. Design Resilient Architectures | 50% ⚠ | [Q133](https://www.examtopics.com/discussions/amazon/view/85423-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 31 | **B** | 1. Design Secure Architectures | 93% | [Q154](https://www.examtopics.com/discussions/amazon/view/86359-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 32 | **A** | 2. Design Resilient Architectures | 100% | [Q967](https://www.examtopics.com/discussions/amazon/view/144928-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 33 | **B** | 2. Design Resilient Architectures | 100% | [Q798](https://www.examtopics.com/discussions/amazon/view/133037-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 34 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q763](https://www.examtopics.com/discussions/amazon/view/132952-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 35 | **B E** | 2. Design Resilient Architectures | 97% | [Q197](https://www.examtopics.com/discussions/amazon/view/89068-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 36 | **C** | 2. Design Resilient Architectures | 100% | [Q720](https://www.examtopics.com/discussions/amazon/view/132893-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 37 | **B** | 3. Design High-Performing Architectures | 100% | [Q519](https://www.examtopics.com/discussions/amazon/view/109722-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 38 | **D** | 2. Design Resilient Architectures | 98% | [Q283](https://www.examtopics.com/discussions/amazon/view/99512-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 39 | **C** | 2. Design Resilient Architectures | 80% | [Q489](https://www.examtopics.com/discussions/amazon/view/109637-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 40 | **C** | 1. Design Secure Architectures | 91% | [Q457](https://www.examtopics.com/discussions/amazon/view/109524-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 41 | **A D** | 2. Design Resilient Architectures | 100% | [Q187](https://www.examtopics.com/discussions/amazon/view/87695-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 42 | **B** | 1. Design Secure Architectures | 79% | [Q610](https://www.examtopics.com/discussions/amazon/view/121217-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 43 | **B** | 1. Design Secure Architectures | 94% | [Q873](https://www.examtopics.com/discussions/amazon/view/137853-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 44 | **A B** | 3. Design High-Performing Architectures | 93% | [Q292](https://www.examtopics.com/discussions/amazon/view/99834-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 45 | **C** | 1. Design Secure Architectures | 53% ⚠ | [Q134](https://www.examtopics.com/discussions/amazon/view/85993-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 46 | **B** | 3. Design High-Performing Architectures | 65% ⚠ | [Q702](https://www.examtopics.com/discussions/amazon/view/132866-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 47 | **D** | 3. Design High-Performing Architectures | 100% | [Q442](https://www.examtopics.com/discussions/amazon/view/109647-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 48 | **B** | 2. Design Resilient Architectures | 79% | [Q363](https://www.examtopics.com/discussions/amazon/view/102124-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 49 | **D** | 1. Design Secure Architectures | 93% | [Q899](https://www.examtopics.com/discussions/amazon/view/140211-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 50 | **C** | 3. Design High-Performing Architectures | 100% | [Q288](https://www.examtopics.com/discussions/amazon/view/99671-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 51 | **B** | 2. Design Resilient Architectures | 83% | [Q545](https://www.examtopics.com/discussions/amazon/view/116974-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 52 | **B** | 1. Design Secure Architectures | 73% | [Q779](https://www.examtopics.com/discussions/amazon/view/133011-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 53 | **D** | 3. Design High-Performing Architectures | 100% | [Q968](https://www.examtopics.com/discussions/amazon/view/144929-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 54 | **A** | 4. Design Cost-Optimized Architectures | 95% | [Q643](https://www.examtopics.com/discussions/amazon/view/125581-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 55 | **B** | 4. Design Cost-Optimized Architectures | 97% | [Q449](https://www.examtopics.com/discussions/amazon/view/109432-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 56 | **B D F** | 1. Design Secure Architectures | 71% | [Q455](https://www.examtopics.com/discussions/amazon/view/109522-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 57 | **D** | 4. Design Cost-Optimized Architectures | 77% | [Q773](https://www.examtopics.com/discussions/amazon/view/133004-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 58 | **D** | 4. Design Cost-Optimized Architectures | 62% ⚠ | [Q245](https://www.examtopics.com/discussions/amazon/view/95337-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 59 | **D** | 3. Design High-Performing Architectures | 72% | [Q264](https://www.examtopics.com/discussions/amazon/view/95345-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 60 | **A** | 4. Design Cost-Optimized Architectures | 100% | [Q459](https://www.examtopics.com/discussions/amazon/view/109440-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 61 | **C** | 2. Design Resilient Architectures | 82% | [Q785](https://www.examtopics.com/discussions/amazon/view/133021-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 62 | **A** | 1. Design Secure Architectures | 69% ⚠ | [Q426](https://www.examtopics.com/discussions/amazon/view/109278-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 63 | **C** | 3. Design High-Performing Architectures | 97% | [Q286](https://www.examtopics.com/discussions/amazon/view/99669-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 64 | **D** | 4. Design Cost-Optimized Architectures | 74% | [Q920](https://www.examtopics.com/discussions/amazon/view/145415-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 65 | **A** | 3. Design High-Performing Architectures | 64% ⚠ | [Q664](https://www.examtopics.com/discussions/amazon/view/126800-exam-aws-certified-solutions-architect-associate-saa-c03/) |
