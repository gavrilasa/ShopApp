# ShopApp

ShopApp is a simple CRUD (Create, Read, Update, Delete) project designed to help you learn the basics of Express.js, MongoDB, and Mongoose. It demonstrates how to manage product data using a web interface.

## Features

- **Create Products**: Add new products with attributes like name, brand, price, color, and category.
- **Read Products**: View all products, filter them by category, and see individual product details.
- **Update Products**: Edit existing product information.
- **Delete Products**: Remove unwanted products from the database.

## Technologies Used

- **Node.js** with **Express.js** for the backend.
- **MongoDB** as the database.
- **Mongoose** as the ODM (Object Data Modeling) library.
- **EJS** for rendering views.
- **Method-Override** to enable PUT and DELETE methods in forms.


## Routes

### Product Routes

| HTTP Method | Route                 | Description                        |
|-------------|-----------------------|------------------------------------|
| GET         | `/products`           | View all products.                 |
| GET         | `/products?category=` | View products by category.         |
| GET         | `/products/create`    | Render the form to add a product.  |
| POST        | `/products`           | Add a new product.                 |
| GET         | `/products/:id`       | View details of a specific product.|
| GET         | `/products/:id/edit`  | Render the form to edit a product. |
| PUT         | `/products/:id`       | Update product details.            |
| DELETE      | `/products/:id`       | Delete a product.                  |

## Folder Structure

```
shopapp/
├── models/
│   └── product.js    # Product schema and model definition
├── views/
│   ├── products/
│   │   ├── index.ejs # List all products
│   │   ├── create.ejs# Form to create a new product
│   │   ├── show.ejs  # Show a single product's details
│   │   └── edit.ejs  # Form to edit a product
├── app.js            # Main application file
├── package.json      # Project metadata and dependencies
```
