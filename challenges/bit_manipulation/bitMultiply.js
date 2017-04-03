/**
 * Given two non-negative integers x and y, return their product
 * without using arithmetic operators.
 *
 * Useable operators: (=,>>,<<,|,&,~,^,==,||,&&,!=)
 *
 * Example: x = 12, y = 8
 * Returns: 96
 */

function bitMultiply (x, y) {
  var total = 0
  // for each bit set in x, we're going to
  // add y to the ith power to the total
  while (x !== 0) {
    // if the ith bit in x is set, add it to the total
    if (x & 1 !== 0) {
      total = sum(total, y)
    }
    // right shift so we can check if the next bit is set
    x = x >>> 1
    // left shift y so we can bitwise add it if the i+1 bit is set in x
    y = y << 1
  }
  return total
}

// bitwise addition function
function sum (x, y) {
  while (y !== 0) {
    var sum = x ^ y
    var carry = (x & y) << 1
    x = sum
    y = carry
  }
  return x
}

export default bitMultiply
