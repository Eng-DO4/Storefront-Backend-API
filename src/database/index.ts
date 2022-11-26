import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
  host: config.host,
  database: config.db,
  port: +(config.dbPort as string),
  user: config.user,
  password: config.pass
});

export default pool;
