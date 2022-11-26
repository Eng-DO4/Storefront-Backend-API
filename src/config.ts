import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  NODE_ENV,
  PG_HOST,
  PG_PORT,
  PG_DB,
  PG_BD_TEST,
  PG_USER,
  PG_PASS
} = process.env;

export default {
  port: PORT,
  host: PG_HOST,
  dbPort: PG_PORT,
  db: NODE_ENV === 'dev' ? PG_DB : PG_BD_TEST,
  user: PG_USER,
  pass: PG_PASS
};
