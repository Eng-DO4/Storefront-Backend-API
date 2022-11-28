import { Request, Response } from 'express';
import UserModel from '../models/users.models';

const User = new UserModel();

export const index = async (_req: Request, res: Response) => {
  const users = await User.readUsers();
  res.json({
    data: { ...users }
  });
};

export const del = async (req: Request, res: Response) => {
  const id = +req.params.id;
  if (!Number.isNaN(id)) {
    await User.deleteUser(id);
    res.json({
      message: 'deleted successfully'
    });
  } else {
    res.send('error input a number');
  }
};

export const show = async (req: Request, res: Response) => {
  const id = +req.params.id;
  if (!Number.isNaN(id)) {
    const user = await User.readUser(id);
    res.json({
      data: { ...user }
    });
  } else {
    res.send('error input a number');
  }
};

export const create = async (req: Request, res: Response) => {
  if (req.body !== undefined) {
    const user = await User.createUser(req.body);
    res.json({
      message: 'user created successfuly',
      data: { ...user }
    });
  } else {
    res.send('no body content');
  }
};

export const update = async (req: Request, res: Response) => {
  const id = +req.params.id;
  if (!Number.isNaN(id)) {
    if (req.body !== undefined) {
      const user = await User.updateUser(id, req.body);
      res.json({
        message: 'user updated successfuly',
        data: { ...user }
      });
    } else {
      res.send('no body content');
    }
  } else {
    res.send('error input a number');
  }
};

export const auth = async (req:Request, res:Response) => {
  if (req.body !== undefined) {
    console.log(req.body)
    const {email: mail, password: pass} = req.body
    const user = await User.authenticate(mail as string, pass as string);
    res.json({
      data: { ...user }
    });
  } else {
    res.send('no body content');
  }
};
