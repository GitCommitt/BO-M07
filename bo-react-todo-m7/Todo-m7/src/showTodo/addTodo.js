export async function addTodo(todoList) {
    const text = document.querySelector("#todo-input").value;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text, status : 'Bezig'})
    }

    const response = await fetch('http://localhost:8080/api/addTodo.php', options);
    if(response.ok != true){
        throw new Error("Response status: " + response.status);
    }
    const data = await response.text();
    if (data === "Success!") {
        console.log("Todo toegevoegd!");
        todoList.getTodos();
    } else {
        console.log("Fout bij toevoegen:", data);
    }
}