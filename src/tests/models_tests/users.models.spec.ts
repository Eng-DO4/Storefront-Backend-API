import { User, UserModel } from '../../models/users.models';

const user = new UserModel();

describe ('users methods', () => {
    // reassuring that there is CRUD Models
    it('should have an index method', () => {
        expect(user.readUsers).toBeDefined();
    });
    it('should have a read-by-id method', () => {
        expect(user.readUser).toBeDefined();
    });
    it('should have a create method', () => {
        expect(user.createUser).toBeDefined();
    });
    it('should have an update method', () => {
        expect(user.updateUser).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(user.deleteUser).toBeDefined();
    });
    it('should have an authenticate method', () => {
        expect(user.authenticate).toBeDefined();
    });
});

describe ('users models', () => {
    it('create method returns the data of the first created user', async () => {
        const test_user: User = {
            firstname: 'child1',
            lastname: 'parent1',
            email: 'child1@parent1.com',
            password: 'pass123'
        };
        const res = await user.createUser(test_user);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('create method returns the data of the second created user', async () => {
        const test_user: User = {
            firstname: 'child2',
            lastname: 'parent2',
            email: 'child2@parent2.com',
            password: 'pass123'
        };
        const res = await user.createUser(test_user);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('index method returns a list of users', async() => {
        const res = await user.readUsers();
        expect(res[0].id).toBeGreaterThan(0);
        expect(res[1].id).toBeGreaterThan(1);
    });
    it('show method returns the data of selected user', async () => {
        const res = await user.readUser(1);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('update method returns the updated data for the user', async () => {
        const test_user: User = {
            firstname: 'child3',
            lastname: 'parent3',
            email: 'child3@parent3.com',
            password: 'pass123'
        };
        const res = await user.updateUser(2, test_user);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('delete method returns the data of the deleted user', async () => {
        const res = await user.deleteUser(2);
        expect((Object.keys(res))[0]).toEqual('id');
    });
});