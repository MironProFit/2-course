function generateRandomArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
    array.push( Math.floor(Math.random()*100));
    }
    return array;
}
let randomArray = generateRandomArray(10);
let minNumber = Math.min(...randomArray);

console.log("Случайный массив:", randomArray);
console.log("Минимальное число в массиве:", minNumber);


