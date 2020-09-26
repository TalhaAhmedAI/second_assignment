const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/food-rating-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) console.log("Mongodb connection succeeded");
    else console.log(`Error in DB connection: ${err}`);
  }
);

require("./models/userModel");
