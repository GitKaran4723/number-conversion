// index.js
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

function decimalToBinary(decimal) {
    return decimal.toString(2);
}

module.exports = {
    binaryToDecimal,
    decimalToBinary
};
