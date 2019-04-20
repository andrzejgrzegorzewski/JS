const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];
const div = document.querySelector('div');

const LCPasswords = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {
    const textInput = e.target.value.toLowerCase();

    for (let i = 0; i < LCPasswords.length; i++) {
        if (textInput === LCPasswords[i])
            div.innerHTML = messages[i];
    }
}
input.addEventListener("input", showMessage);

const love =[3,3,4,5];
console.log(love[2]);

const ala = 100;

console.log(ala*4);