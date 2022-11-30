-- create table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE,
    password VARCHAR NOT NULL
);

-- adding some data to test
INSERT INTO users (firstname, lastname, email, password) VALUES ('child1', 'parent1', 'child.parent1@m.com', 'pass123');
INSERT INTO users (firstname, lastname, email, password) VALUES ('child2', 'parent2', 'child.parent2@m.com', 'pass123');
