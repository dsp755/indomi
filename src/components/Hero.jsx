import "./Hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img
        src="https://optim.tildacdn.net/tild3461-6137-4662-b566-663330616337/-/resize/1920x/-/format/webp/indomi4.jpg"
        alt=""
      />
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-tagline">
            2D & 3D ART AND ANIMATION OUTSOURCING STUDIO
          </p>
          <h1 className="hero-title">When Outsourcing feels like In-House</h1>
        </div>
        <div className="hero-background" />
      </div>
    </section>
  )
}

export default Hero
