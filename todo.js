const inputText = document.getElementById('taskInput');
const taskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function createListItem(taskText) {
const listItem = document.createElement('li');
listItem.textContent = taskText;
return listItem;
}


function addTask() {
const taskItem = inputText.value;
if (taskItem != '') {
    const newListItem = createListItem(taskItem);
    taskList.append(newListItem);
    inputText.value = '';
}
}
taskButton.addEventListener('click', addTask)