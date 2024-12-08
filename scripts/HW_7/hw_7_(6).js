function generateRandomArray(num) {
    if (!Number.isInteger(num) || num <= 0) {
        return 'Введите любое число больше 0';
    }

    const length = Math.floor(num / 2);
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * num);
        randomArray.push(randomNumber);
    }
    return randomArray
}

const result = generateRandomArray(40);
console.log(result);