var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({

    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    printProducts();
});

var printProducts = function(res) {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("\nWelcome to Bamazon! Below you'll find our extensive eleven item inventory.\n\n=========================================================================");
        for (var i = 0; i < res.length; i++) {
            console.log("\n" + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity + " in stock");
        }
        buy();
        // connection.end();
    });




var buy = function(res) {
    inquirer
      .prompt([
          {
            name: "itemId",
            type: "input",
            message: "Enter the ID number of the item you'd like to purchase.",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
          },
          {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
          }
      ]).then(function(input) {
        //   console.log(input.itemId + ", " + input.quantity);
          var item = input.itemId;
          var quantity = input.quantity;


    

          connection.query("SELECT * FROM products WHERE?", {item_id: item}, function(err, res) {
              if (err) throw err;
                console.log(res);
              if (res.length === 0) {
                var invalidId = function() {
                    console.log("Invalid ID. Please enter a valid ID.");
                    buy();
                }
            invalidId();            
              } else {
                  if (quantity <= res[0].stock_quantity) {
                    var completePurchase = function() {
                        function minus() {
                        connection.query("UPDATE products SET stock_quantity='" + (res[0].stock_quantity - quantity) + "' WHERE item_id='" + item + "'");
                    }
                        console.log("The item is in stock! Placing order. Would you like to buy anything else?");
                        minus();
                        console.log(res[0].stock_quantity - quantity)
                    
                    }
                    completePurchase();

                      
                  } else {
                    function notEnough() {
                        console.log("Sorry, we don't have enough of that item left! Enter a number less than or equal to " + res[0].stock_quantity + ".");
                        buy();
                    }
                    notEnough();
                  }
              }

          })
          
      })
    }
}

