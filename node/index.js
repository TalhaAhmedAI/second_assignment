const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const port = process.env.PORT || 3001;
require("./db");

const User = mongoose.model("User");

app.use(cors());
app.use(express.json());

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

app.post("/auth", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email");

  let password = await User.findOne({ password: req.body.password });
  if (!password) return res.status(400).send("Invalid password");
  else {
    res.send("success");
  }
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
