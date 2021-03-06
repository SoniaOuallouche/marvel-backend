const express = require("express");
const router = express.Router();
const axios = require("axios");
//54DxCmzUpgZgPz1e
router.get("/character", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=54DxCmzUpgZgPz1e"
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
