const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/collection", async (req, res) => {
    try {
        const page = req.query.p
        const ps = req.query.ps
        const s = req.query.s
        const involvedMaker = req.query.involvedMaker
        //let reg = new RegExp(involvedMaker,"i")
        const apikey = process.env.RIJKS_API_KEY
        const response = await axios.get(
          `https://www.rijksmuseum.nl/api/en/collection?key=${apikey}&p=${page}&ps=${ps}&s=${s}&involvedMaker=${involvedMaker}`
        );
        res.json(response.data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  module.exports = router;