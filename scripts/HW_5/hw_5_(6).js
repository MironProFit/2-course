const array = [9, 8, 7, 'a', 6, 5];

const sortedArray = array.filter(item => item !== 'a').sort((a, b) => a - b);

console.log(sortedArray);

