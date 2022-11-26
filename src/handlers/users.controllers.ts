import { Request, Response } from "express";
import UserModel from "../models/users.models";

const User = new UserModel();

export const index = async (_req: Request, res: Response) => {
    const users = User.readUsers();
    res.send(users)
}