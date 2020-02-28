var express = require("express");

var router = express.Router();
var burger = require("../models/burger")

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            cats: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "name", "sleepy"
    ], [
        req.body.name, req.body.sleepy
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});