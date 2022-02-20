const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(formidable());

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const characterRoutes = require("./routes/character");
app.use(characterRoutes);

const characteridRoutes = require("./routes/characterid");
app.use(characteridRoutes);

app.all("*", (req, res) => {
  res.status(404).json("Page introuvable");
});

app.listen(4000, () => {
  console.log("Server has started");
});
