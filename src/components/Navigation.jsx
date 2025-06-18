import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'
import indomiLogo from '../assets/images/indomi-logo.png'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handlePortfolioClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={indomiLogo} alt="INDOMI Studio" />
          </Link>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {isHome ? (
            <>
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <Link to="/portfolio" className="nav-link" onClick={handlePortfolioClick}>Portfolio</Link>
              <a href="#contact" className="nav-link">Contact</a>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/#about" className="nav-link">About</Link>
              <Link to="/#services" className="nav-link">Services</Link>
              <Link to="/portfolio" className="nav-link" onClick={handlePortfolioClick}>Portfolio</Link>
              <Link to="/#contact" className="nav-link">Contact</Link>
            </>
          )}
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