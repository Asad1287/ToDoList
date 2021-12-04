console.log('Todo');
var todoList: string[] = [];


var todoInput: HTMLInputElement = document.getElementById('todoInput') as HTMLInputElement;
var todoListDiv : HTMLElement = document.getElementById('todoListContainer') as HTMLElement;

var isEnter = (event: KeyboardEvent): boolean => {
    event.preventDefault();
    if ( event == undefined){
        return false;
    }
    else if (event.keyCode === 13){
        return true;
    }

    return false;
}

var addTodo = (): void => {
    if (todoInput.value === ''){
        return;
    }

    
    

    

    todoList.push(todoInput.value);

   
    
    todoInput.value = '';
    
    updateTodo();
    todoList.sort();

}

var updateTodo = (): void => {
    todoListDiv.innerHTML = '';
    
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'todoList');
    todoListDiv.appendChild(ul);

   




    for (let i = 0; i < todoList.length; i++){
        const li = document.createElement('li');
        li.setAttribute('class', 'todoItem');
        li.innerText = todoList[i];
        li.innerHTML = `<a href = '#' onclick='removeListTodo("${todoList[i]}")'>${todoList[i]}</a>`;

      
        ul.appendChild(li);
    }
    
}

const removeListTodo = (itemToRemove: string): void => {
    todoList.splice(todoList.indexOf(itemToRemove), 1);
    updateTodo();}


const filterTodoList = (): void => {
    
    const todoListHtml: HTMLUListElement = document.getElementById('todoList') as HTMLUListElement

    if (todoListHtml == null) {
        console.log("Nothing to filter");
        return;
    }

    const todoListFilter = document.getElementById('todoFilter') as HTMLInputElement;
    const todoListFilterText = todoListFilter.value.toUpperCase();

    todoListHtml.childNodes.forEach((item) => {
        
        let itemText: any = item.textContent;
        if (itemText !== null) {
            itemText = itemText.toUpperCase();

            if (itemText.startsWith(todoListFilterText)) {
                (item as HTMLLIElement).style.display = "list-item";
            } else {
                (item as HTMLLIElement).style.display = "none";
            }
        }
    });
}
    
// creating an event function for keypress or click

//creating an add event to list

//creating a remove event to list


//add priororty to list

