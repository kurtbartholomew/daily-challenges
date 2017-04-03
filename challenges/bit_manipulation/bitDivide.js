/**
 * Given two non-negative integers x and y, return their quotient
 * using only +,-, and shifting operators
 *
 * Useable operators: (+,-,=,>>,<<,|,&,~,^,==,||,&&,!=)
 *
 * Example: x = 18, y = 9
 * Returns: 2
 * Example: x = 53, y = 4
 * Returns: 13
 */

function bitDivide (x, y) {
  var WORD_SIZE = 16
  var power = WORD_SIZE
  var yToIthPower = y << power
  var quotient = 0
  // continue dividing until x < y
  while (x > y) {
    // find a power of y that can be subtracted from x
    while (yToIthPower > x) {
      // incrementally reduce y*2^i to y*2*i-1
      yToIthPower = yToIthPower >> 1
      power--
    }
    // store the number of y's subtracted from x already
    quotient += (1 << power)
    x = x - yToIthPower
  }
  return quotient
}

export default bitDivide
