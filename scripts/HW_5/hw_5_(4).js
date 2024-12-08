const rows = 3;
const cols = 3;
const multiArray = [];

for (let i = 0; i < rows; i++) {
    const innerArray = [];
    for (let j = 0; j < cols; j++) {
        innerArray.push(1);
    }
    multiArray.push(innerArray);
}
console.log(multiArray);