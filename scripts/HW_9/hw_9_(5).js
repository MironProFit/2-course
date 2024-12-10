const liEl = document.querySelectorAll('.description');
const button = document.querySelectorAll('button');

button.forEach((button) => {
    button.addEventListener('click', () => {
        liEl.forEach((element) => {
            element.textContent = 'Новый текст'
        })
    })
})
