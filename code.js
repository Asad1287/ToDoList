console.log('Todo');
var todoList = [];
var todoInput = document.getElementById('todoInput');
var todoListDiv = document.getElementById('todoListContainer');
var isEnter = function (event) {
    event.preventDefault();
    if (event == undefined) {
        return false;
    }
    else if (event.keyCode === 13) {
        return true;
    }
    return false;
};
var addTodo = function () {
    if (todoInput.value === '') {
        return;
    }
    todoList.push(todoInput.value);
    todoInput.value = '';
    updateTodo();
    todoList.sort();
};
var updateTodo = function () {
    todoListDiv.innerHTML = '';
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'todoList');
    todoListDiv.appendChild(ul);
    for (var i = 0; i < todoList.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('class', 'todoItem');
        li.innerText = todoList[i];
        li.innerHTML = "<a href = '#' onclick='removeListTodo(\"" + todoList[i] + "\")'>" + todoList[i] + "</a>";
        ul.appendChild(li);
    }
};
var removeListTodo = function (itemToRemove) {
    todoList.splice(todoList.indexOf(itemToRemove), 1);
    updateTodo();
};
var filterTodoList = function () {
    var todoListHtml = document.getElementById('todoList');
    if (todoListHtml == null) {
        console.log("Nothing to filter");
        return;
    }
    var todoListFilter = document.getElementById('todoFilter');
    var todoListFilterText = todoListFilter.value.toUpperCase();
    todoListHtml.childNodes.forEach(function (item) {
        var itemText = item.textContent;
        if (itemText !== null) {
            itemText = itemText.toUpperCase();
            if (itemText.startsWith(todoListFilterText)) {
                item.style.display = "list-item";
            }
            else {
                item.style.display = "none";
            }
        }
    });
};
// creating an event function for keypress or click
//creating an add event to list
//creating a remove event to list
//add priororty to list
