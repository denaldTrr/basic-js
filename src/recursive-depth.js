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
  calculateDepth(arr) {
    let maxDepth = 1;
    for (let item of arr) {
      if (Object.prototype.toString.call(item) === '[object Array]') {
        let currentDepth = this.calculateDepth(item) + 1;
        if (currentDepth > maxDepth) maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
