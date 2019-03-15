// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return (
    parseInt(
      Math.abs(n)
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(n)
  );
}

module.exports = reverseInt;

// Alternate Sol

// function reverseInt(n) {
//   const str = Math.abs(n)
//     .toString()
//     .split("");
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return parseInt(reversed) * Math.sign(n);
// }
