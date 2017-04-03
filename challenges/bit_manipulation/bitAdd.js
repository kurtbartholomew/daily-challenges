/**
 * Given two non-negative integers x and y, return their sum
 * without using arithmetic operators.
 *
 * Useable operators: (=,>>,<<,|,&,~,^,==,||,&&,!=)
 *
 * Example: x = 12, y = 8
 * Returns: 20
 */

function bitAdd (x, y) {
  while (y !== 0) {
    // XOR to add without any carry bits
    var sum = x ^ y
    // AND to calculate carries and shift to carry over
    var carry = (x & y) << 1
    x = sum
    y = carry
  }
  return x
}

export default bitAdd
