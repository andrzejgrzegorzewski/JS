const btn = document.querySelector("button");

let click = 0;

btn.addEventListener('click', () => {

    // document.querySelector('body').appendChild(document.createElement('div'));

    // or

    click++;
    let div = document.createElement('div');
    div.textContent = click;
    console.log(click);

    if (click % 5 == 0)
        document.querySelector('body').appendChild(div).classList.toggle('circle');
    else
        document.querySelector('body').appendChild(div);


    // if (click % 5 == 0) ?
    //     document.querySelector('body').appendChild(div).classList.toggle('circle') :
    //     document.querySelector('body').appendChild(div);

});