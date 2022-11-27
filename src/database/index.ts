import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
  port: +(config.dbPort as string),
  host: config.host,
  database: config.db,
  user: config.user,
  password: config.pass
});

export default pool;
