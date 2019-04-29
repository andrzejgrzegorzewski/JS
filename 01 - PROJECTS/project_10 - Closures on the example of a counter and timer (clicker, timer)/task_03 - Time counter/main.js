// function time() {
//     return () => {
//         let count = 0;
//         setInterval(() => {
//             document.body.textContent = `${count} seconds`;
//             count++;
//         }, 1000);
//     }
// }

// const show = time();
// show();

// or
function time() {
    let count = 0;
    return () => {
        document.body.textContent = `${count}  seconds`;
        count++;
    }
}

const show = time();
setInterval(show, 1000);