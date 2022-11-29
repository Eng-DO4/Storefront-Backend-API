import { User, UserModel, Hashing} from '../../models/users.models';

const user = new UserModel();

describe ('users model', () => {
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
})