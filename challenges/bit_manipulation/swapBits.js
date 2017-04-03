/**
 * Given an an integer x and two integer indices i and j,
 * swap the bits at i and j in x
 *
 * Example: x = 14
 * Returns: 1
 * Example: x = 538
 * Returns: 0
 */

function swapBits (x, i, j) {
  var ithBit = ((x >> i) & 1)
  var jthBit = ((x >> j) & 1)
  if (ithBit !== jthBit) {
    x ^= ((1 << i) | (1 << j))
  }
  return x
}

export default swapBits
