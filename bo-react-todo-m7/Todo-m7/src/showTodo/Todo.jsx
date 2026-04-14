export function Todo({todoData, onTodoDeleted}) {
    async function handleDone() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: todoData.id,
                status: "Done"
            })
        };
        const response = await fetch('http://localhost:8080/api/editTodo.php', options);
        if(response.ok) {
            window.location.reload();
        } else {
            console.log("Fout bij updaten:", response.status);
        }
    }
    async function handleDelete() {
        const response = await fetch('http://localhost:8080/api/deleteTodo.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: todoData.id }),
        })

        if (response.ok) {
            if (typeof onTodoDeleted === 'function') {
                onTodoDeleted()
            }
        } else {
            console.error('Kon todo niet verwijderen', response.status)
        }
    }

    return (
        <ul className="todo">
            <h2>{todoData.text}</h2> 
            <p className="todo-item" id="list">Status: <strong>{todoData.status}</strong></p>
            <p className="todo-item" id="list">Datum: <strong>{todoData.timestamp}</strong></p>
            <div className="todo-buttons">
                <button className="todo-button" onClick={handleDone}>Done</button>
                <button className="todo-button-remove" onClick={handleDelete}>Verwijder</button>
            </div>
        </ul>
    )
}