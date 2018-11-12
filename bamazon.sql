DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

-- INSERT INTO products(product, price)
-- VALUES ("old shoe", 400);

-- INSERT INTO products(product, price)
-- VALUES ("three-day old soup", 49.34);

-- INSERT INTO products(product, price)
-- VALUES ("hair clippings", 93.9)

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)

INSERT INTO users (username, password)
VALUES ("billy bob", "sheeeeit")