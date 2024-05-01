const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    status: "OK",
  });
});

app.post("/submit", async (req, res) => {
  try {
    const { fname, lname, email, phone } = req.body;
    await User.create({ fname, lname, email, phone });
    return res.status(200).json({
      status: "OK",
      data: {
        fname,
        lname,
        email,
        phone,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Unable to store data try again...",
    });
  }
});

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(`server running at localhost ${process.env.PORT}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
});
