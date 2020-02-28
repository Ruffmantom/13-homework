var express = require("express");

var router = express.Router();
var burger = require("../models/burger")

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        console.log("about to run");
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
        console.log("ran");
    });
});

router.post("/api/burgers", function (req, res) {
    var name = req.body.burger_name;
    burger.insertOne(name, function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
    console.log("worked?");
});

router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne(req.body.burger_name, false, req.body.id, function (result) {
        // dont know what to type into here
    })
})



module.exports = router;