function printDate() {
    const currentDate = new Date();
    console.log(currentDate.toString());
}

let secondsPassed = 0;
const interval = setInterval(() => {
    printDate();
    secondsPassed += 3;

    if (secondsPassed >= 30) {
        clearInterval(interval);
        console.log("30 секунд прошло");
    }
}, 3000);