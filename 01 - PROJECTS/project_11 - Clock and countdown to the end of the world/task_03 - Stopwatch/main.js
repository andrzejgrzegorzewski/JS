const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const div = document.querySelector('div.time div');

let second = 0;
let flag = true;

const count = () => {

    flag ? (btnStart.textContent = "Pause",

        setInterval(() => {
            second++;
            div.textContent = second;

            flag != flag;
        }, 1000)

    ) : (btnStart.textContent = "Start",
        flag != flag
    );
}

btnStart.addEventListener('click', count);