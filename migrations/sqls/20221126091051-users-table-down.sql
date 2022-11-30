-- delete data added for testing
DELETE FROM users WHERE id=2;
ALTER SEQUENCE users_id_seq RESTART WITH 2;
DELETE FROM users WHERE id=1;
ALTER SEQUENCE users_id_seq RESTART WITH 1;

-- delete table
DROP TABLE IF EXISTS users CASCADE;
