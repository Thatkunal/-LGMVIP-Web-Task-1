const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
function createTask(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', deleteTask);

    li.appendChild(deleteButton);
    li.addEventListener('click', toggleTask);

    return li;
}
function addTask() {
    const task = taskInput.value.trim();

    if (task) {
        const taskItem = createTask(task);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}
function toggleTask() {
    this.classList.toggle('completed');
}
function deleteTask() {
    const taskItem = this.parentNode;
    taskList.removeChild(taskItem);
}
addbutton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', handleKeyPress);
