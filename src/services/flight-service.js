const { FlightRepository } = require("../repositories");
const { AppError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");
const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    console.log("inside the service");
    const flight = await flightRepository.create(data);
    return flight;
  } catch (err) {
    if (err.name == "SequelizeValidationError") {
      let explanation = [];
      err.errors.forEach((error) => {
        explanation.push(error.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
};
