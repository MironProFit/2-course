// Игра 1

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

// Игра 2 Простая 

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
            const correctAnswer = randomOperator.func(num1, num2);
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

// Игра 3

function startGame3() {
    const userWord = prompt("Введите слово!");

    if (userWord) {
        const reversedWord = userWord.split('').reverse().join('');
        alert(`Перевернутое слово: ${reversedWord}`);
    } else {
        alert("Вы не ввели слово.")
    }

}

// Игра 4

function startGame4() {
    
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const q = quiz[i];
        let questionText = q.question + "\n";
        
        for (let j = 0; j < q.options.length; j++) {
            questionText += q.options[j] + "\n"
        }

        const userAnswer = prompt(questionText + "Введите вариант с правильным ответом");
        
        if (parseInt(userAnswer) === q.correctAnswer) {
            score++
        }
    }
    alert(`Вы ответили правильно на ${score} вопросов из ${quiz.length}`)
}

// Игра 5


function startGame5() {
    const choises = ["камень","ножницы","бумага"];
    const userChoise = prompt("Введите ваш выбор: камень, ножницы, бумага").toLowerCase();

    if (!choises.includes(userChoise)) {
        console.log("Неправильный выбор. Попробуйте еще раз!");
        return;
    }
    const computerChoise = choises[Math.floor(Math.random() * choises.length)];

    let result;

    if (userChoise === computerChoise) {
        result = "Ничья!";
    } else if (
        (userChoise === "камень" && computerChoise === "ножницы") || (userChoise === "ножницы" && computerChoise === "бумага") || (userChoise === "бумага" && computerChoise === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }
    alert(`Ваш выбор: ${userChoise},\nКомпьютер выбрал: ${computerChoise}, \n${result}`);

}


// Игра 6

const playButton = document.getElementById('game_6');
let changeBackgroundButton;

playButton.addEventListener('click', () => {

    if (!changeBackgroundButton) {

        changeBackgroundButton = document.createElement('button');
        
        changeBackgroundButton.textContent = 'Сменить фон';
        
        changeBackgroundButton.classList.add('catalog-item__btn');
    }


    playButton.insertAdjacentElement('beforeend', changeBackgroundButton);

    changeBackgroundButton.addEventListener('click', () => {

        const galleryConteiner = document.querySelector('.gallery-conteiner');

        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        galleryConteiner.style.backgroundColor = randomColor;

    });
})