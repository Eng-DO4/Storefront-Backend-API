# Storefront-Backend-API

2nd Project on APIs for Udacity nano degree course "Advanced Full-Stack Web Development".

The project is for designing database relation and securing users sensitive data in a storefront API.

## .env

Before all, create a ".env" file in the root directory and with these variables
```
    # Server port
    PORT=3000

    # Environment indicator (dev, prod, test)
    ENV

    # Database port
    PG_PORT=5432

    # Database host
    PG_HOST

    # Database name (for development)
    PG_DB

    # Database name (for testing)
    PG_DB_TEST

    # Database user
    PG_USER

    # Database password
    PG_PASS

    # Hashing
    BCRYPT_PASS
    SALT_ROUNDS

    # JSON Web Token (JWT)
    TOKEN_SECRET
```

## Databases

you need to follow these sqls to create databases and connect them
```
    -- Login to PSQL as postgres user
    psql -U postgres

    -- Create 2 databases
    CREATE DATABASE dev;
    CREATE DATABASE test;

    -- Connect to the test database
    \c test;

    -- run commands in teminal
    ---- * `npm run migration:run`
    ---- * `npm run test`

    -- to solve a problem with ids after deleting
    ALTER SEQUENCE <table_name>_id_seq RESTART WITH 1;
```

## Commands to run

0. `npm i` to install dependencies
1. `npm run build` to only build the API JS file
2. `npm run start` to build JS files and run the server
3. `npm run dev` to start server without building JS files
4. `npm run migration:run` to migrate up sql files on dev db
5. `npm run test` to migrate up sql files on test db
