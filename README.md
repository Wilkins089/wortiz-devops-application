# devops-test-app

To run the local project you simply have to run the following:

```
docker-compose -f docker-compose-local.yml up --build -d
```

NOTE: First you must create a local network that allows us to communicate between the containers.

```
docker network create my-networks
```

### Endpoint list

| HTTP method | Endpoint |
| ---- | --------------- |
| GET | /users |
| GET | /files |
| GET | /version |
| GET | /health |
| GET | /ready |