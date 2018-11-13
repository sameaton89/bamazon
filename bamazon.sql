DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Kirkland Signature Men's Athletic Shoe", "Footwear", 19.99, 400);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Maison Margiela Men's Colorbock Fusion Leather Trainer Sneakers", "Footwear", 1645.00, 4200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Lionel Richie - Lionel Richie", "Vinyl", 18.99, 32);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Francis Fukuyama - The End of History and the Last Man", "Books", 9.98, 14);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Francis Fukuyama - The End of History and the Last Man", "Books", 9.98, 14);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Hackleback Caviar", "American Sturgeon - 4 oz", "Caviars & Roe", 159.95, 3);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Bicentennial Man", "DVD", 5.99, 39);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Street Trash", "DVD", 11.99, 1);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Billy Big Mouth Bass Sings for the Holidays", "Toys & Games", 99.99, 132);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("William Gaddis - The Recognitions", "Books", 17.77, 1293);

