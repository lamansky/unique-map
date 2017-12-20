'use strict'

const assert = require('assert')
const uniqueMap = require('.')

describe('uniqueMap()', function () {
  it('should return a Map if given a Map', function () {
    assert(uniqueMap(new Map()) instanceof Map)
  })

  it('should return an Object if given an Object', function () {
    assert.strictEqual(typeof uniqueMap({}), 'object')
  })

  it('should remove duplicate values from a Map', function () {
    const u = uniqueMap(new Map([[1, 'a'], [2, 'a']]))
    assert.strictEqual(u.size, 1)
    assert.strictEqual(u.get(1), 'a')
    assert(!u.has(2))
  })

  it('should remove duplicate values from an Object', function () {
    const u = uniqueMap({a: 1, b: 1})
    assert.strictEqual(Object.keys(u).length, 1)
    assert.strictEqual(u.a, 1)
    assert.strictEqual(typeof u.b, 'undefined')
  })

  it('should support a limit argument', function () {
    const u = uniqueMap({a: 1, b: 2, c: 3}, {limit: 2})
    assert.strictEqual(Object.keys(u).length, 2)
    assert.strictEqual(u.a, 1)
    assert.strictEqual(u.b, 2)
    assert.strictEqual(typeof u.c, 'undefined')
  })
})
