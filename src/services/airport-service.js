const { AirportRepository } = require("../repositories");
const { AppError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");
const airportRepository = new AirportRepository();

async function createAirport(data) {
  try {
    console.log("inside the service");
    const response = await airportRepository.create(data);
    return response;
  } catch (err) {
    if (err.name == "SequelizeValidationError") {
      let explanation = [];
      err.errors.forEach((error) => {
        explanation.push(error.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirports() {
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (err) {
    throw new AppError(
      "Cannot fetch data of all the airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (err) {
    if (err.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airport you requested is not present",
        err.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of all the airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirport(id) {
  try {
    const response = await airportRepository.destroy(id);
    return response;
  } catch (err) {
    if (err.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airport you requested is not present",
        err.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of all the airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
};
