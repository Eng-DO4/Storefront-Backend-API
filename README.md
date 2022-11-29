# Storefront-Backend-API

2nd Project on APIs for Udacity nano degree course "Advanced Full-Stack Web Development".

The project is for designing database relation and securing users sensitive data in a storefront API.

## .env

Before all, create a ".env" file in the root directory and with these variables

```
    # Server port (feel free to enter any port you want or use 3000)
    PORT

    # Environment indicator (dev, test)
    ENV

    # Database port (you should use 5432 as port)
    PG_PORT=5432

    # Database host (you can use localhost)
    PG_HOST

    # Database name (for development)
    PG_DB

    # Database name (for testing)
    PG_DB_TEST

    # Database user (feel free to name the user when creating user and dbs)
    PG_USER

    # Database password (feel free for chossing pass when creating user and dbs)
    PG_PASS

    # Hashing (feel free to use any bcrypt pass and salt rounds)
    BCRYPT_PASS
    SALT_ROUNDS

    # JSON Web Token (feel free to use any JWT)
    TOKEN_SECRET
```

## Databases

you need to follow these sqls to create databases and connect them. run sqls in psql shell. 
"feel free to name what you want where <> exist"

```
    -- run sqls in psql shell

    -- Create new user
    CREATE USER <title for user> WITH PASSWORD <any pass btw two sigle qoutes>;

    -- Create 2 databases
    CREATE DATABASE <database for development>;
    CREATE DATABASE <database for testing>;

    -- Grant all database privileges to user in both databases
    GRANT ALL PRIVILEGES ON DATABASE <dev db created above> TO <user created above>;
    GRANT ALL PRIVILEGES ON DATABASE <test db created above> TO <user created above>;

    -- run commands in teminal
    ---- * `npm run migration:run`
    ---- * `npm run test`

    -- to solve a problem with ids after deleting all rows
    ALTER SEQUENCE <table_name>_id_seq RESTART WITH 1;
```

## Commands to run

0. `npm i` to install dependencies
1. `npm run build` to only build the API JS file
2. `npm run start` to build JS files and run the server
3. `npm run dev` to start server without building JS files
4. `npm run migration:run` to migrate up sql files on dev db
5. `npm run test` to build JS files, unit test the API and migrate up sql files on testing db 
