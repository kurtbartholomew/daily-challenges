/* global describe, it */

import { assert } from 'chai'
import returnBitParity from '../challenges/bit_manipulation/parity'

describe('Bit Manipulation', function () {
  describe('Bit Parity', function () {
    it('should return 1 if x = 14', function () {
      assert.equal(returnBitParity(14), 1)
    })
    it('should return 0 if x = 538', function () {
      assert.equal(returnBitParity(538), 0)
    })
  })
})
