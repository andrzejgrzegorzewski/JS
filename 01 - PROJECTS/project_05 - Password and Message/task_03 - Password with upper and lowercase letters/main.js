const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

passwords.forEach((password, i) => {
    passwords[i] = password.toLowerCase();
    console.log(passwords[i]);
})

const showMessage = (e) => {
    const input = e.target.value.toLowerCase();

    document.querySelector('div').textContent = '';

    passwords.forEach((password, i) => {
        if (password === input) {
            document.querySelector('div').textContent = messages[i];
        }
    })
}

input.addEventListener("input", showMessage)