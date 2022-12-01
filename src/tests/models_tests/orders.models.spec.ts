import { OrderModel, Order } from '../../models/orders.models';

const order = new OrderModel();

describe ('orders methods', () => {
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
    it('should have a read-by-id method to order', () => {
        expect(order.showOrder).toBeDefined();
    });
    it('should have a read-by-id method iff active order', () => {
        expect(order.showActiveOrder).toBeDefined();
    });
    it('should have a read-by-id method iff complete order', () => {
        expect(order.showCompleteOrder).toBeDefined();
    });
})

describe ('orders models', () => {
    it('create method returns the data of the first created order', async () => {
        const test_order: Order = {
            userID: 1,
            status: 'active',
        };
        const res = await order.createOrder(test_order);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('create method returns the data of the second created order', async () => {
        const test_order: Order = {
            userID: 1,
            status: 'complete',
        };
        const res = await order.createOrder(test_order);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('create method returns the data of the third created order', async () => {
        const test_order: Order = {
            userID: 2,
            status: 'active',
        };
        const res = await order.createOrder(test_order);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('create method returns the data of the forth created order', async () => {
        const test_order: Order = {
            userID: 2,
            status: 'complete',
        };
        const res = await order.createOrder(test_order);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('index method returns a list of orders', async() => {
        const res = await order.readOrders();
        expect(res[0].id).toBeGreaterThan(0);
        expect(res[1].id).toBeGreaterThan(1);
        expect(res[2].id).toBeGreaterThan(2);
        expect(res[3].id).toBeGreaterThan(3);
    });
    it('index method returns a list of active orders', async() => {
        const res = await order.readActiveOrders();
        expect(res[0].id).toBeGreaterThan(0);
        expect(res[1].id).toBeGreaterThan(2);
    });
    it('index method returns a list of complete orders', async() => {
        const res = await order.readCompleteOrders();
        expect(res[0].id).toBeGreaterThan(1);
        expect(res[1].id).toBeGreaterThan(3);
    });
    it('show method returns the data of selected-by-id order', async () => {
        const res = await order.showOrder(1);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('show method returns the data of selected-by-id order iff active', async () => {
        let res = await order.showActiveOrder(1);
        expect((Object.keys(res))[0]).toEqual('id');
        res = await order.showActiveOrder(3);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('show method returns the data of selected-by-id order iff complete', async () => {
        let res = await order.showCompleteOrder(2);
        expect((Object.keys(res))[0]).toEqual('id');
        res = await order.showCompleteOrder(4);
        expect((Object.keys(res))[0]).toEqual('id');
    });
});
