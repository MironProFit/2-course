const strings = ["cat", "monkey", "солнце", "ветер", "дождь",];
const lengths = wordLengths(strings);

function wordLengths(words) {
    return words.map(word => word.length);
}

console.log(lengths);
