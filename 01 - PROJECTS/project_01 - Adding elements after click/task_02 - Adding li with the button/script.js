const btn = document.querySelector('button');
let click = 1;

btn.addEventListener('click', () => {

    let liElement = document.createElement('li');
    liElement.textContent = click;

    click % 3 == 0 ? document.querySelector('ul').appendChild(liElement).classList.add('bold') : document.querySelector('ul').appendChild(liElement);

    click += 2;
});