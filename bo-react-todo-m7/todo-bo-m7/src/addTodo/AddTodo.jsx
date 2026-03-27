import './AddTodo.css'
export function AddTodo(){

    return (
        <div className='addTodo' id='addTodo'>
                <h2 className='addTodo-title'>Maak een nieuwe todo</h2>
                <div className="addTodo-card">
                    <form className="addTodo-form" action="" method="post">
                        <input className='inputAddTodo' type="text" name="inputAddTodo" id="inputAddTodo" placeholder='Schrijf hier een nieuwe todo'/>
                        <br />
                        <input type="submit" value="Add Todo" />
                    </form>
                </div>
        </div>
    )
}