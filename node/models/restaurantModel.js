const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  dish_1: String,
  dish_2: String,
  dish_3: String,
  dish_4: String,
});

mongoose.model("Restaurant", restaurantSchema);