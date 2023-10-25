const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");


async function createAirplane(req, res) {
  try {
    console.log("inside the airplane controller");
    const response = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "successfully created the airplane object",
      body: response,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "something went wrong",
      body: {},
    });
  }
}

module.exports = {
  createAirplane,
};
