document.body.style.height = 10000 + 'vh';

const divElement = document.createElement('div');
document.body.appendChild(divElement);

let size = 10;

divElement.style.position = "fixed";
divElement.style.width = '100%';
divElement.style.top = 0;
divElement.style.left = 0;
divElement.style.backgroundColor = "green";
divElement.style.height = size + 'px';

let flag = true;

function changeHeight() {

    if (flag)
        size += 5;
    else
        size -= 5;

    divElement.style.height = size + 'px';

    if (size >= window.innerHeight / 2) {
        flag = !flag;
        divElement.style.backgroundColor = "red";
    } else if (size == 10) {
        flag = !flag;
        divElement.style.backgroundColor = "green";
    }

}

window.addEventListener('scroll', changeHeight);