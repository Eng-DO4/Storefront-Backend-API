## API Endpoints

_Don't forget to use the base URL (main endpoint) 'http://localhost:3000/api/' before endpoints below_

#### Products

- `prods` GET - Index
- `prods/id/:id` GET - Show a product (args: product id)
- `prods/cat/:category` GET - Show a product (args: product category)
- `prods` POST - Create a new product [token required]
- `prods/:id` PUT - Update an existing product (args: prod id)[token required]
- `prods/:id` DELETE - Delete an existing product (args: prod id)[token required]

#### Users

- `users` GET - Index [token required]
- `users/:id` GET - Show an existing user (args: user id)[token required]
- `users` POST - Create a new user [token required]
- `users/:id` PUT - Update an existing user (args: user id)[token required]
- `users/:id` DELETE - Delete an existing user (args: user id)[token required]

#### Orders

- `orders/` GET - Index all orders [token required]
- `orders/:user_id` GET - Index all orders for one user (args: user id)[token required]
- `orders/:user_id` POST - Make an order (args: user id)[token required]
- `orders/active` GET - Index current orders [token required]
- `orders/active/:user_id` GET - Show current order for one user (args: user id)[token required]
- `orders/complete` GET - Index complete orders [token required]
- `orders/complete/:user_id` GET - Show complete orders for one user (args: user id)[token required]
- `orders/:order_id` PUT - Update an active order to be complete (args: order id)[token required]

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
