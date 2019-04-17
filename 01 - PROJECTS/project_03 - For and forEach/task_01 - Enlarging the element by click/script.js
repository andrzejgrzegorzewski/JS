const btn = document.querySelector('button');
const liAllTab = [...document.querySelectorAll('li')];

let fSize = 10;

let flag = true;

// for
// function magnify() {

//     if (flag) {
//         for (let i = 0; i < liAllTab.length; i++) {
//             liAllTab[i].style.display = 'block';
//             liAllTab[i].style.fontSize = fSize + 'px';
//         }
//         flag = !flag;
//     } 
//         for (let i = 0; i < liAllTab.length; i++) {
//             fSize++;
//             liAllTab[i].style.fontSize = fSize + 'px';
//         }
// }


// forEach
// function magnify() {

//     if (flag) {

//         liAllTab.forEach((li) => {
//             li.style.display = "block";
//             li.style.fontSize = fSize + 'px';
//             li.style.margin = "0 50px";
//         });

//         flag = !flag;
//     }

//     fSize++;
//     liAllTab.forEach((li) => {
//         li.style.fontSize = `${fSize}px`;
//     });
// }


// or

function magnify() {

    liAllTab.forEach((li) => {
        flag ? (
            li.style.display = "block",
            li.style.fontSize = fSize + 'px',
            li.style.margin = "0 50px"
        ) : li.style.fontSize = `${fSize}px`;
    });

    flag = !flag;
    fSize++;
}

btn.addEventListener('click', magnify);