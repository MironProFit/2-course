const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (let name in obj) {
    console.log(`${name} - зарплата: ${obj[name]} тысяч русских рублей`);
}