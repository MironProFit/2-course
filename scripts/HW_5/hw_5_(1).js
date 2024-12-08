const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
    if (array[i] === 10) {
        break;
    }
}