const currentDate = new Date();
const futureDate = new Date(currentDate);

futureDate.setDate(currentDate.getDate() + 73);

const options = { year: 'numeric', month: 'long', day: 'numeric'};
const formatDate = futureDate.toLocaleDateString('ru-Ru', options);

console.log(formatDate);