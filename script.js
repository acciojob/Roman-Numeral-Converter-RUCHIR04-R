function convertToRoman() {
    var num = document.getElementById('numberInput').value;
    var result = document.getElementById('result');
    
    if (isNaN(num) || num <= 0) {
        result.innerText = 'Invalid Input';
        return;
    }

    var roman = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    var converted = '';

    for (var i = 0; i < roman.length; i++) {
        while (num >= roman[i][1]) {
            converted += roman[i][0];
            num -= roman[i][1];
        }
    }

    result.innerText = converted.toUpperCase();
}
