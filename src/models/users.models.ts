import pool from '../database';
import bcrypt from 'bcrypt';
import config from '../config';

export type User = {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export class Hashing {
  hashPass(pass: string): string {
    const salt = +(config.salt as string);
    return bcrypt.hashSync(`${pass}${config.pepper}`, salt);
  }

  isValid(pass: string, hashedPass: string): boolean {
    return bcrypt.compareSync(this.hashPass(pass), hashedPass);
  }
}

const Hash = new Hashing();

export class UserModel {
  async createUser(myUser: User): Promise<User[]> {
    try {
      const conn = await pool.connect();
      const sql = `INSERT INTO users (firstname, lastname, email, password) 
      VALUES ($1, $2, $3, $4) RETURNING *;`;
      const res = await conn.query(sql, [
        myUser.firstname,
        myUser.lastname,
        myUser.email,
        Hash.hashPass(myUser.password)
      ]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Cannot create a user: ${error}`);
    }
  }

  async readUsers(): Promise<User[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM users;`;
      const res = await conn.query(sql);
      conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(`Cannot get users: ${error}`);
    }
  }

  async readUser(userID: number): Promise<User[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM users WHERE id=$1;`;
      const res = await conn.query(sql, [userID]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Cannot read user's data: ${error}`);
    }
  }

  async updateUser(userID: number, myUser: User): Promise<User[]> {
    try {
      const conn = await pool.connect();
      const sql = `UPDATE users SET firstname=$2, lastname=$3, email=$4, password=$5 
      WHERE id=$1 RETURNING *;`;
      const res = await conn.query(sql, [
        userID,
        myUser.firstname,
        myUser.lastname,
        myUser.email,
        Hash.hashPass(myUser.password)
      ]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Cannot change user's data: ${error}`);
    }
  }

  async deleteUser(userID: number): Promise<User[]> {
    try {
      const conn = await pool.connect();
      let sql = `SELECT * FROM users WHERE id=$1;`;
      const res = await conn.query(sql, [userID]);
      const deleted = res.rows[0];
      sql = `DELETE FROM users WHERE id=$1;`;
      await conn.query(sql, [userID]);
      conn.release();
      return deleted;
    } catch (error) {
      throw new Error(`Cannot delete user: ${error}`);
    }
  }

  async authenticate(email: string, pass: string): Promise<User | null> {
    try {
      const conn = await pool.connect();
      let sql = `SELECT password FROM users WHERE email=$1;`;
      let res = await conn.query(sql, [email]);
      if (res.rows.length) {
        const { pass: hashedPass } = res.rows[0];
        if (Hash.isValid(pass, hashedPass)) {
          sql = `SELECT * FROM users WHERE email=$1`;
          res = await conn.query(sql, [email]);
          conn.release();
          return res.rows[0];
        }
      }
      conn.release();
      return null;
    } catch (error) {
      throw new Error(`Not authenticated: ${error}`);
    }
  }
}
