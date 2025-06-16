import './Services.css'

const Services = () => {
  const services = [
    {
      title: "2D Art",
      description: "Character design, concept art, illustrations, and digital paintings that bring your vision to life.",
      features: ["Character Design", "Concept Art", "Digital Illustration", "UI/UX Design"]
    },
    {
      title: "3D Art",
      description: "High-quality 3D modeling, texturing, and rendering for games, films, and interactive media.",
      features: ["3D Modeling", "Texturing", "Lighting & Rendering", "Environment Design"]
    },
    {
      title: "Animation",
      description: "Smooth and engaging animations for characters, objects, and environments across all media.",
      features: ["Character Animation", "Motion Graphics", "VFX", "Interactive Animation"]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services