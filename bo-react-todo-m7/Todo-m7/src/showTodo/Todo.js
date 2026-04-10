export function Todo({todoData}) {
    async function handleDone() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: todoData.id,
                status: todoData.status
            })
        };
        const response = await fetch('http://localhost:8080/api/editTodo.php', options);
        if(response.ok) {
            window.location.reload();
        } else {
            console.log("Fout bij updaten:", response.status);
        }
    }

    return (
        <ul className="todo">
            <h2>{todoData.text}</h2> 
            <p className="todo-item" id="list">Status: <strong>{todoData.status}</strong></p>
            <p className="todo-item" id="list">Datum: <strong>{todoData.timestamp}</strong></p>
            
            <button className="todo-button" onClick={handleDone}>{todoData.status}</button>
        </ul>
    )
}
