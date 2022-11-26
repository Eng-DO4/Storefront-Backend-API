import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  PG_HOST,
  PG_DB,
  PG_USER,
  PG_PASS
} = process.env;

export default {
  host: PG_HOST,
  db: PG_DB,
  user: PG_USER,
  pass: PG_PASS
};
