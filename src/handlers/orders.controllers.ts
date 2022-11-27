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
