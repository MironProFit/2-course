const integers = [1, 2, 3, 4, 5];
const squares = squareNumbers(integers);


function squareNumbers(numbers) {
    return numbers.map(num => num * num);
}

console.log(squares);

