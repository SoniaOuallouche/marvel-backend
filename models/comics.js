const mongoose = require("mongoose");

const Comics = mongoose.model("Comics", {
  picture: Image,
  title: String,
  description: String,
  character: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "character",
  },
});

module.exports = Comics;
