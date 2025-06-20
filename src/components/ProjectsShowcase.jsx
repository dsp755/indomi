import { useState, useEffect, useRef } from "react"
import "./ProjectsShowcase.css"

const ProjectsShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef(null)

  const projects = [
    {
      title: "Squid Game Unleashed",
      company: "Netflix Games",
      description:
        "Character design and environment art for the mobile battle royale game",
      category: "Mobile Game",
      image:
        "https://static.tildacdn.net/tild6534-6436-4934-b063-373631303238/krak_PreReg-sdp_na_0.jpg",
    },
    {
      title: "Emily in Paris",
      company: "Netflix",
      description:
        "Visual development and promotional artwork for the romantic comedy series",
      category: "TV Series",
      image:
        "https://static.tildacdn.net/tild3036-3864-4433-a231-663166633738/AAAAQXzU03JzS5nLinsD.jpg",
    },
    {
      title: "Sex Education",
      company: "Netflix",
      description:
        "Character design and promotional materials for the coming-of-age series",
      category: "TV Series",
      image:
        "https://static.tildacdn.net/tild6331-3436-4636-a465-396565393765/AAAAQS1FEwQHmppUxs1P.jpg",
    },
    {
      title: "Outer Banks",
      company: "Netflix",
      description: "Environmental art and adventure scene compositions",
      category: "TV Series",
      image:
        "https://static.tildacdn.net/tild3266-3838-4433-b234-643664633036/AAAAQbxrwXNc63p-MCej.jpg",
    },
    {
      title: "Love is Blind",
      company: "Netflix",
      description:
        "UI design and interactive elements for the reality dating experience",
      category: "Reality TV",
      image:
        "https://static.tildacdn.net/tild6433-3561-4637-a564-623961303962/NS_game-feature-grap.jpg",
    },
    {
      title: "Selling Sunset",
      company: "Netflix",
      description: "Luxury real estate visualization and promotional graphics",
      category: "Reality TV",
      image:
        "https://static.tildacdn.net/tild6363-3637-4162-b735-353664306166/AAAAQesC_Mbnwc_pWOH0.jpg",
    },
    {
      title: "Virgin River",
      company: "Netflix",
      description: "Small-town atmosphere and character development artwork",
      category: "TV Series",
      image:
        "https://static.tildacdn.net/tild3966-3335-4536-b361-623035346133/AAAAQZI_YKynB-HqTltv.jpg",
    },
    {
      title: "Perfect Match",
      company: "Netflix",
      description: "Dating show graphics and contestant profile designs",
      category: "Reality TV",
      image:
        "https://static.tildacdn.net/tild3730-3337-4362-a266-623335613865/AAAAQbGLpPgvSywg7vbn.jpg",
    },
  ]

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        changeProject((prev) => (prev + 1) % projects.length)
      }, 4000)
    }
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [projects.length, isHovered])

  const changeProject = (newIndex) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentProject(newIndex)
      setIsTransitioning(false)
    }, 300)
  }

  const nextProject = () => {
    changeProject((currentProject + 1) % projects.length)
    startTimer() // Restart the timer
  }

  const prevProject = () => {
    changeProject((currentProject - 1 + projects.length) % projects.length)
    startTimer() // Restart the timer
  }

  const goToProject = (index) => {
    changeProject(index)
    startTimer() // Restart the timer
  }

  return (
    <section className="projects-showcase">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Our contributions to AAA, mobile, and indie hits
        </p>

        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevProject}>
            ‹
          </button>

          <div
            className="carousel-content"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`project-card ${
                isTransitioning ? "fade-out" : "fade-in"
              }`}
              style={{
                backgroundImage: projects[currentProject].image
                  ? `url(${projects[currentProject].image})`
                  : "none",
              }}
            >
              <div className="project-overlay"></div>
              <div className="project-content">
                <div className="project-category">
                  {projects[currentProject].category}
                </div>
                <h3 className="project-title">
                  {projects[currentProject].title}
                </h3>
                <p className="project-company">
                  {projects[currentProject].company}
                </p>
                <p className="project-description">
                  {projects[currentProject].description}
                </p>
              </div>
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextProject}>
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentProject ? "active" : ""
              }`}
              onClick={() => goToProject(index)}
            />
          ))}
        </div>

        <div className="projects-cta">
          <p>View detailed artwork and more projects on our</p>
          <a
            href="https://www.artstation.com/indomi_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="artstation-portfolio-link"
          >
            ArtStation Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
