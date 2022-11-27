import { Router } from "express";
import * as controllers from '../../handlers/orders.controllers'

const routes = Router();

routes.get('/', controllers.index);
routes.get('/active', controllers.indexActive);
routes.get('/complete', controllers.indexComplete);

export default routes;
