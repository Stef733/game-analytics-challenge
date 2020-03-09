const assert = require('assert')
const { $ } = require('../utils')

describe('utils', () => {
  describe('$()', () => {
    // The document object has been tested for us so we just need to make sure call the right methods
    const getElementById = queryName => `queried ${queryName} by id`
    const getElementsByClassName = queryName => `queried ${queryName} by class`

    before(() => {
      global.document = {
        getElementById,
        getElementsByClassName
      }
    })

    it('should select by id', () => {
      const query = '#idQuery'
      const expectedResult = 'queried idQuery by id'

      const result = $(query)
      assert.equal(result, expectedResult)
    })

    it('should select by class', () => {
      const query = '.classNameQuery'
      const expectedResult = 'queried classNameQuery by class'

      const result = $(query)
      assert.equal(result, expectedResult)
    })

    it('should return null for non-string', () => {
      const query = 142
      const expectedResult = null

      const result = $(query)
      assert.equal(result, expectedResult)
    })

    it('should return null for invalid string', () => {
      const query = 'invalid'
      const expectedResult = null

      const result = $(query)
      assert.equal(result, expectedResult)
    })
  })
})
