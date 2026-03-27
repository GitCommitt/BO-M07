import './App.css'
import { Navbar } from '../navbar/Navbar'
import { AddTodo} from '../addTodo/AddTodo'
import { ShowTodo} from '../showTodo/ShowTodo'

function App() {
  return (
    <main>
      <Navbar/>
      <AddTodo/>
      <ShowTodo/>
    </main>
  )
}

export default App