const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenNumbers = randomArray.filter(num => num % 2 === 0);

console.log("Исходный массив:", randomArray);
console.log("Четные значения:", evenNumbers);