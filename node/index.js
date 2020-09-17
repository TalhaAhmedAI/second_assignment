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
    next({ status: 400, message: "failed to get todos" });
  }
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
