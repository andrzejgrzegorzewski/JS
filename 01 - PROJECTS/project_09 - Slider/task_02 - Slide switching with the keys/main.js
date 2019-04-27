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

const keyChangeSlide = (e) => {

    clearInterval(indexSlider);

    switch (e.keyCode) {
        case 37:
            if (active === 0) active = dots.length;

            active -= 2;
            changeSlide();
            console.log(active);
            break;

        case 39:
            changeSlide();
            console.log(active);
            break;

        default:
            break;
    }
    indexSlider = setInterval(changeSlide, time);
}

window.addEventListener('keydown', keyChangeSlide);
let indexSlider = setInterval(changeSlide, time);