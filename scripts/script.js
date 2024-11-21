function startGame1() {
    
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(`Загаданные числа: ${randomNumber}`);

    let userGuess;
    let attempts = 0;

    while (true) {
        userGuess = prompt("Введите ваше число");
        if (userGuess === null) {
            console.log("Игра остановлена! До свидания!" );
            return;
        }

        userGuess = parseInt(userGuess);
        attempts++;

        if (isNaN(userGuess)) {
            console.log("Введите корректное значение!");
            attempts--;
            continue;
        }

        if (userGuess < randomNumber) {
            console.log("Больше!");
        } else if (userGuess > randomNumber) {
            console.log("Меньше!");
        } else {
            console.log(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток`);
            break;
        }
    }
}