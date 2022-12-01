import app from "../..";
import supertest from "supertest";

const req = supertest(app);

describe ('testing some products routes', () => {
    it('endpoint to get all products', async () => {
        await req.get('/api/prods').expect(200);
    });
    it('endpoint to read a product by its id', async () => {
        await req.get('/api/prods/1').expect(404);
        await req.get('/api/prods/id').expect(404);
        await req.get('/api/prods/id/1').expect(200);
    });
    it('endpoint to read a product by its category', async () => {
        await req.get('/api/prods/cat1').expect(404);
        await req.get('/api/prods/cat').expect(404);
        await req.get('/api/prods/cat/cat2').expect(200);
    });
    it('endpoint to delete a product', async () => {
        await req.delete('/api/prods/3').expect(200);
    })
});