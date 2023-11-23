const express = require("express");
const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

const router = express.Router();
console.log("inside the Flight routes");
// /api/v1/flights POST
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

// /api/v1/flights?trips=MUM-DEL GET
router.get("/", FlightController.getAllFlights);

module.exports = router;
