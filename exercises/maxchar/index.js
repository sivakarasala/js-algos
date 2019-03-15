// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let maxChar = "";
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (char in charMap) {
    if (charMap[char] > max) {
      maxChar = char;
      max = charMap[char];
    }
  }
  return maxChar;
}

module.exports = maxChar;
