const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
const counter = document.querySelector("#counter");

const filterAll = document.querySelector("#filterAll");
const filterActive = document.querySelector("#filterActive");
const filterCompleted = document.querySelector("#filterCompleted");

const clearCompleted = document.querySelector("#clearCompleted");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

renderTodos();


// ADD
addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTodo();
    }
});

function addTodo(){

    let text = todoInput.value.trim();

    if(text === "") return;

    todos.push({
        id: Date.now(),
        text: text,
        completed:false
    });

    todoInput.value="";

    saveData();
    renderTodos();
}


// RENDER
function renderTodos(){

    todoList.innerHTML = "";

    let filtered = todos;

    if(currentFilter === "active"){
        filtered = todos.filter(todo => !todo.completed);
    }

    if(currentFilter === "completed"){
        filtered = todos.filter(todo => todo.completed);
    }

    filtered.forEach(todo => {

        const li = document.createElement("li");

        li.dataset.id = todo.id;

        const span = document.createElement("span");

        span.classList.add("todo-text");

        if(todo.completed){
            span.classList.add("completed");
        }

        span.textContent = todo.text;

        const btn = document.createElement("button");

        btn.classList.add("delete-btn");

        btn.textContent = "❌";

        li.appendChild(span);
        li.appendChild(btn);

        todoList.appendChild(li);
    });

    updateCounter();
}


// EVENT DELEGATION
todoList.addEventListener("click", function(e){

    const li = e.target.closest("li");

    if(!li) return;

    const id = Number(li.dataset.id);

    // DELETE
    if(e.target.classList.contains("delete-btn")){

        todos = todos.filter(todo => todo.id !== id);

        saveData();
        renderTodos();
    }

    // TOGGLE
    if(e.target.classList.contains("todo-text")){

        const todo = todos.find(todo => todo.id === id);

        todo.completed = !todo.completed;

        saveData();
        renderTodos();
    }

});


// EDIT
todoList.addEventListener("dblclick", function(e){

    if(!e.target.classList.contains("todo-text")) return;

    const li = e.target.closest("li");

    const id = Number(li.dataset.id);

    const input = document.createElement("input");

    input.value = e.target.textContent;

    li.replaceChild(input,e.target);

    input.focus();

    input.addEventListener("keypress", function(ev){

        if(ev.key === "Enter"){

            const todo =
            todos.find(todo => todo.id === id);

            todo.text = input.value;

            saveData();
            renderTodos();
        }

    });

});


// COUNTER
function updateCounter(){

    const count =
    todos.filter(todo => !todo.completed).length;

    counter.textContent =
    count + " items left";
}


// FILTER
filterAll.addEventListener("click", function(){

    currentFilter = "all";

    renderTodos();
});

filterActive.addEventListener("click", function(){

    currentFilter = "active";

    renderTodos();
});

filterCompleted.addEventListener("click", function(){

    currentFilter = "completed";

    renderTodos();
});
// CLEAR COMPLETED
clearCompleted.addEventListener("click", function(){

    todos =
    todos.filter(todo => !todo.completed);

    saveData();

    renderTodos();
});
// LOCAL STORAGE
function saveData(){

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}