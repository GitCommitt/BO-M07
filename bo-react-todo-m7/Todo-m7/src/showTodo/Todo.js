export class Todo{
    constructor(data, root, todolist){
        this.data = data;
        this.root = root;
        this.todoList = todolist;
        this.render();
    }

    render(){
        this.htmlElement = document.createElement("li");
        this.htmlElement.className = "todos_todo_list";

        const textP = document.createElement("p");
        textP.textContent = this.data.text;
        textP.className = "todo-text";

        const statusP = document.createElement("p");
        statusP.textContent = this.data.status;
        statusP.className = "todo-status";
        statusP.addEventListener("click", this.onClickEvent);

        this.htmlElement.appendChild(textP);
        this.htmlElement.appendChild(statusP);

        this.root.appendChild(this.htmlElement);
    }

    onClickEvent = async () => {
        const status = await fetch("http://localhost:8080/api/editTodo.php")

        const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id : this.data.id ,status: "Done" })
    };
    const response = await fetch('http://localhost:8080/api/editTodo.php', options);
    if(response.ok != true){
        throw new Error("Response status: " + response.status);
    }
    const data = await response.text();
    if (data === "Success!") {
        this.todoList.getTodos();
    } else {
        console.log("Fout bij toevoegen:", data);
    }
    }
}
