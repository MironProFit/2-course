let userInput = prompt("Пожалуйста, введите любое число");

let numberInput = Number(userInput);

if (!isNaN(numberInput)) {
    if (numberInput % 2 === 0) {
        alert(`Число ${numberInput} четное`);
    } else { 
        alert(`Число ${numberInput} нечетное`);
}
} else {
    alert("Введенное вами значение не является числом"); 
}