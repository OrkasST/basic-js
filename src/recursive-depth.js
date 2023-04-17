const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, d = 1) {
    let depths = arr.length > 0 ? arr
    .map(el => Array.isArray(el) ? this.calculateDepth(el, d + 1) : d)
    .filter(el => el !== null)
    .sort((a,b) => b - a)
    : [d];
    return depths[0];
  }
}
// let calc = new DepthCalculator();
// console.log(calc.calculateDepth([1, 2, 3, [4, 5]])); // 3
module.exports = {
  DepthCalculator
};
