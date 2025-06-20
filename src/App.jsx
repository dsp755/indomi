import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import PortfolioPage from "./components/PortfolioPage"

function App() {
  return (
    <Router basename="/indomi">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
