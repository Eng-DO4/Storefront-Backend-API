import app from "../..";
import supertest from "supertest";

const req = supertest(app);

describe ('testing some products routes', () => {
    it ('main endpoint for products', async () => {
        await req.get('/api/prods').expect(200)
    });
    it ('endpoint to get a product by its id', async () => {
        await req.get('/api/prods/1').expect(404)
    });
    it ('endpoint to get a product by its category', async () => {
        await req.get('/api/prods/cat1').expect(404)
    });
    it ('endpoint to read a product by its id', async () => {
        await req.get('/api/prods/id').expect(404)
    });
    it ('endpoint to read a product by its category', async () => {
        await req.get('/api/prods/cat').expect(404)
    });
});