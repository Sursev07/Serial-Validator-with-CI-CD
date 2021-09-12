function splitString(str) {
  // Your code here
  let output = []
  let number = ''

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ' ' || str[i] === undefined) {
      output.push(number)
      number = ''
    } else {
      number += str[i]
    }
  }

  return output
}

function reverseOddIndex(arr) {
  // Your code here
  let output = []

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      let reverse = ''
  
      for (let j = arr[i].length - 1; j >= 0; j--) {
        reverse += arr[i][j]
      }
  
      output.push(reverse)
    } else {
      output.push(arr[i])
    }
  }

  return output
}

function decryptElement(arr) {
  // Your code here
  let output = []
  let symbol = '!@#$%^&*()'

  for (let i = 0; i < arr.length; i++) {
    let decrypt = ''
    
    for (let j = 0; j < arr[i].length; j++) {
      let index = Number(arr[i][j])

      if (i % 2 === 1) {
        if (index === 0) {
          index = 9
        } else {
          index -= 1
        }
      }

      decrypt += symbol[index]
    }

    output.push(decrypt)
  }

  return output
}

function groupingSymbol(arr) {
  // Your code here
  let output = []

  for (let i = 0; i < arr.length; i += 2) {
    let temp = []
    for (let j = 0; j < 2; j++) {
      temp.push(arr[i + j])
    }
    output.push(temp)
  }

  return output
}

function serialValidator(str) {
  // Your code here
  if (String(str).length < 9) {
    return 'Harus lebih dari 9 karakter'
  }

  let splitted = splitString(str)
  let reversed = reverseOddIndex(splitted)
  let decrypted = decryptElement(reversed)
  let grouped = groupingSymbol(decrypted)

  for (let i = 0; i < grouped.length; i++) {
    if (grouped[i][0] !== grouped[i][1]) {
      return 'Invalid serial number'
    }
  }

  return 'Serial number is valid'
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
