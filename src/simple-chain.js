const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain ? this.chain.length : 0;
  },
  addLink(value) {
    this.chain ? this.chain.push(value) : this.chain = [value];
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || !this.chain || position < 1 || position > this.chain.length ) {
      this.chain = null;
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    let reversed = [];
    if (!this.chain) this.chain = [];
    for (let i = this.chain.length - 1; i >= 0; i--) reversed.push(this.chain[i]);
    this.chain = reversed;
    return this;
  },
  finishChain() {
    if (!this.chain) return '';
    let str = this.chain.map((el, i) => i > 0 ? `~~( ${el} )` : `( ${el} )`).join('');
    this.chain = null;
    return str;
  }
};

module.exports = {
  chainMaker
};
