/**
 * Given an an integer x, return an integer with
 * x's bits in reverse order
 *
 * Example: x = 14
 * Returns: 1
 * Example: x = 538
 * Returns: 0
 */

function reverseBits (x) {
  var reverse = 0
  while (x !== 0) {
    reverse = reverse << 1
    reverse += x & 1
    x = x >>> 1
  }
  return reverse
}

export default reverseBits
