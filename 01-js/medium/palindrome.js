/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strg = str.toLowerCase().replace(/[\s,.?!]/g, '');
  for (let i = 0, j = strg.length - 1; i < j; i++, j--) {
    if (strg[i] !== strg[j]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
