import { useState, useEffect } from 'react'
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

  const handleAnchorClick = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  // Handle scrolling when coming from portfolio page with hash
  useEffect(() => {
    if (location.hash && isHome) {
      const sectionId = location.hash.substring(1)
      handleAnchorClick(sectionId)
    }
  }, [location.hash, isHome])

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
              <a href="#home" className="nav-link" onClick={() => handleAnchorClick('home')}>Home</a>
              <a href="#about" className="nav-link" onClick={() => handleAnchorClick('about')}>About</a>
              <a href="#services" className="nav-link" onClick={() => handleAnchorClick('services')}>Services</a>
              <Link to="/portfolio" className="nav-link" onClick={handlePortfolioClick}>Portfolio</Link>
              <a href="#contact" className="nav-link" onClick={() => handleAnchorClick('contact')}>Contact</a>
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