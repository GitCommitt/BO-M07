import './App.css'
import { AboutMe } from '../AboutMe/AboutMe'
import { Top10 } from '../Top10/Top10'
import { CookieClicker } from '../CookieClicker/CookieClicker'
import { PokeAPI } from '../PokeAPI/Pokemon'
import { Cats } from '../cats/cats'

function App() {
  return (
    <main>
      <Cats/>
      <PokeAPI/>
      <CookieClicker/>
      <AboutMe/>
      <Top10/>
    </main>
  )
}

export default App