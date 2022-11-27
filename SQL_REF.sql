-- Login to PSQL as postgres user
psql -U postgres

-- Create 2 databases
CREATE DATABASE dev;
CREATE DATABASE test;

-- Connect to the test database
\c test;

-- run commands in teminal
---- * `npm run migration:run`
---- * `npm run dbtest`

-- to solve a problem with ids after deleting
ALTER SEQUENCE <table_name>_id_seq RESTART WITH 1;