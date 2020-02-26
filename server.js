var express = require("express");
var exphbs = require("express-handlebars");
var orm = require("./config/orm");
const cTable = require("console.table");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///
/////
/////// this is for using handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// 
// //
//  // //
// start of ORM code
var burger = "asdflj";
orm.selectAll("burgers");
// orm.insertOne("burgers", burger);
// orm.updateOne("burgers", "Small Burger", 4);







// start the server
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});