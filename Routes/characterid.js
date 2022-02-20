const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/characterid", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/comics/5fc8ba1fdc33470f788f88b3?apiKey=54DxCmzUpgZgPz1e"
    );
    console.log(response.data);
    res.json(response.data);
  } catch {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
