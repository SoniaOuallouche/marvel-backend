const express = require("express");
const axios = require("axios");
const router = express.Router;

router.get("/character-ID", async (req, res) => {
  try {
    await axios
      .get(
        "https://lereacteur-marvel-api.herokuapp.com/comics/5fc8ba1fdc33470f788f88b3?apiKey=54DxCmzUpgZgPz1e"
      )
      .then((response) => {
        console.log(response.data);
      });
  } catch {
    res.status(400).json({ message: error.message });
  }
});
