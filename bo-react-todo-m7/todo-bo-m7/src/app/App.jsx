import './App.css'
import { Navbar } from '../navbar/Navbar'
import { AddTodo} from '../addTodo/AddTodo'
import { ShowTodo} from '../showTodo/ShowTodo'
import { Footer } from '../footer/Footer'

function App() {
  return (
    <main>
      <Navbar/>
      <AddTodo/>
      <ShowTodo/>
      <Footer/>   
    </main>
  )
}

export default App