-- create table
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'active'
);

-- adding some data for testing
INSERT INTO orders (user_id, status) VALUES (1, 'complete');
INSERT INTO orders (user_id, status) VALUES (2, 'complete');
INSERT INTO orders (user_id, status) VALUES (1, 'active');
INSERT INTO orders (user_id, status) VALUES (2, 'active');
