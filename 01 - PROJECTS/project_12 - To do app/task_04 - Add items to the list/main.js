const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;

    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Delete</button>";

    ul.appendChild(task);
    input.value = "";

    // taskNumber.textContent = document.querySelectorAll('li.task').length;
    // or

    taskNumber.textContent = listItems.length;

    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);