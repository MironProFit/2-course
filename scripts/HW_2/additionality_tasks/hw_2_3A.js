let clientDeviceYear = 1990;
let clientDeviceOS = "Nokia 3310"

function recomendApp(clientDeviceYear, os) {
    const clientDeviceOS = clientDeviceYear < 2015;

    switch (os) {
        case "iOS":
            
        return clientDeviceOS ? "Установите облегченную версию приложения для iOS по ссылке" : "Установите приложение для iOS по ссылке";

        case "Android":
            
        return clientDeviceOS ? "Установите облегченную версию приложения для Android по ссылке" : "Установите приложение для Android по ссылке";
        
        default:
        return "Неизвестная операционная система";
    }
}
let messege = recomendApp(clientDeviceYear, clientDeviceOS);
console.log(messege);