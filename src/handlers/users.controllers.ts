import { Request, Response } from 'express';
import { UserModel } from '../models/users.models';

const User = new UserModel();

export const create = async (req: Request, res: Response) => {
  try {
    if (req.body !== undefined) {
      const user = await User.createUser(req.body);
      res.status(200).json({
        message: 'user created successfully',
        data: { ...user }
      });
    } else {
      res.status(400).send('no body content');
    }
  } catch (error) {
    res.status(400).send(`Cannot create this user: ${error}`)
  }
};

export const index = async (_req: Request, res: Response) => {
  try {
    const users = await User.readUsers();
    res.status(200).json({
      message: 'this is a list of users',
      data: { ...users }
    });
  } catch (error) {
    res.status(400).send(`Cannot index users: ${error}`);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      const user = await User.readUser(id);
      res.status(200).json({
        message: 'this is the data of this user',
        data: { ...user }
      });
    } else {
      res.status(400).send('error input a number');
    }
  } catch (error) {
    res.status(400).send(`Cannot show this user's data: ${error}`)
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      if (req.body !== undefined) {
        const user = await User.updateUser(id, req.body);
        res.status(200).json({
          message: 'user updated successfully',
          data: { ...user }
        });
      } else {
        res.status(400).send('no body content');
      }
    } else {
      res.status(400).send('error input a numerical value for id');
    }
  } catch (error) {
    res.status(400).send(`Cannot update this user's data: ${error}`)
  }
};

export const del = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    if (!Number.isNaN(id)) {
      const user = await User.deleteUser(id);
      res.json({
        message: 'deleted successfully',
        data: { ...user }
      });
    } else {
      res.send('error input a number');
    }
  } catch (error) {
    res.status(400).send(`Cannot delete this user: ${error}`);
  }
};

export const auth = async (req: Request, res: Response) => {
  try {
    if (req.body !== undefined) {
      console.log(req.body);
      const { email: mail, password: pass } = req.body;
      const user = await User.authenticate(mail as string, pass as string);
      res.status(200).json({
        message: 'Successfuully authenticated',
        data: { ...user }
      });
    } else {
      res.status(400).send('no body content');
    }
  } catch (error) {
    res.status(400).send(`Cannot authenticate this user: ${error}`);
  }
};
