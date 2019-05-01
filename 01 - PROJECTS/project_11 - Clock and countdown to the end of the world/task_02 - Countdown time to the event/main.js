50
const endTime = new Date('2020-05-01 06:55:34').getTime();

const time = document.querySelector('span');

setInterval(() => {
    const nowTime = new Date().getTime();

    const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
    console.log(days);

    let hours = (Math.floor((endTime / (1000 * 60 * 60)) - (nowTime / (1000 * 60 * 60)))) % 24;

    hours = hours < 10 ? `0${hours}` : hours;

    const minutes = (Math.floor((endTime / (1000 * 60)) - (nowTime / (1000 * 60)))) % 60;

    const seconds = (Math.floor((endTime / (1000)) - (nowTime / (1000)))) % 60;

    time.textContent = `days: ${days}, hours: ${hours}, minute: ${minutes}, second: ${seconds}`;
});