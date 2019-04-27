const slideList = [{
        img: "img/img1.jpg",
        text: "First text"
    },
    {
        img: "img/img2.jpg",
        text: "Second text"
    }, {
        img: "img/img3.jpg",
        text: "Third text"
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

// interface
const time = 2000;
let active = 0;

// implements
const changeDot = () => {
    console.log('object');
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));

    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

function changeSlide() {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();
}

setInterval(changeSlide, time);