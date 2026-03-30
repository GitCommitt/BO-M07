import './ShowTodo.css'
import { Todo } from './Todo'
import { useState } from 'react';
export function ShowTodo() {
    const [todos, setTodos] = useState(null);
    
    async function getTodos(){
        const url = "http://localhost:8080/api/todos.php";
        let response = await fetch(url);
        let data = await response.json();
        setTodos(data);
        console.log(data);
    }
    if(todos === null){
        getTodos();
        return (
            <div>Loading</div>
        )
    } 
    
    
    return (
        <div className='showTodo' id='showTodo'>
            <h2 className='showTodo-title'>Dit zijn de todo's</h2>

            <div className='showTodo-card'>
                        {
                            todos.map(todo=>{
                                return <Todo todoData={todo}/>
                            })
                        }
            </div>
        </div>
    )
}