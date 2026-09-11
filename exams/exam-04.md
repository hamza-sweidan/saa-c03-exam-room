# SAA-C03 Practice Exam 4

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

**1.** A company sets up an organization in AWS Organizations that contains 10 AWS accounts. A solutions architect must design a solution to provide access to the accounts for several thousand employees. The company has an existing identity provider (IdP). The company wants to use the existing IdP for authentication to AWS. Which solution will meet these requirements?

- **A.** Create IAM users for the employees in the required AWS accounts. Connect IAM users to the existing IdP. Configure federated authentication for the IAM users.
- **B.** Set up AWS account root users with user email addresses and passwords that are synchronized from the existing IdP.
- **C.** Configure AWS IAM Identity Center (AWS Single Sign-On). Connect IAM Identity Center to the existing IdP. Provision users and groups from the existing IdP.
- **D.** Use AWS Resource Access Manager (AWS RAM) to share access to the AWS accounts with the users in the existing IdP.

**2.** A solutions architect is creating an application. The application will run on Amazon EC2 instances in private subnets across multiple Availability Zones in a VPC. The EC2 instances will frequently access large files that contain confidential information. These files are stored in Amazon S3 buckets for processing. The solutions architect must optimize the network architecture to minimize data transfer costs. What should the solutions architect do to meet these requirements?

- **A.** Create a gateway endpoint for Amazon S3 in the VPC. In the route tables for the private subnets, add an entry for the gateway endpoint.
- **B.** Create a single NAT gateway in a public subnet. In the route tables for the private subnets, add a default route that points to the NAT gateway.
- **C.** Create an AWS PrivateLink interface endpoint for Amazon S3 in the VPIn the route tables for the private subnets, add an entry for the interface endpoint.
- **D.** Create one NAT gateway for each Availability Zone in public subnets. In each of the route tables for the private subnets, add a default route that points to the NAT gateway in the same Availability Zone.

**3.** A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across multiple Availability Zone: What should a solutions architect do to meet this requirement?

- **A.** Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.
- **B.** Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows instance.
- **C.** Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows instance.
- **D.** Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2 instance to the volume. Mount the file system within the volume to each Windows instance.

**4.** A solutions architect needs to securely store a database user name and password that an application uses to access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance. The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store. What should the solutions architect do to meet this requirement?

- **A.** Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the EC2 instance.
- **B.** Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to the EC2 instance.
- **C.** Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify Amazon RDS as a principal in the trust policy.
- **D.** Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager as a principal in the trust policy.

**5.** A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically. Which solution will meet these requirements?

- **A.** Use AWS DataSync to connect the S3 buckets to the web application.
- **B.** Deploy AWS Global Accelerator to connect the S3 buckets to the web application.
- **C.** Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.
- **D.** Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.

**6.** A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week. What should the company do to guarantee the EC2 capacity?

- **A.** Purchase Reserved Instances that specify the Region needed.
- **B.** Create an On-Demand Capacity Reservation that specifies the Region needed.
- **C.** Purchase Reserved Instances that specify the Region and three Availability Zones needed.
- **D.** Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.

**7.** A company is building a new web-based customer relationship management application. The application will use several Amazon EC2 instances that are backed by Amazon Elastic Block Store (Amazon EBS) volumes behind an Application Load Balancer (ALB). The application will also use an Amazon Aurora database. All data for the application must be encrypted at rest and in transit. Which solution will meet these requirements?

- **A.** Use AWS Key Management Service (AWS KMS) certificates on the ALB to encrypt data in transit. Use AWS Certificate Manager (ACM) to encrypt the EBS volumes and Aurora database storage at rest.
- **B.** Use the AWS root account to log in to the AWS Management Console. Upload the company’s encryption certificates. While in the root account, select the option to turn on encryption for all data at rest and in transit for the account.
- **C.** Use AWS Key Management Service (AWS KMS) to encrypt the EBS volumes and Aurora database storage at rest. Attach an AWS Certificate Manager (ACM) certificate to the ALB to encrypt data in transit.
- **D.** Use BitLocker to encrypt all data at rest. Import the company’s TLS certificate keys to AWS Key Management Service (AWS KMS) Attach the KMS keys to the ALB to encrypt data in transit.

**8.** A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources. What should a solutions architect do to meet these requirements?

- **A.** Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.
- **B.** Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.
- **C.** Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.
- **D.** Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.

**9.** A company stores a large volume of image files in an Amazon S3 bucket. The images need to be readily available for the first 180 days. The images are infrequently accessed for the next 180 days. After 360 days, the images need to be archived but must be available instantly upon request. After 5 years, only auditors can access the images. The auditors must be able to retrieve the images within 12 hours. The images cannot be lost during this process. A developer will use S3 Standard storage for the first 180 days. The developer needs to configure an S3 Lifecycle rule. Which solution will meet these requirements MOST cost-effectively?

- **A.** Transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 180 days. S3 Glacier Instant Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.
- **B.** Transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 180 days. S3 Glacier Flexible Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.
- **C.** Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days, S3 Glacier Instant Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.
- **D.** Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days, S3 Glacier Flexible Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.

**10.** A rapidly growing global ecommerce company is hosting its web application on AWS. The web application includes static content and dynamic content. The website stores online transaction processing (OLTP) data in an Amazon RDS database The website’s users are experiencing slow page loads. Which combination of actions should a solutions architect take to resolve this issue? (Choose two.)

- **A.** Configure an Amazon Redshift cluster.
- **B.** Set up an Amazon CloudFront distribution.
- **C.** Host the dynamic web content in Amazon S3.
- **D.** Create a read replica for the RDS DB instance.
- **E.** Configure a Multi-AZ deployment for the RDS DB instance.

**11.** A company is migrating a large amount of data from on-premises storage to AWS. Windows, Mac, and Linux based Amazon EC2 instances in the same AWS Region will access the data by using SMB and NFS storage protocols. The company will access a portion of the data routinely. The company will access the remaining data infrequently. The company needs to design a solution to host the data. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create an Amazon Elastic File System (Amazon EFS) volume that uses EFS Intelligent-Tiering. Use AWS DataSync to migrate the data to the EFS volume.
- **B.** Create an Amazon FSx for ONTAP instance. Create an FSx for ONTAP file system with a root volume that uses the auto tiering policy. Migrate the data to the FSx for ONTAP volume.
- **C.** Create an Amazon S3 bucket that uses S3 Intelligent-Tiering. Migrate the data to the S3 bucket by using an AWS Storage Gateway Amazon S3 File Gateway.
- **D.** Create an Amazon FSx for OpenZFS file system. Migrate the data to the new volume.

**12.** A company is using AWS Key Management Service (AWS KMS) keys to encrypt AWS Lambda environment variables. A solutions architect needs to ensure that the required permissions are in place to decrypt and use the environment variables. Which steps must the solutions architect take to implement the correct permissions? (Choose two.)

- **A.** Add AWS KMS permissions in the Lambda resource policy.
- **B.** Add AWS KMS permissions in the Lambda execution role.
- **C.** Add AWS KMS permissions in the Lambda function policy.
- **D.** Allow the Lambda execution role in the AWS KMS key policy.
- **E.** Allow the Lambda resource policy in the AWS KMS key policy.

**13.** A company is running a multi-tier ecommerce web application in the AWS Cloud. The application runs on Amazon EC2 instances with an Amazon RDS for MySQL Multi-AZ DB instance. Amazon RDS is configured with the latest generation DB instance with 2,000 GB of storage in a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. The database performance affects the application during periods of high demand. A database administrator analyzes the logs in Amazon CloudWatch Logs and discovers that the application performance always degrades when the number of read and write IOPS is higher than 20,000. What should a solutions architect do to improve the application performance?

- **A.** Replace the volume with a magnetic volume.
- **B.** Increase the number of IOPS on the gp3 volume.
- **C.** Replace the volume with a Provisioned IOPS SSD (io2) volume.
- **D.** Replace the 2,000 GB gp3 volume with two 1,000 GB gp3 volumes.

**14.** An Amazon EC2 instance is located in a private subnet in a new VPC. This subnet does not have outbound internet access, but the EC2 instance needs the ability to download monthly security updates from an outside vendor. What should a solutions architect do to meet these requirements?

- **A.** Create an internet gateway, and attach it to the VPC. Configure the private subnet route table to use the internet gateway as the default route.
- **B.** Create a NAT gateway, and place it in a public subnet. Configure the private subnet route table to use the NAT gateway as the default route.
- **C.** Create a NAT instance, and place it in the same subnet where the EC2 instance is located. Configure the private subnet route table to use the NAT instance as the default route.
- **D.** Create an internet gateway, and attach it to the VPC. Create a NAT instance, and place it in the same subnet where the EC2 instance is located. Configure the private subnet route table to use the internet gateway as the default route.

**15.** A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The application stores data in an Amazon Aurora MySQL DB cluster. The company needs to create a disaster recovery (DR) solution. The acceptable recovery time for the DR solution is up to 30 minutes. The DR solution does not need to support customer usage when the primary infrastructure is healthy. Which solution will meet these requirements?

- **A.** Deploy the DR infrastructure in a second AWS Region with an ALB and an Auto Scaling group. Set the desired capacity and maximum capacity of the Auto Scaling group to a minimum value. Convert the Aurora MySQL DB cluster to an Aurora global database. Configure Amazon Route 53 for an active-passive failover with ALB endpoints.
- **B.** Deploy the DR infrastructure in a second AWS Region with an ALUpdate the Auto Scaling group to include EC2 instances from the second Region. Use Amazon Route 53 to configure active-active failover. Convert the Aurora MySQL DB cluster to an Aurora global database.
- **C.** Back up the Aurora MySQL DB cluster data by using AWS Backup. Deploy the DR infrastructure in a second AWS Region with an ALB. Update the Auto Scaling group to include EC2 instances from the second Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora MySQL DB cluster in the second Region Restore the data from the backup.
- **D.** Back up the infrastructure configuration by using AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Set the Auto Scaling group desired capacity to zero. Use Amazon Route 53 to configure active-passive failover. Convert the Aurora MySQL DB cluster to an Aurora global database.

**16.** A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the company decides to modify the objects. Only specific users in the company's AWS account can have the ability 10 delete the objects. What should a solutions architect do to meet these requirements?

- **A.** Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects.
- **B.** Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use governance mode as the S3 bucket’s default retention mode for new objects.
- **C.** Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon notification, restore the modified objects from any backup versions that the company has.
- **D.** Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the s3:PutObjectLegalHold permission to the IAM policies of users who need to delete the objects.

**17.** A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions architect notices that AWS Glue is processing all the data during each run. What should the solutions architect do to prevent AWS Glue from reprocessing old data?

- **A.** Edit the job to use job bookmarks.
- **B.** Edit the job to delete data after the data is processed.
- **C.** Edit the job by setting the NumberOfWorkers field to 1.
- **D.** Use a FindMatches machine learning (ML) transform.

**18.** A company wants to migrate an on-premises data center to AWS. The data center hosts a storage server that stores data in an NFS-based file system. The storage server holds 200 GB of data. The company needs to migrate the data without interruption to existing services. Multiple resources in AWS must be able to access the data by using the NFS protocol. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

- **A.** Create an Amazon FSx for Lustre file system.
- **B.** Create an Amazon Elastic File System (Amazon EFS) file system.
- **C.** Create an Amazon S3 bucket to receive the data.
- **D.** Manually use an operating system copy command to push the data into the AWS destination.
- **E.** Install an AWS DataSync agent in the on-premises data center. Use a DataSync task between the on-premises location and AWS.

**19.** A company is designing a containerized application that will use Amazon Elastic Container Service (Amazon ECS). The application needs to access a shared file system that is highly durable and can recover data to another AWS Region with a recovery point objective (RPO) of 8 hours. The file system needs to provide a mount target m each Availability Zone within a Region. A solutions architect wants to use AWS Backup to manage the replication to another Region. Which solution will meet these requirements?

- **A.** Amazon FSx for Windows File Server with a Multi-AZ deployment
- **B.** Amazon FSx for NetApp ONTAP with a Multi-AZ deployment
- **C.** Amazon Elastic File System (Amazon EFS) with the Standard storage class
- **D.** Amazon FSx for OpenZFS

**20.** A company maintains an Amazon RDS database that maps users to cost centers. The company has accounts in an organization in AWS Organizations. The company needs a solution that will tag all resources that are created in a specific AWS account in the organization. The solution must tag each resource with the cost center ID of the user who created the resource. Which solution will meet these requirements?

- **A.** Move the specific AWS account to a new organizational unit (OU) in Organizations from the management account. Create a service control policy (SCP) that requires all existing resources to have the correct cost center tag before the resources are created. Apply the SCP to the new OU.
- **B.** Create an AWS Lambda function to tag the resources after the Lambda function looks up the appropriate cost center from the RDS database. Configure an Amazon EventBridge rule that reacts to AWS CloudTrail events to invoke the Lambda function.
- **C.** Create an AWS CloudFormation stack to deploy an AWS Lambda function. Configure the Lambda function to look up the appropriate cost center from the RDS database and to tag resources. Create an Amazon EventBridge scheduled rule to invoke the CloudFormation stack.
- **D.** Create an AWS Lambda function to tag the resources with a default value. Configure an Amazon EventBridge rule that reacts to AWS CloudTrail events to invoke the Lambda function when a resource is missing the cost center tag.

**21.** A company has an AWS account used for software engineering. The AWS account has access to the company’s on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway. A development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company’s data center. Which solution will meet these requirements?

- **A.** Configure the Lambda function to run in the VPC with the appropriate security group.
- **B.** Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN.
- **C.** Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.
- **D.** Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.

**22.** A company runs its applications on Amazon EC2 instances. The company performs periodic financial assessments of its AWS costs. The company recently identified unusual spending. The company needs a solution to prevent unusual spending. The solution must monitor costs and notify responsible stakeholders in the event of unusual spending. Which solution will meet these requirements?

- **A.** Use an AWS Budgets template to create a zero spend budget.
- **B.** Create an AWS Cost Anomaly Detection monitor in the AWS Billing and Cost Management console.
- **C.** Create AWS Pricing Calculator estimates for the current running workload pricing details.
- **D.** Use Amazon CloudWatch to monitor costs and to identify unusual spending.

**23.** A company that uses AWS Organizations runs 150 applications across 30 different AWS accounts. The company used AWS Cost and Usage Report to create a new report in the management account. The report is delivered to an Amazon S3 bucket that is replicated to a bucket in the data collection account. The company’s senior leadership wants to view a custom dashboard that provides NAT gateway costs each day starting at the beginning of the current month. Which solution will meet these requirements?

- **A.** Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use AWS DataSync to query the new report.
- **B.** Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use Amazon Athena to query the new report.
- **C.** Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use AWS DataSync to query the new report.
- **D.** Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use Amazon Athena to query the new report.

**24.** A company recently created a disaster recovery site in a different AWS Region. The company needs to transfer large amounts of data back and forth between NFS file systems in the two Regions on a periodic basis. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use AWS DataSync.
- **B.** Use AWS Snowball devices.
- **C.** Set up an SFTP server on Amazon EC2.
- **D.** Use AWS Database Migration Service (AWS DMS).

**25.** A company is moving its data and applications to AWS during a multiyear migration project. The company wants to securely access data on Amazon S3 from the company's AWS Region and from the company's on-premises location. The data must not traverse the internet. The company has established an AWS Direct Connect connection between its Region and its on-premises location. Which solution will meet these requirements?

- **A.** Create gateway endpoints for Amazon S3. Use the gateway endpoints to securely access the data from the Region and the on-premises location.
- **B.** Create a gateway in AWS Transit Gateway to access Amazon S3 securely from the Region and the on-premises location.
- **C.** Create interface endpoints for Amazon S3. Use the interface endpoints to securely access the data from the Region and the on-premises location.
- **D.** Use an AWS Key Management Service (AWS KMS) key to access the data securely from the Region and the on-premises location.

**26.** A company runs thousands of AWS Lambda functions. The company needs a solution to securely store sensitive information that all the Lambda functions use. The solution must also manage the automatic rotation of the sensitive information. Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)

- **A.** Create HTTP security headers by using Lambda@Edge to retrieve and create sensitive information
- **B.** Create a Lambda layer that retrieves sensitive information
- **C.** Store sensitive information in AWS Secrets Manager
- **D.** Store sensitive information in AWS Systems Manager Parameter Store
- **E.** Create a Lambda consumer with dedicated throughput to retrieve sensitive information and create environmental variables

**27.** A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company’s data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible. The data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must configure the transformation job to continue to run in the AWS Cloud. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.
- **B.** Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.
- **C.** Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue.
- **D.** Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application.

**28.** A company moved its on-premises PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. The company successfully launched a new product. The workload on the database has increased. The company wants to accommodate the larger workload without adding infrastructure. Which solution will meet these requirements MOST cost-effectively?

- **A.** Buy reserved DB instances for the total workload. Make the Amazon RDS for PostgreSQL DB instance larger.
- **B.** Make the Amazon RDS for PostgreSQL DB instance a Multi-AZ DB instance.
- **C.** Buy reserved DB instances for the total workload. Add another Amazon RDS for PostgreSQL DB instance.
- **D.** Make the Amazon RDS for PostgreSQL DB instance an on-demand DB instance.

**29.** A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval. What should a solutions architect recommend to meet these requirements?

- **A.** Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.
- **B.** Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.
- **C.** Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream.
- **D.** Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3.

**30.** A solutions architect is designing an asynchronous application to process credit card data validation requests for a bank. The application must be secure and be able to process each request at least once. Which solution will meet these requirements MOST cost-effectively?

- **A.** Use AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard queues as the event source. Use AWS Key Management Service (SSE-KMS) for encryption. Add the kms:Decrypt permission for the Lambda execution role.
- **B.** Use AWS Lambda event source mapping. Use Amazon Simple Queue Service (Amazon SQS) FIFO queues as the event source. Use SQS managed encryption keys (SSE-SQS) for encryption. Add the encryption key invocation permission for the Lambda function.
- **C.** Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) FIFO queues as the event source. Use AWS KMS keys (SSE-KMS). Add the kms:Decrypt permission for the Lambda execution role.
- **D.** Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard queues as the event source. Use AWS KMS keys (SSE-KMS) for encryption. Add the encryption key invocation permission for the Lambda function.

**31.** A company has hundreds of Amazon EC2 Linux-based instances in the AWS Cloud. Systems administrators have used shared SSH keys to manage the instances. After a recent audit, the company’s security team is mandating the removal of all shared keys. A solutions architect must design a solution that provides secure access to the EC2 instances. Which solution will meet this requirement with the LEAST amount of administrative overhead?

- **A.** Use AWS Systems Manager Session Manager to connect to the EC2 instances.
- **B.** Use AWS Security Token Service (AWS STS) to generate one-time SSH keys on demand.
- **C.** Allow shared SSH access to a set of bastion instances. Configure all other instances to allow only SSH access from the bastion instances.
- **D.** Use an Amazon Cognito custom authorizer to authenticate users. Invoke an AWS Lambda function to generate a temporary SSH key.

**32.** A company wants to host a scalable web application on AWS. The application will be accessed by users from different geographic regions of the world. Application users will be able to download and upload unique data up to gigabytes in size. The development team wants a cost- effective solution to minimize upload and download latency and maximize performance. What should a solutions architect do to accomplish this?

- **A.** Use Amazon S3 with Transfer Acceleration to host the application.
- **B.** Use Amazon S3 with CacheControl headers to host the application.
- **C.** Use Amazon EC2 with Auto Scaling and Amazon CloudFront to host the application.
- **D.** Use Amazon EC2 with Auto Scaling and Amazon ElastiCache to host the application.

**33.** A company has deployed its application on Amazon EC2 instances with an Amazon RDS database. The company used the principle of least privilege to configure the database access credentials. The company's security team wants to protect the application and the database from SQL injection and other web-based attacks. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use security groups and network ACLs to secure the database and application servers.
- **B.** Use AWS WAF to protect the application. Use RDS parameter groups to configure the security settings.
- **C.** Use AWS Network Firewall to protect the application and the database.
- **D.** Use different database accounts in the application code for different functions. Avoid granting excessive privileges to the database users.

**34.** A company has an Amazon S3 data lake that is governed by AWS Lake Formation. The company wants to create a visualization in Amazon QuickSight by joining the data in the data lake with operational data that is stored in an Amazon Aurora MySQL database. The company wants to enforce column-level authorization so that the company’s marketing team can access only a subset of columns in the database. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use Amazon EMR to ingest the data directly from the database to the QuickSight SPICE engine. Include only the required columns.
- **B.** Use AWS Glue Studio to ingest the data from the database to the S3 data lake. Attach an IAM policy to the QuickSight users to enforce column-level access control. Use Amazon S3 as the data source in QuickSight.
- **C.** Use AWS Glue Elastic Views to create a materialized view for the database in Amazon S3. Create an S3 bucket policy to enforce column-level access control for the QuickSight users. Use Amazon S3 as the data source in QuickSight.
- **D.** Use a Lake Formation blueprint to ingest the data from the database to the S3 data lake. Use Lake Formation to enforce column-level access control for the QuickSight users. Use Amazon Athena as the data source in QuickSight.

**35.** A company runs workloads on AWS. The company needs to connect to a service from an external provider. The service is hosted in the provider's VPC. According to the company’s security team, the connectivity must be private and must be restricted to the target service. The connection must be initiated only from the company’s VPC. Which solution will mast these requirements?

- **A.** Create a VPC peering connection between the company's VPC and the provider's VPC. Update the route table to connect to the target service.
- **B.** Ask the provider to create a virtual private gateway in its VPC. Use AWS PrivateLink to connect to the target service.
- **C.** Create a NAT gateway in a public subnet of the company’s VPUpdate the route table to connect to the target service.
- **D.** Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the target service.

**36.** A solutions architect needs to design a new microservice for a company’s application. Clients must be able to call an HTTPS endpoint to reach the microservice. The microservice also must use AWS Identity and Access Management (IAM) to authenticate calls. The solutions architect will write the logic for this microservice by using a single AWS Lambda function that is written in Go 1.x. Which solution will deploy the function in the MOST operationally efficient way?

- **A.** Create an Amazon API Gateway REST API. Configure the method to use the Lambda function. Enable IAM authentication on the API.
- **B.** Create a Lambda function URL for the function. Specify AWS_IAM as the authentication type.
- **C.** Create an Amazon CloudFront distribution. Deploy the function to Lambda@Edge. Integrate IAM authentication logic into the Lambda@Edge function.
- **D.** Create an Amazon CloudFront distribution. Deploy the function to CloudFront Functions. Specify AWS_IAM as the authentication type.

**37.** A company recently migrated to the AWS Cloud. The company wants a serverless solution for large-scale parallel on-demand processing of a semistructured dataset. The data consists of logs, media files, sales transactions, and IoT sensor data that is stored in Amazon S3. The company wants the solution to process thousands of items in the dataset in parallel. Which solution will meet these requirements with the MOST operational efficiency?

- **A.** Use the AWS Step Functions Map state in Inline mode to process the data in parallel.
- **B.** Use the AWS Step Functions Map state in Distributed mode to process the data in parallel.
- **C.** Use AWS Glue to process the data in parallel.
- **D.** Use several AWS Lambda functions to process the data in parallel.

**38.** A company is expanding a secure on-premises network to the AWS Cloud by using an AWS Direct Connect connection. The on-premises network has no direct internet access. An application that runs on the on-premises network needs to use an Amazon S3 bucket. Which solution will meet these requirements MOST cost-effectively?

- **A.** Create a public virtual interface (VIF). Route the AWS traffic over the public VIF.
- **B.** Create a VPC and a NAT gateway. Route the AWS traffic from the on-premises network to the NAT gateway.
- **C.** Create a VPC and an Amazon S3 interface endpoint. Route the AWS traffic from the on-premises network to the S3 interface endpoint.
- **D.** Create a VPC peering connection between the on-premises network and Direct Connect. Route the AWS traffic over the peering connection.

**39.** A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received. Which solution will meet these requirements?

- **A.** Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.
- **B.** Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.
- **C.** Use an API Gateway authorizer to block any requests while the application processes an order.
- **D.** Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing.

**40.** A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand. Which solution will meet these requirements?

- **A.** Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content.
- **B.** Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.
- **C.** Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database.
- **D.** Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.

**41.** A company is designing a web application with an internet-facing Application Load Balancer (ALB). The company needs the ALB to receive HTTPS web traffic from the public internet. The ALB must send only HTTPS traffic to the web application servers hosted on the Amazon EC2 instances on port 443. The ALB must perform a health check of the web application servers over HTTPS on port 8443. Which combination of configurations of the security group that is associated with the ALB will meet these requirements? (Choose three.)

- **A.** Allow HTTPS inbound traffic from 0.0.0.0/0 for port 443.
- **B.** Allow all outbound traffic to 0.0.0.0/0 for port 443.
- **C.** Allow HTTPS outbound traffic to the web application instances for port 443.
- **D.** Allow HTTPS inbound traffic from the web application instances for port 443.
- **E.** Allow HTTPS outbound traffic to the web application instances for the health check on port 8443.
- **F.** Allow HTTPS inbound traffic from the web application instances for the health check on port 8443.

**42.** A development team is creating an event-based application that uses AWS Lambda functions. Events will be generated when files are added to an Amazon S3 bucket. The development team currently has Amazon Simple Notification Service (Amazon SNS) configured as the event target from Amazon S3. What should a solutions architect do to process the events from Amazon S3 in a scalable way?

- **A.** Create an SNS subscription that processes the event in Amazon Elastic Container Service (Amazon ECS) before the event runs in Lambda.
- **B.** Create an SNS subscription that processes the event in Amazon Elastic Kubernetes Service (Amazon EKS) before the event runs in Lambda
- **C.** Create an SNS subscription that sends the event to Amazon Simple Queue Service (Amazon SQS). Configure the SOS queue to trigger a Lambda function.
- **D.** Create an SNS subscription that sends the event to AWS Server Migration Service (AWS SMS). Configure the Lambda function to poll from the SMS event.

**43.** An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet. Which solution will provide private network connectivity to Amazon S3?

- **A.** Create a gateway VPC endpoint to the S3 bucket.
- **B.** Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.
- **C.** Create an instance profile on Amazon EC2 to allow S3 access.
- **D.** Create an Amazon API Gateway API with a private link to access the S3 endpoint.

**44.** A company has two applications: a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed: If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages. Which solution meets these requirements and is the MOST operationally efficient?

- **A.** Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.
- **B.** Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).
- **C.** Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process.
- **D.** Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.

**45.** A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the migration design requirements, a solutions architect must implement infrastructure metric alarms. The company does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company needs to act as soon as possible. The solutions architect also must reduce false alarms. What should the solutions architect do to meet these requirements?

- **A.** Create Amazon CloudWatch composite alarms where possible.
- **B.** Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly.
- **C.** Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.
- **D.** Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.

**46.** A company’s web application consists of an Amazon API Gateway API in front of an AWS Lambda function and an Amazon DynamoDB database. The Lambda function handles the business logic, and the DynamoDB table hosts the data. The application uses Amazon Cognito user pools to identify the individual users of the application. A solutions architect needs to update the application so that only users who have a subscription can access premium content. Which solution will meet this requirement with the LEAST operational overhead?

- **A.** Enable API caching and throttling on the API Gateway API.
- **B.** Set up AWS WAF on the API Gateway API. Create a rule to filter users who have a subscription.
- **C.** Apply fine-grained IAM permissions to the premium content in the DynamoDB table.
- **D.** Implement API usage plans and API keys to limit the access of users who do not have a subscription.

**47.** A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event. A solutions architect needs to design a solution that stores customer data that is created during database upgrades. Which solution will meet these requirements?

- **A.** Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.
- **B.** Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.
- **C.** Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.
- **D.** Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database.

**48.** A company runs its ecommerce application on AWS. Every new order is published as a massage in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone. The company needs to redesign its architecture to provide the highest availability with the least operational overhead. What should a solutions architect do to meet these requirements?

- **A.** Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.
- **B.** Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.
- **C.** Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.
- **D.** Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database

**49.** A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day. What should a solutions architect do to transmit and process the clickstream data?

- **A.** Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.
- **B.** Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.
- **C.** Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket. run an AWS Lambda function to process the data for analysis.
- **D.** Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis.

**50.** A company deploys an application on five Amazon EC2 instances. An Application Load Balancer (ALB) distributes traffic to the instances by using a target group. The average CPU usage on each of the instances is below 10% most of the time, with occasional surges to 65%. A solutions architect needs to implement a solution to automate the scalability of the application. The solution must optimize the cost of the architecture and must ensure that the application has enough CPU resources when surges occur. Which solution will meet these requirements?

- **A.** Create an Amazon CloudWatch alarm that enters the ALARM state when the CPUUtilization metric is less than 20%. Create an AWS Lambda function that the CloudWatch alarm invokes to terminate one of the EC2 instances in the ALB target group.
- **B.** Create an EC2 Auto Scaling group. Select the existing ALB as the load balancer and the existing target group as the target group. Set a target tracking scaling policy that is based on the ASGAverageCPUUtilization metric. Set the minimum instances to 2, the desired capacity to 3, the maximum instances to 6, and the target value to 50%. Add the EC2 instances to the Auto Scaling group.
- **C.** Create an EC2 Auto Scaling group. Select the existing ALB as the load balancer and the existing target group as the target group. Set the minimum instances to 2, the desired capacity to 3, and the maximum instances to 6. Add the EC2 instances to the Auto Scaling group.
- **D.** Create two Amazon CloudWatch alarms. Configure the first CloudWatch alarm to enter the ALARM state when the average CPUUtilization metric is below 20%. Configure the second CloudWatch alarm to enter the ALARM state when the average CPUUtilization matric is above 50%. Configure the alarms to publish to an Amazon Simple Notification Service (Amazon SNS) topic to send an email message. After receiving the message, log in to decrease or increase the number of EC2 instances that are running.

**51.** A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital’s data team will scan the documents and will upload the documents to the AWS Cloud. A solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)

- **A.** Write the document information to an Amazon EC2 instance that runs a MySQL database.
- **B.** Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data.
- **C.** Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information.
- **D.** Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.
- **E.** Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text.

**52.** A company is looking for a solution that can store video archives in AWS from old news footage. The company needs to minimize costs and will rarely need to restore these files. When the files are needed, they must be available in a maximum of five minutes. What is the MOST cost-effective solution?

- **A.** Store the video archives in Amazon S3 Glacier and use Expedited retrievals.
- **B.** Store the video archives in Amazon S3 Glacier and use Standard retrievals.
- **C.** Store the video archives in Amazon S3 Standard-Infrequent Access (S3 Standard-IA).
- **D.** Store the video archives in Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA).

**53.** An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket. A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically. Which combination of actions will meet these requirements? (Choose two.)

- **A.** Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.
- **B.** Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue.
- **C.** Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.
- **D.** Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.
- **E.** Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon Simple Notification Service (Amazon SNS) topic with the application owner's email address for further processing.

**54.** A company uses Amazon RDS with default backup settings for its database tier. The company needs to make a daily backup of the database to meet regulatory requirements. The company must retain the backups for 30 days. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Write an AWS Lambda function to create an RDS snapshot every day.
- **B.** Modify the RDS database to have a retention period of 30 days for automated backups.
- **C.** Use AWS Systems Manager Maintenance Windows to modify the RDS backup retention period.
- **D.** Create a manual snapshot every day by using the AWS CLI. Modify the RDS backup retention period.

**55.** A company is planning to migrate data to an Amazon S3 bucket. The data must be encrypted at rest within the S3 bucket. The encryption key must be rotated automatically every year. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Migrate the data to the S3 bucket. Use server-side encryption with Amazon S3 managed keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.
- **B.** Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Set the S3 bucket's default encryption behavior to use the customer managed KMS key. Migrate the data to the S3 bucket.
- **C.** Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket's default encryption behavior to use the customer managed KMS key. Migrate the data to the S3 bucket. Manually rotate the KMS key every year.
- **D.** Use customer key material to encrypt the data. Migrate the data to the S3 bucket. Create an AWS Key Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.

**56.** A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business day. Application usage is moderate and steady overnight. Application usage is low during weekends. The company wants to minimize its EC2 costs without affecting the availability of the application. Which solution will meet these requirements?

- **A.** Use Spot Instances for the entire workload.
- **B.** Use Reserved Instances for the baseline level of usage. Use Spot instances for any additional capacity that the application needs.
- **C.** Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.
- **D.** Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional capacity that the application needs.

**57.** A company’s applications use Apache Hadoop and Apache Spark to process data on premises. The existing infrastructure is not scalable and is complex to manage. A solutions architect must design a scalable solution that reduces operational complexity. The solution must keep the data processing on premises. Which solution will meet these requirements?

- **A.** Use AWS Site-to-Site VPN to access the on-premises Hadoop Distributed File System (HDFS) data and application. Use an Amazon EMR cluster to process the data.
- **B.** Use AWS DataSync to connect to the on-premises Hadoop Distributed File System (HDFS) cluster. Create an Amazon EMR cluster to process the data.
- **C.** Migrate the Apache Hadoop application and the Apache Spark application to Amazon EMR clusters on AWS Outposts. Use the EMR clusters to process the data.
- **D.** Use an AWS Snowball device to migrate the data to an Amazon S3 bucket. Create an Amazon EMR cluster to process the data.

**58.** A marketing company receives a large amount of new clickstream data in Amazon S3 from a marketing campaign. The company needs to analyze the clickstream data in Amazon S3 quickly. Then the company needs to determine whether to process the data further in the data pipeline. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create external tables in a Spark catalog. Configure jobs in AWS Glue to query the data.
- **B.** Configure an AWS Glue crawler to crawl the data. Configure Amazon Athena to query the data.
- **C.** Create external tables in a Hive metastore. Configure Spark jobs in Amazon EMR to query the data.
- **D.** Configure an AWS Glue crawler to crawl the data. Configure Amazon Kinesis Data Analytics to use SQL to query the data.

**59.** A reporting team receives files each day in an Amazon S3 bucket. The reporting team manually reviews and copies the files from this initial S3 bucket to an analysis S3 bucket each day at the same time to use with Amazon QuickSight. Additional teams are starting to send more files in larger sizes to the initial S3 bucket. The reporting team wants to move the files automatically analysis S3 bucket as the files enter the initial S3 bucket. The reporting team also wants to use AWS Lambda functions to run pattern-matching code on the copied data. In addition, the reporting team wants to send the data files to a pipeline in Amazon SageMaker Pipelines. What should a solutions architect do to meet these requirements with the LEAST operational overhead?

- **A.** Create a Lambda function to copy the files to the analysis S3 bucket. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.
- **B.** Create a Lambda function to copy the files to the analysis S3 bucket. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.
- **C.** Configure S3 replication between the S3 buckets. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.
- **D.** Configure S3 replication between the S3 buckets. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.

**60.** A company’s developers want a secure way to gain SSH access on the company's Amazon EC2 instances that run the latest version of Amazon Linux. The developers work remotely and in the corporate office. The company wants to use AWS services as a part of the solution. The EC2 instances are hosted in a VPC private subnet and access the internet through a NAT gateway that is deployed in a public subnet. What should a solutions architect do to meet these requirements MOST cost-effectively?

- **A.** Create a bastion host in the same subnet as the EC2 instances. Grant the ec2:CreateVpnConnection IAM permission to the developers. Install EC2 Instance Connect so that the developers can connect to the EC2 instances.
- **B.** Create an AWS Site-to-Site VPN connection between the corporate network and the VPC. Instruct the developers to use the Site-to-Site VPN connection to access the EC2 instances when the developers are on the corporate network. Instruct the developers to set up another VPN connection for access when they work remotely.
- **C.** Create a bastion host in the public subnet of the VPConfigure the security groups and SSH keys of the bastion host to only allow connections and SSH authentication from the developers’ corporate and remote networks. Instruct the developers to connect through the bastion host by using SSH to reach the EC2 instances.
- **D.** Attach the AmazonSSMManagedInstanceCore IAM policy to an IAM role that is associated with the EC2 instances. Instruct the developers to use AWS Systems Manager Session Manager to access the EC2 instances.

**61.** A solutions architect creates a VPC that includes two public subnets and two private subnets. A corporate security mandate requires the solutions architect to launch all Amazon EC2 instances in a private subnet. However, when the solutions architect launches an EC2 instance that runs a web server on ports 80 and 443 in a private subnet, no external internet traffic can connect to the server. What should the solutions architect do to resolve this issue?

- **A.** Attach the EC2 instance to an Auto Scaling group in a private subnet. Ensure that the DNS record for the website resolves to the Auto Scaling group identifier.
- **B.** Provision an internet-facing Application Load Balancer (ALB) in a public subnet. Add the EC2 instance to the target group that is associated with the ALEnsure that the DNS record for the website resolves to the ALB.
- **C.** Launch a NAT gateway in a private subnet. Update the route table for the private subnets to add a default route to the NAT gateway. Attach a public Elastic IP address to the NAT gateway.
- **D.** Ensure that the security group that is attached to the EC2 instance allows HTTP traffic on port 80 and HTTPS traffic on port 443. Ensure that the DNS record for the website resolves to the public IP address of the EC2 instance.

**62.** A solutions architect is implementing a document review application using an Amazon S3 bucket for storage. The solution must prevent accidental deletion of the documents and ensure that all versions of the documents are available. Users must be able to download, modify, and upload documents. Which combination of actions should be taken to meet these requirements? (Choose two.)

- **A.** Enable a read-only bucket ACL.
- **B.** Enable versioning on the bucket.
- **C.** Attach an IAM policy to the bucket.
- **D.** Enable MFA Delete on the bucket.
- **E.** Encrypt the bucket using AWS KMS.

**63.** A company wants to rearchitect a large-scale web application to a serverless microservices architecture. The application uses Amazon EC2 instances and is written in Python. The company selected one component of the web application to test as a microservice. The component supports hundreds of requests each second. The company wants to create and test the microservice on an AWS solution that supports Python. The solution must also scale automatically and require minimal infrastructure and minimal operational support. Which solution will meet these requirements?

- **A.** Use a Spot Fleet with auto scaling of EC2 instances that run the most recent Amazon Linux operating system.
- **B.** Use an AWS Elastic Beanstalk web server environment that has high availability configured.
- **C.** Use Amazon Elastic Kubernetes Service (Amazon EKS). Launch Auto Scaling groups of self-managed EC2 instances.
- **D.** Use an AWS Lambda function that runs custom developed code.

**64.** An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email. Users report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages. What should the solutions architect do to resolve this issue with the LEAST operational overhead?

- **A.** Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.
- **B.** Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.
- **C.** Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout.
- **D.** Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing.

**65.** A company wants to send all AWS Systems Manager Session Manager logs to an Amazon S3 bucket for archival purposes. Which solution will meet this requirement with the MOST operational efficiency?

- **A.** Enable S3 logging in the Systems Manager console. Choose an S3 bucket to send the session data to.
- **B.** Install the Amazon CloudWatch agent. Push all logs to a CloudWatch log group. Export the logs to an S3 bucket from the group for archival purposes.
- **C.** Create a Systems Manager document to upload all server logs to a central S3 bucket. Use Amazon EventBridge to run the Systems Manager document against all servers that are in the account daily.
- **D.** Install an Amazon CloudWatch agent. Push all logs to a CloudWatch log group. Create a CloudWatch logs subscription that pushes any incoming log events to an Amazon Kinesis Data Firehose delivery stream. Set Amazon S3 as the destination.

---

## Answer key -- Exam 4

`Consensus` is the share of ExamTopics voters choosing that answer. Anything
below 70% is genuinely contested -- open the discussion link before trusting it.

| # | Answer | Domain | Consensus | Source |
|---:|---|---|---:|---|
| 1 | **C** | 1. Design Secure Architectures | 100% | [Q750](https://www.examtopics.com/discussions/amazon/view/132941-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 2 | **A** | 4. Design Cost-Optimized Architectures | 100% | [Q860](https://www.examtopics.com/discussions/amazon/view/137828-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 3 | **B** | 3. Design High-Performing Architectures | 100% | [Q186](https://www.examtopics.com/discussions/amazon/view/87650-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 4 | **A** | 1. Design Secure Architectures | 95% | [Q179](https://www.examtopics.com/discussions/amazon/view/87582-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 5 | **C** | 3. Design High-Performing Architectures | 100% | [Q155](https://www.examtopics.com/discussions/amazon/view/86795-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 6 | **D** | 4. Design Cost-Optimized Architectures | 100% | [Q47](https://www.examtopics.com/discussions/amazon/view/85529-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 7 | **C** | 1. Design Secure Architectures | 100% | [Q234](https://www.examtopics.com/discussions/amazon/view/95325-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 8 | **B** | 1. Design Secure Architectures | 99% | [Q34](https://www.examtopics.com/discussions/amazon/view/85202-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 9 | **C** | 4. Design Cost-Optimized Architectures | 85% | [Q651](https://www.examtopics.com/discussions/amazon/view/125244-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 10 | **B D** | 3. Design High-Performing Architectures | 90% | [Q416](https://www.examtopics.com/discussions/amazon/view/103423-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 11 | **B** | 3. Design High-Performing Architectures | 80% | [Q719](https://www.examtopics.com/discussions/amazon/view/132892-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 12 | **B D** | 1. Design Secure Architectures | 100% | [Q550](https://www.examtopics.com/discussions/amazon/view/116979-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 13 | **C** | 3. Design High-Performing Architectures | 38% ⚠ | [Q394](https://www.examtopics.com/discussions/amazon/view/102161-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 14 | **B** | 1. Design Secure Architectures | 94% | [Q251](https://www.examtopics.com/discussions/amazon/view/95023-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 15 | **A** | 2. Design Resilient Architectures | 69% ⚠ | [Q955](https://www.examtopics.com/discussions/amazon/view/146208-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 16 | **D** | 2. Design Resilient Architectures | 77% | [Q109](https://www.examtopics.com/discussions/amazon/view/85634-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 17 | **A** | 3. Design High-Performing Architectures | 100% | [Q103](https://www.examtopics.com/discussions/amazon/view/85781-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 18 | **B E** | 4. Design Cost-Optimized Architectures | 100% | [Q617](https://www.examtopics.com/discussions/amazon/view/121176-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 19 | **C** | 2. Design Resilient Architectures | 89% | [Q475](https://www.examtopics.com/discussions/amazon/view/109456-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 20 | **B** | 1. Design Secure Architectures | 63% ⚠ | [Q653](https://www.examtopics.com/discussions/amazon/view/126867-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 21 | **A** | 1. Design Secure Architectures | 76% | [Q184](https://www.examtopics.com/discussions/amazon/view/87534-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 22 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q671](https://www.examtopics.com/discussions/amazon/view/129712-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 23 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q880](https://www.examtopics.com/discussions/amazon/view/137926-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 24 | **A** | 2. Design Resilient Architectures | 100% | [Q304](https://www.examtopics.com/discussions/amazon/view/99949-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 25 | **C** | 1. Design Secure Architectures | 85% | [Q667](https://www.examtopics.com/discussions/amazon/view/126802-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 26 | **B C** | 1. Design Secure Architectures | 90% | [Q936](https://www.examtopics.com/discussions/amazon/view/145010-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 27 | **C** | 3. Design High-Performing Architectures | 64% ⚠ | [Q113](https://www.examtopics.com/discussions/amazon/view/85912-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 28 | **A** | 4. Design Cost-Optimized Architectures | 84% | [Q436](https://www.examtopics.com/discussions/amazon/view/109277-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 29 | **C** | 3. Design High-Performing Architectures | 87% | [Q33](https://www.examtopics.com/discussions/amazon/view/85201-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 30 | **A** | 4. Design Cost-Optimized Architectures | 76% | [Q491](https://www.examtopics.com/discussions/amazon/view/109513-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 31 | **A** | 1. Design Secure Architectures | 85% | [Q319](https://www.examtopics.com/discussions/amazon/view/99628-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 32 | **A** | 3. Design High-Performing Architectures | 74% | [Q443](https://www.examtopics.com/discussions/amazon/view/109424-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 33 | **B** | 1. Design Secure Architectures | 100% | [Q732](https://www.examtopics.com/discussions/amazon/view/132915-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 34 | **D** | 3. Design High-Performing Architectures | 100% | [Q341](https://www.examtopics.com/discussions/amazon/view/99710-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 35 | **D** | 1. Design Secure Architectures | 100% | [Q135](https://www.examtopics.com/discussions/amazon/view/85994-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 36 | **A** | 1. Design Secure Architectures | 52% ⚠ | [Q239](https://www.examtopics.com/discussions/amazon/view/95365-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 37 | **B** | 2. Design Resilient Architectures | 96% | [Q603](https://www.examtopics.com/discussions/amazon/view/121211-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 38 | **C** | 4. Design Cost-Optimized Architectures | 68% ⚠ | [Q835](https://www.examtopics.com/discussions/amazon/view/137001-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 39 | **B** | 2. Design Resilient Architectures | 98% | [Q10](https://www.examtopics.com/discussions/amazon/view/84681-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 40 | **A** | 2. Design Resilient Architectures | 95% | [Q183](https://www.examtopics.com/discussions/amazon/view/87570-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 41 | **A C E** | 1. Design Secure Architectures | 87% | [Q973](https://www.examtopics.com/discussions/amazon/view/146030-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 42 | **C** | 3. Design High-Performing Architectures | 100% | [Q636](https://www.examtopics.com/discussions/amazon/view/125546-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 43 | **A** | 1. Design Secure Architectures | 99% | [Q4](https://www.examtopics.com/discussions/amazon/view/84980-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 44 | **C** | 2. Design Resilient Architectures | 90% | [Q164](https://www.examtopics.com/discussions/amazon/view/87523-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 45 | **A** | 3. Design High-Performing Architectures | 99% | [Q150](https://www.examtopics.com/discussions/amazon/view/86034-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 46 | **D** | 1. Design Secure Architectures | 86% | [Q366](https://www.examtopics.com/discussions/amazon/view/102128-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 47 | **D** | 2. Design Resilient Architectures | 62% ⚠ | [Q87](https://www.examtopics.com/discussions/amazon/view/85319-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 48 | **B** | 2. Design Resilient Architectures | 100% | [Q138](https://www.examtopics.com/discussions/amazon/view/85999-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 49 | **D** | 3. Design High-Performing Architectures | 91% | [Q59](https://www.examtopics.com/discussions/amazon/view/85793-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 50 | **B** | 2. Design Resilient Architectures | 94% | [Q297](https://www.examtopics.com/discussions/amazon/view/99652-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 51 | **B E** | 3. Design High-Performing Architectures | 100% | [Q192](https://www.examtopics.com/discussions/amazon/view/89133-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 52 | **A** | 4. Design Cost-Optimized Architectures | 97% | [Q485](https://www.examtopics.com/discussions/amazon/view/109470-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 53 | **A B** | 2. Design Resilient Architectures | 99% | [Q18](https://www.examtopics.com/discussions/amazon/view/85033-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 54 | **B** | 2. Design Resilient Architectures | 100% | [Q863](https://www.examtopics.com/discussions/amazon/view/139172-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 55 | **B** | 1. Design Secure Architectures | 74% | [Q825](https://www.examtopics.com/discussions/amazon/view/136805-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 56 | **B** | 4. Design Cost-Optimized Architectures | 64% ⚠ | [Q146](https://www.examtopics.com/discussions/amazon/view/86750-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 57 | **C** | 3. Design High-Performing Architectures | 86% | [Q718](https://www.examtopics.com/discussions/amazon/view/132891-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 58 | **B** | 3. Design High-Performing Architectures | 89% | [Q672](https://www.examtopics.com/discussions/amazon/view/129713-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 59 | **D** | 2. Design Resilient Architectures | 77% | [Q139](https://www.examtopics.com/discussions/amazon/view/85872-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 60 | **D** | 4. Design Cost-Optimized Architectures | 100% | [Q766](https://www.examtopics.com/discussions/amazon/view/132957-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 61 | **B** | 2. Design Resilient Architectures | 84% | [Q697](https://www.examtopics.com/discussions/amazon/view/132860-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 62 | **B D** | 2. Design Resilient Architectures | 100% | [Q256](https://www.examtopics.com/discussions/amazon/view/95460-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 63 | **D** | 4. Design Cost-Optimized Architectures | 82% | [Q721](https://www.examtopics.com/discussions/amazon/view/132894-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 64 | **C** | 2. Design Resilient Architectures | 79% | [Q98](https://www.examtopics.com/discussions/amazon/view/85185-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 65 | **A** | 1. Design Secure Architectures | 95% | [Q517](https://www.examtopics.com/discussions/amazon/view/109536-exam-aws-certified-solutions-architect-associate-saa-c03/) |
