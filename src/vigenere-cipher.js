const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.dictionary = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
  }
  encrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    let encrypted = str;
    key = key.toUpperCase();
    let spaces = [];
    encrypted = encrypted.toUpperCase().split('')
    .filter((el, i) => {
      const reg = /[^a-z0-9]/gi;
      if (reg.test(el)) {
        spaces.push([i, el]);
        return false;
      } else return true;
    })
    .map((ltr, i) => {
      let plus = this.dictionary.indexOf(key[i >= key.length ? i % key.length : i]);
      let index = this.dictionary.indexOf(ltr) + plus;
      if (this.dictionary.length <= index) index = index - this.dictionary.length;
      return this.dictionary.indexOf(ltr) < 0 ? ltr : this.dictionary[index];
    });
    spaces.forEach(el => encrypted.splice(el[0], 0, el[1]));
    if (!this.isDirect) {
      let reverse = [];
      encrypted.forEach(el => reverse.unshift(el));
      encrypted = reverse;
    }
    return encrypted.join('');
  }
  decrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    let encrypted = str;
    key = key.toUpperCase();
    let spaces = [];
    encrypted = encrypted.toUpperCase().split('')
    .filter((el, i) => {
      const reg = /[^a-z0-9]/gi;
      if (reg.test(el)) {
        spaces.push([i, el]);
        return false;
      } else return true;
    });
    encrypted = encrypted.map((ltr, i) => {
      let plus = this.dictionary.indexOf(key[i >= key.length ? i % key.length : i]);
      let index = this.dictionary.indexOf(ltr) - plus;
      if (index < 0) index = index + this.dictionary.length;
      return this.dictionary.indexOf(ltr) < 0 ? ltr : this.dictionary[index];
    });
    spaces.forEach(el => encrypted.splice(el[0], 0, el[1]));
    if (!this.isDirect) {
      let reverse = [];
      encrypted.forEach(el => reverse.unshift(el));
      encrypted = reverse;
    }
    return encrypted.join('');
  }
}
// let crypt = new VigenereCipheringMachine();
// let cryptRev = new VigenereCipheringMachine(false);
// console.log(crypt.encrypt('attack at dawn!', 'alphonse')); // AEIHQX SX DLLU!
// console.log(crypt.decrypt('AEIHQX SX DLLU!', 'alphonse')); // AEIHQX SX DLLU!
// console.log(cryptRev.encrypt('attack at dawn!', 'alphonse')); // !ULLD XS XQHIEA
// console.log(cryptRev.decrypt('AEIHQX SX DLLU!', 'alphonse')); // !NWAD TA KCATTA


module.exports = {
  VigenereCipheringMachine
};
