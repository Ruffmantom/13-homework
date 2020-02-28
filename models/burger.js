// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (burgerName, cb) {
        orm.insertOne(burgerName, function (res) {
            cb(res);
        });
    },
    updateOne: function (burgerName, devoured, id, cb) {
        orm.updateOne(burgerName, devoured, id, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;