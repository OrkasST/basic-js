const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!date.getUTCMonth) throw new Error('Invalid date!');
  let season;
  try {
    season = date.getUTCMonth();
  } catch (error) {
    throw new Error('Invalid date!');
  }
  return season < 2 ? "winter" : season < 5 ? "spring" : season < 8 ? "summer" : season < 11 ? "autumn" : "winter";
}

module.exports = {
  getSeason
};