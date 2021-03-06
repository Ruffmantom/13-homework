var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///
/////
// this is for using handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// 

var routes = require("./controllers/burgers_controller.js");
app.use(routes);


// start the server
app.listen(PORT, function () {
    console.log("App now listening at http://localhost:" + PORT);
});