const liEl = document.querySelectorAll('.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    liEl.forEach((element) => {
        element.textContent = 'Измененный текст';
    })
})