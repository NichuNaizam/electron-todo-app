const { ipcRenderer } = require("electron");

const list = document.getElementById('todo-list');
const input = document.getElementById('todo-text');

ipcRenderer.on('clear-all', async () => {
    list.innerHTML = '';
})

function addTodo() {
    let item = document.createElement('li');
    item.innerHTML = input.value;
    item.className = 'todo-item';
    item.onclick = function () {
        item.remove();
    }

    list.appendChild(item);

    input.value = '';
}