import app from "../..";
import supertest from "supertest";

const req = supertest(app);

describe ('testing some users routes', () => {
    it ('main endpoint for users', async () => {
        await req.get('/api/users').expect(200)
    });
});