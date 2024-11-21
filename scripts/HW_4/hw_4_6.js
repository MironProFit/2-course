function cubeNumber() {
    let userInput = prompt("Введите число:")
    let number = Number(userInput)
    
    if (isNaN(userInput)) {
        return 'Переданный параметр не является числом';
    } else {
        let cube = userInput ** 3;
        return (`${userInput} в кубе равняется ${cube}`);
    }
}
console.log(cubeNumber());