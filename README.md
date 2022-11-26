# Storefront-Backend-API

2nd Project on APIs for Udacity nano degree course "Advanced Full-Stack Web Development".

The project is for designing database relation and securing users sensitive data in a storefront API.

## .env

Before all, create a `.env` file in the root directory and use these examples to know the names of variables

```
    PORT=3000
    NODE_ENV=dev
    PG_HOST=localhost
    PG_PORT=5432
    PG_DB=dev
    PG_BD_TEST=test
    PG_USER=postgres
    PG_PASS=postgres123
```

## API Endpoints
*Don't forget to use the base URL (main endpoint) before endpoints below*

#### Products
- `prods` GET - Index 
- `prods/:id` GET - Show a product (args: product id)
- `prods` POST - Create a new product [token required]
- `top5prods` GET - Show the top 5 most popular products 
- `prods/:category` GET - Show products (args: product category)

#### Users
- `users` GET - Index [token required]
- `users/:id` GET - Show a user (args: user id)[token required]
- `users` POST - Create a new user [token required]
- `users/:id` PUT - Update an existing user (args: user id)[token required]
- `users/:id` DELETE - Delete an existing user (args: user id)[token required]

#### Orders
- `orders` GET - Index
- `order/:user_id` GET - Show an active order (args: user id)[token required]
- `orders/:user_id` GET - Show completed orders (args: user id)[token required]
- `order/:user_id` POST - Create a new order (args: user id)[token required]
- `order/:order_id` PUT - Update an active status order to be complete status (args: order id)[token required]
- `order/:order_id` DELETE - Delete an active status order (args: order id)[token required]
