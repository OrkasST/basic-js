const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let common = {};
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    let ind = s2.indexOf(s1[i]);
    if (ind >= 0 && common.hasOwnProperty(s1[i]) && common[s1[i]] === ind && s2.indexOf(s1[i], common[s1[i]] + 1) >= 0) {
      common[s1[i]] = s2.indexOf(s1[i], common[s1[i]] + 1);
      count++;
    } else if (ind >= 0 && common.hasOwnProperty(s1[i]) && common[s1[i]] !== ind) {
      count++;
    } else if (ind >= 0 && !common.hasOwnProperty(s1[i])) {
      count++;
      common[s1[i]] = ind;
    }
  }
  return count;
}

console.log('getCommonCharacterCount(s1, s2): ', getCommonCharacterCount("aabcc", "adcaa")); // 3


module.exports = {
  getCommonCharacterCount
};
