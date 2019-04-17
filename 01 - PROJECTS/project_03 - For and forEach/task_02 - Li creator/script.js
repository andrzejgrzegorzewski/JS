let size = 10;
let orderElement = 1;

const init = () => {

    const btn = document.createElement('button');
    btn.textContent = 'Li creator';
    btn.style.fontSize = '5vh';
    btn.style.fontFamily = 'arial';
    btn.style.margin = '20px 20px';
    btn.style.padding = '5px 10px';
    btn.style.textTransform = 'uppercase';
    btn.style.cursor = 'pointer';

    const btnReset = document.createElement('button');
    btnReset.textContent = 'Reset';
    btnReset.style.fontSize = '5vh';
    btnReset.style.fontFamily = 'arial';
    btnReset.style.margin = '20px 20px';
    btnReset.style.padding = '5px 10px';
    btnReset.style.textTransform = 'uppercase';
    btnReset.style.cursor = 'pointer';

    document.body.appendChild(btn);
    document.body.appendChild(btnReset);

    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', cleanList);
}

const createLiElements = () => {

    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.style.fontFamily = 'arial';
        li.style.listStyleType = 'none';
        li.style.padding = '5px 10px';
        li.style.fontSize = size + 'px';

        li.textContent = `Item nr ${orderElement++}`;

        document.querySelector('ul').appendChild(li);
        li.style.fontSize = `${size++}px`;
    }
}

function cleanList() {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}

init();