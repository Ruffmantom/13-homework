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
        if (err) console.log("error with updating the to true")
        // dont know what to type into here
    })
})



module.exports = router;