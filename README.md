# devops-test-app


To run the local project:

```
docker-compose -f docker-compose-local.yml up --build -d
```

To run the production project:

We are using EKS with two workers node in us-west-1 for the production api.

```
https://devops-app.inktold.com/
```

### Endpoint list

| HTTP method | Endpoint |
| ---- | --------------- |
| GET | /users |
| GET | /files |
| GET | /version |
| GET | /health |
| GET | /ready |
