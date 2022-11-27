import { Router, Request, Response } from 'express';
import * as controllers from '../../handlers/users.controllers';

const routes = Router();

routes.get('/', controllers.index);
routes.delete('/:id', controllers.del);
routes.get('/:id', controllers.show);
routes.post('/', controllers.create);
routes.patch('/', controllers.update);

export default routes;
