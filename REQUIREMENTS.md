## API Endpoints

_Don't forget to use the base URL (main endpoint) 'http://localhost:3000/api/' before endpoints below_

#### Products

- `prods` GET - Index
- `prods/:id` GET - Show a product (args: product id)
- `prods` POST - Create a new product [token required]
- `top5prods` GET - Show the top 5 most popular products
- `prods/:category` GET - Show products (args: product category)

#### Users

- `users` GET - Index [token required]
- `users/:id` GET - Show an existing user (args: user id)[token required]
- `users` POST - Create a new user [token required]
- `users/:id` PUT - Update an existing user (args: user id)[token required]
- `users/:id` DELETE - Delete an existing user (args: user id)[token required]

#### Orders

- `orders` GET - Index [token required]
- `order/:user_id` GET - Show an active order (args: user id)[token required]
- `orders/:user_id` GET - Show completed orders (args: user id)[token required]
- `order/:user_id` POST - Create a new order (args: user id)[token required]
- `order/:order_id` PUT - Update an active status order to be complete status (args: order id)[token required]
- `order/:order_id` DELETE - Delete an active status order (args: order id)[token required]

## Data Shapes

#### Product

- `id` for each product `number`
- `name` of the product `string`
- `price` of the product `number`
- `category` from which the product `string`
- `description` for each product `string`

```
    CREATE TABLE prods (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price decimal NOT NULL,
        category VARCHAR(50),
        description text
    );
```

#### User

- `id` for each user `number`
- `firstname` of the user `string`
- `lastname` of the user `string`
- `email` of the user `string`
- `password` of the user `string`

```
    CREATE TABLE users (
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
    CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        user_id bigint REFERENCES users(id),
        status VARCHAR(50) DEFAULT 'active'
    );
```

- `id` for each order-products relationship `number`
- `order_id` for an order `number`
- `prod_id` for each product in that order `number`
- `quantity` for each product in that order `number`

```
    CREATE TABLE ordered_prods (
        id SERIAL PRIMARY KEY,
        order_id bigint REFERENCES orders(id),
        prod_id bigint REFERENCES prods(id),
        quantity integer
    );
```
