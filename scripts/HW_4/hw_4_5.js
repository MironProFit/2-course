function multiplyNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числами';
    }
    return Number(a) * Number(b);
}
console.log(multiplyNumbers(10, 100));
