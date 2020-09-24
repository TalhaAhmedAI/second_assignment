const mongoose = require("mongoose");

const restSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  dishes: [{ name: String, rating: Number }],
});

const RestModel = mongoose.model("restaurant", restSchema);

const signupSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const signupModel = mongoose.model("register", signupSchema);

// const restaurant = new RestModel({
//   name: "Qadri",
//   dishes: ["Pulao", "Haleem", "Kabab"],
//   rating: 0,
// });
// restaurant.save();
module.exports.rest = RestModel;
module.exports.signup = signupModel;
