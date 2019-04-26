const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = 'lorem dsaf asdf as df fasdfasdfas dsafkjaslkjf  adjf ;lj;  kjkj;lkj l;jlkj ;kj kljiewjrioj oij i jmldk;jflkasd;jlfkjdas;ifjparyhifnadsnf,m.dasnfdsfnluanlurie rkj ; asd fasd f LLL';

const cursorAnimation = () => spanCursor.classList.toggle('active');

// parameters
let indexText = 0;
const time = 40;

// implementation
function addLetter() {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);