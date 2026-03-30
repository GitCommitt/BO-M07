import './ShowTodo.css'
import { Todo } from './Todo'
export function ShowTodo(){

    
    return (
        <div className='showTodo' id='showTodo'>
                <h2 className='showTodo-title'>Dit zijn de todo's</h2>
                <div className='showTodo-card'>
                    <Todo text=" asdf"/>
                </div>
        </div>
    )
}