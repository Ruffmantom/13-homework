var connection = require("./connection");
const cTable = require("console.table");


var orm = {
    selectAll: function () {
        var query = "SELECT * FROM burgers;";
        connection.query(query, function (err, result, cb) {
            if (err) throw err;
            console.table(result);
            console.log("selected all");
            cb(result);
        })

    },

    insertOne: function (burgerName) {
        var query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";

        connection.query(query, [burgerName], function (err, result, cb) {
            if (err) throw err;
            console.log("Add complete");
            cb(result);
        })
    },

    updateOne: function (burgerName, id, cb) {
        var query = "UPDATE burgers SET burger_name = ?, devoured = false WHERE burger_id = ?;"
        connection.query(query, [burgerName, id], function (err, result) {
            if (err) throw err;
            console.log("Update complete");
            // console.log(result);
            cb(result);
        })
    }
}

module.exports = orm;