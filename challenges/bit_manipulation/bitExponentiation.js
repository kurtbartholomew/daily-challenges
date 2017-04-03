/**
 * Given two integers x and y, return their
 * exponential product without power operators.
 *
 * Example: x = 5, y = 7
 * Returns: 78125
 */

// Naive T - O(2^n)
// function bitPower (x, y) {
//   var count = Math.abs(y)
//   var product = x
//   var negative = y < 0
//   while (count > 1) {
//     product = negative ? product / x : product * x
//     count--
//   }
//   return product
// }

// Better T - O(n)
function bitPower (x, y) {
  var result = 1
  var power = y
  // if negative power, invert x
  if (y < 0) {
    x = (1 / x)
    power = -power
  }
  while (power !== 0) {
    // if power is odd
    if (power & 1 !== 0) {
      result = result * x
    }

    x = x * x
    power = power >> 1
  }
  return result
}

export default bitPower
