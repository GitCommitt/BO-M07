import './AddTodo.css'
import { useState } from 'react'

export function AddTodo({ onTodoAdded }) {
  const [text, setText] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (!text.trim()) {
      return
    }

    const url = 'http://localhost:8080/api/addTodo.php'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text.trim(),
        status: 'open',
      }),
    })

    if (response.ok) {
      setText('')
      if (typeof onTodoAdded === 'function') {
        onTodoAdded()
      }
    } else {
      console.error('Kon todo niet toevoegen')
    }
  }

  return (
    <div className='addTodo' id='addTodo'>
      <h2 className='addTodo-title'>Maak een nieuwe todo</h2>
      <div className='addTodo-card'>
        <form className='addTodo-form' onSubmit={handleSubmit}>
          <input
            className='inputAddTodo'
            type='text'
            name='inputAddTodo'
            id='inputAddTodo'
            placeholder='Schrijf hier een nieuwe todo'
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <br />
          <input type='submit' value='Add Todo' />
        </form>
      </div>
    </div>
  )
}