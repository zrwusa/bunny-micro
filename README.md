
## Description

![system architecture diagram](https://raw.githubusercontent.com/zrwusa/assets/master/images/bunny-nest/bunny-farm.webp)

Bunny Micro is part of this system architecture and is responsible for the API service in this architecture.

It is a microservice framework based on NestJS, used to build gRPC APIs:

 - TypeORM combined with PostgreSQL is used to implement structured data storage.
 - Standardizes service layer communication protocols and standardizes controller layer communication protocols.
 - SOLID Principle



## Project setup

### .env setup
```text
PORT=9090
MICRO_PORT=50051
FRONT_END_PORT=3000

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=your_postgresql_password
POSTGRES_DATABASE=your_database

REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
```

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm start

# watch mode
$ pnpm start:dev

# production mode
$ pnpm start:prod
```

## Run tests

```bash
# unit tests
$ pnpm test

# e2e tests
$ pnpm test:e2e

# test coverage
$ pnpm test:cov
```

## Resources

## Stay in touch


## License