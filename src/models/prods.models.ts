import pool from '../database';

export type Prod = {
  id?: number;
  name: string;
  price: number;
  category: string;
  description: string;
};

export class ProdModel {
  async createProd(myProd: Prod): Promise<Prod[]> {
    try {
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
    } catch (error) {
      throw new Error(`Cannot create the product: ${error}`);
    }
  }

  async readProds(): Promise<Prod[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM prods;`;
      const res = await conn.query(sql);
      conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(`Cannot list products: ${error}`);
    }
  }

  async readProd_byID(prodID: number): Promise<Prod[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM prods WHERE id=$1;`;
      const res = await conn.query(sql, [prodID]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Cannot read this product: ${error}`);
    }
  }

  async readProd_byCategory(prodCat: string): Promise<Prod[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM prods WHERE category=$1;`;
      const res = await conn.query(sql, [prodCat]);
      conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(`Cannot read this product: ${error}`);
    }
  }

  async updateProd(prodID: number, myProd: Prod): Promise<Prod[]> {
    try {
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
    } catch (error) {
      throw new Error(`Cannot update this product: ${error}`);
    }
  }

  async deleteProd(prodID: number): Promise<Prod[]> {
    try {
      const conn = await pool.connect();
      let sql = `SELECT * FROM prods WHERE id=$1;`;
      let res = await conn.query(sql, [prodID]);
      const deleted = res.rows[0];
      sql = `DELETE FROM prods WHERE id=$1;`;
      await conn.query(sql, [prodID]);
      conn.release();
      return deleted;
    } catch (error) {
      throw new Error(`Cannot delete this product: ${error}`);
    }
  }
}
