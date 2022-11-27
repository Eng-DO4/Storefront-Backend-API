import { Router } from 'express';
import * as controllers from '../../handlers/users.controllers';

const routes = Router();

routes.get('/', controllers.index);
routes.delete('/:id', controllers.del);
routes.get('/:id', controllers.show);
routes.post('/', controllers.create);
routes.patch('/:id', controllers.update);

export default routes;
