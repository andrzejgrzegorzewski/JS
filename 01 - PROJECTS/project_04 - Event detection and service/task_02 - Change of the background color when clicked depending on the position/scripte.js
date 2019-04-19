const bodyItem = document.querySelector('body');

bodyItem.addEventListener('click', (e) => {

    const x = e.clientX;
    const y = e.clientY;

    console.log(`${x}, ${y}`);

    // if (x % 2 == 0 && y % 2 == 0)
    //     bodyItem.style.backgroundColor = 'red';
    // else if (x % 2 != 0 && y % 2 != 0)
    //     bodyItem.style.backgroundColor = 'blue';
    // else
    //     bodyItem.style.backgroundColor = 'green';


    bodyItem.style.backgroundColor = getColor(e);
});

function getColor(e) {
    if (e.clientX % 2 == 0 && e.clientY % 2 == 0)
        bodyItem.style.backgroundColor = 'red';
    else if (e.clientX % 2 != 0 && e.clientY % 2 != 0)
        bodyItem.style.backgroundColor = 'blue';
    else
        bodyItem.style.backgroundColor = 'green';
}