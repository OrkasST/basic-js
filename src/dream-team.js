const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.map(el => {
    if (typeof el !== 'string') return '';
    el = el.replace(/ /g,'');
    console.log(el);
    return el[0].toUpperCase();
  }).sort().join('');
}

// console.log(createDreamTeam(
//   [
//     '   William Alston ',
//     ' Paul Benacerraf',
//     '  Ross Cameron',
//     '       Gilles Deleuze',
//     '  Arda Denkel ',
//     '  Michael Devitt',
//     '  Kit Fine',
//     ' Nelson Goodman',
//     'David Kolb',
//     '   Saul Kripke',
//     '  Trenton Merricks',
//     '  Jay Rosenberg',
//   ]
// ));

module.exports = {
  createDreamTeam
};
