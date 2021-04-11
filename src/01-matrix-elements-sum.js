/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(m) {
  const l = m[0].length;
  const arr = m.flat();
  let sum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i - l] !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
