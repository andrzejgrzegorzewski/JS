const inputMin = document.querySelector('.min');
const inputMax = document.querySelector('.max');

const number = document.querySelector('.number');
const integer = document.querySelector('.integer');

let h1Number = document.querySelector('.h1Number');
let h1Integer = document.querySelector('.h1Integer');


const numberRandom = () => {
    const number = (Math.random() * (inputMax.value - inputMin.value)) + inputMin;
    h1Number.textContent = number;
}

function la(la, al) {
    console.log(Math.floor(Math.random() * (la - al) + al));
    return Math.floor(Math.random() * (la - al) + al);
}

const integerRandom = () => {
    let num = Math.floor(Math.random() * (inputMax.value - inputMin.value + 1));
    num += inputMax.value;

    h1Integer.textContent = num;

    // h1Integer.textContent = la(inputMin.value, inputMax.value);
    // console.log(h1Integer.textContent);

}


number.addEventListener('click', numberRandom);
integer.addEventListener('click', integerRandom);