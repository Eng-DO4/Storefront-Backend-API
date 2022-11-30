## API Endpoints

_Don't forget to use the base URL (main endpoint) 'http://localhost:3000/api/' before endpoints below_

#### Products

- `prods` POST - Create a new product
```
    enter data in json format like this:
    {
        "name": "prod1",
        "price": 10,
        "category": "cat1",
        "description": "a new product from different category"
    }
```
- `prods` GET - Index
- `prods/id/:id` GET - Show a product (args: product id)
- `prods/cat/:category` GET - Show a product (args: product category)
- `prods/:id` PATCH - Update an existing product (args: prod id)
- `prods/:id` DELETE - Delete an existing product (args: prod id)

#### Users

- `users` POST - Create a new user
```
    enter data in json format like this:
    {
        "firstname": "child",
        "lastname": "parent",
        "email": "child.parent@m.com",
        "password": "mypass123"
    }
```
- `users` GET - Index
- `users/:id` GET - Show an existing user (args: user id)
- `users/:id` PATCH - Update an existing user (args: user id)
- `users/:id` DELETE - Delete an existing user (args: user id)
- `users/auth/:email` POST - Show an authenticated user
```
enter data in json format like this:
    {
        "email": "child.parent@m.com",
        "password": "mypass123"
    }
``` 

#### Orders

- `orders/` GET - Index all orders
- `orders/active` GET - Index current orders
- `orders/complete` GET - Index complete orders
- `orders/:order_id` GET - Show an order (args: order id)
- `orders/active/:order_id` GET - Show a current order (args: order id)
- `orders/complete/:order_id` GET - Show a complete order (args: order id)

## Data Shapes

#### Product

- `id` for each product `number`
- `name` of the product `string`
- `price` of the product `number`
- `category` from which the product `string`
- `description` for each product `string`

```
    CREATE TABLE IF NOT EXISTS prods (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price DECIMAL NOT NULL,
        category VARCHAR(50),
        description TEXT
    );
```

#### User

- `id` for each user `number`
- `firstname` of the user `string`
- `lastname` of the user `string`
- `email` of the user `string`
- `password` of the user `string`

```
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        email VARCHAR(50) UNIQUE,
        password VARCHAR NOT NULL
    );
```

#### Orders

- `id` for each order `integer`
- `user_id` for the user ordered `integer`
- `status` of the order `string`

```
    CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        status VARCHAR(50) DEFAULT 'active'
    );
```

- `order_id` for each order `number`
- `prod_id` for each product in the order `number`
- `quantity` for each product in the order `number`

```
    CREATE TABLE IF NOT EXISTS ordered_prods (
        order_id INTEGER REFERENCES orders(id),
        prod_id INTEGER REFERENCES prods(id),
        quantity INTEGER
    );
```
