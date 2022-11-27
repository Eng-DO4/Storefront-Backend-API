import pool from "../database";
import Orders from "../types/orders.types";

class OrderModel {
    async readOrders(): Promise<Orders[]> {
        const conn = await pool.connect();
        const sql = `SELECT * FROM orders`;
        const res = await conn.query(sql);
        conn.release();
        return res.rows;
    }

    async readActiveOrders(): Promise<Orders[]> {
        const conn = await pool.connect();
        const sql = `SELECT * FROM orders WHERE status='active'`;
        const res = await conn.query(sql);
        conn.release();
        return res.rows;
    }

    async readCompleteOrders(): Promise<Orders[]> {
        const conn = await pool.connect();
        const sql = `SELECT * FROM orders WHERE status='complete'`;
        const res = await conn.query(sql);
        conn.release();
        return res.rows;
    }

    
}

export default OrderModel;