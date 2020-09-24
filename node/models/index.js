const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://developer:5tBlCufJmU2EnGnw@mongodb-shard-00-00.yz5y4.mongodb.net:27017,mongodb-shard-00-01.yz5y4.mongodb.net:27017,mongodb-shard-00-02.yz5y4.mongodb.net:27017/mongodb?ssl=true&replicaSet=atlas-d07c8y-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

module.exports.Model = require("./model");
