/* global describe, it */

import { assert } from 'chai'
import reverseDigits from '../challenges/primitives/reverseDigits'
import isIntPalindrome from '../challenges/primitives/integerPalindrome'
import uniformRandomNums from '../challenges/primitives/uniformRandomNums'

describe('Primitives', function () {
  describe('Decimal Digit Reversal', function () {
    it('should return an inverted integer', function () {
      assert.equal(reverseDigits(5023853), 3583205)
    })
  })
  describe('Integer Palindrome', function () {
    it('should return true if int is a palindrome', function () {
      assert.equal(isIntPalindrome(747), true)
    })
    it('should return false if int is not a palindrome', function () {
      assert.equal(isIntPalindrome(10010), false)
    })
  })
  describe('Uniform Random Numbers', function () {
    var placeHolder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var rand = function () {
      return Math.random()
    }

    it('should return an equal distribution', function () {
      assert.equal(uniformRandomNums(rand, 1, 10), placeHolder)
    })
    it('should return false if int is not a palindrome', function () {
      assert.equal(uniformRandomNums(rand, 124, 186), placeHolder)
    })
  })
})
