import { Request, Response } from 'express';
import OrderModel from '../models/orders.models';

const Order = new OrderModel();

export const index = async (_req: Request, res: Response) => {
  const orders = await Order.readOrders();
  res.json({
    data: { ...orders }
  });
};

export const indexActive = async (_req: Request, res: Response) => {
  const orders = await Order.readActiveOrders();
  res.json({
    data: { ...orders }
  });
};

export const indexComplete = async (_req: Request, res: Response) => {
  const orders = await Order.readCompleteOrders();
  res.json({
    data: { ...orders }
  });
};


export const show = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      const orders = await Order.showOrders(id);
      res.json({
        data: { ...orders }
      });
    } else {
      res.send('error input a number');
    }
};

export const showActive = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      const orders = await Order.showActiveOrders(id);
      res.json({
        data: { ...orders }
      });
    } else {
      res.send('error input a number');
    }
};

export const showComplete = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      const orders = await Order.showCompleteOrders(id);
      res.json({
        data: { ...orders }
      });
    } else {
      res.send('error input a number');
    }
};