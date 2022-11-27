-- create table
CREATE TABLE IF NOT EXISTS prods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL NOT NULL,
    category VARCHAR(50),
    description TEXT
);