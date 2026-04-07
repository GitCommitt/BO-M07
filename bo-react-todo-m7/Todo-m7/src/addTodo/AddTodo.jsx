import './AddTodo.css'
import { useState } from 'react'

export function AddTodo({ onTodoAdded }){
    const [input, setInput] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        if (!input.trim()) return
        
        const res = await fetch('http://localhost:8080/api/addTodo.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: input, status: 'todo' })
        })
        
        if ((await res.text()) === 'Success!') {
            setInput('')
            onTodoAdded()
        }
    }

    return (
        <div className='addTodo' id='addTodo'>
            <h2 className='addTodo-title'>Maak een nieuwe todo</h2>
            <div className="addTodo-card">
                <form className="addTodo-form" onSubmit={handleSubmit}>
                    <input 
                        className='inputAddTodo' 
                        type="text" 
                        placeholder='Schrijf hier een nieuwe todo'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <br />
                    <input type="submit" value="Add Todo" />
                </form>
            </div>
        </div>
    )
}