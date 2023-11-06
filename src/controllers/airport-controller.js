const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 * POST : /airports
 * req-body {name: 'IGI', cityId: 5, code: 'DEL'}
 */
async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      cityId: req.body.cityId,
      address: req.body.address,
    });
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    res.status(err.statusCode).json(ErrorResponse);
  }
}

/**
 * POST : /airports
 * req-body {}
 */
async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    res.status(err.statusCode).json(ErrorResponse);
  }
}

/**
 * POST : /airports/:id
 * req-body {}
 */
async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    return res.status(err.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE : /airports/:id
 * req-body {}
 */
async function destroyAirport(req, res) {
  try {
    const response = await AirportService.destroyAirport(req.params.id);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
};
