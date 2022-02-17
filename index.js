const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(formidable());

mongoose.connect("mongodb://localhost/comics");

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const characterRoutes = require("./routes/character");
app.use(characterRoutes);

app.all("*", (req, res) => {
  res.status(404).json("Page introuvable");
});

app.listen(3000, () => {
  console.log("Server has started");
});
