var connection = require("./connection");


var orm = {
    selectAll: function (table) {
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("selected all" + table);
        })
    },

    insertOne: function (table, burgerName, devoured) {
        var query = "INSERT INTO ?? (burger_name, devoured) VALUES ('??', ??)";
        connection.query(query, [table, burgerName, devoured], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("Add complete");
        })
    },

    updateOne: function (table, burgerName, devoured, id) {
        var query = "update ?? set burger_name = '??', devoured = ?? where burger_id = ?"
        connection.query(query, [table, burgerName, devoured, id], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("Update complete");
        })
    }
}

module.exports = orm;