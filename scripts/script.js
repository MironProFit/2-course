const randomNumber = Math.floor( Math.random() * 100 ) + 1;

let userNumber = 0;
let attemps = 0;

function userNumber() {
    userNumber = parseInt(prompt("Угадайте число от 1 до 100:"));

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        alert("Пожалуйста, введите число от 1 до 100.");
    }
}
