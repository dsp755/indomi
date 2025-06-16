import "./Portfolio.css"

const Portfolio = () => {
  const projects = [
    {
      title: "Character Design",
      category: "2D Art",
      description: "Fantasy character concepts for indie game development",
    },
    {
      title: "Environment Art",
      category: "3D Art",
      description: "Detailed 3D environments for virtual reality experiences",
    },
    {
      title: "Motion Graphics",
      category: "Animation",
      description: "Brand identity animations for digital marketing campaigns",
    },
    {
      title: "Concept Art",
      category: "2D Art",
      description: "Visual development for animated short films",
    },
    {
      title: "3D Modeling",
      category: "3D Art",
      description: "Product visualization for architectural projects",
    },
    {
      title: "UI Animation",
      category: "Animation",
      description: "Interactive interface animations for mobile applications",
    },
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <p className="portfolio-subtitle">
          Explore our latest creative works and collaborations
        </p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-project-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
              <div className="portfolio-overlay">
                <div className="portfolio-icon">→</div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>View more work on our</p>
          <a
            href="https://www.artstation.com/indomi_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="artstation-link"
          >
            <img
              src="https://optim.tildacdn.net/tild6534-3962-4234-a235-626365333139/-/resize/258x/-/format/webp/artstation-logo-whit.png.https://optim.tildacdn.net/tild6534-3962-4234-a235-626365333139/-/resize/258x/-/format/webp/artstation-logo-whit.png.webp"
              alt="ArtStation"
            />
            <div>ArtStation Portfolio</div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
