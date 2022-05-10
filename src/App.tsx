import './App.css'
import { AboutMe } from './components/AboutMe'
import { Introduction } from './components/Introduction'
import { Navbar } from './components/Navbar'
import { Portifolio } from './components/Portifolio'
import { ScrollPageNumber } from './components/ScrollPageNumber'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <ScrollPageNumber />
      <Introduction />
      <Portifolio />
      <AboutMe />
    </>
  )
}

export default App
