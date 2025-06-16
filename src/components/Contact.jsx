import "./Contact.css"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Let's Create Together</h2>
          <p className="contact-description">
            Ready to bring your creative vision to life? Get in touch with us
            and let's discuss your next project.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h4>Email</h4>
              <a href="mailto:hello@indomi.studio">hello@indomi.studio</a>
            </div>
            <div className="contact-item">
              <h4>Portfolio</h4>
              <a
                href="https://www.artstation.com/indomi_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="artstation-link"
              >
                <img
                  src="https://optim.tildacdn.net/tild6534-3962-4234-a235-626365333139/-/resize/258x/-/format/webp/artstation-logo-whit.png.webp"
                  alt="ArtStation"
                />
                View on ArtStation
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Select Service</option>
                <option value="2d-art">2D Art</option>
                <option value="3d-art">3D Art</option>
                <option value="animation">Animation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Tell us about your project"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Indomi Studio. All rights reserved.</p>
      </footer>
    </section>
  )
}

export default Contact
