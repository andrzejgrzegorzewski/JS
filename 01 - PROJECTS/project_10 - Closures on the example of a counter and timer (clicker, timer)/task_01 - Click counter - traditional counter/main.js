// old way

// let number = 0;

// const count = () => {
//     number++;
//     document.body.textContent = `counter status -  ${number}`;
// }
// document.addEventListener('click', count);

// new way

const add = (start = 0) => {
    let number = start;

    return () => {
        number++;

        document.body.textContent = `counter status -  ${number}`;
    }
}

const counter = add(7);

document.addEventListener('click', counter);