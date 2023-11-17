const express = require("express");
const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

const router = express.Router();
console.log("inside the Flight routes");
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

module.exports = router;
