import app from "../..";
import supertest from "supertest";

const req = supertest(app);

describe ('testing some orders routes', () => {
    it ('main endpoint for orders', async () => {
        await req.get('/api/orders').expect(200)
    });
    it ('main endpoint for current orders', async () => {
        await req.get('/api/orders/active').expect(200)
    });
    it ('main endpoint for complete orders', async () => {
        await req.get('/api/orders/complete').expect(200)
    });
});