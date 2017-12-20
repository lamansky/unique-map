'use strict'

const {reconstruct, entries} = require('m-o')
const uniqueIterableBy = require('unique-iterable-by')

module.exports = (map, options) => reconstruct(map, uniqueIterableBy(entries(map), 1, options))
