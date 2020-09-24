const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const db = require("./models");

app.use(cors());
app.use(bodyParser.json());

function success(res, payload) {
  return res.status(200).json(payload);
}

// Routes

app.get("/", async (req, res, next) => {
  try {
    const rests = await db.Model.find({});
    return success(res, rests);
  } catch (err) {
    next({ status: 400, message: "failed to get rests" });
  }
});

app.post("/users", async (req, res, next) => {
  try {
    console.log("post is called");
    const user = await db.create(req.body);
    return success(res, user);
  } catch (err) {
    next({ status: 400, message: "failed to create user" });
  }
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
