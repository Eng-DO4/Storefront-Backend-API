import { Router } from 'express';
import * as controllers from '../../handlers/orders.controllers';

const routes = Router();

routes.get('/', controllers.index);
routes.get('/:order_id', controllers.show);
routes.get('/active', controllers.indexActive);
routes.get('/active/:order_id', controllers.showActive);
routes.get('/complete', controllers.indexComplete);
routes.get('/complete/:order_id', controllers.showComplete);

export default routes;
