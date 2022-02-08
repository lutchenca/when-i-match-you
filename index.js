require('dotenv').config();
const { urlencoded } = require("express");
const mongoose = require("mongoose");
const express = require("express");
const app = express();


app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

app.get("/", (req, res) => {
  res.json({ message: "oi!" });
});

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.sk4tw.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("mongoDB connection successfully!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));