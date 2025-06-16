import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ProjectsShowcase from './components/ProjectsShowcase'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <ProjectsShowcase />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
