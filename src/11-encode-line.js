/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 1;
  for (let i = 0; i < str.length; i += counter) {
    counter = 1;
    while (str[i] === str[i + counter]) counter++;
    if (counter === 1) {
      result += str[i];
    } else {
      result += counter + str[i];
    }
  }
  return result;
}

module.exports = encodeLine;
