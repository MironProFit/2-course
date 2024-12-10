const header = document.querySelector('h1');
const button = document.querySelector('button');

header.style.display = 'block';

button.addEventListener('click', () => {
    if (header.style.display === 'none') {
             header.style.display = 'block';
             button.textContent = 'Скрыть';

    } else {
        header.style.display = 'none';
        button.textContent = 'Показать';
    }

})