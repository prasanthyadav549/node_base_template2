const { AirplaneRepository } = require("../repositories");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    
console.log("inside the service");
    const response = await airplaneRepository.create(data);
    return response;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createAirplane,
};
