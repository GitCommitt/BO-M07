import {TodoList} from "./Todolist";
import {addTodo} from "./addTodo";
import {register} from "./register";

let todoList = new TodoList();

const button_addTodo = document.querySelector("#todo-add");

button_addTodo.addEventListener("click", ()=>addTodo(todoList));

const button_register = document.querySelector("#register");
button_register.addEventListener("click", ()=>register());