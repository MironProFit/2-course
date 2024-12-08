const  array = [9, 8, 7, 6, 5];
const userInput = prompt("Угадайте число из массива [9, 8, 7, 6, 5]");

const guesseNumber = Number(userInput);

if (array.includes(guesseNumber)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}