const btn = document.querySelector("button");

let click = 0;

btn.addEventListener('click', () => {


    click++;
    let divElement = document.createElement('div');
    divElement.textContent = click;

    // if (click % 5 == 0)
    //     document.querySelector('body').appendChild(divElement).classList.toggle('circle');
    // else
    //     document.querySelector('body').appendChild(divElement);

    // or

    click % 5 == 0 ? document.body.appendChild(divElement).classList.add('circle') : document.body.appendChild(divElement);

});