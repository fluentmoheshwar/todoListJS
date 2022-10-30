const input = document.querySelector("#inputBox");
const todoList = document.querySelector("#todoList");

const todoData = [];

function addTodo(text) {
  todoData.push(text);
  const li = document.createElement("li");
  li.innerText = text;
  todoList.appendChild(li);
  localStorage.setItem("todos", JSON.stringify(todoData));
}

const existingTodos = JSON.parse(localStorage.getItem("todos"));

for (const i of existingTodos) {
  addTodo(i);
}

function setTodo() {
  addTodo(input.value);
}
