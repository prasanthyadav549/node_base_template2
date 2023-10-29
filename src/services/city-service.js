const { CityRepository } = require("../repositories");
const { AppError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");
const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    console.log("inside the service");
    const response = await cityRepository.create(data);
    return response;
  } catch (err) {
    console.log("the log in service:", err);
    if (
      err.name == "SequelizeValidationError" ||
      err.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      err.errors.forEach((error) => {
        explanation.push(error.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new City object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createCity,
};
