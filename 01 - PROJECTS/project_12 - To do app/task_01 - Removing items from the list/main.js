const removeTask = () => {
    // console.log(event.target.parentNode);
    // event.target.parentNode.remove();
    // or

    // event.target.parentNode.style.textDecoration = "line-through";

    // or

    const index = event.target.dataset.key;

    console.log(document.querySelector(`li[data-key = "${index}"]`));

    document.querySelector(`li[data-key = "${index}"]`).remove();
}

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));