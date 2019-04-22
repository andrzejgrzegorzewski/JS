const names = [];
const div = document.querySelector('div');

function addName(e) {
    //zabezpieczenie przed oswiezeniem sie strony
    e.preventDefault();

    const input = document.querySelector('input');
    const newName = input.value;
    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert('It is already!');
                return;
            }
        }
        names.push(newName);
        div.textContent += newName + ', ';
        input.value = '';
    }

}

document.querySelector('button').addEventListener('click', addName);