function getRandomInRange(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'Введите 2 числа';
    }
    if (min > max) {
        return 'Первое число должно быть больше второго';
    }
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNumber;

}

const result = getRandomInRange(5, 20);
console.log(result);