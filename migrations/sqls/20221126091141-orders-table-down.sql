-- delete added data for testing
DELETE FROM orders WHERE status='active';
ALTER SEQUENCE orders_id_seq RESTART WITH 3;
DELETE FROM orders WHERE status='complete';
ALTER SEQUENCE orders_id_seq RESTART WITH 1;

-- delete table
DROP TABLE IF EXISTS orders CASCADE;
