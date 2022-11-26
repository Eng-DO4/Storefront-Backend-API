-- create table
CREATE TABLE ordered_prods (
    id SERIAL PRIMARY KEY,
    order_id bigint REFERENCES orders(id),
    prod_id bigint REFERENCES prods(id),
    quantity integer
);