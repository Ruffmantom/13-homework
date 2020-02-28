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
    // devoured in this bottom function is refering to "condition like in the cat excersise"
    // its a boolean 
    updateOne: function (devoured, id, cb) {
        orm.updateOne(devoured, id, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;