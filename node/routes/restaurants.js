const express = require('express')
const mongoose = require("mongoose");
const router = express.Router()

require("../db");

const Restaurant = mongoose.model("Restaurant");

const registerRestaurant = (req, res) => {
    const restaurant = new Restaurant();
    restaurant.name = req.body.name;
    restaurant.item_1 = {name: req.body.item_1, rating: ""};
    restaurant.item_2 = {name: req.body.item_2, rating: ""};
    restaurant.item_3 = {name: req.body.item_3, rating: ""};
    restaurant.item_4 = {name: req.body.item_4, rating: ""}
    restaurant.save((err, doc) => {
      if (!err) return;
      else console.log(`Error during restaurant registration ${err}`);
    });
  };


router.post("/restaurants", async (req, res) => {
    await registerRestaurant(req, res);
    res.send("Restaurant has been registered");
  });


  module.exports = router;



