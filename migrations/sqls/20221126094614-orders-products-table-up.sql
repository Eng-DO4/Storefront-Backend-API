-- create table
CREATE TABLE IF NOT EXISTS ordered_prods (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    prod_id INTEGER REFERENCES prods(id),
    quantity INTEGER
);