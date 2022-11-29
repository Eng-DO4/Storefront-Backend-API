import { Request, Response } from 'express';
import { ProdModel } from '../models/prods.models';

const Prod = new ProdModel();

export const index = async (_req: Request, res: Response) => {
  const prods = await Prod.readProds();
  res.json({
    data: { ...prods }
  });
};

export const del = async (req: Request, res: Response) => {
  const id = +req.params.id;
  if (!Number.isNaN(id)) {
    await Prod.deleteProd(id);
    res.json({
      message: 'deleted successfully'
    });
  } else {
    res.send('error input a number');
  }
};

export const show_byID = async (req: Request, res: Response) => {
  const id = +req.params.id;
  if (!Number.isNaN(id)) {
    const prod = await Prod.readProd_byID(id);
    res.json({
      data: { ...prod }
    });
  } else {
    res.send('error input a number');
  }
};

export const show_byCategory = async (req: Request, res: Response) => {
  const category = req.params.category;
  if (category !== undefined) {
    const prods = await Prod.readProd_byCategory(category);
    res.json({
      data: { ...prods }
    });
  } else {
    res.send('error input a valid category');
  }
};

export const create = async (req: Request, res: Response) => {
  if (req.body !== undefined) {
    const prod = await Prod.createProd(req.body);
    res.json({
      message: 'product created successfuly',
      data: { ...prod }
    });
  } else {
    res.send('no body content');
  }
};

export const update = async (req: Request, res: Response) => {
  const id = +req.params.id;
  if (!Number.isNaN(id)) {
    if (req.body !== undefined) {
      const prod = await Prod.updateProd(id, req.body);
      res.json({
        message: 'product updated successfuly',
        data: { ...prod }
      });
    } else {
      res.send('no body content');
    }
  } else {
    res.send('error input a number');
  }
};
