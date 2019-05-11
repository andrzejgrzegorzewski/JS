const toDoList = [];

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');

function renderList() {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    });
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    renderList();

    taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
    e.preventDefault();

    const titleTask = input.value;
    if (titleTask === "") return;

    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Delete</button>";

    toDoList.push(task);
    renderList();

    ul.appendChild(task);
    input.value = "";

    // taskNumber.textContent = document.querySelectorAll('li.task').length;
    // or

    taskNumber.textContent = listItems.length;

    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);