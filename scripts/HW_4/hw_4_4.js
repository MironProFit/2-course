ascAge()
function ascAge() {
    let age = prompt("Сколько вам лет?");
    age = Number(age);
  
    if (isNaN(age) || age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    } else if (age >= 13) {
        console.log('Добро пожаловать!');
    }
}
