function convertToRoman() {
    const num = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    if (num === '') {
        resultElement.innerText = 'Please enter a number.';
        return;
    }

    const romanNumeral = toRoman(num);
    resultElement.innerText = romanNumeral;
}

function toRoman(num) {
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

    for (const [letter, value] of romanNumerals) {
        while (num >= value) {
            roman += letter;
            num -= value;
        }
    }

    return roman;
}
