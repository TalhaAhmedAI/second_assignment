const mongoose = require("mongoose");

const restSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  dishes: [String],
});

const RestModel = mongoose.model("restaurant", restSchema);
// const restaurant = new RestModel({
//   name: "Allah Wala",
//   dishes: ["Anda", "Chana", "Kaleji"]
// })
// restaurant.save()
module.exports = RestModel;
