import app from "../..";
import supertest from "supertest";

const req = supertest(app);

describe ('testing some users routes', () => {
    it('endpoint to get all users', async () => {
        await req.get('/api/users').expect(200)
    });
    it('endpoint to get a specific user', async () => {
        await req.get('/api/users/c').expect(400);
        await req.get('/api/users/1').expect(200);
    });
    it('endpoint to delete a user', async () => {
        await req.delete('/api/users/1').expect(200);
    });
});