const express = require("express");
const { CityController } = require("../../controllers");
const router = express.Router();
console.log("inside the city routes");

// /api/v1/city
router.post("/", CityController.createCity);
module.exports = router;
