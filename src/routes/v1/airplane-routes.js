const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();
console.log("inside the airplane routes");
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

router.get("/", AirplaneController.getAirplanes);
router.get("/:id", AirplaneController.getAirplane);
router.delete("/:id", AirplaneController.destroyAirplane);
module.exports = router;
