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
    // start();
    connection.end();
});

function printProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("\nWelcome to Bamazon! Below you'll find our extensive eleven item inventory.\n\n=========================================================================");
        for (var i = 0; i < res.length; i++) {
            console.log("\n" + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity + " in stock");
        }
    });

// function start() {
//     inquirer
//       .prompt({
//         name: "postOrBid",
//         type: "rawlist",
//         message: "Would you like to [POST] an auction or [BID] on an auction?",
//         choices: ["POST", "BID"]
//       })
//       .then(function(answer) {
//         // based on their answer, either call the bid or the post functions
//         if (answer.postOrBid.toUpperCase() === "POST") {
//           postAuction();
//         }
//         else {
//           bidAuction();
//         }
//       });
//   }
// }

}