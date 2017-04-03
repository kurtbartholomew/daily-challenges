/**
 * Given an integer x, return the bit parity.
 *
 * Example: x = 14
 * Returns: 1
 * Example: x = 538
 * Returns: 0
 */

// function bitParity (x) {
//   var parity = 0
//   while (x !== 0) {
//     parity ^= (x & 1)
//     x = x >>> 1
//   }
//   return parity
// }

// function bitParity (x) {
//   var parity = 0
//   while (x !== 0) {
//     parity ^= 1
//     x = x & (x - 1)
//   }
//   return parity
// }

var parityCache = {}

function bitParity (x) {
  // x^= x >>> 32 if using 64 bit words
  x ^= x >>> 16
  var halfWord = x
  if (parityCache[halfWord] !== undefined) { return parityCache[halfWord] }
  x ^= x >>> 8
  x ^= x >>> 4
  x ^= x >>> 2
  x ^= x >>> 1
  parityCache[halfWord] = x & (0x1)
  return parityCache[halfWord]
}

export default bitParity
