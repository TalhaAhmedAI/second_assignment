const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  item_1: Object,
  item_2: Object,
  item_3: Object,
  item_4: Object,
});

mongoose.model("Restaurant", restaurantSchema);