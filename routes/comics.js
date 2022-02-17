const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/comics", async (req, res) => {
  try {
    await axios
      .get(
        "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=54DxCmzUpgZgPz1e"
      )
      .then((response) => {
        console.log(response.data);
      });
  } catch {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
