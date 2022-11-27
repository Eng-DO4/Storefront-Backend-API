# Storefront-Backend-API

2nd Project on APIs for Udacity nano degree course "Advanced Full-Stack Web Development".

The project is for designing database relation and securing users sensitive data in a storefront API.

## .env

Before all, create a ".env" file in the root directory and use these examples
```
    NODE_ENV=dev
    PG_PORT=5432
    PG_HOST=localhost
    PG_DB=dev
    PG_DB_TEST=test
    PG_USER=postgres
    PG_PASS=postgres123
```

## Commands to run

0. `npm i` to install dependencies
1. `npm run build` to only build the API JS file
2. `npm run start` to build JS files and run the server
3. `npm run migration:run` to run all migration up sqls [you need to check the 'SQL_REF.sql' file]
