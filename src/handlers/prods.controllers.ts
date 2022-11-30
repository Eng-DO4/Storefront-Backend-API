import { Request, Response } from 'express';
import { ProdModel } from '../models/prods.models';

const Prod = new ProdModel();

export const create = async (req: Request, res: Response) => {
  try {
    if (req.body !== undefined) {
      const prod = await Prod.createProd(req.body);
      res.status(200).json({
        message: 'product created successfully',
        data: { ...prod }
      });
    } else {
      res.status(400).send('no body content');
    }
  } catch (error) {
    res.status(400).send(`Cannot create this product: ${error}`);
  }
};

export const index = async (_req: Request, res: Response) => {
  try {
    const prods = await Prod.readProds();
    res.status(200).json({
      message: "this is a list of products",
      data: { ...prods }
    });
  } catch (error) {
    res.status(400).send(`Cannot index products: ${error}`)
  }
};

export const show_byID = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      const prod = await Prod.readProd_byID(id);
      res.status(200).json({
        message: "this is the data of this product",
        data: { ...prod }
      });
    } else {
      res.status(400).send('error input a number');
    }
  } catch (error) {
    res.status(400).send(`Cannot show product's data by this id: ${error}`)
  }
};

export const show_byCategory = async (req: Request, res: Response) => {
  try {
    const category = req.params.category;
    if (category !== undefined) {
      const prods = await Prod.readProd_byCategory(category);
      res.status(200).json({
        message: "This is the data of this product",
        data: { ...prods }
      });
    } else {
      res.send('error input an existing category');
    }
  } catch (error) {
    res.status(400).send(`Cannot show products' data related to this category: ${error}`)
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      if (req.body !== undefined) {
        const prod = await Prod.updateProd(id, req.body);
        res.status(200).json({
          message: 'product updated successfuly',
          data: { ...prod }
        });
      } else {
        res.status(400).send('no body content');
      }
    } else {
      res.status(400).send('error input a number');
    }
  } catch (error) {
    res.status(400).send(`Cannot update this product's data: ${error}`)
  }
};

export const del = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      const prod = await Prod.deleteProd(id);
      res.status(200).json({
        message: 'deleted successfully',
        data: { ...prod }
      });
    } else {
      res.status(400).send('error input a number');
    }
  } catch (error) {
    res.status(400).send(`Cannot delete this product: ${error}`)
  }
};
