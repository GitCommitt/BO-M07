import './App.css'
import { Navbar } from '../navbar/Navbar'
import { AddTodo} from '../addTodo/AddTodo'

function App() {
  return (
    <main>
      <Navbar/>
      <AddTodo/>   
    </main>
  )
}

export default App