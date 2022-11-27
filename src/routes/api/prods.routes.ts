import { Router } from 'express';
import * as controllers from '../../handlers/prods.controllers';

const routes = Router();

routes.get('/', controllers.index);
routes.get('/id/:id', controllers.show_byID);
routes.get('/cat/:category', controllers.show_byCategory);
routes.delete('/:id', controllers.del);
routes.patch('/:id', controllers.update);
routes.post('/', controllers.create);

export default routes;
