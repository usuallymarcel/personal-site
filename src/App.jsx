import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="font-sans text-grey-900">
      {/* <Navbar/> */}
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
