const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    const showName = () => {
        console.log(`Hi ${userName}, ${userAge>=18? "You can drink alcohol":"You can not drink alcohol"}`);
    }

    return showName;
}

const hans = user("Hans", 20);

hans();