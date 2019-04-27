const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');

const txt = ['txt 1', 'txt 2', 'txt 3', 'txt 4'];

let indexArray = 0;
let indexLetter = -5;

const addLetter = () => {
    if (indexLetter >= 0) spanText.textContent += txt[indexArray][indexLetter];

    indexLetter++;
    if (indexLetter === txt[indexArray].length) {
        indexArray++;
        if (indexArray === txt.length) return

        return setTimeout(() => {
            indexLetter = -5;
            spanText.textContent = '';
            addLetter();
        }, 400);
    }
    setTimeout(addLetter, 300);
}

const cursorAnimation = () =>
    spanCursor.classList.toggle('active');

addLetter();
setInterval(cursorAnimation, 300);