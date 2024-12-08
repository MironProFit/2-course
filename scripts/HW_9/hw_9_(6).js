const button = document.querySelector('button');

button.addEventListener('click', () => {

    const newParagraph = document.createElement('p');

    newParagraph.textContent = 'Новый абзац';

    document.body.appendChild(newParagraph);
})