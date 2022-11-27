import pool from '../database';
import Prod from '../types/prods.types';

class ProdModel {
  async createProd(myProd: Prod): Promise<Prod[]> {
    const conn = await pool.connect();
    const sql = `INSERT INTO prods (name, price, category, description) 
    VALUES ($1, $2, $3, $4) RETURNING *;`;
    const res = await conn.query(sql, [
      myProd.name,
      myProd.price,
      myProd.category,
      myProd.description
    ]);
    conn.release();
    return res.rows[0];
  }

  async readProds(): Promise<Prod[]> {
    const conn = await pool.connect();
    const sql = `SELECT * FROM prods;`;
    const res = await conn.query(sql);
    conn.release();
    return res.rows;
  }

  async readProd_byID(prodID: number): Promise<Prod[]> {
    const conn = await pool.connect();
    const sql = `SELECT * FROM prods WHERE id=$1;`;
    const res = await conn.query(sql, [prodID]);
    conn.release();
    return res.rows[0];
  }

  async readProd_byCategory(prodCat: string): Promise<Prod[]> {
    const conn = await pool.connect();
    const sql = `SELECT * FROM prods WHERE category=$1;`;
    const res = await conn.query(sql, [prodCat]);
    conn.release();
    return res.rows;
  }

  async deleteProd(prodID: number): Promise<void> {
    const conn = await pool.connect();
    const sql = `DELETE FROM prods WHERE id=$1;`;
    await conn.query(sql, [prodID]);
    conn.release();
  }

  async updateProd(prodID: number, myProd: Prod): Promise<Prod[]> {
    const conn = await pool.connect();
    const sql = `UPDATE prods SET name=$2, price=$3, category=$4, description=$5 
    WHERE id=$1 RETURNING *;`;
    const res = await conn.query(sql, [
      prodID,
      myProd.name,
      myProd.price,
      myProd.category,
      myProd.description
    ]);
    conn.release();
    return res.rows[0];
  }
}

export default ProdModel;
