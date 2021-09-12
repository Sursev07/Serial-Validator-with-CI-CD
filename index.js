function splitString(str) {
  // Your code here
}

function reverseOddIndex(arr) {
  // Your code here
}

function decryptElement(arr) {
  // Your code here
}

function groupingSymbol(arr) {
  // Your code here
}

function serialValidator(str) {
  // Your code here
}

console.log(serialValidator("1234"));
// Harus lebih dari 9 karakter

console.log(serialValidator("79 08 86 79"));
// Serial number is valid

console.log(serialValidator("124 765 876 678"));
// Invalid serial number

console.log(serialValidator("4947 8505 6843 4597"));
// Serial number is valid

console.log(serialValidator("3417 1218 1813 1311"));
// Invalid serial number

module.exports = {
  serialValidator,
  splitString,
  reverseOddIndex,
  decryptElement,
  groupingSymbol,
};