import { Prod, ProdModel} from '../../models/prods.models';

const prod = new ProdModel();

describe ('products methods', () => {
    // reassuring that there is CRUD Models
    it('should have an index method', () => {
        expect(prod.readProds).toBeDefined();
    });
    it('should have a read-by-id method', () => {
        expect(prod.readProd_byID).toBeDefined();
    });
    it('should have a read-by-category method', () => {
        expect(prod.readProd_byID).toBeDefined();
    });
    it('should have a create method', () => {
        expect(prod.createProd).toBeDefined();
    });
    it('should have an update method', () => {
        expect(prod.updateProd).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(prod.deleteProd).toBeDefined();
    });
});

describe ('test products models', () => {
    it('create method returns the data of the first created product', async () => {
        const test_prod: Prod = {
            name: 'prod0',
            price: 10,
            category: 'cat1',
            description: 'prod0 from cat1'
        };
        const res = await prod.createProd(test_prod);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('create method returns the data of the second created product', async () => {
        const test_prod: Prod = {
            name: 'prod2',
            price: 20,
            category: 'cat1',
            description: 'prod2 from cat1'
        };
        const res = await prod.createProd(test_prod);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('create method returns the data of the third created product', async () => {
        const test_prod: Prod = {
            name: 'prod3',
            price: 7,
            category: 'cat2',
            description: 'prod3 from cat2'
        };
        const res = await prod.createProd(test_prod);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('create method returns the data of the forth created product', async () => {
        const test_prod: Prod = {
            name: 'prod4',
            price: 15,
            category: 'cat2',
            description: 'prod4 from cat2'
        };
        const res = await prod.createProd(test_prod);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('index method returns a list of products', async() => {
        const res = await prod.readProds();
        expect(res[0].id).toBeGreaterThan(0);
        expect(res[1].id).toBeGreaterThan(1);
        expect(res[2].id).toBeGreaterThan(2);
        expect(res[3].id).toBeGreaterThan(3);
    });
    it('show method returns the data of selected-by-id product', async () => {
        const res = await prod.readProd_byID(1);
        expect((Object.keys(res))[0]).toEqual('id');
    });
    it('show method returns the data of selected-by-category product', async () => {
        const res = await prod.readProd_byCategory('cat1');
        expect(res[0].category).toEqual('cat1');
        expect(res[1].category).toEqual('cat1');
    });
    it('update method returns the updated data for the product', async () => {
        const test_prod: Prod = {
            name: 'prod1',
            price: 10,
            category: 'cat1',
            description: 'prod1 from cat1'
        };
        const res = await prod.updateProd(1, test_prod);
        expect((Object.keys(res))[0]).toEqual('id');
    })
    it('delete method returns the data of the deleted user', async () => {
        const res = await prod.deleteProd(4);
        expect((Object.keys(res))[0]).toEqual('id');
    });
});