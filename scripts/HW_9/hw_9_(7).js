const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const firstDescription = document.querySelectorAll('.description');

    
    if (firstDescription.length > 0) {
        firstDescription[0].remove();
        
    } else {
        console.log("Элемнт не найден");
    }
})