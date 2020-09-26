const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
require("./db");

const User = mongoose.model("User");

app.use(cors());
app.use(bodyParser.json());

// Routes

app.post("/users", async (req, res) => {
  await createUser(req, res);
});

app.post("/auth", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  const password = await User.findOne({ password: req.body.paassword });
  if (password) return res.status(400).send("Invalid email or password");

  // const token = await user.generateAuthToken();
  // res.send(token);
});

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

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
