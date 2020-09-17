const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/restaurants")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(() => console.error("Could not connect to MongoDB...", err));

module.exports.Model = require("./model");
