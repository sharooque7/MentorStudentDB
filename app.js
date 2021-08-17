require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4000;
const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());

const router = require("./router/route");
app.use(express.urlencoded({ extended: false }));

const MONGODB_URI =
  "mongodb+srv://practice:Mongo7$@practice.a2eyo.mongodb.net/MentorStudent?retryWrites=true&w=majority";

app.set("view engine", "ejs");
app.set("views", "views");

app.use(router);

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, () => console.log(`On ${PORT}`));
  })
  .catch((err) => console.log(err));
