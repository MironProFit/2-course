const header = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', () =>  {
    header.textContent = 'Привет, мир!'
})