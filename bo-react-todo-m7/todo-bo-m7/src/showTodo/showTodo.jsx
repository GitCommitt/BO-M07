import './ShowTodo.css'
export function ShowTodo(){

    return (
        <div className='showTodo' id='showTodo'>
                <h2 className='showTodo-title'>Maak een nieuwe todo</h2>
                <div className="showTodo-card">
                    <div className="todo">
                        Todo 1
                    </div>
                    <div className="todo">
                        Todo 2
                    </div>
                    <div className="todo">
                        Todo 3
                    </div>
                </div>
        </div>
    )
}