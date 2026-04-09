
export function Todo({todoData}) {
    return (
        <ul className="todo">
            <h2>{todoData.text}</h2> 
            <p className="todo-item" id="list">Status: <strong>{todoData.status}</strong></p>
            <p className="todo-item" id="list">Datum: <strong>{todoData.timestamp}</strong></p>
            <button className="todo-button">Done</button>
        </ul>
        
    )
}