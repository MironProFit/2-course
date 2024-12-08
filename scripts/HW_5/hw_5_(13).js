const numbers = [5, -2, 0, 3, -7, 8, -1];
const negativeNumbers = getNegativeNumbers(numbers);

function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

console.log(negativeNumbers);
