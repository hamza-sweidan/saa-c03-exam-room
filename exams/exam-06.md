# SAA-C03 Practice Exam 6

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

**1.** A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages. What should a solutions architect do to ensure messages are being processed once only?

- **A.** Use the CreateQueue API call to create a new queue.
- **B.** Use the AddPermission API call to add appropriate permissions.
- **C.** Use the ReceiveMessage API call to set an appropriate wait time.
- **D.** Use the ChangeMessageVisibility API call to increase the visibility timeout.

**2.** A solutions architect is designing the cloud architecture for a new stateless application that will be deployed on AWS. The solutions architect created an Amazon Machine Image (AMI) and launch template for the application. Based on the number of jobs that need to be processed, the processing must run in parallel while adding and removing application Amazon EC2 instances as needed. The application must be loosely coupled. The job items must be durably stored. Which solution will meet these requirements?

- **A.** Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on CPU usage.
- **B.** Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on network usage.
- **C.** Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on the number of items in the SQS queue.
- **D.** Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on the number of messages published to the SNS topic.

**3.** A company collects data from a large number of participants who use wearable devices. The company stores the data in an Amazon DynamoDB table and uses applications to analyze the data. The data workload is constant and predictable. The company wants to stay at or below its forecasted budget for DynamoDB. Which solution will meet these requirements MOST cost-effectively?

- **A.** Use provisioned mode and DynamoDB Standard-Infrequent Access (DynamoDB Standard-IA). Reserve capacity for the forecasted workload.
- **B.** Use provisioned mode. Specify the read capacity units (RCUs) and write capacity units (WCUs).
- **C.** Use on-demand mode. Set the read capacity units (RCUs) and write capacity units (WCUs) high enough to accommodate changes in the workload.
- **D.** Use on-demand mode. Specify the read capacity units (RCUs) and write capacity units (WCUs) with reserved capacity.

**4.** A company created a new organization in AWS Organizations. The organization has multiple accounts for the company's development teams. The development team members use AWS IAM Identity Center (AWS Single Sign-On) to access the accounts. For each of the company's applications, the development teams must use a predefined application name to tag resources that are created. A solutions architect needs to design a solution that gives the development team the ability to create resources only if the application name tag has an approved value. Which solution will meet these requirements?

- **A.** Create an IAM group that has a conditional Allow policy that requires the application name tag to be specified for resources to be created.
- **B.** Create a cross-account role that has a Deny policy for any resource that has the application name tag.
- **C.** Create a resource group in AWS Resource Groups to validate that the tags are applied to all resources in all accounts.
- **D.** Create a tag policy in Organizations that has a list of allowed application names.

**5.** A company hosts multiple applications on AWS for different product lines. The applications use different compute resources, including Amazon EC2 instances and Application Load Balancers. The applications run in different AWS accounts under the same organization in AWS Organizations across multiple AWS Regions. Teams for each product line have tagged each compute resource in the individual accounts. The company wants more details about the cost for each product line from the consolidated billing feature in Organizations. Which combination of steps will meet these requirements? (Choose two.)

- **A.** Select a specific AWS generated tag in the AWS Billing console.
- **B.** Select a specific user-defined tag in the AWS Billing console.
- **C.** Select a specific user-defined tag in the AWS Resource Groups console.
- **D.** Activate the selected tag from each AWS account.
- **E.** Activate the selected tag from the Organizations management account.

**6.** A company has an on-premises MySQL database that handles transactional data. The company is migrating the database to the AWS Cloud. The migrated database must maintain compatibility with the company's applications that use the database. The migrated database also must scale automatically during periods of increased demand. Which migration solution will meet these requirements?

- **A.** Use native MySQL tools to migrate the database to Amazon RDS for MySQL. Configure elastic storage scaling.
- **B.** Migrate the database to Amazon Redshift by using the mysqldump utility. Turn on Auto Scaling for the Amazon Redshift cluster.
- **C.** Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon Aurora. Turn on Aurora Auto Scaling.
- **D.** Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon DynamoDB. Configure an Auto Scaling policy.

**7.** A company uses an Amazon DynamoDB table to store data that the company receives from devices. The DynamoDB table supports a customer-facing website to display recent activity on customer devices. The company configured the table with provisioned throughput for writes and reads. The company wants to calculate performance metrics for customer device data on a daily basis. The solution must have minimal effect on the table's provisioned read and write capacity. Which solution will meet these requirements?

- **A.** Use an Amazon Athena SQL query with the Amazon Athena DynamoDB connector to calculate performance metrics on a recurring schedule.
- **B.** Use an AWS Glue job with the AWS Glue DynamoDB export connector to calculate performance metrics on a recurring schedule.
- **C.** Use an Amazon Redshift COPY command to calculate performance metrics on a recurring schedule.
- **D.** Use an Amazon EMR job with an Apache Hive external table to calculate performance metrics on a recurring schedule.

**8.** A company is storing petabytes of data in Amazon S3 Standard. The data is stored in multiple S3 buckets and is accessed with varying frequency. The company does not know access patterns for all the data. The company needs to implement a solution for each S3 bucket to optimize the cost of S3 usage. Which solution will meet these requirements with the MOST operational efficiency?

- **A.** Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering.
- **B.** Use the S3 storage class analysis tool to determine the correct tier for each object in the S3 bucket. Move each object to the identified storage tier.
- **C.** Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Glacier Instant Retrieval.
- **D.** Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 One Zone-Infrequent Access (S3 One Zone- IA).

**9.** A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check. What should a solutions architect do to accomplish this?

- **A.** Use AWS Config rules to define and detect resources that are not properly tagged.
- **B.** Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.
- **C.** Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.
- **D.** Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.

**10.** A company runs an application in the AWS Cloud that generates sensitive archival data files. The company wants to rearchitect the application's data storage. The company wants to encrypt the data files and to ensure that third parties do not have access to the data before the data is encrypted and sent to AWS. The company has already created an Amazon S3 bucket. Which solution will meet these requirements?

- **A.** Configure the S3 bucket to use client-side encryption with an Amazon S3 managed encryption key. Configure the application to use the S3 bucket to store the archival files.
- **B.** Configure the S3 bucket to use server-side encryption with AWS KMS keys (SSE-KMS). Configure the application to use the S3 bucket to store the archival files.
- **C.** Configure the S3 bucket to use dual-layer server-side encryption with AWS KMS keys (SSE-KMS). Configure the application to use the S3 bucket to store the archival files.
- **D.** Configure the application to use client-side encryption with a key stored in AWS Key Management Service (AWS KMS). Configure the application to store the archival files in the S3 bucket.

**11.** A solutions architect is designing a shared storage solution for a web application that is deployed across multiple Availability Zones. The web application runs on Amazon EC2 instances that are in an Auto Scaling group. The company plans to make frequent changes to the content. The solution must have strong consistency in returning the new content as soon as the changes occur. Which solutions meet these requirements? (Choose two.)

- **A.** Use AWS Storage Gateway Volume Gateway Internet Small Computer Systems Interface (iSCSI) block storage that is mounted to the individual EC2 instances.
- **B.** Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on the individual EC2 instances.
- **C.** Create a shared Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on the individual EC2 instances.
- **D.** Use AWS DataSync to perform continuous synchronization of data between EC2 hosts in the Auto Scaling group.
- **E.** Create an Amazon S3 bucket to store the web content. Set the metadata for the Cache-Control header to no-cache. Use Amazon CloudFront to deliver the content.

**12.** To meet security requirements, a company needs to encrypt all of its application data in transit while communicating with an Amazon RDS MySQL DB instance. A recent security audit revealed that encryption at rest is enabled using AWS Key Management Service (AWS KMS), but data in transit is not enabled. What should a solutions architect do to satisfy the security requirements?

- **A.** Enable IAM database authentication on the database.
- **B.** Provide self-signed certificates. Use the certificates in all connections to the RDS instance.
- **C.** Take a snapshot of the RDS instance. Restore the snapshot to a new instance with encryption enabled.
- **D.** Download AWS-provided root certificates. Provide the certificates in all connections to the RDS instance.

**13.** A company has an AWS Direct Connect connection from its corporate data center to its VPC in the us-east-1 Region. The company recently acquired a corporation that has several VPCs and a Direct Connect connection between its on-premises data center and the eu-west-2 Region. The CIDR blocks for the VPCs of the company and the corporation do not overlap. The company requires connectivity between two Regions and the data centers. The company needs a solution that is scalable while reducing operational overhead. What should a solutions architect do to meet these requirements?

- **A.** Set up inter-Region VPC peering between the VPC in us-east-1 and the VPCs in eu-west-2.
- **B.** Create private virtual interfaces from the Direct Connect connection in us-east-1 to the VPCs in eu-west-2.
- **C.** Establish VPN appliances in a fully meshed VPN network hosted by Amazon EC2. Use AWS VPN CloudHub to send and receive data between the data centers and each VPC.
- **D.** Connect the existing Direct Connect connection to a Direct Connect gateway. Route traffic from the virtual private gateways of the VPCs in each Region to the Direct Connect gateway.

**14.** A company is developing an application in the AWS Cloud. The application's HTTP API contains critical information that is published in Amazon API Gateway. The critical information must be accessible from only a limited set of trusted IP addresses that belong to the company's internal network. Which solution will meet these requirements?

- **A.** Set up an API Gateway private integration to restrict access to a predefined set of IP addresses.
- **B.** Create a resource policy for the API that denies access to any IP address that is not specifically allowed.
- **C.** Directly deploy the API in a private subnet. Create a network ACL. Set up rules to allow the traffic from specific IP addresses.
- **D.** Modify the security group that is attached to API Gateway to allow inbound traffic from only the trusted IP addresses.

**15.** A company is migrating an application from an on-premises environment to AWS. The application will store sensitive data in Amazon S3. The company must encrypt the data before storing the data in Amazon S3. Which solution will meet these requirements?

- **A.** Encrypt the data by using client-side encryption with customer managed keys.
- **B.** Encrypt the data by using server-side encryption with AWS KMS keys (SSE-KMS).
- **C.** Encrypt the data by using server-side encryption with customer-provided keys (SSE-C).
- **D.** Encrypt the data by using client-side encryption with Amazon S3 managed keys.

**16.** A company uses a 100 GB Amazon RDS for Microsoft SQL Server Single-AZ DB instance in the us-east-1 Region to store customer transactions. The company needs high availability and automatic recovery for the DB instance. The company must also run reports on the RDS database several times a year. The report process causes transactions to take longer than usual to post to the customers’ accounts. The company needs a solution that will improve the performance of the report process. Which combination of steps will meet these requirements? (Choose two.)

- **A.** Modify the DB instance from a Single-AZ DB instance to a Multi-AZ deployment.
- **B.** Take a snapshot of the current DB instance. Restore the snapshot to a new RDS deployment in another Availability Zone.
- **C.** Create a read replica of the DB instance in a different Availability Zone. Point all requests for reports to the read replica.
- **D.** Migrate the database to RDS Custom.
- **E.** Use RDS Proxy to limit reporting requests to the maintenance window.

**17.** A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution meets these requirements?

- **A.** Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.
- **B.** Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.
- **C.** Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages.
- **D.** Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SOS) subscriptions. Configure the consumer applications to process the messages from the queues.

**18.** A retail company uses a regional Amazon API Gateway API for its public REST APIs. The API Gateway endpoint is a custom domain name that points to an Amazon Route 53 alias record. A solutions architect needs to create a solution that has minimal effects on customers and minimal data loss to release the new version of APIs. Which solution will meet these requirements?

- **A.** Create a canary release deployment stage for API Gateway. Deploy the latest API version. Point an appropriate percentage of traffic to the canary stage. After API verification, promote the canary stage to the production stage.
- **B.** Create a new API Gateway endpoint with a new version of the API in OpenAPI YAML file format. Use the import-to-update operation in merge mode into the API in API Gateway. Deploy the new version of the API to the production stage.
- **C.** Create a new API Gateway endpoint with a new version of the API in OpenAPI JSON file format. Use the import-to-update operation in overwrite mode into the API in API Gateway. Deploy the new version of the API to the production stage.
- **D.** Create a new API Gateway endpoint with new versions of the API definitions. Create a custom domain name for the new API Gateway API. Point the Route 53 alias record to the new API Gateway API custom domain name.

**19.** A company is building a web application that serves a content management system. The content management system runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances run in an Auto Scaling group across multiple Availability Zones. Users are constantly adding and updating files, blogs, and other website assets in the content management system. A solutions architect must implement a solution in which all the EC2 instances share up-to-date website content with the least possible lag time. Which solution meets these requirements?

- **A.** Update the EC2 user data in the Auto Scaling group lifecycle policy to copy the website assets from the EC2 instance that was launched most recently. Configure the ALB to make changes to the website assets only in the newest EC2 instance.
- **B.** Copy the website assets to an Amazon Elastic File System (Amazon EFS) file system. Configure each EC2 instance to mount the EFS file system locally. Configure the website hosting application to reference the website assets that are stored in the EFS file system.
- **C.** Copy the website assets to an Amazon S3 bucket. Ensure that each EC2 instance downloads the website assets from the S3 bucket to the attached Amazon Elastic Block Store (Amazon EBS) volume. Run the S3 sync command once each hour to keep files up to date.
- **D.** Restore an Amazon Elastic Block Store (Amazon EBS) snapshot with the website assets. Attach the EBS snapshot as a secondary EBS volume when a new EC2 instance is launched. Configure the website hosting application to reference the website assets that are stored in the secondary EBS volume.

**20.** A company has an employee web portal. Employees log in to the portal to view payroll details. The company is developing a new system to give employees the ability to upload scanned documents for reimbursement. The company runs a program to extract text-based data from the documents and attach the extracted information to each employee’s reimbursement IDs for processing. The employee web portal requires 100% uptime. The document extract program runs infrequently throughout the day on an on-demand basis. The company wants to build a scalable and cost-effective new system that will require minimal changes to the existing web portal. The company does not want to make any code changes. Which solution will meet these requirements with the LEAST implementation effort?

- **A.** Run Amazon EC2 On-Demand Instances in an Auto Scaling group for the web portal. Use an AWS Lambda function to run the document extract program. Invoke the Lambda function when an employee uploads a new reimbursement document.
- **B.** Run Amazon EC2 Spot Instances in an Auto Scaling group for the web portal. Run the document extract program on EC2 Spot Instances. Start document extract program instances when an employee uploads a new reimbursement document.
- **C.** Purchase a Savings Plan to run the web portal and the document extract program. Run the web portal and the document extract program in an Auto Scaling group.
- **D.** Create an Amazon S3 bucket to host the web portal. Use Amazon API Gateway and an AWS Lambda function for the existing functionalities. Use the Lambda function to run the document extract program. Invoke the Lambda function when the API that is associated with a new document upload is called.

**21.** A company stores data in PDF format in an Amazon S3 bucket. The company must follow a legal requirement to retain all new and existing data in Amazon S3 for 7 years. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Turn on the S3 Versioning feature for the S3 bucket. Configure S3 Lifecycle to delete the data after 7 years. Configure multi-factor authentication (MFA) delete for all S3 objects.
- **B.** Turn on S3 Object Lock with governance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Recopy all existing objects to bring the existing data into compliance.
- **C.** Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Recopy all existing objects to bring the existing data into compliance.
- **D.** Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Use S3 Batch Operations to bring the existing data into compliance.

**22.** A company hosts its enterprise resource planning (ERP) system in the us-east-1 Region. The system runs on Amazon EC2 instances. Customers use a public API that is hosted on the EC2 instances to exchange information with the ERP system. International customers report slow API response times from their data centers. Which solution will improve response times for the international customers MOST cost-effectively?

- **A.** Create an AWS Direct Connect connection that has a public virtual interface (VIF) to provide connectivity from each customer's data center to us-east-1. Route customer API requests by using a Direct Connect gateway to the ERP system API.
- **B.** Set up an Amazon CloudFront distribution in front of the API. Configure the CachingOptimized managed cache policy to provide improved cache efficiency.
- **C.** Set up AWS Global Accelerator. Configure listeners for the necessary ports. Configure endpoint groups for the appropriate Regions to distribute traffic. Create an endpoint in the group for the API.
- **D.** Use AWS Site-to-Site VPN to establish dedicated VPN tunnels between Regions and customer networks. Route traffic to the API over the VPN connections.

**23.** A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances behind an Elastic Load Balancer in an Auto Scaling group and with an Amazon DynamoDB table. The company wants to ensure the application can be made available in anotherAWS Region with minimal downtime. What should a solutions architect do to meet these requirements with the LEAST amount of downtime?

- **A.** Create an Auto Scaling group and a load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.
- **B.** Create an AWS CloudFormation template to create EC2 instances, load balancers, and DynamoDB tables to be launched when needed Configure DNS failover to point to the new disaster recovery Region's load balancer.
- **C.** Create an AWS CloudFormation template to create EC2 instances and a load balancer to be launched when needed. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.
- **D.** Create an Auto Scaling group and load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm to trigger an AWS Lambda function that updates Amazon Route 53 pointing to the disaster recovery load balancer.

**24.** An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers. A solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application. Which solution will meet these requirements?

- **A.** Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.
- **B.** Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint.
- **C.** Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica.
- **D.** Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.

**25.** A company is building an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for its workloads. All secrets that are stored in Amazon EKS must be encrypted in the Kubernetes etcd key-value store. Which solution will meet these requirements?

- **A.** Create a new AWS Key Management Service (AWS KMS) key. Use AWS Secrets Manager to manage, rotate, and store all secrets in Amazon EKS.
- **B.** Create a new AWS Key Management Service (AWS KMS) key. Enable Amazon EKS KMS secrets encryption on the Amazon EKS cluster.
- **C.** Create the Amazon EKS cluster with default options. Use the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver as an add-on.
- **D.** Create a new AWS Key Management Service (AWS KMS) key with the alias/aws/ebs alias. Enable default Amazon Elastic Block Store (Amazon EBS) volume encryption for the account.

**26.** A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53. What should a solutions architect do to meet these requirements?

- **A.** Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution.
- **B.** Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint Configure Route 53 to route traffic to the CloudFront distribution.
- **C.** Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.
- **D.** Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application.

**27.** An Amazon EventBridge rule targets a third-party API. The third-party API has not received any incoming traffic. A solutions architect needs to determine whether the rule conditions are being met and if the rule's target is being invoked. Which solution will meet these requirements?

- **A.** Check for metrics in Amazon CloudWatch in the namespace for AWS/Events.
- **B.** Review events in the Amazon Simple Queue Service (Amazon SQS) dead-letter queue.
- **C.** Check for the events in Amazon CloudWatch Logs.
- **D.** Check the trails in AWS CloudTrail for the EventBridge events.

**28.** A company uses Amazon API Gateway to run a private gateway with two REST APIs in the same VPC. The BuyStock RESTful web service calls the CheckFunds RESTful web service to ensure that enough funds are available before a stock can be purchased. The company has noticed in the VPC flow logs that the BuyStock RESTful web service calls the CheckFunds RESTful web service over the internet instead of through the VPC. A solutions architect must implement a solution so that the APIs communicate through the VPC. Which solution will meet these requirements with the FEWEST changes to the code?

- **A.** Add an X-API-Key header in the HTTP header for authorization.
- **B.** Use an interface endpoint.
- **C.** Use a gateway endpoint.
- **D.** Add an Amazon Simple Queue Service (Amazon SQS) queue between the two REST APIs.

**29.** A company runs an application on Amazon EC2 instances in a private subnet. The application needs to store and retrieve data in Amazon S3 buckets. According to regulatory requirements, the data must not travel across the public internet. What should a solutions architect do to meet these requirements MOST cost-effectively?

- **A.** Deploy a NAT gateway to access the S3 buckets.
- **B.** Deploy AWS Storage Gateway to access the S3 buckets.
- **C.** Deploy an S3 interface endpoint to access the S3 buckets.
- **D.** Deploy an S3 gateway endpoint to access the S3 buckets.

**30.** A company has an on-premises MySQL database used by the global sales team with infrequent access patterns. The sales team requires the database to have minimal downtime. A database administrator wants to migrate this database to AWS without selecting a particular instance type in anticipation of more users in the future. Which service should a solutions architect recommend?

- **A.** Amazon Aurora MySQL
- **B.** Amazon Aurora Serverless for MySQL
- **C.** Amazon Redshift Spectrum
- **D.** Amazon RDS for MySQL

**31.** A company has a new mobile app. Anywhere in the world, users can see local news on topics they choose. Users also can post photos and videos from inside the app. Users access content often in the first minutes after the content is posted. New content quickly replaces older content, and then the older content disappears. The local nature of the news means that users consume 90% of the content within the AWS Region where it is uploaded. Which solution will optimize the user experience by providing the LOWEST latency for content uploads?

- **A.** Upload and store content in Amazon S3. Use Amazon CloudFront for the uploads.
- **B.** Upload and store content in Amazon S3. Use S3 Transfer Acceleration for the uploads.
- **C.** Upload content to Amazon EC2 instances in the Region that is closest to the user. Copy the data to Amazon S3.
- **D.** Upload and store content in Amazon S3 in the Region that is closest to the user. Use multiple distributions of Amazon CloudFront.

**32.** An IoT company is releasing a mattress that has sensors to collect data about a user’s sleep. The sensors will send data to an Amazon S3 bucket. The sensors collect approximately 2 MB of data every night for each mattress. The company must process and summarize the data for each mattress. The results need to be available as soon as possible. Data processing will require 1 GB of memory and will finish within 30 seconds. Which solution will meet these requirements MOST cost-effectively?

- **A.** Use AWS Glue with a Scala job
- **B.** Use Amazon EMR with an Apache Spark script
- **C.** Use AWS Lambda with a Python script
- **D.** Use AWS Glue with a PySpark job

**33.** A company uses AWS to run its ecommerce platform. The platform is critical to the company's operations and has a high volume of traffic and transactions. The company configures a multi-factor authentication (MFA) device to secure its AWS account root user credentials. The company wants to ensure that it will not lose access to the root user account if the MFA device is lost. Which solution will meet these requirements?

- **A.** Set up a backup administrator account that the company can use to log in if the company loses the MFA device.
- **B.** Add multiple MFA devices for the root user account to handle the disaster scenario.
- **C.** Create a new administrator account when the company cannot access the root account.
- **D.** Attach the administrator policy to another IAM user when the company cannot access the root account.

**34.** A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely. Which storage solution will meet these requirements MOST cost-effectively?

- **A.** Configure S3 Intelligent-Tiering to automatically migrate objects.
- **B.** Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.
- **C.** Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.
- **D.** Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.

**35.** A company’s application is having performance issues. The application is stateful and needs to complete in-memory tasks on Amazon EC2 instances. The company used AWS CloudFormation to deploy infrastructure and used the M5 EC2 instance family. As traffic increased, the application performance degraded. Users are reporting delays when the users attempt to access the application. Which solution will resolve these issues in the MOST operationally efficient way?

- **A.** Replace the EC2 instances with T3 EC2 instances that run in an Auto Scaling group. Make the changes by using the AWS Management Console.
- **B.** Modify the CloudFormation templates to run the EC2 instances in an Auto Scaling group. Increase the desired capacity and the maximum capacity of the Auto Scaling group manually when an increase is necessary.
- **C.** Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Use Amazon CloudWatch built-in EC2 memory metrics to track the application performance for future capacity planning.
- **D.** Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Deploy the Amazon CloudWatch agent on the EC2 instances to generate custom application latency metrics for future capacity planning.

**36.** A solutions architect manages an analytics application. The application stores large amounts of semistructured data in an Amazon S3 bucket. The solutions architect wants to use parallel data processing to process the data more quickly. The solutions architect also wants to use information that is stored in an Amazon Redshift database to enrich the data. Which solution will meet these requirements?

- **A.** Use Amazon Athena to process the S3 data. Use AWS Glue with the Amazon Redshift data to enrich the S3 data.
- **B.** Use Amazon EMR to process the S3 data. Use Amazon EMR with the Amazon Redshift data to enrich the S3 data.
- **C.** Use Amazon EMR to process the S3 data. Use Amazon Kinesis Data Streams to move the S3 data into Amazon Redshift so that the data can be enriched.
- **D.** Use AWS Glue to process the S3 data. Use AWS Lake Formation with the Amazon Redshift data to enrich the S3 data.

**37.** A company has an application that processes customer orders. The company hosts the application on an Amazon EC2 instance that saves the orders to an Amazon Aurora database. Occasionally when traffic is high the workload does not process orders fast enough. What should a solutions architect do to write the orders reliably to the database as quickly as possible?

- **A.** Increase the instance size of the EC2 instance when traffic is high. Write orders to Amazon Simple Notification Service (Amazon SNS). Subscribe the database endpoint to the SNS topic.
- **B.** Write orders to an Amazon Simple Queue Service (Amazon SQS) queue. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SQS queue and process orders into the database.
- **C.** Write orders to Amazon Simple Notification Service (Amazon SNS). Subscribe the database endpoint to the SNS topic. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SNS topic.
- **D.** Write orders to an Amazon Simple Queue Service (Amazon SQS) queue when the EC2 instance reaches CPU threshold limits. Use scheduled scaling of EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SQS queue and process orders into the database.

**38.** A company uses on-premises servers to host its applications. The company is running out of storage capacity. The applications use both block storage and NFS storage. The company needs a high-performing solution that supports local caching without re-architecting its existing applications. Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)

- **A.** Mount Amazon S3 as a file system to the on-premises servers.
- **B.** Deploy an AWS Storage Gateway file gateway to replace NFS storage.
- **C.** Deploy AWS Snowball Edge to provision NFS mounts to on-premises servers.
- **D.** Deploy an AWS Storage Gateway volume gateway to replace the block storage.
- **E.** Deploy Amazon Elastic File System (Amazon EFS) volumes and mount them to on-premises servers.

**39.** A company wants to implement a disaster recovery plan for its primary on-premises file storage volume. The file storage volume is mounted from an Internet Small Computer Systems Interface (iSCSI) device on a local storage server. The file storage volume holds hundreds of terabytes (TB) of data. The company wants to ensure that end users retain immediate access to all file types from the on-premises systems without experiencing latency. Which solution will meet these requirements with the LEAST amount of change to the company's existing infrastructure?

- **A.** Provision an Amazon S3 File Gateway as a virtual machine (VM) that is hosted on premises. Set the local cache to 10 TB. Modify existing applications to access the files through the NFS protocol. To recover from a disaster, provision an Amazon EC2 instance and mount the S3 bucket that contains the files.
- **B.** Provision an AWS Storage Gateway tape gateway. Use a data backup solution to back up all existing data to a virtual tape library. Configure the data backup solution to run nightly after the initial backup is complete. To recover from a disaster, provision an Amazon EC2 instance and restore the data to an Amazon Elastic Block Store (Amazon EBS) volume from the volumes in the virtual tape library.
- **C.** Provision an AWS Storage Gateway Volume Gateway cached volume. Set the local cache to 10 TB. Mount the Volume Gateway cached volume to the existing file server by using iSCSI, and copy all files to the storage volume. Configure scheduled snapshots of the storage volume. To recover from a disaster, restore a snapshot to an Amazon Elastic Block Store (Amazon EBS) volume and attach the EBS volume to an Amazon EC2 instance.
- **D.** Provision an AWS Storage Gateway Volume Gateway stored volume with the same amount of disk space as the existing file storage volume. Mount the Volume Gateway stored volume to the existing file server by using iSCSI, and copy all files to the storage volume. Configure scheduled snapshots of the storage volume. To recover from a disaster, restore a snapshot to an Amazon Elastic Block Store (Amazon EBS) volume and attach the EBS volume to an Amazon EC2 instance.

**40.** A company uses AWS Organizations. A member account has purchased a Compute Savings Plan. Because of changes in the workloads inside the member account, the account no longer receives the full benefit of the Compute Savings Plan commitment. The company uses less than 50% of its purchased compute power.

- **A.** Turn on discount sharing from the Billing Preferences section of the account console in the member account that purchased the Compute Savings Plan.
- **B.** Turn on discount sharing from the Billing Preferences section of the account console in the company's Organizations management account.
- **C.** Migrate additional compute workloads from another AWS account to the account that has the Compute Savings Plan.
- **D.** Sell the excess Savings Plan commitment in the Reserved Instance Marketplace.

**41.** A company has a data ingestion workflow that consists of the following: • An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries • An AWS Lambda function to process the data and record metadata The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job. Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)

- **A.** Deploy the Lambda function in multiple Availability Zones.
- **B.** Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.
- **C.** Increase the CPU and memory that are allocated to the Lambda function.
- **D.** Increase provisioned throughput for the Lambda function.
- **E.** Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue.

**42.** A company is planning to deploy a business-critical application in the AWS Cloud. The application requires durable storage with consistent, low-latency performance. Which type of storage should a solutions architect recommend to meet these requirements?

- **A.** Instance store volume
- **B.** Amazon ElastiCache for Memcached cluster
- **C.** Provisioned IOPS SSD Amazon Elastic Block Store (Amazon EBS) volume
- **D.** Throughput Optimized HDD Amazon Elastic Block Store (Amazon EBS) volume

**43.** A company wants to isolate its workloads by creating an AWS account for each workload. The company needs a solution that centrally manages networking components for the workloads. The solution also must create accounts with automatic security controls (guardrails). Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use AWS Control Tower to deploy accounts. Create a networking account that has a VPC with private subnets and public subnets. Use AWS Resource Access Manager (AWS RAM) to share the subnets with the workload accounts.
- **B.** Use AWS Organizations to deploy accounts. Create a networking account that has a VPC with private subnets and public subnets. Use AWS Resource Access Manager (AWS RAM) to share the subnets with the workload accounts.
- **C.** Use AWS Control Tower to deploy accounts. Deploy a VPC in each workload account. Configure each VPC to route through an inspection VPC by using a transit gateway attachment.
- **D.** Use AWS Organizations to deploy accounts. Deploy a VPC in each workload account. Configure each VPC to route through an inspection VPC by using a transit gateway attachment.

**44.** A company wants to use Amazon Elastic Container Service (Amazon ECS) clusters and Amazon RDS DB instances to build and run a payment processing application. The company will run the application in its on-premises data center for compliance purposes. A solutions architect wants to use AWS Outposts as part of the solution. The solutions architect is working with the company's operational team to build the application. Which activities are the responsibility of the company's operational team? (Choose three.)

- **A.** Providing resilient power and network connectivity to the Outposts racks
- **B.** Managing the virtualization hypervisor, storage systems, and the AWS services that run on Outposts
- **C.** Physical security and access controls of the data center environment
- **D.** Availability of the Outposts infrastructure including the power supplies, servers, and networking equipment within the Outposts racks
- **E.** Physical maintenance of Outposts components
- **F.** Providing extra capacity for Amazon ECS clusters to mitigate server failures and maintenance events

**45.** A company wants to add its existing AWS usage cost to its operation cost dashboard. A solutions architect needs to recommend a solution that will give the company access to its usage cost programmatically. The company must be able to access cost data for the current year and forecast costs for the next 12 months. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Access usage cost-related data by using the AWS Cost Explorer API with pagination.
- **B.** Access usage cost-related data by using downloadable AWS Cost Explorer report .csv files.
- **C.** Configure AWS Budgets actions to send usage cost data to the company through FTP.
- **D.** Create AWS Budgets reports for usage cost data. Send the data to the company through SMTP.

**46.** A company migrated a MySQL database from the company's on-premises data center to an Amazon RDS for MySQL DB instance. The company sized the RDS DB instance to meet the company's average daily workload. Once a month, the database performs slowly when the company runs queries for a report. The company wants to have the ability to run reports and maintain the performance of the daily workloads. Which solution will meet these requirements?

- **A.** Create a read replica of the database. Direct the queries to the read replica.
- **B.** Create a backup of the database. Restore the backup to another DB instance. Direct the queries to the new database.
- **C.** Export the data to Amazon S3. Use Amazon Athena to query the S3 bucket.
- **D.** Resize the DB instance to accommodate the additional workload.

**47.** A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability. How should a solutions architect design the architecture to meet these requirements?

- **A.** Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.
- **B.** Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.
- **C.** Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.
- **D.** Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes.

**48.** A company is creating a REST API. The company has strict requirements for the use of TLS. The company requires TLSv1.3 on the API endpoints. The company also requires a specific public third-party certificate authority (CA) to sign the TLS certificate. Which solution will meet these requirements?

- **A.** Use a local machine to create a certificate that is signed by the third-party CImport the certificate into AWS Certificate Manager (ACM). Create an HTTP API in Amazon API Gateway with a custom domain. Configure the custom domain to use the certificate.
- **B.** Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA. Create an HTTP API in Amazon API Gateway with a custom domain. Configure the custom domain to use the certificate.
- **C.** Use AWS Certificate Manager (ACM) to create a certificate that is signed by the third-party CA. Import the certificate into AWS Certificate Manager (ACM). Create an AWS Lambda function with a Lambda function URL. Configure the Lambda function URL to use the certificate.
- **D.** Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA. Create an AWS Lambda function with a Lambda function URL. Configure the Lambda function URL to use the certificate.

**49.** A consumer survey company has gathered data for several years from a specific geographic region. The company stores this data in an Amazon S3 bucket in an AWS Region. The company has started to share this data with a marketing firm in a new geographic region. The company has granted the firm's AWS account access to the S3 bucket. The company wants to minimize the data transfer costs when the marketing firm requests data from the S3 bucket. Which solution will meet these requirements?

- **A.** Configure the Requester Pays feature on the company’s S3 bucket.
- **B.** Configure S3 Cross-Region Replication (CRR) from the company’s S3 bucket to one of the marketing firm’s S3 buckets.
- **C.** Configure AWS Resource Access Manager to share the S3 bucket with the marketing firm AWS account.
- **D.** Configure the company’s S3 bucket to use S3 Intelligent-Tiering Sync the S3 bucket to one of the marketing firm’s S3 buckets.

**50.** A transaction processing company has weekly scripted batch jobs that run on Amazon EC2 instances. The EC2 instances are in an Auto Scaling group. The number of transactions can vary, but the baseline CPU utilization that is noted on each run is at least 60%. The company needs to provision the capacity 30 minutes before the jobs run. Currently, engineers complete this task by manually modifying the Auto Scaling group parameters. The company does not have the resources to analyze the required capacity trends for the Auto Scaling group counts. The company needs an automated way to modify the Auto Scaling group’s desired capacity. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create a dynamic scaling policy for the Auto Scaling group. Configure the policy to scale based on the CPU utilization metric. Set the target value for the metric to 60%.
- **B.** Create a scheduled scaling policy for the Auto Scaling group. Set the appropriate desired capacity, minimum capacity, and maximum capacity. Set the recurrence to weekly. Set the start time to 30 minutes before the batch jobs run.
- **C.** Create a predictive scaling policy for the Auto Scaling group. Configure the policy to scale based on forecast. Set the scaling metric to CPU utilization. Set the target value for the metric to 60%. In the policy, set the instances to pre-launch 30 minutes before the jobs run.
- **D.** Create an Amazon EventBridge event to invoke an AWS Lambda function when the CPU utilization metric value for the Auto Scaling group reaches 60%. Configure the Lambda function to increase the Auto Scaling group’s desired capacity and maximum capacity by 20%.

**51.** A company uses locally attached storage to run a latency-sensitive application on premises. The company is using a lift and shift method to move the application to the AWS Cloud. The company does not want to change the application architecture. Which solution will meet these requirements MOST cost-effectively?

- **A.** Configure an Auto Scaling group with an Amazon EC2 instance. Use an Amazon FSx for Lustre file system to run the application.
- **B.** Host the application on an Amazon EC2 instance. Use an Amazon Elastic Block Store (Amazon EBS) GP2 volume to run the application.
- **C.** Configure an Auto Scaling group with an Amazon EC2 instance. Use an Amazon FSx for OpenZFS file system to run the application.
- **D.** Host the application on an Amazon EC2 instance. Use an Amazon Elastic Block Store (Amazon EBS) GP3 volume to run the application.

**52.** A company has one million users that use its mobile app. The company must analyze the data usage in near-real time. The company also must encrypt the data in near-real time and must store the data in a centralized location in Apache Parquet format for further processing. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create an Amazon Kinesis data stream to store the data in Amazon S3. Create an Amazon Kinesis Data Analytics application to analyze the data. Invoke an AWS Lambda function to send the data to the Kinesis Data Analytics application.
- **B.** Create an Amazon Kinesis data stream to store the data in Amazon S3. Create an Amazon EMR cluster to analyze the data. Invoke an AWS Lambda function to send the data to the EMR cluster.
- **C.** Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon EMR cluster to analyze the data.
- **D.** Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon Kinesis Data Analytics application to analyze the data.

**53.** A company wants to migrate 100 GB of historical data from an on-premises location to an Amazon S3 bucket. The company has a 100 megabits per second (Mbps) internet connection on premises. The company needs to encrypt the data in transit to the S3 bucket. The company will store new data directly in Amazon S3. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Use the s3 sync command in the AWS CLI to move the data directly to an S3 bucket
- **B.** Use AWS DataSync to migrate the data from the on-premises location to an S3 bucket
- **C.** Use AWS Snowball to move the data to an S3 bucket
- **D.** Set up an IPsec VPN from the on-premises location to AWS. Use the s3 cp command in the AWS CLI to move the data directly to an S3 bucket

**54.** A company has two AWS accounts: Production and Development. The company needs to push code changes in the Development account to the Production account. In the alpha phase, only two senior developers on the development team need access to the Production account. In the beta phase, more developers will need access to perform testing. Which solution will meet these requirements?

- **A.** Create two policy documents by using the AWS Management Console in each account. Assign the policy to developers who need access.
- **B.** Create an IAM role in the Development account. Grant the IAM role access to the Production account. Allow developers to assume the role.
- **C.** Create an IAM role in the Production account. Define a trust policy that specifies the Development account. Allow developers to assume the role.
- **D.** Create an IAM group in the Production account. Add the group as a principal in a trust policy that specifies the Production account. Add developers to the group.

**55.** A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling. How should the solutions architect generate the information with the LEAST operational overhead?

- **A.** Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.
- **B.** Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.
- **C.** Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.
- **D.** Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.

**56.** A company hosts an ecommerce application that stores all data in a single Amazon RDS for MySQL DB instance that is fully managed by AWS. The company needs to mitigate the risk of a single point of failure. Which solution will meet these requirements with the LEAST implementation effort?

- **A.** Modify the RDS DB instance to use a Multi-AZ deployment. Apply the changes during the next maintenance window.
- **B.** Migrate the current database to a new Amazon DynamoDB Multi-AZ deployment. Use AWS Database Migration Service (AWS DMS) with a heterogeneous migration strategy to migrate the current RDS DB instance to DynamoDB tables.
- **C.** Create a new RDS DB instance in a Multi-AZ deployment. Manually restore the data from the existing RDS DB instance from the most recent snapshot.
- **D.** Configure the DB instance in an Amazon EC2 Auto Scaling group with a minimum group size of three. Use Amazon Route 53 simple routing to distribute requests to all DB instances.

**57.** A company runs its critical database on an Amazon RDS for PostgreSQL DB instance. The company wants to migrate to Amazon Aurora PostgreSQL with minimal downtime and data loss. Which solution will meet these requirements with the LEAST operational overhead?

- **A.** Create a DB snapshot of the RDS for PostgreSQL DB instance to populate a new Aurora PostgreSQL DB cluster.
- **B.** Create an Aurora read replica of the RDS for PostgreSQL DB instance. Promote the Aurora read replicate to a new Aurora PostgreSQL DB cluster.
- **C.** Use data import from Amazon S3 to migrate the database to an Aurora PostgreSQL DB cluster.
- **D.** Use the pg_dump utility to back up the RDS for PostgreSQL database. Restore the backup to a new Aurora PostgreSQL DB cluster.

**58.** A weather forecasting company needs to process hundreds of gigabytes of data with sub-millisecond latency. The company has a high performance computing (HPC) environment in its data center and wants to expand its forecasting capabilities. A solutions architect must identify a highly available cloud storage solution that can handle large amounts of sustained throughput. Files that are stored in the solution should be accessible to thousands of compute instances that will simultaneously access and process the entire dataset. What should the solutions architect do to meet these requirements?

- **A.** Use Amazon FSx for Lustre scratch file systems.
- **B.** Use Amazon FSx for Lustre persistent file systems.
- **C.** Use Amazon Elastic File System (Amazon EFS) with Bursting Throughput mode.
- **D.** Use Amazon Elastic File System (Amazon EFS) with Provisioned Throughput mode.

**59.** A company is designing a solution to capture customer activity in different web applications to process analytics and make predictions. Customer activity in the web applications is unpredictable and can increase suddenly. The company requires a solution that integrates with other web applications. The solution must include an authorization step for security purposes. Which solution will meet these requirements?

- **A.** Configure a Gateway Load Balancer (GWLB) in front of an Amazon Elastic Container Service (Amazon ECS) container instance that stores the information that the company receives in an Amazon Elastic File System (Amazon EFS) file system. Authorization is resolved at the GWLB.
- **B.** Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis data stream that stores the information that the company receives in an Amazon S3 bucket. Use an AWS Lambda function to resolve authorization.
- **C.** Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis Data Firehose that stores the information that the company receives in an Amazon S3 bucket. Use an API Gateway Lambda authorizer to resolve authorization.
- **D.** Configure a Gateway Load Balancer (GWLB) in front of an Amazon Elastic Container Service (Amazon ECS) container instance that stores the information that the company receives on an Amazon Elastic File System (Amazon EFS) file system. Use an AWS Lambda function to resolve authorization.

**60.** A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)

- **A.** Replace the current security group of the bastion host with one that only allows inbound access from the application instances.
- **B.** Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company.
- **C.** Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company.
- **D.** Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host.
- **E.** Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host.

**61.** A company runs an internal browser-based application. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales up to 20 instances during work hours, but scales down to 2 instances overnight. Staff are complaining that the application is very slow when the day begins, although it runs well by mid-morning. How should the scaling be changed to address the staff complaints and keep costs to a minimum?

- **A.** Implement a scheduled action that sets the desired capacity to 20 shortly before the office opens.
- **B.** Implement a step scaling action triggered at a lower CPU threshold, and decrease the cooldown period.
- **C.** Implement a target tracking action triggered at a lower CPU threshold, and decrease the cooldown period.
- **D.** Implement a scheduled action that sets the minimum and maximum capacity to 20 shortly before the office opens.

**62.** A company migrated millions of archival files to Amazon S3. A solutions architect needs to implement a solution that will encrypt all the archival data by using a customer-provided key. The solution must encrypt existing unencrypted objects and future objects. Which solution will meet these requirements?

- **A.** Create a list of unencrypted objects by filtering an Amazon S3 Inventory report. Configure an S3 Batch Operations job to encrypt the objects from the list with a server-side encryption with a customer-provided key (SSE-C). Configure the S3 default encryption feature to use a server-side encryption with a customer-provided key (SSE-C).
- **B.** Use S3 Storage Lens metrics to identify unencrypted S3 buckets. Configure the S3 default encryption feature to use a server-side encryption with AWS KMS keys (SSE-KMS).
- **C.** Create a list of unencrypted objects by filtering the AWS usage report for Amazon S3. Configure an AWS Batch job to encrypt the objects from the list with a server-side encryption with AWS KMS keys (SSE-KMS). Configure the S3 default encryption feature to use a server-side encryption with AWS KMS keys (SSE-KMS).
- **D.** Create a list of unencrypted objects by filtering the AWS usage report for Amazon S3. Configure the S3 default encryption feature to use a server-side encryption with a customer-provided key (SSE-C).

**63.** A company runs an application on Amazon EC2 instances. The company needs to implement a disaster recovery (DR) solution for the application. The DR solution needs to have a recovery time objective (RTO) of less than 4 hours. The DR solution also needs to use the fewest possible AWS resources during normal operations. Which solution will meet these requirements in the MOST operationally efficient way?

- **A.** Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS Lambda and custom scripts.
- **B.** Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS CloudFormation.
- **C.** Launch EC2 instances in a secondary AWS Region. Keep the EC2 instances in the secondary Region active at all times.
- **D.** Launch EC2 instances in a secondary Availability Zone. Keep the EC2 instances in the secondary Availability Zone active at all times.

**64.** A solutions architect is designing a two-tiered architecture that includes a public subnet and a database subnet. The web servers in the public subnet must be open to the internet on port 443. The Amazon RDS for MySQL DB instance in the database subnet must be accessible only to the web servers on port 3306. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)

- **A.** Create a network ACL for the public subnet. Add a rule to deny outbound traffic to 0.0.0.0/0 on port 3306.
- **B.** Create a security group for the DB instance. Add a rule to allow traffic from the public subnet CIDR block on port 3306.
- **C.** Create a security group for the web servers in the public subnet. Add a rule to allow traffic from 0.0.0.0/0 on port 443.
- **D.** Create a security group for the DB instance. Add a rule to allow traffic from the web servers’ security group on port 3306.
- **E.** Create a security group for the DB instance. Add a rule to deny all traffic except traffic from the web servers’ security group on port 3306.

**65.** A company runs a web application on Amazon EC2 instances in multiple Availability Zones. The EC2 instances are in private subnets. A solutions architect implements an internet-facing Application Load Balancer (ALB) and specifies the EC2 instances as the target group. However, the internet traffic is not reaching the EC2 instances. How should the solutions architect reconfigure the architecture to resolve this issue?

- **A.** Replace the ALB with a Network Load Balancer. Configure a NAT gateway in a public subnet to allow internet traffic.
- **B.** Move the EC2 instances to public subnets. Add a rule to the EC2 instances’ security groups to allow outbound traffic to 0.0.0.0/0.
- **C.** Update the route tables for the EC2 instances’ subnets to send 0.0.0.0/0 traffic through the internet gateway route. Add a rule to the EC2 instances’ security groups to allow outbound traffic to 0.0.0.0/0.
- **D.** Create public subnets in each Availability Zone. Associate the public subnets with the ALB. Update the route tables for the public subnets with a route to the private subnets.

---

## Answer key -- Exam 6

`Consensus` is the share of ExamTopics voters choosing that answer. Anything
below 70% is genuinely contested -- open the discussion link before trusting it.

| # | Answer | Domain | Consensus | Source |
|---:|---|---|---:|---|
| 1 | **D** | 2. Design Resilient Architectures | 100% | [Q67](https://www.examtopics.com/discussions/amazon/view/85583-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 2 | **C** | 2. Design Resilient Architectures | 100% | [Q963](https://www.examtopics.com/discussions/amazon/view/146180-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 3 | **B** | 4. Design Cost-Optimized Architectures | 87% | [Q348](https://www.examtopics.com/discussions/amazon/view/100222-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 4 | **D** | 1. Design Secure Architectures | 100% | [Q668](https://www.examtopics.com/discussions/amazon/view/127661-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 5 | **B E** | 4. Design Cost-Optimized Architectures | 100% | [Q559](https://www.examtopics.com/discussions/amazon/view/117403-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 6 | **C** | 2. Design Resilient Architectures | 100% | [Q565](https://www.examtopics.com/discussions/amazon/view/117025-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 7 | **B** | 3. Design High-Performing Architectures | 89% | [Q962](https://www.examtopics.com/discussions/amazon/view/146188-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 8 | **A** | 4. Design Cost-Optimized Architectures | 100% | [Q415](https://www.examtopics.com/discussions/amazon/view/103404-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 9 | **A** | 1. Design Secure Architectures | 100% | [Q31](https://www.examtopics.com/discussions/amazon/view/85198-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 10 | **D** | 1. Design Secure Architectures | 100% | [Q862](https://www.examtopics.com/discussions/amazon/view/138010-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 11 | **B E** | 3. Design High-Performing Architectures | 91% | [Q691](https://www.examtopics.com/discussions/amazon/view/132853-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 12 | **D** | 1. Design Secure Architectures | 81% | [Q743](https://www.examtopics.com/discussions/amazon/view/132933-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 13 | **D** | 3. Design High-Performing Architectures | 100% | [Q734](https://www.examtopics.com/discussions/amazon/view/132920-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 14 | **B** | 1. Design Secure Architectures | 91% | [Q1019](https://www.examtopics.com/discussions/amazon/view/148827-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 15 | **A** | 1. Design Secure Architectures | 80% | [Q965](https://www.examtopics.com/discussions/amazon/view/144898-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 16 | **A C** | 2. Design Resilient Architectures | 100% | [Q350](https://www.examtopics.com/discussions/amazon/view/100300-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 17 | **D** | 2. Design Resilient Architectures | 85% | [Q7](https://www.examtopics.com/discussions/amazon/view/84721-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 18 | **A** | 1. Design Secure Architectures | 100% | [Q544](https://www.examtopics.com/discussions/amazon/view/111450-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 19 | **B** | 2. Design Resilient Architectures | 100% | [Q852](https://www.examtopics.com/discussions/amazon/view/139090-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 20 | **A** | 4. Design Cost-Optimized Architectures | 57% ⚠ | [Q930](https://www.examtopics.com/discussions/amazon/view/145215-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 21 | **D** | 1. Design Secure Architectures | 86% | [Q446](https://www.examtopics.com/discussions/amazon/view/109404-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 22 | **C** | 3. Design High-Performing Architectures | 60% ⚠ | [Q1004](https://www.examtopics.com/discussions/amazon/view/148810-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 23 | **A** | 2. Design Resilient Architectures | 58% ⚠ | [Q434](https://www.examtopics.com/discussions/amazon/view/109294-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 24 | **B** | 3. Design High-Performing Architectures | 100% | [Q175](https://www.examtopics.com/discussions/amazon/view/87533-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 25 | **B** | 1. Design Secure Architectures | 96% | [Q535](https://www.examtopics.com/discussions/amazon/view/111385-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 26 | **A** | 3. Design High-Performing Architectures | 77% | [Q12](https://www.examtopics.com/discussions/amazon/view/85010-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 27 | **A** | 2. Design Resilient Architectures | 76% | [Q569](https://www.examtopics.com/discussions/amazon/view/117377-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 28 | **B** | 1. Design Secure Architectures | 94% | [Q360](https://www.examtopics.com/discussions/amazon/view/100238-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 29 | **D** | 4. Design Cost-Optimized Architectures | 87% | [Q875](https://www.examtopics.com/discussions/amazon/view/138140-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 30 | **B** | 4. Design Cost-Optimized Architectures | 100% | [Q314](https://www.examtopics.com/discussions/amazon/view/99769-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 31 | **B** | 3. Design High-Performing Architectures | 88% | [Q738](https://www.examtopics.com/discussions/amazon/view/132925-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 32 | **C** | 4. Design Cost-Optimized Architectures | 100% | [Q463](https://www.examtopics.com/discussions/amazon/view/109501-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 33 | **B** | 1. Design Secure Architectures | 100% | [Q797](https://www.examtopics.com/discussions/amazon/view/133036-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 34 | **B** | 4. Design Cost-Optimized Architectures | 96% | [Q23](https://www.examtopics.com/discussions/amazon/view/85092-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 35 | **D** | 3. Design High-Performing Architectures | 94% | [Q219](https://www.examtopics.com/discussions/amazon/view/95162-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 36 | **B** | 3. Design High-Performing Architectures | 79% | [Q557](https://www.examtopics.com/discussions/amazon/view/117344-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 37 | **B** | 2. Design Resilient Architectures | 100% | [Q462](https://www.examtopics.com/discussions/amazon/view/109653-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 38 | **B D** | 3. Design High-Performing Architectures | 100% | [Q496](https://www.examtopics.com/discussions/amazon/view/109552-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 39 | **D** | 2. Design Resilient Architectures | 83% | [Q324](https://www.examtopics.com/discussions/amazon/view/99711-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 40 | **B** | 4. Design Cost-Optimized Architectures | 74% | [Q467](https://www.examtopics.com/discussions/amazon/view/109485-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 41 | **B E** | 2. Design Resilient Architectures | 98% | [Q45](https://www.examtopics.com/discussions/amazon/view/85408-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 42 | **C** | 3. Design High-Performing Architectures | 100% | [Q620](https://www.examtopics.com/discussions/amazon/view/121221-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 43 | **A** | 1. Design Secure Architectures | 81% | [Q893](https://www.examtopics.com/discussions/amazon/view/139745-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 44 | **A C F** | 1. Design Secure Architectures | 55% ⚠ | [Q599](https://www.examtopics.com/discussions/amazon/view/119530-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 45 | **A** | 4. Design Cost-Optimized Architectures | 100% | [Q525](https://www.examtopics.com/discussions/amazon/view/111278-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 46 | **A** | 3. Design High-Performing Architectures | 100% | [Q590](https://www.examtopics.com/discussions/amazon/view/119719-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 47 | **B** | 2. Design Resilient Architectures | 93% | [Q8](https://www.examtopics.com/discussions/amazon/view/84679-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 48 | **A** | 1. Design Secure Architectures | 78% | [Q571](https://www.examtopics.com/discussions/amazon/view/116904-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 49 | **A** | 4. Design Cost-Optimized Architectures | 73% | [Q960](https://www.examtopics.com/discussions/amazon/view/145552-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 50 | **C** | 2. Design Resilient Architectures | 66% ⚠ | [Q342](https://www.examtopics.com/discussions/amazon/view/100204-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 51 | **D** | 4. Design Cost-Optimized Architectures | 100% | [Q580](https://www.examtopics.com/discussions/amazon/view/117663-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 52 | **D** | 3. Design High-Performing Architectures | 100% | [Q267](https://www.examtopics.com/discussions/amazon/view/95347-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 53 | **B** | 1. Design Secure Architectures | 60% ⚠ | [Q482](https://www.examtopics.com/discussions/amazon/view/109490-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 54 | **C** | 1. Design Secure Architectures | 72% | [Q870](https://www.examtopics.com/discussions/amazon/view/137848-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 55 | **B** | 4. Design Cost-Optimized Architectures | 65% ⚠ | [Q24](https://www.examtopics.com/discussions/amazon/view/85038-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 56 | **A** | 2. Design Resilient Architectures | 100% | [Q933](https://www.examtopics.com/discussions/amazon/view/145008-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 57 | **B** | 2. Design Resilient Architectures | 88% | [Q601](https://www.examtopics.com/discussions/amazon/view/121210-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 58 | **B** | 3. Design High-Performing Architectures | 100% | [Q648](https://www.examtopics.com/discussions/amazon/view/125586-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 59 | **C** | 3. Design High-Performing Architectures | 86% | [Q587](https://www.examtopics.com/discussions/amazon/view/119576-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 60 | **C D** | 1. Design Secure Architectures | 93% | [Q73](https://www.examtopics.com/discussions/amazon/view/85613-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 61 | **C** | 3. Design High-Performing Architectures | 62% ⚠ | [Q275](https://www.examtopics.com/discussions/amazon/view/99584-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 62 | **A** | 1. Design Secure Architectures | 100% | [Q740](https://www.examtopics.com/discussions/amazon/view/132930-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 63 | **B** | 2. Design Resilient Architectures | 100% | [Q274](https://www.examtopics.com/discussions/amazon/view/99459-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 64 | **C D** | 1. Design Secure Architectures | 100% | [Q406](https://www.examtopics.com/discussions/amazon/view/102183-exam-aws-certified-solutions-architect-associate-saa-c03/) |
| 65 | **D** | 2. Design Resilient Architectures | 86% | [Q246](https://www.examtopics.com/discussions/amazon/view/95003-exam-aws-certified-solutions-architect-associate-saa-c03/) |
