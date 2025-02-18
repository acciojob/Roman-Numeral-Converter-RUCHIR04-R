function convertToRoman(num) {
  const romanNumerals = [
    ['M', 1000], 
    ['CM', 900], 
    ['D', 500], 
    ['CD', 400], 
    ['C', 100], 
    ['XC', 90], 
    ['L', 50], 
    ['XL', 40], 
    ['X', 10], 
    ['IX', 9], 
    ['V', 5], 
    ['IV', 4], 
    ['I', 1]
  ];

  let roman = '';

  for (let [letter, value] of romanNumerals) {
    while (num >= value) {
      roman += letter;
      num -= value;
    }
  }

  return roman;
}

function showRomanNumeral() {
  const number = document.getElementById('numberInput').value;
  if (number >= 0 && number <= 100000) {
    const result = convertToRoman(parseInt(number));
    document.getElementById('result').innerText = result;
  } else {
    document.getElementById('result').innerText = 'Please enter a number between 0 and 100000.';
  }
}

// Example usage:
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
console.log(convertToRoman(100000)); // Output: (Historically, Roman numerals were not typically used for numbers this large, and modern conventions vary)
