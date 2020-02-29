var express = require("express");

var router = express.Router();
var burger = require("../models/burger")

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log("------------- the hbsObject ----------");
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function (req, res) {
    var name = req.body.burger_name;
    burger.insertOne(name, function (result) {
        console.log(req.body.burger_name + "Has been created!");
        res.json({ id: result.insertId });
    });
    console.log("worked?");
});

router.put("/api/burger/:id", function (req, res) {
    burger.updateOne(true, req.params.id, function (result) {
        console.log("fixed err")
        // dont know what to type into here
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }

    })
})



module.exports = router;