const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 3001;
require("./db");

const User = mongoose.model("User");

app.use(cors());
app.use(bodyparser.json());

const createUser = (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.save((err, doc) => {
    if (!err) return;
    else console.log(`Error during user creation ${err}`);
  });
};

// Routes

app.post("/users", async (req, res) => {
  await createUser(req, res);
  res.send("User has been registered");
});

app.get("/users", async (req, res) => {
  await User.find((err, docs) => {
    if (!err) {
      res.status(200).send(docs);
    } else {
      console.log(`Error in retrieving user list ${err}`);
    }
  });
});

app.post("/auth", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email");

  let password = await User.findOne({ password: req.body.password });
  if (!password) return res.status(400).send("Invalid password");

  jwt.sign({ user }, "secret_key", (err, token) => {
    res.json(token);
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
