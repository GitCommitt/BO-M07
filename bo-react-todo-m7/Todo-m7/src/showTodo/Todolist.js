import {Todo} from "./Todo.js";

export class TodoList{

    constructor(){
        this.listEl = document.querySelector("#list");
        this.url = "http://localhost:8080/api/todos.php";

        this.getTodos();
    }
    async getTodos(){
        this.listEl.innerHTML = "";
        let response = await fetch(this.url);
        let data = await response.json();
        for (let i = 0; i < data.length; i++) {
            new Todo(data[i], this.listEl, this)
        }
    }
}