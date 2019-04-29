setInterval(() => {
    const time = new Date();
    document.querySelector('span').textContent = `${time.getHours()<10? "0" + time.getHours():time.getHours()}:${time.getMinutes()<10? "0"+time.getMinutes():time.getMinutes()}:${time.getSeconds()<10? "0" + time.getSeconds():time.getSeconds()}`;

    // or
    // document.querySelector('span').textContent = time.toLocaleTimeString();
}, 1000);