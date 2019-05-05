const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const div = document.querySelector('div.time div');

let second = 0;
let flag = true;
let idInterval;

const start = () => {
    second++;
    div.textContent = (second / 100).toFixed(2);
}

const timer = () => {
    if (flag) {
        flag = !flag;
        btnStart.textContent = "Pause";
        idInterval = setInterval(start, 10);
    } else {
        flag = !flag;
        btnStart.textContent = "Start";
        clearInterval(idInterval);
    }
}


function reset() {
    second = 0;
    div.textContent = "0.00";
    clearInterval(idInterval);
    btnStart.textContent = "Start";
    flag = true;
}

btnStart.addEventListener('click', timer);
btnReset.addEventListener('click', reset);