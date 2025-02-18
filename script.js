function convertToRoman(num) {
    const romanNumerals = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = '';
    
    for (let [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }
    
    return result;
}

document.getElementById('convertButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    const number = parseInt(numberInput);
    
    if (number >= 0 && number <= 100000) {
        const romanNumeral = convertToRoman(number);
        resultElement.textContent = romanNumeral;
    } else {
        resultElement.textContent = 'Please enter a number between 0 and 100000.';
    }
});