import { Router } from 'express';
import * as controllers from '../../handlers/prods.controllers';

const routes = Router();

routes.post('/', controllers.create);
routes.get('/', controllers.index);
routes.get('/id/:id', controllers.show_byID);
routes.get('/cat/:category', controllers.show_byCategory);
routes.patch('/:id', controllers.update);
routes.delete('/:id', controllers.del);

export default routes;
