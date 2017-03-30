/* global describe, it */
import { assert } from 'chai'
import returnOne from '../challenges/main'

describe('overall,', function () {
  it('should do things everywhere', function () {
    assert.equal(returnOne(), 2)
  })
})
