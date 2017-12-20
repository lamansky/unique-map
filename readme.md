# unique-map

Returns a copy of a Map or Object with duplicate values removed.

This module only tests values, because it’s impossible for a Map or Object to have a duplicate key. (If you want to use Map/Object keys as a basis for testing uniqueness, use the [`unique-map-by`](https://github.com/lamansky/unique-map-by) module instead.)

Optionally lets you set a numeric limit on total entries in the returned Map/Object.

## Installation

```bash
npm install unique-map --save
```

The module exports a single function.

## Usage Example

```javascript
const uniqueMap = require('unique-map')

const map = new Map([
  [1, 'A'],
  [2, 'A'],
  [3, 'B'],
])

const u = uniqueMap(map)
u.size // 2
u.get(1) // 'A'
u.get(2) // undefined
u.get(3) // 'B'
```

You can also use the `limit` argument to cap the number of total entries returned:

```javascript
const u = uniqueMap(map, {limit: 1})
u.size // 1
u.get(1) // 'A'
u.get(2) // undefined
u.get(3) // undefined
```

The module also works just as well with Objects:

```javascript
const uniqueMap = require('unique-map')

const obj = {
  1: 'A',
  2: 'A',
  3: 'B',
}

const u = uniqueMap(obj)
u[1] // 'A'
u[2] // undefined
u[3] // 'B'
```

## Related Projects

* [deduplicate](https://github.com/lamansky/deduplicate)
* [unique-array-by](https://github.com/lamansky/unique-array-by)
* [unique-iterable](https://github.com/lamansky/unique-iterable)
* [unique-iterable-by](https://github.com/lamansky/unique-iterable-by)
* [unique-map-by](https://github.com/lamansky/unique-map-by)
