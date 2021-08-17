require("dotenv").config();

const port = process.env.PORT || 4000;
const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());
const MONGODB_URI = process.env.MONGODB_URI;

const router = require("./router/route");
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(router);

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => console.log(`On ${port}`));
  })
  .catch((err) => console.log(err));
