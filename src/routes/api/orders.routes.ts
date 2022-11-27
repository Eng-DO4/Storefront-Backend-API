import { Router } from "express";
import * as controllers from '../../handlers/orders.controllers'

const routes = Router();

routes.get('/', controllers.index);

export default routes;
