const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nums = [];
  n.toString().split('').forEach((el, i, arr) => {
    let temp = [...arr];
    temp.splice(i,1);
    nums.push(parseInt(temp.join('')))
  });
  nums.sort((a, b) => b - a);
  return nums[0];
}

module.exports = {
  deleteDigit
};
