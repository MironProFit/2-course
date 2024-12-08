function generateRandomNumber() {
    const randomNumber =  Math.floor(Math.random() * 10) + 1;

    return randomNumber;

}
const resut = generateRandomNumber();

console.log(resut);