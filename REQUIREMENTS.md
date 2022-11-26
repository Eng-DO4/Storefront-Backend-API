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
        price smallmoney NOT NULL,
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
