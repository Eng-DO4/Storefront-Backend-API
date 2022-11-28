import pool from "../database";
import { Orders_users, Orders_prods } from "../types/orders.types";

class OrderModel {
    async readOrders(): Promise<Orders_users[]> {
        const conn = await pool.connect();
        const sql = `SELECT * FROM orders`;
        const res = await conn.query(sql);
        conn.release();
        return res.rows;
    }

    async readActiveOrders(): Promise<Orders_users[]> {
        const conn = await pool.connect();
        const sql = `SELECT * FROM orders WHERE status='active';`;
        const res = await conn.query(sql);
        conn.release();
        return res.rows;
    }

    async readCompleteOrders(): Promise<Orders_users[]> {
        const conn = await pool.connect();
        const sql = `SELECT * FROM orders WHERE status='complete';`;
        const res = await conn.query(sql);
        conn.release();
        return res.rows;
    }

    async showOrders(orderID: number): Promise<Orders_users[]> {
        const conn = await pool.connect();
        const sql = `SELECT * FROM orders WHERE id=$1;`;
        const res = await conn.query(sql, [orderID]);
        conn.release();
        return res.rows[0];
    }

    async showActiveOrders(orderID: number): Promise<Orders_users[]> {
        const conn = await pool.connect();
        const sql = `SELECT * FROM orders WHERE id=$1 AND status='active';`;
        const res = await conn.query(sql, [orderID]);
        conn.release();
        return res.rows[0];
    }

    async showCompleteOrders(orderID: number): Promise<Orders_users[]> {
        const conn = await pool.connect();
        const sql = `SELECT * FROM orders WHERE id=$1 AND status='complete';`;
        const res = await conn.query(sql, [orderID]);
        conn.release();
        return res.rows[0];
    }
}

export default OrderModel;