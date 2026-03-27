import './App.css'
import { Navbar } from '../navbar/Navbar'
import { AddTodo} from '../addTodo/AddTodo'
import { Footer } from '../footer/Footer'

function App() {
  return (
    <main>
      <Navbar/>
      <AddTodo/>
      <Footer/>   
    </main>
  )
}

export default App