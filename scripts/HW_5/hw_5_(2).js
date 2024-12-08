const array = [1, 5, 4, 10, 0, 3];
const index = array.indexOf(4);

if (index !== -1) {
    console.log(`Индекс значения 4: ${index}`);
} else {
    console.log(`Значение 4 не найдено в массиве.`);
}