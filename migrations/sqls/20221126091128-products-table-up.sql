-- create table
CREATE TABLE IF NOT EXISTS prods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL NOT NULL,
    category VARCHAR(50),
    description TEXT
);

-- adding some data for testing
INSERT INTO prods (name, price, category, description) VALUES ('prod1', 10, 'cat1', 'prod1 from cat1');
INSERT INTO prods (name, price, category, description) VALUES ('prod2', 13, 'cat1', 'prod2 from cat1');
INSERT INTO prods (name, price, category, description) VALUES ('prod3', 18, 'cat2', 'prod3 from cat2');
