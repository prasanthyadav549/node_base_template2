const express = require("express");

const router = express.Router();
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportsRoutes = require("./airport-routes");
const flightRoutes = require("./flight-routes");

console.log("inside the v1Routes");
router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportsRoutes);
router.use("/flights", flightRoutes);
router.get("/info", (req, res) => {
  return res.json({
    msg: "info",
  });
});

module.exports = router;
