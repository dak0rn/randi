# randi
## A small ID generator

randi is a small ID generator library. It is not meant to be
used for things like UUIDs or truly unique identifiers but for
things like URL shorteners.

## Installation
It can be installed with either bower or npm depending on the environment.

```bash
npm install --save randi
```

```bash
bower install -S randi
```

## Setup
Randi supports different kinds of setup scenarios. In other words,
it can be used in a CommonJS environment like node.js, in a AMD
environment like require.js or in the browser without any module
management (where it will export a global function `randi()`);


## Usage
`randi()` is a function that takes two arguments, the `length` and 
optional `options`.

`length`: Length of the string to be generated
`options`: An object with options, default values below:

```json
{
    "charset": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
}
```

It is also possible to provide the options only. `randi()` will then return
a function that takes the length as argument and returns the ID (currying).

## Example

```javascript
var randi = require('randi');

for( var i = 0; i < 10; i++ )
    console.log('%s %s %s %s\n'
        randi(10),
        randi(5),
        randi(2),
        randi(10) );
```
