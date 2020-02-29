var mysql = require("mysql");

var MYSQL_PASSWORD = "bcdae33f";

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-04.cleardb.net",
    port: 3306,
    user: "b5fe3fa986313a",
    password: MYSQL_PASSWORD,
    database: "heroku_7017717e6fe9675"
});


// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

