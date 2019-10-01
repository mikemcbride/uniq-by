# uniq-by

For when you just need lodash uniqBy without all the baggage of lodash. It removes duplicate items from an array based on a key.

## Installation

```sh
npm install uniq-by
```

## Usage

It takes an array and a key and returns unique elements by that key.

```js
const uniqBy = require('uniq-by')
const arr = [
  {
    id: 1,
    name: 'Alice'
  },
  {
    id: 2,
    name: 'Alice'
  },
  {
    id: 1,
    name: 'Bob'
  }
]

uniqBy(arr, 'id') // [{ id: 1, name: 'Alice'}, { id: 2, name: 'Alice'}]
uniqBy(arr, 'name') // [{ id: 1, name: 'Alice'}, { id: 1, name: 'Bob'}]
```
