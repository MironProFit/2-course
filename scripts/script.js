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



function startGame2() {
    function generateRandomTask() {
        const operations = [
            {symbol: '+', func: (a, b) => a + b},
            {symbol: '-', func: (a, b) => a - b},
            {symbol: '*', func: (a, b) => a * b},
            {symbol: '/', func: (a, b) => a / b},
        ];

        const randomOperator = operations[Math.floor(Math.random() * operations.length)];

        const num1 = Math.floor(Math.random() * 10) + 1; 
        const num2 = Math.floor(Math.random() * 10) + 1; 

        let task;
        let correctAnswer;

        if (randomOperator.symbol === '/') {
            task = `${num1 * num2} ${randomOperator.symbol} ${num2}`;
            correctAnswer = num1;
        } else {
            task = `${num1} ${randomOperator.symbol} ${num2}`;
            correctAnswer = randomOperator.func(num1, num2);
        }

        return { task, correctAnswer };

    }
    
    function checkUserAnswer() {
        const {task, correctAnswer} = generateRandomTask();
        const userAnswer = parseFloat(prompt(`Решите задачу: ${task}`));

        if (userAnswer === correctAnswer) {
            alert(`Правильный ответ!`);
        } else {
            alert(`Неправильный ответ! Правильный ответ: ${correctAnswer}`);
        }
    }
    checkUserAnswer();
}
