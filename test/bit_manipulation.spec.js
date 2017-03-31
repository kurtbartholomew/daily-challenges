/* global describe, it */

import { assert } from 'chai'
import returnBitParity from '../challenges/bit_manipulation/parity'
import bitSwap from '../challenges/bit_manipulation/swapBits'
import bitReverse from '../challenges/bit_manipulation/reverseBits'
import findClosestInt from '../challenges/bit_manipulation/findClosestWeightInt'
import bitMultiply from '../challenges/bit_manipulation/bitMultiply'
import bitDivide from '../challenges/bit_manipulation/bitDivide'
import bitPower from '../challenges/bit_manipulation/bitExponentiation'

describe('Bit Manipulation', function () {
  describe('Bit Parity', function () {
    it('should return 1 if x = 14', function () {
      assert.equal(returnBitParity(14), 1)
    })
    it('should return 0 if x = 538', function () {
      assert.equal(returnBitParity(538), 0)
    })
  })
  describe('Bit Swap', function () {
    it('should properly swap bits if they differ', function () {
      assert.equal(bitSwap(325, 2, 5), 203)
    })
    it('should return the same number if bits are the same', function () {
      assert.equal(bitSwap(125, 2, 5), 125)
    })
  })
  describe('Bit Reversal', function () {
    it('should reverse bits properly', function () {
      assert.equal(bitReverse(325), 203)
    })
    it('should return same number if bits are symmetrical', function () {
      assert.equal(bitReverse(125), 125)
    })
  })
  describe('Find Closest Integer By Bit Weight', function () {
    it('should find the closest weight integer', function () {
      assert.equal(findClosestInt(43), 46)
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
      assert.equal(bitPower(1000, -3), 0.001)
    })
  })
})
