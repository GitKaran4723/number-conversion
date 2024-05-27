# Number Conversion

This is a module to convert numbers between binary and decimal formats.

## Installation

```sh
npm install leaner-convc
```
## Usage

``` js
const { binaryToDecimal, decimalToBinary } = require('number-conversion');

console.log(binaryToDecimal('1010')); // 10
console.log(decimalToBinary(10));     // 1010
```

## Functions

binaryToDecimal(binary): Converts a binary string to a decimal number.
decimalToBinary(decimal): Converts a decimal number to a binary string.


## License
MIT