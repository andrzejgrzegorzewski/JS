const form = document.querySelector('form');
const input = document.querySelector('input');
const span = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const listOfItems = document.getElementsByClassName('task');

const inputSearch = document.querySelector('#search');




const removeTask = (e) => {
    e.target.parentNode.remove();
    span.textContent = listOfItems.length;
}

const addTask = (e) => {
    e.preventDefault();
    if (input.value === "") return;

    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = input.value + " <button>Delete</button>";
    ul.appendChild(task);

    input.value = "";
    span.textContent = listOfItems.length;

    let liElements = [...document.querySelectorAll('li')];
    inputSearch.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();

        liElements = liElements.filter(li => li.textContent.toLowerCase().includes(searchText));

        ul.textContent = "";
        liElements.forEach(li => ul.appendChild(li));

        span.textContent = listOfItems.length;
    });

    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);