import { Router } from 'express';
import * as controllers from '../../handlers/users.controllers';

const routes = Router();

routes.post('/', controllers.create);
routes.get('/', controllers.index);
routes.get('/:id', controllers.show);
routes.patch('/:id', controllers.update);
routes.delete('/:id', controllers.del);
routes.post('/auth', controllers.auth);

export default routes;
