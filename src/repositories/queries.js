function addRowLockOnFlights(flightId) {
  return `SELECT * FROM flights WHERE id = ${flightId} FOR UPDATE;`;
}

module.exports = {
  addRowLockOnFlights,
};
