const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 * POST: /cities
 * body: {name: 'London'}
 */
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    res.status(err.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
};
