let userInput = prompt("Пожалуйста, введите любое число");

let numberInput = Number(userInput);

if (typeof numberInput === 'number' && !isNaN(numberInput)) {
    (numberInput % 2 === 0) ? alert(`Число ${numberInput} четное`) : alert(`Число ${numberInput} нечетное`);
} else {
    alert("Введенное вами значение не является числом"); 
}