-- delete data added for testing
DELETE FROM prods WHERE id=3;
ALTER SEQUENCE prods_id_seq RESTART WITH 3;
DELETE FROM prods WHERE id=2;
ALTER SEQUENCE prods_id_seq RESTART WITH 2;
DELETE FROM prods WHERE id=1;
ALTER SEQUENCE prods_id_seq RESTART WITH 1;

-- delete table
DROP TABLE IF EXISTS prods CASCADE;