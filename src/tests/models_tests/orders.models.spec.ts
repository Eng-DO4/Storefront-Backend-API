import { Orders_users, OrderModel} from '../../models/orders.models';

const order = new OrderModel();

describe ('orderss model', () => {
    // reassuring that there is CRUD Models
    it('should have an index method', () => {
        expect(order.readOrders).toBeDefined();
    });
    it('should have an index method to only active orders', () => {
        expect(order.readActiveOrders).toBeDefined();
    });
    it('should have an index method to only complete orders', () => {
        expect(order.readCompleteOrders).toBeDefined();
    });
    it('should have a read method to orders of a user', () => {
        expect(order.showOrders).toBeDefined();
    });
    it('should have a read method to only active orders of a user', () => {
        expect(order.showActiveOrders).toBeDefined();
    });
    it('should have a read method to only complete orders of a user', () => {
        expect(order.showCompleteOrders).toBeDefined();
    });
})