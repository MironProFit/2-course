function formatDate(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", 
                    "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    
    const weekdays = ["воскресенье", "понедельник", "вторник", 
                      "среда", "четверг", "пятница", "суббота"];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const dateString = `Дата: ${day} ${month} ${year} — это ${weekday}.`;
    const timeString = `Время: ${hours}:${minutes}:${seconds}`;

    return `${dateString}\n${timeString}`;
}

const currentDate = new Date();
console.log(formatDate(currentDate));