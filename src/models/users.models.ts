import db from '../database';
import User from '../types/users.types';

class UserModel {
  async createUser(myUser: User): Promise<User[]> {
    const conn = await db.connect();
    const sql = `INSERT INTO users (firstname, lastname, email, password) 
    VALUES ($1, $2, $3, $4) RETURNING *;`;
    const res = await conn.query(sql, [
      myUser.firstname,
      myUser.lastname,
      myUser.email,
      myUser.password
    ]);
    conn.release();
    return res.rows[0];
  }

  async readUsers() {
    const conn = await db.connect();
    const sql = `SELECT id, firstname, lastname FROM users;`;
    const res = await conn.query(sql);
    conn.release();
    return res.rows;
  }

  async readUser(userID: number): Promise<User[]> {
    const conn = await db.connect();
    const sql = `SELECT id, firstname, lastname FROM users WHERE id=$1;`;
    const res = await conn.query(sql, [userID]);
    conn.release();
    return res.rows[0];
  }

  async deleteUser(userID: number): Promise<void> {
    const conn = await db.connect();
    const sql = `DELETE FROM users WHERE id=$1;`;
    await conn.query(sql, [userID]);
    conn.release();
  }

  async updateUser(myUser: User): Promise<User[]> {
    const conn = await db.connect();
    const sql = `UPDATE users SET firstname=$2, lastname=$3, email=$4, password=$5 
    WHERE id=$1 RETURNING *;`;
    const res = await conn.query(sql, [
      myUser.id,
      myUser.firstname,
      myUser.lastname,
      myUser.email,
      myUser.password
    ]);
    conn.release();
    return res.rows[0];
  }
}

export default UserModel;
