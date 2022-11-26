import { Router } from "express";
import * as controllers from '../../handlers/users.controllers'

const routes = Router();

routes.get('/', controllers.index);

export default routes;