const express = require("express");

const router = express.Router();
const AirplaneRoutes = require("./airplane-routes");
const CityRoutes = require("./city-routes");

console.log("inside the v1Routes");
router.use("/airplanes", AirplaneRoutes);
router.use("/cities", CityRoutes);
router.get("/info", (req, res) => {
  return res.json({
    msg: "info",
  });
});

module.exports = router;
