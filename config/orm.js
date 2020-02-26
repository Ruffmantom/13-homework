var connection = require("./connection");
const cTable = require("console.table");


var orm = {
    selectAll: function (table) {
        var query = "SELECT * FROM ??;";
        connection.query(query, [table], function (err, result) {
            if (err) throw err;
            console.table(result);
            console.log("selected all" + table);
        })
    },

    insertOne: function (table, burgerName) {
        var query = "INSERT INTO ?? (burger_name, devoured) VALUES ('??', false);";
        var burger = burgerName.toString();
        connection.query(query, [table, burger], function (err, result) {
            if (err) throw err;
            console.log("Add complete");
            // console.log(result);
        })
    },

    updateOne: function (table, burgerName, id) {
        var query = "UPDATE ?? SET burger_name = ??, devoured = false WHERE burger_id = ?;"
        connection.query(query, [table, burgerName.toString(), id], function (err, result) {
            if (err) throw err;
            console.log("Update complete");
            // console.log(result);

        })
    }
}

module.exports = orm;