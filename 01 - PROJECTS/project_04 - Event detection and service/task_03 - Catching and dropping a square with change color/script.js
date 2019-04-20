const div = document.querySelector('div');
let divX = 550;
let divY = 100;

div.style.left = divX + "px";
div.style.top = divY + "px";

let drawActive = false;

let insertDivX;
let insertDivY;

// function down(e) {
//     div.style.backgroundColor = 'white';
//     document.body.style.backgroundColor = 'black';
//     drawActive = true;
//     insertDivX = e.offsetX;
//     insertDivY = e.offsetY;
// }

// function move(e) {
//     if (drawActive) {
//         divX = e.clientX - insertDivX;
//         divY = e.clientY - insertDivY;
//         div.style.left = divX + "px";
//         div.style.top = divY + "px";
//     }
// }

// function up() {
//     div.style.backgroundColor = 'black';
//     document.body.style.backgroundColor = 'white';
//     drawActive = false;
// }

// div.addEventListener('mousedown', down);
// document.addEventListener('mousemove', move);
// document.addEventListener('mouseup', up);

// or

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'black';
    drawActive = true;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
});
document.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.left = divX + "px";
        div.style.top = divY + "px";
    }
});
document.addEventListener('mouseup', () => {
    div.style.backgroundColor = 'black';
    document.body.style.backgroundColor = 'white';
    drawActive = false;
});