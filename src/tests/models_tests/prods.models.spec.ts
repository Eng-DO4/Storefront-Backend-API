import { Prod, ProdModel} from '../../models/prods.models';

const user = new ProdModel();

describe ('products model', () => {
    // reassuring that there is CRUD Models
    it('should have an index method', () => {
        expect(user.readProds).toBeDefined();
    });
    it('should have a read-by-id method', () => {
        expect(user.readProd_byID).toBeDefined();
    });
    it('should have a read-by-category method', () => {
        expect(user.readProd_byID).toBeDefined();
    });
    it('should have a create method', () => {
        expect(user.createProd).toBeDefined();
    });
    it('should have an update method', () => {
        expect(user.updateProd).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(user.deleteProd).toBeDefined();
    });
})