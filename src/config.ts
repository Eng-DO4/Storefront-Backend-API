import dotenv from 'dotenv';

dotenv.config();

const { ENV, PG_PORT, PG_HOST, PG_DB, PG_DB_TEST, PG_USER, PG_PASS } =
  process.env;

export default {
  status: ENV,
  host: PG_HOST,
  dbPort: PG_PORT,
  db: PG_DB,
  dbtest: PG_DB_TEST,
  user: PG_USER,
  pass: PG_PASS
};
