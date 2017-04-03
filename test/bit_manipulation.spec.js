/* global describe, it */

import { assert } from 'chai'
import returnBitParity from '../challenges/bit_manipulation/parity'
import bitSwap from '../challenges/bit_manipulation/swapBits'
import bitReverse from '../challenges/bit_manipulation/reverseBits'
import findClosestInt from '../challenges/bit_manipulation/findClosestWeightInt'
import bitAdd from '../challenges/bit_manipulation/bitAdd'
import bitMultiply from '../challenges/bit_manipulation/bitMultiply'
import bitDivide from '../challenges/bit_manipulation/bitDivide'
import bitPower from '../challenges/bit_manipulation/bitExponentiation'

describe('Bit Manipulation', function () {
  var createLargeInts = function thirtyTwoBitInts (count) {
    var nums = []
    while (count > 0) {
      nums.push(Math.floor(Math.random() * (1 << 20) + 1))
      count--
    }
    return nums
  }

  describe('Bit Parity', function () {
    it('should return 1 if parity is odd', function () {
      this.slow(-1)
      assert.equal(returnBitParity(14), 1)
    })
    it('should return 0 if parity is even', function () {
      this.slow(-1)
      assert.equal(returnBitParity(538), 0)
    })
    it('should run well for a large amount of 32 bit numbers', function () {
      this.slow(-1)
      var nums = createLargeInts(10000)
      for (var num of nums) {
        returnBitParity(num)
      }
    })
  })
  describe('Bit Swap', function () {
    it('should properly swap bits if they differ', function () {
      this.slow(-1)
      assert.equal(bitSwap(73, 1, 6), 11)
    })
    it('should return the same number if bits are the same', function () {
      this.slow(-1)
      assert.equal(bitSwap(125, 2, 5), 125)
    })
  })
  describe('Bit Reversal', function () {
    it('should return same number if bits are symmetrical', function () {
      this.slow(-1)
      assert.equal(bitReverse(325), 325)
    })
    it('should reverse bits if not symmetrical', function () {
      this.slow(-1)
      assert.equal(bitReverse(125), 95)
    })
  })
  describe('Find Closest Integer By Bit Weight', function () {
    it('should find the closest weight integer', function () {
      this.slow(-1)
      assert.equal(findClosestInt(45), 46)
    })
  })
  describe('Bitwise Addition', function () {
    it('should add non-negative integers', function () {
      assert.equal(bitAdd(12, 8), 20)
    })
  })
  describe('Bitwise Multiplication', function () {
    it('should multiply non-negative integers', function () {
      assert.equal(bitMultiply(12, 8), 96)
    })
  })
  describe('Bitwise Division', function () {
    it('should divide non-negative even integers', function () {
      assert.equal(bitDivide(18, 9), 2)
    })
    it('should divide non-negative odd integers', function () {
      assert.equal(bitDivide(53, 4), 13)
    })
  })
  describe('Bitwise Exponentiation', function () {
    it('should exponentiate positive integers', function () {
      assert.equal(bitPower(5, 7), 78125)
    })
    it('should exponentiate negative integers', function () {
      assert.equal(bitPower(1000, -3), 1e-9)
    })
  })
})
