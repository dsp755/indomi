import { useState } from 'react'
import './Navigation.css'
import indomiLogo from '../assets/images/indomi-logo.png'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={indomiLogo} alt="INDOMI Studio" />
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div 
          className={`nav-burger ${isMenuOpen ? 'nav-burger-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation