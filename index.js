const { urlencoded } = require("express");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const Person = require("./models/Person")

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "oi!" });
});

const DB_USER = "lutchenca";
const DB_PASSWORD = encodeURIComponent("w4bfNwaE6F2Fsz");

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:<${DB_PASSWORD}>@cluster0.sk4tw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("mongoDB connection successfully!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

app.listen(3000);
