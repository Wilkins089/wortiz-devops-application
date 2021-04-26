# devops-test-app


```
To run the local project:

docker-compose -f docker-compose-local.yml up --build -d

To run the production project:

We are using EKS in us-west-1 for the production api.

https://devops-app.inktold.com/

How does it work? 

in each git commit we push a new docker image to ECR using Buddy-CI.

https://buddy.works/

The flow is as follows: 

Execute AWS CLI command:

we download in each release the config.js file which is stored in S3 for security reasons.

Build and Push ECR:

We Build and Push to ECR each docker image with a different release tag, in order to rollback if needed. 

Run kubectl command:

we set the new image deployed to EKS for the production namespace.

Why did you choose to go that way?

it is more flexible and easier to handle.

Why do you think this is the best approach? 

I understand that there are many things that can be improved.

Would you make any changes to the application? (source code/automation), why?

1-Yes, instead of a container for the database, I would use a database fully managed by amazon such as RDS.

2-It also manages the secrets for example the AWS credentials in some environment variable like an env file.

### Endpoint list

| HTTP method | Endpoint |
| ---- | --------------- |
| GET | /users |
| GET | /files |
| GET | /version |
| GET | /health |
| GET | /ready |

```