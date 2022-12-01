import { Request, Response } from 'express';
import { OrderModel } from '../models/orders.models';

const Order = new OrderModel();

export const create = async (req: Request, res: Response) => {
  try {
    if (req.body !== undefined) {
      const order = await Order.createOrder(req.body);
      res.status(200).json({
        message: 'order created successfully',
        data: { ...order }
      });
    } else {
      res.status(400).send('no body content');
    }
  } catch (error) {
    res.status(400).send(`Cannot create this order: ${error}`);
  }
};

export const indexAll = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.readOrders();
    res.status(200).json({
      message: "This is a list of orders",
      data: { ...orders }
    });
  } catch (error) {
    res.status(400).send(`Cannot index orders ${error}`)
  }
};

export const indexActive = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.readActiveOrders();
    res.status(200).json({
      message: "This is a list of active orders",
      data: { ...orders }
    });
  } catch (error) {
    res.status(400).send(`Cannot index active orders: ${error}`)
  }
};

export const indexComplete = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.readCompleteOrders();
    res.status(200).json({
      message: "This is a list of complete orders",
      data: { ...orders }
    });
  } catch (error) {
    res.status(200).send(`Cannot index complete orders: ${error}`)
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      const order = await Order.showOrder(id);
      res.status(200).json({
        message: "This is the data for this order",
        data: { ...order }
      });
    } else {
      res.status(400).send('error input a number');
    }
  } catch (error) {
    res.status(400).send(`Cannot read this order's data: ${error}`);
  }
};

export const showActive = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      const order = await Order.showActiveOrder(id);
      res.status(200).json({
        message: "This is the data for this active order",
        data: { ...order }
      });
    } else {
      res.status(400).send('error input a number');
    }
  } catch (error) {
    res.status(400).send(`Cannot read an active order's data related to this id: ${error}`);
  }
};

export const showComplete = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      const order = await Order.showCompleteOrder(id);
      res.status(200).json({
        message: "This is the data for this complete order",
        data: { ...order }
      });
    } else {
      res.status(400).send('error input a number');
    }
  } catch (error) {
    res.status(400).send(`Cannot read a complete order's data related to this id: ${error}`)
  }
};
