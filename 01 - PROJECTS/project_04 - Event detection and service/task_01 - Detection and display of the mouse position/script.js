const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', (event) => {
    // console.log(event.clientX, event.clientY);

    // liczone od poczatku strony
    // h1.textContent = `${event.pageX}, ${event.pageY}`;

    // liczone od poczatku naszego monitora
    // h1.textContent = `${event.screenX}, ${event.screenY}`;

    // liczone od poczatku okna przegladarki
    h1.textContent = `${event.clientX}, ${event.clientY}`;

    //zmiana koloru
    document.body.style.backgroundColor = `rgb(${event.clientX/3},${event.clientY/2},${event.clientX/event.clientY})`;

    //bardziej uniwersalny kod do zmiany koloru z lewej 0 a z prawej 255
    const x = event.clientX + 1;
    const y = event.clientY + 1;

    const innerW = window.innerWidth;
    const innerH = window.innerHeight;

    const red = x / innerW * 100;
    const green = y / innerH * 100;
    const blue = ((x / innerW * 100) + (y / innerH * 100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
});