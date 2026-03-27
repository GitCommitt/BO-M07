import './App.css'
import { Navbar } from '../navbar/Navbar'
import { AddTodo} from '../addTodo/AddTodo'
import { ShowTodo} from '../showTodo/ShowTodo'
import { Contact } from '../contact/Contact'
import { Footer } from '../footer/Footer'

function App() {
  return (
    <main>
      <Navbar/>
      <AddTodo/>
      <ShowTodo/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App