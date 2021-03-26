const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/collection/:objectNumber", async (req, res) => {
    try {
        const apikey = process.env.RIJKS_API_KEY
        const response = await axios.get(
          `https://www.rijksmuseum.nl/api/en/collection/${req.params.objectNumber}/?key=${apikey}`
        );
        res.json(response.data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  module.exports = router;