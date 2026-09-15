# SAA-C03 Most Likely Paper

The 65 most recently reported questions in the bank, kept to the exam blueprint.
Each question is ranked by the newest ExamTopics discussion posted for its scenario;
the dump has no dates, so posting order is the only sign of what is still in use.
This leans toward the live pool -- it does not predict any one sitting.

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

**1.** A company runs its legacy web application on AWS. The web application server runs on an Amazon EC2 instance in the public subnet of a VPC. The web application server collects images from customers and stores the image files in a locally attached Amazon Elastic Block Store (Amazon EBS) volume. The image files are uploaded every night to an Amazon S3 bucket for backup. A solutions architect discovers that the image files are being uploaded to Amazon S3 through the public endpoint. The solutions architect needs to ensure that traffic to Amazon S3 does not use the public endpoint. Which solution will meet these requirements?

- **A.** Create a gateway VPC endpoint for the S3 bucket that has the necessary permissions for the VPC. Configure the subnet route table to use the gateway VPC endpoint.
- **B.** Move the S3 bucket inside the VPC. Configure the subnet route table to access the S3 bucket through private IP addresses.
- **C.** Create an Amazon S3 access point for the Amazon EC2 instance inside the VPConfigure the web application to upload by using the Amazon S3 access point.
- **D.** Configure an AWS Direct Connect connection between the VPC that has the Amazon EC2 instance and Amazon S3 to provide a dedicated network path.

**2.** A company is testing an application that runs on an Amazon EC2 Linux instance. A single 500 GB Amazon Elastic Block Store (Amazon EBS) General Purpose SSO (gp2) volume is attached to the EC2 instance. The company will deploy the application on multiple EC2 instances in an Auto Scaling group. All instances require access to the data that is stored in the EBS volume. The company needs a highly available and resilient solution that does not introduce significant changes to the application's code. Which solution will meet these requirements?

- **A.** Provision an EC2 instance that uses NFS server software. Attach a single 500 GB gp2 EBS volume to the instance.
- **B.** Provision an Amazon FSx for Windows File Server file system. Configure the file system as an SMB file store within a single Availability Zone.
- **C.** Provision an EC2 instance with two 250 GB Provisioned IOPS SSD EBS volumes.
- **D.** Provision an Amazon Elastic File System (Amazon EFS) file system. Configure the file system to use General Purpose performance mode.

**3.** A company uses an Amazon RDS for MySQL instance. To prepare for end-of-year processing, the company added a read replica to accommodate extra read-only queries from the company's reporting tool. The read replica CPU usage was 60% and the primary instance CPU usage was 60%. After end-of-year activities are complete, the read replica has a constant 25% CPU usage. The primary instance still has a constant 60% CPU usage. The company wants to rightsize the database and still provide enough performance for future growth. Which solution will meet these requirements?

- **A.** Delete the read replica Do not make changes to the primary instance
- **B.** Resize the read replica to a smaller instance size Do not make changes to the primary instance
- **C.** Resize the read replica to a larger instance size Resize the primary instance to a smaller instance size
- **D.** Delete the read replica Resize the primary instance to a larger instance

**4.** A global ecommerce company runs its critical workloads on AWS. The workloads use an Amazon RDS for PostgreSQL DB instance that is configured for a Multi-AZ deployment. Customers have reported application timeouts when the company undergoes database failovers. The company needs a resilient solution to reduce failover time. Which solution will meet these requirements?

- **A.** Create an Amazon RDS Proxy. Assign the proxy to the DB instance.
- **B.** Create a read replica for the DB instance. Move the read traffic to the read replica.
- **C.** Enable Performance Insights. Monitor the CPU load to identify the timeouts.
- **D.** Take regular automatic snapshots. Copy the automatic snapshots to multiple AWS Regions.

**5.** A company recently performed a lift and shift migration of its on-premises Oracle database workload to run on an Amazon EC2 memory optimized Linux instance. The EC2 Linux instance uses a 1 TB Provisioned IOPS SSD (io1) EBS volume with 64,000 IOPS. The database storage performance after the migration is slower than the performance of the on-premises database. Which solution will improve storage performance?

- **A.** Add more Provisioned IOPS SSD (io1) EBS volumes. Use OS commands to create a Logical Volume Management (LVM) stripe.
- **B.** Increase the Provisioned IOPS SSD (io1) EBS volume to more than 64,000 IOPS.
- **C.** Increase the size of the Provisioned IOPS SSD (io1) EBS volume to 2 TB.
- **D.** Change the EC2 Linux instance to a storage optimized instance type. Do not change the Provisioned IOPS SSD (io1) EBS volume.

**6.** A solutions architect is creating an application that will handle batch processing of large amounts of data. The input data will be held in Amazon S3 and the output data will be stored in a different S3 bucket. For processing, the application will transfer the data over the network between multiple Amazon EC2 instances. What should the solutions architect do to reduce the overall data transfer costs?

- **A.** Place all the EC2 instances in an Auto Scaling group.
- **B.** Place all the EC2 instances in the same AWS Region.
- **C.** Place all the EC2 instances in the same Availability Zone.
- **D.** Place all the EC2 instances in private subnets in multiple Availability Zones.

**7.** A company runs database workloads on AWS that are the backend for the company's customer portals. The company runs a Multi-AZ database cluster on Amazon RDS for PostgreSQL. The company needs to implement a 30-day backup retention policy. The company currently has both automated RDS backups and manual RDS backups. The company wants to maintain both types of existing RDS backups that are less than 30 days old. Which solution will meet these requirements MOST cost-effectively?

- **A.** Configure the RDS backup retention policy to 30 days for automated backups by using AWS Backup. Manually delete manual backups that are older than 30 days.
- **B.** Disable RDS automated backups. Delete automated backups and manual backups that are older than 30 days. Configure the RDS backup retention policy to 30 days for automated backups.
- **C.** Configure the RDS backup retention policy to 30 days for automated backups. Manually delete manual backups that are older than 30 days.
- **D.** Disable RDS automated backups. Delete automated backups and manual backups that are older than 30 days automatically by using AWS CloudFormation. Configure the RDS backup retention policy to 30 days for automated backups.

**8.** A company tracks customer satisfaction by using surveys that the company hosts on its website. The surveys sometimes reach thousands of customers every hour. Survey results are currently sent in email messages to the company so company employees can manually review results and assess customer sentiment. The company wants to automate the customer survey process. Survey results must be available for the previous 12 months. Which solution will meet these requirements in the MOST scalable way?

- **A.** Send the survey results data to an Amazon API Gateway endpoint that is connected to an Amazon Simple Queue Service (Amazon SQS) queue. Create an AWS Lambda function to poll the SQS queue, call Amazon Comprehend for sentiment analysis, and save the results to an Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.
- **B.** Send the survey results data to an API that is running on an Amazon EC2 instance. Configure the API to store the survey results as a new record in an Amazon DynamoDB table, call Amazon Comprehend for sentiment analysis, and save the results in a second DynamoDB table. Set the TTL for all records to 365 days in the future.
- **C.** Write the survey results data to an Amazon S3 bucket. Use S3 Event Notifications to invoke an AWS Lambda function to read the data and call Amazon Rekognition for sentiment analysis. Store the sentiment analysis results in a second S3 bucket. Use S3 lifecycle policies on each bucket to expire objects after 365 days.
- **D.** Send the survey results data to an Amazon API Gateway endpoint that is connected to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the SQS queue to invoke an AWS Lambda function that calls Amazon Lex for sentiment analysis and saves the results to an Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.

**9.** A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP, and the database server are all hosted on the EC2 instance. The application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly. Which solution will meet these requirements MOST cost-effectively?

- **A.** Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load to each EC2 instance.
- **B.** Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.
- **C.** Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization surpasses 75%.
- **D.** Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply the AMI to a launch template. Create an Auto Scaling group with the launch template Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.

**10.** A company currently stores 5 TB of data in on-premises block storage systems. The company's current storage solution provides limited space for additional data. The company runs applications on premises that must be able to retrieve frequently accessed data with low latency. The company requires a cloud-based storage solution. Which solution will meet these requirements with the MOST operational efficiency?

- **A.** Use Amazon S3 File Gateway. Integrate S3 File Gateway with the on-premises applications to store and directly retrieve files by using the SMB file system.
- **B.** Use an AWS Storage Gateway Volume Gateway with cached volumes as iSCSI targets.
- **C.** Use an AWS Storage Gateway Volume Gateway with stored volumes as iSCSI targets.
- **D.** Use an AWS Storage Gateway Tape Gateway. Integrate Tape Gateway with the on-premises applications to store virtual tapes in Amazon S3.

**11.** A company is building an application in the AWS Cloud. The application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The company uses Amazon Route 53 for the DNS. The company needs a managed solution with proactive engagement to detect against DDoS attacks. Which solution will meet these requirements?

- **A.** Enable AWS Config. Configure an AWS Config managed rule that detects DDoS attacks.
- **B.** Enable AWS WAF on the ALCreate an AWS WAF web ACL with rules to detect and prevent DDoS attacks. Associate the web ACL with the ALB.
- **C.** Store the ALB access logs in an Amazon S3 bucket. Configure Amazon GuardDuty to detect and take automated preventative actions for DDoS attacks.
- **D.** Subscribe to AWS Shield Advanced. Configure hosted zones in Route 53. Add ALB resources as protected resources.

**12.** A company runs an application in a private subnet behind an Application Load Balancer (ALB) in a VPC. The VPC has a NAT gateway and an internet gateway. The application calls the Amazon S3 API to store objects. According to the company's security policy, traffic from the application must not travel across the internet. Which solution will meet these requirements MOST cost-effectively?

- **A.** Configure an S3 interface endpoint. Create a security group that allows outbound traffic to Amazon S3.
- **B.** Configure an S3 gateway endpoint. Update the VPC route table to use the endpoint.
- **C.** Configure an S3 bucket policy to allow traffic from the Elastic IP address that is assigned to the NAT gateway.
- **D.** Create a second NAT gateway in the same subnet where the legacy application is deployed. Update the VPC route table to use the second NAT gateway.

**13.** A company is running a media store across multiple Amazon EC2 instances distributed across multiple Availability Zones in a single VPC. The company wants a high-performing solution to share data between all the EC2 instances, and prefers to keep the data within the VPC only. What should a solutions architect recommend?

- **A.** Create an Amazon S3 bucket and call the service APIs from each instance's application
- **B.** Create an Amazon S3 bucket and configure all instances to access it as a mounted volume
- **C.** Configure an Amazon Elastic Block Store (Amazon EBS) volume and mount it across all instances
- **D.** Configure an Amazon Elastic File System (Amazon EFS) file system and mount it across all instances

**14.** A company uses AWS to host its public ecommerce website. The website uses an AWS Global Accelerator accelerator for traffic from the internet. The Global Accelerator accelerator forwards the traffic to an Application Load Balancer (ALB) that is the entry point for an Auto Scaling group. The company recently identified a DDoS attack on the website. The company needs a solution to mitigate future attacks. Which solution will meet these requirements with the LEAST implementation effort?

- **A.** Configure an AWS WAF web ACL for the Global Accelerator accelerator to block traffic by using rate-based rules
- **B.** Configure an AWS Lambda function to read the ALB metrics to block attacks by updating a VPC network ACL
- **C.** Configure an AWS WAF web ACL on the ALB to block traffic by using rate-based rules
- **D.** Configure an Amazon CloudFront distribution in front of the Global Accelerator accelerator

**15.** A company runs a Node js function on a server in its on-premises data center. The data center stores data in a PostgreSQL database. The company stores the credentials in a connection string in an environment variable on the server. The company wants to migrate its application to AWS and to replace the Node.js application server with AWS Lambda. The company also wants to migrate to Amazon RDS for PostgreSQL and to ensure that the database credentials are securely managed. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Store the database credentials as a parameter in AWS Systems Manager Parameter Store Configure Parameter Store to automatically rotate the secrets every 30 days. Update the Lambda function to retrieve the credentials from the parameter.
- **B.** Store the database credentials as a secret in AWS Secrets Manager. Configure Secrets Manager to automatically rotate the credentials every 30 days. Update the Lambda function to retrieve the credentials from the secret.
- **C.** Store the database credentials as an encrypted Lambda environment variable. Write a custom Lambda function to rotate the credentials. Schedule the Lambda function to run every 30 days.
- **D.** Store the database credentials as a key in AWS Key Management Service (AWS KMS). Configure automatic rotation for the key. Update the Lambda function to retneve the credentials from the KMS key.

**16.** A company is building a cloud-based application on AWS that will handle sensitive customer data. The application uses Amazon RDS for the database, Amazon S3 for object storage, and S3 Event Notifications that invoke AWS Lambda for serverless processing. The company uses AWS IAM Identity Center to manage user credentials. The development, testing, and operations teams need secure access to Amazon RDS and Amazon S3 while ensuring the confidentiality of sensitive customer data. The solution must comply with the principle of least privilege. Which solution meets these requirements with the LEAST operational overhead?

- **A.** Use IAM roles with least privilege to grant all the teams access. Assign IAM roles to each team with customized IAM policies defining specific permission for Amazon RDS and S3 object access based on team responsibilities.
- **B.** Enable IAM Identity Center with an Identity Center directory. Create and configure permission sets with granular access to Amazon RDS and Amazon S3. Assign all the teams to groups that have specific access with the permission sets.
- **C.** Create individual IAM users for each member in all the teams with role-based permissions. Assign the IAM roles with predefined policies for RDS and S3 access to each user based on user needs. Implement IAM Access Analyzer for periodic credential evaluation.
- **D.** Use AWS Organizations to create separate accounts for each team. Implement cross-account IAM roles with least privilege. Grant specific permission for RDS and S3 access based on team roles and responsibilities.

**17.** A streaming media company is rebuilding its infrastructure to accommodate increasing demand for video content that users consume daily. The company needs to process terabyte-sized videos to block some content in the videos. Video processing can take up to 20 minutes. The company needs a solution that will scale with demand and remain cost-effective. Which solution will meet these requirements?

- **A.** Use AWS Lambda functions to process videos. Store video metadata in Amazon DynamoDB. Store video content in Amazon S3 Intelligent- Tiering.
- **B.** Use Amazon Elastic Container Service (Amazon ECS) and AWS Fargate to implement microservices to process videos. Store video metadata in Amazon Aurora. Store video content in Amazon S3 Intelligent-Tiering.
- **C.** Use Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB) to process videos. Store video content in Amazon S3 Standard. Use Amazon Simple Queue Service (Amazon SQS) for queuing and to decouple processing tasks.
- **D.** Deploy a containerized video processing application on Amazon Elastic Kubernetes Service (Amazon EKS) on Amazon EC2. Store video metadata in Amazon RDS in a single Availability Zone. Store video content in Amazon S3 Glacier Deep Archive.

**18.** A company hosts its enterprise resource planning (ERP) system in the us-east-1 Region. The system runs on Amazon EC2 instances. Customers use a public API that is hosted on the EC2 instances to exchange information with the ERP system. International customers report slow API response times from their data centers. Which solution will improve response times for the international customers MOST cost-effectively?

- **A.** Create an AWS Direct Connect connection that has a public virtual interface (VIF) to provide connectivity from each customer's data center to us-east-1. Route customer API requests by using a Direct Connect gateway to the ERP system API.
- **B.** Set up an Amazon CloudFront distribution in front of the API. Configure the CachingOptimized managed cache policy to provide improved cache efficiency.
- **C.** Set up AWS Global Accelerator. Configure listeners for the necessary ports. Configure endpoint groups for the appropriate Regions to distribute traffic. Create an endpoint in the group for the API.
- **D.** Use AWS Site-to-Site VPN to establish dedicated VPN tunnels between Regions and customer networks. Route traffic to the API over the VPN connections.

**19.** A company stores user data in AWS. The data is used continuously with peak usage during business hours. Access patterns vary, with some data not being used for months at a time. A solutions architect must choose a cost-effective solution that maintains the highest level of durability while maintaining high availability. Which storage solution meets these requirements?

- **A.** Amazon S3 Standard
- **B.** Amazon S3 Intelligent-Tiering
- **C.** Amazon S3 Glacier Deep Archive
- **D.** Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)

**20.** A company has an application that runs on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on Amazon EC2 instances. The application has a UI that uses Amazon DynamoDB and data services that use Amazon S3 as part of the application deployment. The company must ensure that the EKS Pods for the UI can access only Amazon DynamoDB and that the EKS Pods for the data services can access only Amazon S3. The company uses AWS Identity and Access Management (IAM). Which solution meals these requirements?

- **A.** Create separate IAM policies for Amazon S3 and DynamoDB access with the required permissions. Attach both IAM policies to the EC2 instance profile. Use role-based access control (RBAC) to control access to Amazon S3 or DynamoDB for the respective EKS Pods.
- **B.** Create separate IAM policies for Amazon S3 and DynamoDB access with the required permissions. Attach the Amazon S3 IAM policy directly to the EKS Pods for the data services and the DynamoDB policy to the EKS Pods for the UI.
- **C.** Create separate Kubernetes service accounts for the UI and data services to assume an IAM role. Attach the AmazonS3FullAccess policy to the data services account and the AmazonDynamoDBFullAccess policy to the UI service account.
- **D.** Create separate Kubernetes service accounts for the UI and data services to assume an IAM role. Use IAM Role for Service Accounts (IRSA) to provide access to the EKS Pods for the UI to Amazon S3 and the EKS Pods for the data services to DynamoDB.

**21.** A company that is in the ap-northeast-1 Region has a fleet of thousands of AWS Outposts servers. The company has deployed the servers at remote locations around the world. All the servers regularly download new software versions that consist of 100 files. There is significant latency before all servers run the new software versions. The company must reduce the deployment latency for new software versions. Which solution will meet this requirement with the LEAST operational overhead?

- **A.** Create an Amazon S3 bucket in ap-northeast-1. Set up an Amazon CloudFront distribution in ap-northeast-1 that includes a CachingDisabled cache policy. Configure the S3 bucket as the origin. Download the software by using signed URLs.
- **B.** Create an Amazon S3 bucket in ap-northeast-1. Create a second S3 bucket in the us-east-1 Region. Configure replication between the buckets. Set up an Amazon CloudFront distribution that uses ap-northeast-1 as the primary origin and us-east-1 as the secondary origin. Download the software by using signed URLs.
- **C.** Create an Amazon S3 bucket in ap-northeast-1. Configure Amazon S3 Transfer Acceleration. Download the software by using the S3 Transfer Acceleration endpoint.
- **D.** Create an Amazon S3 bucket in ap-northeast-1. Set up an Amazon CloudFront distribution. Configure the S3 bucket as the origin. Download the software by using signed URLs.

**22.** A company uses AWS Systems Manager for routine management and patching of Amazon EC2 instances. The EC2 instances are in an IP address type target group behind an Application Load Balancer (ALB). New security protocols require the company to remove EC2 instances from service during a patch. When the company attempts to follow the security protocol during the next patch, the company receives errors during the patching window. Which combination of solutions will resolve the errors? (Choose two.)

- **A.** Change the target type of the target group from IP address type to instance type.
- **B.** Continue to use the existing Systems Manager document without changes because it is already optimized to handle instances that are in an IP address type target group behind an ALB.
- **C.** Implement the AWSEC2-PatchLoadBalanacerInstance Systems Manager Automation document to manage the patching process.
- **D.** Use Systems Manager Maintenance Windows to automatically remove the instances from service to patch the instances.
- **E.** Configure Systems Manager State Manager to remove the instances from service and manage the patching schedule. Use ALB health checks to re-route traffic.

**23.** A company uses an Amazon DynamoDB table to store data that the company receives from devices. The DynamoDB table supports a customer-facing website to display recent activity on customer devices. The company configured the table with provisioned throughput for writes and reads. The company wants to calculate performance metrics for customer device data on a daily basis. The solution must have minimal effect on the table's provisioned read and write capacity. Which solution will meet these requirements?

- **A.** Use an Amazon Athena SQL query with the Amazon Athena DynamoDB connector to calculate performance metrics on a recurring schedule.
- **B.** Use an AWS Glue job with the AWS Glue DynamoDB export connector to calculate performance metrics on a recurring schedule.
- **C.** Use an Amazon Redshift COPY command to calculate performance metrics on a recurring schedule.
- **D.** Use an Amazon EMR job with an Apache Hive external table to calculate performance metrics on a recurring schedule.

**24.** A company hosts an application in a private subnet. The company has already integrated the application with Amazon Cognito. The company uses an Amazon Cognito user pool to authenticate users. The company needs to modify the application so the application can securely store user documents in an Amazon S3 bucket. Which combination of steps will securely integrate Amazon S3 with the application? (Choose two.)

- **A.** Create an Amazon Cognito identity pool to generate secure Amazon S3 access tokens for users when they successfully log in.
- **B.** Use the existing Amazon Cognito user pool to generate Amazon S3 access tokens for users when they successfully log in.
- **C.** Create an Amazon S3 VPC endpoint in the same VPC where the company hosts the application.
- **D.** Create a NAT gateway in the VPC where the company hosts the application. Assign a policy to the S3 bucket to deny any request that is not initiated from Amazon Cognito.
- **E.** Attach a policy to the S3 bucket that allows access only from the users' IP addresses.

**25.** A company runs its media rendering application on premises. The company wants to reduce storage costs and has moved all data to Amazon S3. The on-premises rendering application needs low-latency access to storage. The company needs to design a storage solution for the application. The storage solution must maintain the desired application performance. Which storage solution will meet these requirements in the MOST cost-effective way?

- **A.** Use Mountpoint for Amazon S3 to access the data in Amazon S3 for the on-premises application.
- **B.** Configure an Amazon S3 File Gateway to provide storage for the on-premises application.
- **C.** Copy the data from Amazon S3 to Amazon FSx for Windows File Server. Configure an Amazon FSx File Gateway to provide storage for the on-premises application.
- **D.** Configure an on-premises file server. Use the Amazon S3 API to connect to S3 storage. Configure the application to access the storage from the on-premises file server.

**26.** A company offers a food delivery service that is growing rapidly. Because of the growth, the company’s order processing system is experiencing scaling problems during peak traffic hours. The current architecture includes the following: • A group of Amazon EC2 instances that run in an Amazon EC2 Auto Scaling group to collect orders from the application • Another group of EC2 instances that run in an Amazon EC2 Auto Scaling group to fulfill orders The order collection process occurs quickly, but the order fulfillment process can take longer. Data must not be lost because of a scaling event. A solutions architect must ensure that the order collection process and the order fulfillment process can both scale properly during peak traffic hours. The solution must optimize utilization of the company’s AWS resources. Which solution meets these requirements?

- **A.** Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure each Auto Scaling group’s minimum capacity according to peak workload values.
- **B.** Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure a CloudWatch alarm to invoke an Amazon Simple Notification Service (Amazon SNS) topic that creates additional Auto Scaling groups on demand.
- **C.** Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Scale the Auto Scaling groups based on notifications that the queues send.
- **D.** Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Create a metric based on a backlog per instance calculation. Scale the Auto Scaling groups based on this metric.

**27.** A company's image-hosting website gives users around the world the ability to up load, view, and download images from their mobile devices. The company currently hosts the static website in an Amazon S3 bucket. Because of the website's growing popularity, the website's performance has decreased. Users have reported latency issues when they upload and download images. The company must improve the performance of the website. Which solution will meet these requirements with the LEAST implementation effort?

- **A.** Configure an Amazon CloudFront distribution for the S3 bucket to improve the download performance. Enable S3 Transfer Acceleration to improve the upload performance.
- **B.** Configure Amazon EC2 instances of the right sizes in multiple AWS Regions. Migrate the application to the EC2 instances. Use an Application Load Balancer to distribute the website traffic equally among the EC2 instances. Configure AWS Global Accelerator to address global demand with low latency.
- **C.** Configure an Amazon CloudFront distribution that uses the S3 bucket as an origin to improve the download performance. Configure the application to use CloudFront to upload images to improve the upload performance. Create S3 buckets in multiple AWS Regions. Configure replication rules for the buckets to replicate users' data based on the users' location. Redirect downloads to the S3 bucket that is closest to each user's location.
- **D.** Configure AWS Global Accelerator for the S3 bucket to improve network performance. Create an endpoint for the application to use Global Accelerator instead of the S3 bucket.

**28.** A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The application tier is hosted on Amazon EC2 instances. The company’s IT security guidelines mandate that the database credentials be encrypted and rotated every 14 days. What should a solutions architect do to meet this requirement with the LEAST operational effort?

- **A.** Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets Manager to create a new secret that uses the KMS key with the appropriate credentials. Associate the secret with the Aurora DB cluster. Configure a custom rotation period of 14 days.
- **B.** Create two parameters in AWS Systems Manager Parameter Store: one for the user name as a string parameter and one that uses the SecureString type for the password. Select AWS Key Management Service (AWS KMS) encryption for the password parameter, and load these parameters in the application tier. Implement an AWS Lambda function that rotates the password every 14 days.
- **C.** Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in all EC2 instances of the application tier. Restrict the access to the file on the file system so that the application can read the file and that only super users can modify the file. Implement an AWS Lambda function that rotates the key in Aurora every 14 days and writes new credentials into the file.
- **D.** Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon S3 bucket that the application uses to load the credentials. Download the file to the application regularly to ensure that the correct credentials are used. Implement an AWS Lambda function that rotates the Aurora credentials every 14 days and uploads these credentials to the file in the S3 bucket.

**29.** A company has a three-tier web application that processes orders from customers. The web tier consists of Amazon EC2 instances behind an Application Load Balancer. The processing tier consists of EC2 instances. The company decoupled the web tier and processing tier by using Amazon Simple Queue Service (Amazon SQS). The storage layer uses Amazon DynamoDB. At peak times, some users report order processing delays and halls. The company has noticed that during these delays, the EC2 instances are running at 100% CPU usage, and the SQS queue fills up. The peak times are variable and unpredictable. The company needs to improve the performance of the application. Which solution will meet these requirements?

- **A.** Use scheduled scaling for Amazon EC2 Auto Scaling to scale out the processing tier instances for the duration of peak usage times. Use the CPU Utilization metric to determine when to scale.
- **B.** Use Amazon ElastiCache for Redis in front of the DynamoDB backend tier. Use target utilization as a metric to determine when to scale.
- **C.** Add an Amazon CloudFront distribution to cache the responses for the web tier. Use HTTP latency as a metric to determine when to scale.
- **D.** Use an Amazon EC2 Auto Scaling target tracking policy to scale out the processing tier instances. Use the ApproximateNumberOfMessages attribute to determine when to scale.

**30.** A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The application stores data in an Amazon Aurora MySQL DB cluster. The company needs to create a disaster recovery (DR) solution. The acceptable recovery time for the DR solution is up to 30 minutes. The DR solution does not need to support customer usage when the primary infrastructure is healthy. Which solution will meet these requirements?

- **A.** Deploy the DR infrastructure in a second AWS Region with an ALB and an Auto Scaling group. Set the desired capacity and maximum capacity of the Auto Scaling group to a minimum value. Convert the Aurora MySQL DB cluster to an Aurora global database. Configure Amazon Route 53 for an active-passive failover with ALB endpoints.
- **B.** Deploy the DR infrastructure in a second AWS Region with an ALUpdate the Auto Scaling group to include EC2 instances from the second Region. Use Amazon Route 53 to configure active-active failover. Convert the Aurora MySQL DB cluster to an Aurora global database.
- **C.** Back up the Aurora MySQL DB cluster data by using AWS Backup. Deploy the DR infrastructure in a second AWS Region with an ALB. Update the Auto Scaling group to include EC2 instances from the second Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora MySQL DB cluster in the second Region Restore the data from the backup.
- **D.** Back up the infrastructure configuration by using AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Set the Auto Scaling group desired capacity to zero. Use Amazon Route 53 to configure active-passive failover. Convert the Aurora MySQL DB cluster to an Aurora global database.

**31.** A company recently launched a new application for its customers. The application runs on multiple Amazon EC2 instances across two Availability Zones. End users use TCP to communicate with the application. The application must be highly available and must automatically scale as the number of users increases. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

- **A.** Add a Network Load Balancer in front of the EC2 instances.
- **B.** Configure an Auto Scaling group for the EC2 instances.
- **C.** Add an Application Load Balancer in front of the EC2 instances.
- **D.** Manually add more EC2 instances for the application.
- **E.** Add a Gateway Load Balancer in front of the EC2 instances.

**32.** A company wants to create an Amazon EMR cluster that multiple teams will use. The company wants to ensure that each team’s big data workloads can access only the AWS services that each team needs to interact with. The company does not want the workloads to have access to Instance Metadata Service Version 2 (IMDSv2) on the cluster’s underlying EC2 instances. Which solution will meet these requirements?

- **A.** Configure interface VPC endpoints for each AWS service that the teams need. Use the required interface VPC endpoints to submit the big data workloads.
- **B.** Create EMR runtime roles. Configure the cluster to use the runtime roles. Use the runtime roles to submit the big data workloads.
- **C.** Create an EC2 IAM instance profile that has the required permissions for each team. Use the instance profile to submit the big data workloads.
- **D.** Create an EMR security configuration that has the EnableApplicationScopedIAMRole option set to false. Use the security configuration to submit the big data workloads.

**33.** A company needs to design a hybrid network architecture. The company's workloads are currently stored in the AWS Cloud and in on- premises data centers. The workloads require single-digit latencies to communicate. The company uses an AWS Transit Gateway transit gateway to connect multiple VPCs. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

- **A.** Establish an AWS Site-to-Site VPN connection to each VPC.
- **B.** Associate an AWS Direct Connect gateway with the transit gateway that is attached to the VPCs.
- **C.** Establish an AWS Site-to-Site VPN connection to an AWS Direct Connect gateway.
- **D.** Establish an AWS Direct Connect connection. Create a transit virtual interface (VIF) to a Direct Connect gateway.
- **E.** Associate AWS Site-to-Site VPN connections with the transit gateway that is attached to the VPCs.

**34.** A digital image processing company wants to migrate its on-premises monolithic application to the AWS Cloud. The company processes thousands of images and generates large files as part of the processing workflow. The company needs a solution to manage the growing number of image processing jobs. The solution must also reduce the manual tasks in the image processing workflow. The company does not want to manage the underlying infrastructure of the solution. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 Spot Instances to process the images. Configure Amazon Simple Queue Service (Amazon SQS) to orchestrate the workflow. Store the processed files in Amazon Elastic File System (Amazon EFS).
- **B.** Use AWS Batch jobs to process the images. Use AWS Step Functions to orchestrate the workflow. Store the processed files in an Amazon S3 bucket.
- **C.** Use AWS Lambda functions and Amazon EC2 Spot Instances to process the images. Store the processed files in Amazon FSx.
- **D.** Deploy a group of Amazon EC2 instances to process the images. Use AWS Step Functions to orchestrate the workflow. Store the processed files in an Amazon Elastic Block Store (Amazon EBS) volume.

**35.** A company uses GPS trackers to document the migration patterns of thousands of sea turtles. The trackers check every 5 minutes to see if a turtle has moved more than 100 yards (91.4 meters). If a turtle has moved, its tracker sends the new coordinates to a web application running on three Amazon EC2 instances that are in multiple Availability Zones in one AWS Region. Recently, the web application was overwhelmed while processing an unexpected volume of tracker data. Data was lost with no way to replay the events. A solutions architect must prevent this problem from happening again and needs a solution with the least operational overhead. What should the solutions architect do to meet these requirements?

- **A.** Create an Amazon S3 bucket to store the data. Configure the application to scan for new data in the bucket for processing.
- **B.** Create an Amazon API Gateway endpoint to handle transmitted location coordinates. Use an AWS Lambda function to process each item concurrently.
- **C.** Create an Amazon Simple Queue Service (Amazon SQS) queue to store the incoming data. Configure the application to poll for new messages for processing.
- **D.** Create an Amazon DynamoDB table to store transmitted location coordinates. Configure the application to query the table for new data for processing. Use TTL to remove data that has been processed.

**36.** A company's software development team needs an Amazon RDS Multi-AZ cluster. The RDS cluster will serve as a backend for a desktop client that is deployed on premises. The desktop client requires direct connectivity to the RDS cluster. The company must give the development team the ability to connect to the cluster by using the client when the team is in the office. Which solution provides the required connectivity MOST securely?

- **A.** Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Use AWS Site-to-Site VPN with a customer gateway in the company's office.
- **B.** Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use AWS Site-to-Site VPN with a customer gateway in the company's office.
- **C.** Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use RDS security groups to allow the company's office IP ranges to access the cluster.
- **D.** Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Create a cluster user for each developer. Use RDS security groups to allow the users to access the cluster.

**37.** A company currently runs an on-premises application that usesASP.NET on Linux machines. The application is resource-intensive and serves customers directly. The company wants to modernize the application to .NET. The company wants to run the application on containers and to scale based on Amazon CloudWatch metrics. The company also wants to reduce the time spent on operational maintenance activities. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use AWS App2Container to containerize the application. Use an AWS CloudFormation template to deploy the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.
- **B.** Use AWS App2Container to containerize the application. Use an AWS CloudFormation template to deploy the application to Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 instances.
- **C.** Use AWS App Runner to containerize the application. Use App Runner to deploy the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.
- **D.** Use AWS App Runner to containerize the application. Use App Runner to deploy the application to Amazon Elastic Kubernetes Service (Amazon EKS) on Amazon EC2 instances.

**38.** A global ecommerce company uses a monolithic architecture. The company needs a solution to manage the increasing volume of product data. The solution must be scalable and have a modular service architecture. The company needs to maintain its structured database schemas. The company also needs a storage solution to store product data and product images. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use an Amazon EC2 instance in an Auto Scaling group to deploy a containerized application. Use an Application Load Balancer to distribute web traffic. Use an Amazon RDS DB instance to store product data and product images.
- **B.** Use AWS Lambda functions to manage the existing monolithic application. Use Amazon DynamoDB to store product data and product images. Use Amazon Simple Notification Service (Amazon SNS) for event-driven communication between the Lambda functions.
- **C.** Use Amazon Elastic Kubernetes Service (Amazon EKS) with an Amazon EC2 deployment to deploy a containerized application. Use an Amazon Aurora cluster to store the product data. Use AWS Step Functions to manage workflows. Store the product images in Amazon S3 Glacier Deep Archive.
- **D.** Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate to deploy a containerized application. Use Amazon RDS with a Multi-AZ deployment to store the product data. Store the product images in an Amazon S3 bucket.

**39.** A company is developing an application in the AWS Cloud. The application's HTTP API contains critical information that is published in Amazon API Gateway. The critical information must be accessible from only a limited set of trusted IP addresses that belong to the company's internal network. Which solution will meet these requirements?

- **A.** Set up an API Gateway private integration to restrict access to a predefined set of IP addresses.
- **B.** Create a resource policy for the API that denies access to any IP address that is not specifically allowed.
- **C.** Directly deploy the API in a private subnet. Create a network ACL. Set up rules to allow the traffic from specific IP addresses.
- **D.** Modify the security group that is attached to API Gateway to allow inbound traffic from only the trusted IP addresses.

**40.** A company's production environment consists of Amazon EC2 On-Demand Instances that run constantly between Monday and Saturday. The instances must run for only 12 hours on Sunday and cannot tolerate interruptions. The company wants to cost-optimize the production environment. Which solution will meet these requirements MOST cost-effectively?

- **A.** Purchase Scheduled Reserved Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.
- **B.** Purchase Convertible Reserved Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.
- **C.** Use Spot Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.
- **D.** Use Spot Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Convertible Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.

**41.** A company hosts its main public web application in one AWS Region across multiple Availability Zones. The application uses an Amazon EC2 Auto Scaling group and an Application Load Balancer (ALB). A web development team needs a cost-optimized compute solution to improve the company’s ability to serve dynamic content globally to millions of customers. Which solution will meet these requirements?

- **A.** Create an Amazon CloudFront distribution. Configure the existing ALB as the origin.
- **B.** Use Amazon Route 53 to serve traffic to the ALB and EC2 instances based on the geographic location of each customer.
- **C.** Create an Amazon S3 bucket with public read access enabled. Migrate the web application to the S3 bucket. Configure the S3 bucket for website hosting.
- **D.** Use AWS Direct Connect to directly serve content from the web application to the location of each customer.

**42.** A company runs an on-premises application on a Kubernetes cluster. The company recently added millions of new customers. The company's existing on-premises infrastructure is unable to handle the large number of new customers. The company needs to migrate the on-premises application to the AWS Cloud. The company will migrate to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The company does not want to manage the underlying compute infrastructure for the new architecture on AWS. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use a self-managed node to supply compute capacity. Deploy the application to the new EKS cluster.
- **B.** Use managed node groups to supply compute capacity. Deploy the application to the new EKS cluster.
- **C.** Use AWS Fargate to supply compute capacity. Create a Fargate profile. Use the Fargate profile to deploy the application.
- **D.** Use managed node groups with Karpenter to supply compute capacity. Deploy the application to the new EKS cluster.

**43.** An online gaming company is transitioning user data storage to Amazon DynamoDB to support the company's growing user base. The current architecture includes DynamoDB tables that contain user profiles, achievements, and in-game transactions. The company needs to design a robust, continuously available, and resilient DynamoDB architecture to maintain a seamless gaming experience for users. Which solution will meet these requirements MOST cost-effectively?

- **A.** Create DynamoDB tables in a single AWS Region. Use on-demand capacity mode. Use global tables to replicate data across multiple Regions.
- **B.** Use DynamoDB Accelerator (DAX) to cache frequently accessed data. Deploy tables in a single AWS Region and enable auto scaling. Configure Cross-Region Replication manually to additional Regions.
- **C.** Create DynamoDB tables in multiple AWS Regions. Use on-demand capacity mode. Use DynamoDB Streams for Cross-Region Replication between Regions.
- **D.** Use DynamoDB global tables for automatic multi-Region replication. Deploy tables in multiple AWS Regions. Use provisioned capacity mode. Enable auto scaling.

**44.** A company is designing the architecture for a new mobile app that uses the AWS Cloud. The company uses organizational units (OUs) in AWS Organizations to manage its accounts. The company wants to tag Amazon EC2 instances with data sensitivity by using values of sensitive and nonsensitive. IAM identities must not be able to delete a tag or create instances without a tag. Which combination of steps will meet these requirements? (Choose two.)

- **A.** In Organizations, create a new tag policy that specifies the data sensitivity tag key and the required values. Enforce the tag values for the EC2 instances. Attach the tag policy to the appropriate OU.
- **B.** In Organizations, create a new service control policy (SCP) that specifies the data sensitivity tag key and the required tag values. Enforce the tag values for the EC2 instances. Attach the SCP to the appropriate OU.
- **C.** Create a tag policy to deny running instances when a tag key is not specified. Create another tag policy that prevents identities from deleting tags. Attach the tag policies to the appropriate OU.
- **D.** Create a service control policy (SCP) to deny creating instances when a tag key is not specified. Create another SCP that prevents identities from deleting tags. Attach the SCPs to the appropriate OU.
- **E.** Create an AWS Config rule to check if EC2 instances use the data sensitivity tag and the specified values. Configure an AWS Lambda function to delete the resource if a noncompliant resource is found.

**45.** A company needs to give a globally distributed development team secure access to the company's AWS resources in a way that complies with security policies. The company currently uses an on-premises Active Directory for internal authentication. The company uses AWS Organizations to manage multiple AWS accounts that support multiple projects. The company needs a solution to integrate with the existing infrastructure to provide centralized identity management and access control. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Set up AWS Directory Service to create an AWS managed Microsoft Active Directory on AWS. Establish a trust relationship with the on- premises Active Directory. Use IAM rotes that are assigned to Active Directory groups to access AWS resources within the company's AWS accounts.
- **B.** Create an IAM user for each developer. Manually manage permissions for each IAM user based on each user's involvement with each project. Enforce multi-factor authentication (MFA) as an additional layer of security.
- **C.** Use AD Connector in AWS Directory Service to connect to the on-premises Active Directory. Integrate AD Connector with AWS IAM Identity Center. Configure permissions sets to give each AD group access to specific AWS accounts and resources.
- **D.** Use Amazon Cognito to deploy an identity federation solution. Integrate the identity federation solution with the on-premises Active Directory. Use Amazon Cognito to provide access tokens for developers to access AWS accounts and resources.

**46.** A company currently runs an on-premises stock trading application by using Microsoft Windows Server. The company wants to migrate the application to the AWS Cloud. The company needs to design a highly available solution that provides low-latency access to block storage across multiple Availability Zones. Which solution will meet these requirements with the LEAST implementation effort?

- **A.** Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2 instances. Install the application on both cluster nodes. Use Amazon FSx for Windows File Server as shared storage between the two cluster nodes.
- **B.** Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2 instances. Install the application on both cluster nodes. Use Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp3) volumes as storage attached to the EC2 instances. Set up application-level replication to sync data from one EBS volume in one Availability Zone to another EBS volume in the second Availability Zone.
- **C.** Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2 instance as active and the second EC2 instance in standby mode. Use an Amazon FSx for NetApp ONTAP Multi-AZ file system to access the data by using Internet Small Computer Systems Interface (iSCSI) protocol.
- **D.** Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2 instance as active and the second EC2 instance in standby mode. Use Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS SSD (io2) volumes as storage attached to the EC2 instances. Set up Amazon EBS level replication to sync data from one io2 volume in one Availability Zone to another io2 volume in the second Availability Zone.

**47.** A company regularly uploads confidential data to Amazon S3 buckets for analysis. The company's security policies mandate that the objects must be encrypted at rest. The company must automatically rotate the encryption key every year. The company must be able to track key rotation by using AWS CloudTrail. The company also must minimize costs for the encryption key. Which solution will meet these requirements?

- **A.** Use server-side encryption with customer-provided keys (SSE-C)
- **B.** Use server-side encryption with Amazon S3 managed keys (SSE-S3)
- **C.** Use server-side encryption with AWS KMS keys (SSE-KMS)
- **D.** Use server-side encryption with customer managed AWS KMS keys

**48.** A company is creating a prototype of an ecommerce website on AWS. The website consists of an Application Load Balancer, an Auto Scaling group of Amazon EC2 instances for web servers, and an Amazon RDS for MySQL DB instance that runs with the Single-AZ configuration. The website is slow to respond during searches of the product catalog. The product catalog is a group of tables in the MySQL database that the company does not update frequently. A solutions architect has determined that the CPU utilization on the DB instance is high when product catalog searches occur. What should the solutions architect recommend to improve the performance of the website during searches of the product catalog?

- **A.** Migrate the product catalog to an Amazon Redshift database. Use the COPY command to load the product catalog tables.
- **B.** Implement an Amazon ElastiCache for Redis cluster to cache the product catalog. Use lazy loading to populate the cache.
- **C.** Add an additional scaling policy to the Auto Scaling group to launch additional EC2 instances when database response is slow.
- **D.** Turn on the Multi-AZ configuration for the DB instance. Configure the EC2 instances to throttle the product catalog queries that are sent to the database.

**49.** A company runs multiple workloads on virtual machines (VMs) in an on-premises data center. The company is expanding rapidly. The on- premises data center is not able to scale fast enough to meet business needs. The company wants to migrate the workloads to AWS. The migration is time sensitive. The company wants to use a lift-and-shift strategy for non-critical workloads. Which combination of steps will meet these requirements? (Choose three.)

- **A.** Use the AWS Schema Conversion Tool (AWS SCT) to collect data about the VMs.
- **B.** Use AWS Application Migration Service. Install the AWS Replication Agent on the VMs.
- **C.** Complete the initial replication of the VMs. Launch test instances to perform acceptance tests on the VMs.
- **D.** Stop all operations on the VMs. Launch a cutover instance.
- **E.** Use AWS App2Container (A2C) to collect data about the VMs.
- **F.** Use AWS Database Migration Service (AWS DMS) to migrate the VMs.

**50.** A financial services company plans to launch a new application on AWS to handle sensitive financial transactions. The company will deploy the application on Amazon EC2 instances. The company will use Amazon RDS for MySQL as the database. The company’s security policies mandate that data must be encrypted at rest and in transit. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure AWS Certificate Manager (ACM) SSL/TLS certificates for encryption in transit.
- **B.** Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure IPsec tunnels for encryption in transit.
- **C.** Implement third-party application-level data encryption before storing data in Amazon RDS for MySQL. Configure AWS Certificate Manager (ACM) SSL/TLS certificates for encryption in transit.
- **D.** Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure a VPN connection to enable private connectivity to encrypt data in transit.

**51.** A company needs to grant a team of developers access to the company's AWS resources. The company must maintain a high level of security for the resources. The company requires an access control solution that will prevent unauthorized access to the sensitive data. Which solution will meet these requirements?

- **A.** Share the IAM user credentials for each development team member with the rest of the team to simplify access management and to streamline development workflows.
- **B.** Define IAM roles that have fine-grained permissions based on the principle of least privilege. Assign an IAM role to each developer.
- **C.** Create IAM access keys to grant programmatic access to AWS resources. Allow only developers to interact with AWS resources through API calls by using the access keys.
- **D.** Create an AWS Cognito user pool. Grant developers access to AWS resources by using the user pool.

**52.** A solutions architect is designing the cloud architecture for a new stateless application that will be deployed on AWS. The solutions architect created an Amazon Machine Image (AMI) and launch template for the application. Based on the number of jobs that need to be processed, the processing must run in parallel while adding and removing application Amazon EC2 instances as needed. The application must be loosely coupled. The job items must be durably stored. Which solution will meet these requirements?

- **A.** Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on CPU usage.
- **B.** Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on network usage.
- **C.** Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on the number of items in the SQS queue.
- **D.** Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on the number of messages published to the SNS topic.

**53.** A company runs an environment where data is stored in an Amazon S3 bucket. The objects are accessed frequently throughout the day. The company has strict da ta encryption requirements for data that is stored in the S3 bucket. The company currently uses AWS Key Management Service (AWS KMS) for encryption. The company wants to optimize costs associated with encrypting S3 objects without making additional calls to AWS KMS. Which solution will meet these requirements?

- **A.** Use server-side encryption with Amazon S3 managed keys (SSE-S3).
- **B.** Use an S3 Bucket Key for server-side encryption with AWS KMS keys (SSE-KMS) on the new objects.
- **C.** Use client-side encryption with AWS KMS customer managed keys.
- **D.** Use server-side encryption with customer-provided keys (SSE-C) stored in AWS KMS.

**54.** A company is implementing a new application on AWS. The company will run the application on multiple Amazon EC2 instances across multiple Availability Zones within multiple AWS Regions. The application will be available through the internet. Users will access the application from around the world. The company wants to ensure that each user who accesses the application is sent to the EC2 instances that are closest to the user’s location. Which solution will meet these requirements?

- **A.** Implement an Amazon Route 53 geolocation routing policy. Use an internet-facing Application Load Balancer to distribute the traffic across all Availability Zones within the same Region.
- **B.** Implement an Amazon Route 53 geoproximity routing policy. Use an internet-facing Network Load Balancer to distribute the traffic across all Availability Zones within the same Region.
- **C.** Implement an Amazon Route 53 multivalue answer routing policy. Use an internet-facing Application Load Balancer to distribute the traffic across all Availability Zones within the same Region.
- **D.** Implement an Amazon Route 53 weighted routing policy. Use an internet-facing Network Load Balancer to distribute the traffic across all Availability Zones within the same Region.

**55.** A company is using an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The company must ensure that Kubernetes service accounts in the EKS cluster have secure and granular access to specific AWS resources by using IAM roles for service accounts (IRSA). Which combination of solutions will meet these requirements? (Choose two.)

- **A.** Create an IAM policy that defines the required permissions Attach the policy directly to the IAM role of the EKS nodes.
- **B.** Implement network policies within the EKS cluster to prevent Kubernetes service accounts from accessing specific AWS services.
- **C.** Modify the EKS cluster's IAM role to include permissions for each Kubernetes service account. Ensure a one-to-one mapping between IAM roles and Kubernetes roles.
- **D.** Define an IAM role that includes the necessary permissions. Annotate the Kubernetes service accounts with the Amazon ResourceName (ARN) of the IAM role.
- **E.** Set up a trust relationship between the IAM roles for the service accounts and an OpenID Connect (OIDC) identity provider.

**56.** A company hosts its core network services, including directory services and DNS, in its on-premises data center. The data center is connected to the AWS Cloud using AWS Direct Connect (DX). Additional AWS accounts are planned that will require quick, cost-effective, and consistent access to these network services. What should a solutions architect implement to meet these requirements with the LEAST amount of operational overhead?

- **A.** Create a DX connection in each new account. Route the network traffic to the on-premises servers.
- **B.** Configure VPC endpoints in the DX VPC for all required services. Route the network traffic to the on-premises servers.
- **C.** Create a VPN connection between each new account and the DX VPRoute the network traffic to the on-premises servers.
- **D.** Configure AWS Transit Gateway between the accounts. Assign DX to the transit gateway and route network traffic to the on-premises servers.

**57.** A company is launching a new application that requires a structured database to store user profiles, application settings, and transactional data. The database must be scalable with application traffic and must offer backups. Which solution will meet these requirements MOST cost-effectively?

- **A.** Deploy a self-managed database on Amazon EC2 instances by using open source software. Use Spot Instances for cost optimization. Configure automated backups to Amazon S3.
- **B.** Use Amazon RDS. Use on-demand capacity mode for the database with General Purpose SSD storage. Configure automatic backups with a retention period of 7 days.
- **C.** Use Amazon Aurora Serverless for the database. Use serverless capacity scaling. Configure automated backups to Amazon S3.
- **D.** Deploy a self-managed NoSQL database on Amazon EC2 instances. Use Reserved Instances for cost optimization. Configure automated backups directly to Amazon S3 Glacier Flexible Retrieval.

**58.** A company is developing a new machine learning (ML) model solution on AWS. The models are developed as independent microservices that fetch approximately 1 GB of model data from Amazon S3 at startup and load the data into memory. Users access the models through an asynchronous API. Users can send a request or a batch of requests and specify where the results should be sent. The company provides models to hundreds of users. The usage patterns for the models are irregular. Some models could be unused for days or weeks. Other models could receive batches of thousands of requests at a time. Which design should a solutions architect recommend to meet these requirements?

- **A.** Direct the requests from the API to a Network Load Balancer (NLB). Deploy the models as AWS Lambda functions that are invoked by the NLB.
- **B.** Direct the requests from the API to an Application Load Balancer (ALB). Deploy the models as Amazon Elastic Container Service (Amazon ECS) services that read from an Amazon Simple Queue Service (Amazon SQS) queue. Use AWS App Mesh to scale the instances of the ECS cluster based on the SQS queue size.
- **C.** Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the models as AWS Lambda functions that are invoked by SQS events. Use AWS Auto Scaling to increase the number of vCPUs for the Lambda functions based on the SQS queue size.
- **D.** Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the models as Amazon Elastic Container Service (Amazon ECS) services that read from the queue. Enable AWS Auto Scaling on Amazon ECS for both the cluster and copies of the service based on the queue size.

**59.** A company has an Amazon S3 bucket that contains sensitive data files. The company has an application that runs on virtual machines in an on-premises data center. The company currently uses AWS IAM Identity Center. The application requires temporary access to files in the S3 bucket. The company wants to grant the application secure access to the files in the S3 bucket. Which solution will meet these requirements?

- **A.** Create an S3 bucket policy that permits access to the bucket from the public IP address range of the company’s on-premises data center.
- **B.** Use IAM Roles Anywhere to obtain security credentials in IAM Identity Center that grant access to the S3 bucket. Configure the virtual machines to assume the role by using the AWS CLI.
- **C.** Install the AWS CLI on the virtual machine. Configure the AWS CLI with access keys from an IAM user that has access to the bucket.
- **D.** Create an IAM user and policy that grants access to the bucket. Store the access key and secret key for the IAM user in AWS Secrets Manager. Configure the application to retrieve the access key and secret key at startup.

**60.** A medical company wants to perform transformations on a large amount of clinical trial data that comes from several customers. The company must extract the data from a relational database that contains the customer data. Then the company will transform the data by using a series of complex rules. The company will load the data to Amazon S3 when the transformations are complete. All data must be encrypted where it is processed before the company stores the data in Amazon S3. All data must be encrypted by using customer-specific keys. Which solution will meet these requirements with the LEAST amount of operational effort?

- **A.** Create one AWS Glue job for each customer. Attach a security configuration to each job that uses server-side encryption with Amazon S3 managed keys (SSE-S3) to encrypt the data.
- **B.** Create one Amazon EMR cluster for each customer. Attach a security configuration to each cluster that uses client-side encryption with a custom client-side root key (CSE-Custom) to encrypt the data.
- **C.** Create one AWS Glue job for each customer. Attach a security configuration to each job that uses client-side encryption with AWS KMS managed keys (CSE-KMS) to encrypt the data.
- **D.** Create one Amazon EMR cluster for each customer. Attach a security configuration to each cluster that uses server-side encryption with AWS KMS keys (SSE-KMS) to encrypt the data.

**61.** A company hosts its application on several Amazon EC2 instances inside a VPC. The company creates a dedicated Amazon S3 bucket for each customer to store their relevant information in Amazon S3. The company wants to ensure that the application running on EC2 instances can securely access only the S3 buckets that belong to the company’s AWS account. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create a gateway endpoint for Amazon S3 that is attached to the VPC. Update the IAM instance profile policy to provide access to only the specific buckets that the application needs.
- **B.** Create a NAT gateway in a public subnet with a security group that allows access to only Amazon S3. Update the route tables to use the NAT Gateway.
- **C.** Create a gateway endpoint for Amazon S3 that is attached to the VPUpdate the IAM instance profile policy with a Deny action and the following condition key:
- **D.** Create a NAT Gateway in a public subnet. Update route tables to use the NAT Gateway. Assign bucket policies for all buckets with a Deny action and the following condition key:

**62.** A company runs its production workload on an Amazon Aurora MySQL DB cluster that includes six Aurora Replicas. The company wants near-real-time reporting queries from one of its departments to be automatically distributed across three of the Aurora Replicas. Those three replicas have a different compute and memory specification from the rest of the DB cluster. Which solution meets these requirements?

- **A.** Create and use a custom endpoint for the workload
- **B.** Create a three-node cluster clone and use the reader endpoint
- **C.** Use any of the instance endpoints for the selected three nodes
- **D.** Use the reader endpoint to automatically distribute the read-only workload

**63.** A company is designing a new internal web application in the AWS Cloud. The new application must securely retrieve and store multiple employee usernames and passwords from an AWS managed service. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS CloudFormation and the BatchGetSecretValue API to retrieve usernames and passwords from Parameter Store.
- **B.** Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and AWS Batch with the BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager.
- **C.** Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS CloudFormation and AWS Batch with the BatchGetSecretValue API to retrieve the usernames and passwords from Parameter Store.
- **D.** Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and the BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager.

**64.** A company is planning to migrate a legacy application to AWS. The application currently uses NFS to communicate to an on-premises storage solution to store application data. The application cannot be modified to use any other communication protocols other than NFS for this purpose. Which storage solution should a solutions architect recommend for use after the migration?

- **A.** AWS DataSync
- **B.** Amazon Elastic Block Store (Amazon EBS)
- **C.** Amazon Elastic File System (Amazon EFS)
- **D.** Amazon EMR File System (Amazon EMRFS)

**65.** A media company has a multi-account AWS environment in the us-east-1 Region. The company has an Amazon Simple Notification Service (Amazon SNS) topic in a production account that publishes performance metrics. The company has an AWS Lambda function in an administrator account to process and analyze log data. The Lambda function that is in the administrator account must be invoked by messages from the SNS topic that is in the production account when significant metrics are reported. Which combination of steps will meet these requirements? (Choose two.)

- **A.** Create an IAM resource policy for the Lambda function that allows Amazon SNS to invoke the function.
- **B.** Implement an Amazon Simple Queue Service (Amazon SQS) queue in the administrator account to buffer messages from the SNS topic that is in the production account. Configure the SQS queue to invoke the Lambda function.
- **C.** Create an IAM policy for the SNS topic that allows the Lambda function to subscribe to the topic.
- **D.** Use an Amazon EventBridge rule in the production account to capture the SNS topic notifications. Configure the EventBridge rule to forward notifications to the Lambda function that is in the administrator account.
- **E.** Store performance metrics in an Amazon S3 bucket in the production account. Use Amazon Athena to analyze the metrics from the administrator account.

---

## Answer key -- Most Likely Paper

`Consensus` is the share of ExamTopics voters choosing that answer. Anything
below 70% is genuinely contested -- open the discussion link before trusting it.

| # | Answer | Domain | Consensus | Source |
|---:|---|---|---:|---|
| 1 | **A** | 2. Design Resilient Architectures | 70% | [Q998](https://www.examtopics.com/discussions/amazon/view/148806-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 2 | **D** | 2. Design Resilient Architectures | 100% | [Q986](https://www.examtopics.com/discussions/amazon/view/148509-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 3 | **B** | 3. Design High-Performing Architectures | 50% ⚠ | [Q939](https://www.examtopics.com/discussions/amazon/view/145680-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 4 | **A** | 2. Design Resilient Architectures | 100% | [Q958](https://www.examtopics.com/discussions/amazon/view/145957-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 5 | **A** | 3. Design High-Performing Architectures | 91% | [Q919](https://www.examtopics.com/discussions/amazon/view/145414-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 6 | **C** | 4. Design Cost-Optimized Architectures | 83% | [Q993](https://www.examtopics.com/discussions/amazon/view/148462-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 7 | **C** | 4. Design Cost-Optimized Architectures | 89% | [Q989](https://www.examtopics.com/discussions/amazon/view/148459-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 8 | **A** | 3. Design High-Performing Architectures | 100% | [Q1005](https://www.examtopics.com/discussions/amazon/view/148811-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 9 | **D** | 4. Design Cost-Optimized Architectures | 78% | [Q145](https://www.examtopics.com/discussions/amazon/view/86474-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 10 | **B** | 3. Design High-Performing Architectures | 81% | [Q1000](https://www.examtopics.com/discussions/amazon/view/148471-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 11 | **D** | 1. Design Secure Architectures | 100% | [Q927](https://www.examtopics.com/discussions/amazon/view/145214-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 12 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q1016](https://www.examtopics.com/discussions/amazon/view/148824-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 13 | **D** | 2. Design Resilient Architectures | 100% | [Q938](https://www.examtopics.com/discussions/amazon/view/145679-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 14 | **C** | 3. Design High-Performing Architectures | 83% | [Q961](https://www.examtopics.com/discussions/amazon/view/145442-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 15 | **B** | 1. Design Secure Architectures | 100% | [Q947](https://www.examtopics.com/discussions/amazon/view/145920-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 16 | **B** | 1. Design Secure Architectures | 100% | [Q981](https://www.examtopics.com/discussions/amazon/view/145821-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 17 | **B** | 4. Design Cost-Optimized Architectures | 84% | [Q995](https://www.examtopics.com/discussions/amazon/view/148465-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 18 | **C** | 3. Design High-Performing Architectures | 60% ⚠ | [Q1004](https://www.examtopics.com/discussions/amazon/view/148810-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 19 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q985](https://www.examtopics.com/discussions/amazon/view/148508-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 20 | **C** | 1. Design Secure Architectures | 73% | [Q1017](https://www.examtopics.com/discussions/amazon/view/148825-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 21 | **D** | 3. Design High-Performing Architectures | 68% ⚠ | [Q971](https://www.examtopics.com/discussions/amazon/view/145371-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 22 | **C D** | 2. Design Resilient Architectures | 92% | [Q1006](https://www.examtopics.com/discussions/amazon/view/148812-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 23 | **B** | 3. Design High-Performing Architectures | 89% | [Q962](https://www.examtopics.com/discussions/amazon/view/146188-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 24 | **A C** | 1. Design Secure Architectures | 100% | [Q1011](https://www.examtopics.com/discussions/amazon/view/148817-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 25 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q1003](https://www.examtopics.com/discussions/amazon/view/148809-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 26 | **D** | 2. Design Resilient Architectures | 91% | [Q210](https://www.examtopics.com/discussions/amazon/view/94992-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 27 | **A** | 3. Design High-Performing Architectures | 100% | [Q1015](https://www.examtopics.com/discussions/amazon/view/148821-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 28 | **A** | 1. Design Secure Architectures | 100% | [Q336](https://www.examtopics.com/discussions/amazon/view/99790-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 29 | **D** | 2. Design Resilient Architectures | 83% | [Q1012](https://www.examtopics.com/discussions/amazon/view/148818-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 30 | **A** | 2. Design Resilient Architectures | 69% ⚠ | [Q955](https://www.examtopics.com/discussions/amazon/view/146208-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 31 | **A B** | 4. Design Cost-Optimized Architectures | 79% | [Q987](https://www.examtopics.com/discussions/amazon/view/148519-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 32 | **B** | 1. Design Secure Architectures | 100% | [Q966](https://www.examtopics.com/discussions/amazon/view/146028-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 33 | **B D** | 4. Design Cost-Optimized Architectures | 88% | [Q957](https://www.examtopics.com/discussions/amazon/view/145777-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 34 | **B** | 2. Design Resilient Architectures | 100% | [Q1014](https://www.examtopics.com/discussions/amazon/view/148820-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 35 | **C** | 2. Design Resilient Architectures | 100% | [Q991](https://www.examtopics.com/discussions/amazon/view/148885-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 36 | **B** | 1. Design Secure Architectures | 82% | [Q992](https://www.examtopics.com/discussions/amazon/view/148461-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 37 | **A** | 2. Design Resilient Architectures | 100% | [Q969](https://www.examtopics.com/discussions/amazon/view/146029-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 38 | **D** | 2. Design Resilient Architectures | 92% | [Q964](https://www.examtopics.com/discussions/amazon/view/146026-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 39 | **B** | 1. Design Secure Architectures | 91% | [Q1019](https://www.examtopics.com/discussions/amazon/view/148827-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 40 | **A** | 4. Design Cost-Optimized Architectures | 100% | [Q1013](https://www.examtopics.com/discussions/amazon/view/148819-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 41 | **A** | 3. Design High-Performing Architectures | 100% | [Q984](https://www.examtopics.com/discussions/amazon/view/148507-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 42 | **C** | 2. Design Resilient Architectures | 100% | [Q996](https://www.examtopics.com/discussions/amazon/view/148468-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 43 | **D** | 4. Design Cost-Optimized Architectures | 92% | [Q1002](https://www.examtopics.com/discussions/amazon/view/148808-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 44 | **A D** | 1. Design Secure Architectures | 100% | [Q988](https://www.examtopics.com/discussions/amazon/view/148803-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 45 | **C** | 1. Design Secure Architectures | 79% | [Q1018](https://www.examtopics.com/discussions/amazon/view/148826-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 46 | **C** | 2. Design Resilient Architectures | 52% ⚠ | [Q972](https://www.examtopics.com/discussions/amazon/view/146061-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 47 | **C** | 1. Design Secure Architectures | 61% ⚠ | [Q942](https://www.examtopics.com/discussions/amazon/view/145418-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 48 | **B** | 3. Design High-Performing Architectures | 100% | [Q999](https://www.examtopics.com/discussions/amazon/view/148470-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 49 | **B C D** | 2. Design Resilient Architectures | 100% | [Q1010](https://www.examtopics.com/discussions/amazon/view/148815-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 50 | **A** | 1. Design Secure Architectures | 100% | [Q977](https://www.examtopics.com/discussions/amazon/view/146035-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 51 | **B** | 1. Design Secure Architectures | 75% | [Q922](https://www.examtopics.com/discussions/amazon/view/145676-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 52 | **C** | 2. Design Resilient Architectures | 100% | [Q963](https://www.examtopics.com/discussions/amazon/view/146180-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 53 | **B** | 1. Design Secure Architectures | 78% | [Q1009](https://www.examtopics.com/discussions/amazon/view/148814-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 54 | **B** | 3. Design High-Performing Architectures | 61% ⚠ | [Q976](https://www.examtopics.com/discussions/amazon/view/145571-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 55 | **D E** | 1. Design Secure Architectures | 100% | [Q941](https://www.examtopics.com/discussions/amazon/view/145808-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 56 | **D** | 4. Design Cost-Optimized Architectures | 100% | [Q983](https://www.examtopics.com/discussions/amazon/view/148506-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 57 | **C** | 4. Design Cost-Optimized Architectures | 100% | [Q997](https://www.examtopics.com/discussions/amazon/view/148469-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 58 | **D** | 2. Design Resilient Architectures | 100% | [Q422](https://www.examtopics.com/discussions/amazon/view/109280-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 59 | **B** | 1. Design Secure Architectures | 89% | [Q982](https://www.examtopics.com/discussions/amazon/view/148505-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 60 | **C** | 3. Design High-Performing Architectures | 89% | [Q1007](https://www.examtopics.com/discussions/amazon/view/148544-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 61 | **C** | 1. Design Secure Architectures | 67% ⚠ | [Q980](https://www.examtopics.com/discussions/amazon/view/147313-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 62 | **A** | 3. Design High-Performing Architectures | 100% | [Q946](https://www.examtopics.com/discussions/amazon/view/145919-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 63 | **D** | 1. Design Secure Architectures | 100% | [Q970](https://www.examtopics.com/discussions/amazon/view/147459-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 64 | **C** | 3. Design High-Performing Architectures | 100% | [Q990](https://www.examtopics.com/discussions/amazon/view/148460-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 65 | **A C** | 3. Design High-Performing Architectures | 52% ⚠ | [Q931](https://www.examtopics.com/discussions/amazon/view/145416-exam-aws-certified-solutions-architect-associate-saa-c03/) |
