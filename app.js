const express = require("express");
const cors = require("cors");
require("./config/db");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.route");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/users", userRouter);

// **** router error *****
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// ****** server error ******

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server error",
  });
});

module.exports = app;
