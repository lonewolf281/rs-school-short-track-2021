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
  const arr = s1.split('');
  let c = 0;

  for (let i = 0; i < s2.length; i++) {
    if (arr.includes(s2[i])) {
      c++;
      arr.splice(arr.indexOf(s2[i]), 1);
    }
  }
  return c;
}

module.exports = getCommonCharacterCount;
