/**
 * Given a non-negative integer x, return a non-equal integer
 * with the same weight (number of bits set to 1) and the
 * smallest difference
 *
 * Example: x = 43 (101011)
 * Returns: 46 (101110)
 */

function findClosestInt (x) {
  var NUMOFDIGITS = 31
  // iterate through all binary digits starting from 0th index
  for (var i = 0; i < NUMOFDIGITS; i++) {
    // attempt to LSB starting from 0
    if (((x >> i) & 1) !== ((x >> (i + 1)) & 1)) {
      return x ^ ((1 << i) | (1 << (i + 1)))
    }
  }
  // potentially throw an error if all bits are set aka highest number possible
  return x
}

export default findClosestInt
