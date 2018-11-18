# Bamazon

### Intro
Bamazon is a basic command-line interface demonstrating MySQL capabilities. Users may choose from a number of items by specifying the ID number and quantity they wish to buy. Once both are selected, the user has the option of continuing to shop or exiting the program.

### Dependencies
* [Inquirer](https://www.npmjs.com/package/inquirer/v/5.0.1)
* [MySQL](https://www.npmjs.com/package/mysql)

Run `npm install` to install both.

### Getting Started

* Create database with bamazon.sql using MySql client of choice.
* Run `node bamazonCustomer.js` in command line (e.g. Bash, Terminal). This will print the ID number, name, category, price, and current inventory of each product.
* The user will be prompted to enter the ID number of the product they wish to buy, followed by the quantity. Users may then continue to shop or exit the program.
