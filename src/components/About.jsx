import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            We are a creative studio specializing in 2D and 3D art, bringing 
            imaginative concepts to life through digital artistry. Our passion 
            lies in creating visually stunning content that tells compelling stories.
          </p>
          <p className="about-text">
            From character design to environmental art, we combine technical 
            expertise with creative vision to deliver exceptional results for 
            our clients across various industries.
          </p>
        </div>
        <div className="about-visual">
          <img 
            src="https://static.tildacdn.net/tild3064-6666-4261-a131-343234353161/indomi-studios-roman.jpg" 
            alt="Indomi Studios Team" 
            className="about-image"
          />
          <div className="about-accent"></div>
        </div>
      </div>
    </section>
  )
}

export default About