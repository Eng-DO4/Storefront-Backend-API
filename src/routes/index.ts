import { Router } from 'express';
import usersRoutes from './api/users.routes';
import prodsRoutes from './api/prods.routes';
import ordersRoutes from './api/orders.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/prods', prodsRoutes);
routes.use('/orders', ordersRoutes);

export default routes;
