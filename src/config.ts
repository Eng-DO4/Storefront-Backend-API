import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV, PG_PORT, PG_HOST, PG_DB, PG_DB_TEST, PG_USER, PG_PASS } =
  process.env;

export default {
  host: PG_HOST,
  dbPort: PG_PORT,
  db: NODE_ENV === 'dev' ? PG_DB : PG_DB_TEST,
  user: PG_USER,
  pass: PG_PASS
};
