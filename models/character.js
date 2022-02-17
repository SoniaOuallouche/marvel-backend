const mongoose = require("mongoose");

const Character = mongoose.model("Character", {
  picture: Image,
  name: String,
  description: String,
});

module.exports = Character;
