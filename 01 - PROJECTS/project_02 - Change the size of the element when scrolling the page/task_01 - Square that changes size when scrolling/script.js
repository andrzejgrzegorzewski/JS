const square = document.createElement('div');
document.body.appendChild(square);

let size = 10;
square.style.width = `${size}px`;
square.style.height = `${size}px`;

let grow = true;

// max square size
// window.innerWidth * 0.5


window.addEventListener('scroll', () => {

    grow ? (
        square.style.width = `${size}px`,
        square.style.height = `${size}px`,
        size += 5) : (
        square.style.width = `${size}px`,
        square.style.height = `${size}px`,
        size -= 5);

    if (size >= window.innerWidth * 0.3)
        grow = !grow;
    else if (size == 10)
        grow = !grow;

})