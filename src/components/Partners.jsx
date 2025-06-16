import './Partners.css'

const Partners = () => {
  const partners = [
    {
      name: "Netflix",
      logo: "https://optim.tildacdn.net/tild3763-6361-4266-b235-653533643334/-/resize/548x/-/format/webp/Netflix_Logo_PMS_cop.png.webp"
    },
    {
      name: "Shutterstock",
      logo: "https://optim.tildacdn.net/tild3939-6538-4335-a665-306435353336/-/resize/972x/-/format/webp/Shutterstock_logosvg.png.webp"
    },
    {
      name: "ITV",
      logo: "https://optim.tildacdn.net/tild3466-6138-4133-a430-363338363638/-/resize/340x/-/format/webp/ITV-Logo-White_copy.png.webp"
    },
    {
      name: "Bossfight",
      logo: "https://optim.tildacdn.net/tild6135-3965-4466-b136-313162663230/-/resize/214x/-/format/webp/bossfight.png.webp"
    }
  ]

  return (
    <section className="partners">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>
        <p className="partners-subtitle">
          Trusted by industry leaders worldwide
        </p>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners