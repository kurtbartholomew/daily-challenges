/* global describe, it */

import { assert } from 'chai'
import templateFunction from '../challenges/example'

describe('Template', function () {
  it('should use this structure', function () {
    assert.equal(templateFunction(), 2)
  })
})
