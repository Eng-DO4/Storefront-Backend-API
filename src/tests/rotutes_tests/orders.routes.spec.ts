import app from "../..";
import supertest from "supertest";

const req = supertest(app);

describe ('testing some orders routes', () => {
    it ('endpoint get all orders', async () => {
        await req.get('/api/orders').expect(200);
    });
    it ('endpoint to get all active orders', async () => {
        await req.get('/api/orders/active').expect(200);
    });
    it ('endpoint to get all complete orders', async () => {
        await req.get('/api/orders/complete').expect(200);
    });
});