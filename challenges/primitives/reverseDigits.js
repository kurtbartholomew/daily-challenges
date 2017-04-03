/**
 * Given an integer x, return the reverse of its decimal representation
 *
 * Example: x = 5023853
 * Returns: 3583205
 */

// T - O(n) where n is number of digits
function reverseDigits (x) {
  var result = 0
  while (x !== 0) {
    result = result * 10
    result = result + (x % 10)
    x = Math.floor(x / 10)
  }
  return result
}

export default reverseDigits
