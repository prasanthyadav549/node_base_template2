const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");
const router = express.Router();
console.log("inside the city routes");

// /api/v1/city
router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);
module.exports = router;
