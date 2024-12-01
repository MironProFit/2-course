const randomNumbers = [3, 8, 1, 5, 10, 2];

for (let i = 0; i < randomNumbers.length - 1; i++) {

    const current = randomNumbers[i];
    const next = randomNumbers[i + 1];

    const sum = current + next;

    console.log(sum);
}