let monthNumber = 13;

if (monthNumber > 12)  
    {console.log("Номер месяца не может быть больше 12"); 

} else {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            console.log("Зима");
        break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
        break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
        break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
        break;

    default:
        console.log('Некорректный номер месяца');
        break;
}
}