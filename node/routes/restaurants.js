const express = require('express')
const mongoose = require("mongoose");
const router = express.Router()

require("../db");

const Restaurant = mongoose.model("Restaurant");

const registerRestaurant = (req, res) => {
    const restaurant = new Restaurant();
    restaurant.name = req.body.name;
    restaurant.dish_1 = req.body.dish_1;
    restaurant.dish_2 = req.body.dish_2;
    restaurant.dish_3 = req.body.dish_3;
    restaurant.dish_4 = req.body.dish_4;
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



