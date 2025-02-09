function convertToRoman(num) {
    var numerais = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    },
        romano = '', i;

    for (i in numerais) {
        while (num >= numerais[i]) {
            romano += i;
            num -= numerais[i];
        }
    }
    return romano;
}

console.log(convertToRoman("36"));