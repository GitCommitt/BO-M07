import './App.css'
import { Navbar } from '../navbar/navbar'
import { AddTodo} from '../addTodo/AddTodo'
import { ShowTodo } from '../showTodo/ShowTodo'
import { Contact } from '../contact/Contact'
import { Footer } from '../footer/Footer'

function App() {
  const [refreshTodos, setRefreshTodos] = useState(0)

  function handleTodoAdded() {
    setRefreshTodos((current) => current + 1)
  }

  return (
    <main>
      <Navbar />
      <AddTodo onTodoAdded={handleTodoAdded} />
      <ShowTodo refreshTrigger={refreshTodos} />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
