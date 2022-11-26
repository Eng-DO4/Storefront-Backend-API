-- create table
CREATE TABLE prods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price decimal NOT NULL,
    category VARCHAR(50),
    description text
);