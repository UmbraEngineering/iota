# iota

A super-simple Node.js integer iterator function

## Install

```bash
$ npm install iota
```

## Usage

```javascript
var iota = require('iota');

var a = iota();  // a === 0
var b = iota();  // b === 1
var c = iota();  // c === 2

iota.reset();

var d = iota(); // d === 0
var e = iota(); // e === 1

iota.set(5);

var f = iota();  // f === 5
var g = iota();  // g === 6
```

