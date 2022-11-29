import pool from '../database';

export type Orders_prods = {
  id?: number;
  orderID: number;
  prodID: number;
  quantity: number;
};

export type Orders_users = {
  userID: number;
  orderID: number;
  status: string;
};

export class OrderModel {
  async readOrders(): Promise<Orders_users[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM orders`;
      const res = await conn.query(sql);
      conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(`Cannot read orders ${error}`);
    }
  }

  async readActiveOrders(): Promise<Orders_users[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM orders WHERE status='active';`;
      const res = await conn.query(sql);
      conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(`Cannot Read orders ${error}`);
    }
  }

  async readCompleteOrders(): Promise<Orders_users[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM orders WHERE status='complete';`;
      const res = await conn.query(sql);
      conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(`Cannot read orders ${error}`);
    }
  }

  async showOrders(orderID: number): Promise<Orders_users[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM orders WHERE id=$1;`;
      const res = await conn.query(sql, [orderID]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Cannot read this order's data ${error}`);
    }
  }

  async showActiveOrders(orderID: number): Promise<Orders_users[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM orders WHERE id=$1 AND status='active';`;
      const res = await conn.query(sql, [orderID]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Cannot read this order's data ${error}`);
    }
  }

  async showCompleteOrders(orderID: number): Promise<Orders_users[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM orders WHERE id=$1 AND status='complete';`;
      const res = await conn.query(sql, [orderID]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Cannot read this order's data ${error}`);
    }
  }
}

export default OrderModel;
