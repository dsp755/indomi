import { useState } from 'react'
import './PortfolioPage.css'
import Navigation from './Navigation'

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)

  const portfolioItems = {
    '3d-characters-realism': [
      { id: 1, image: 'https://static.tildacdn.net/tild3965-3332-4562-b033-343136633266/svetlana-kozhina-4-a.jpg', title: 'Realistic Character 1' },
      { id: 2, image: 'https://static.tildacdn.net/tild6534-3234-4563-b438-366631356631/3_1.png', title: 'Realistic Character 2' },
      { id: 3, image: 'https://static.tildacdn.net/tild6464-6138-4338-a462-623031353537/1_2.png', title: 'Realistic Character 3' },
      { id: 4, image: 'https://static.tildacdn.net/tild6133-6565-4061-b136-393932653236/2_1.png', title: 'Realistic Character 4' },
      { id: 5, image: 'https://static.tildacdn.net/tild6333-6561-4063-a664-653932643339/5_1.png', title: 'Realistic Character 5' }
    ],
    '3d-characters-stylized': [
      { id: 6, image: 'https://static.tildacdn.net/tild6161-3261-4835-a230-633763626133/81.png', title: 'Stylized Character 1' },
      { id: 7, image: 'https://static.tildacdn.net/tild6538-6530-4265-b330-616361343531/6-1.png', title: 'Stylized Character 2' },
      { id: 8, image: 'https://static.tildacdn.net/tild3036-6631-4036-b431-333335363162/71.png', title: 'Stylized Character 3' },
      { id: 9, image: 'https://static.tildacdn.net/tild6232-3164-4566-b966-646535383538/10.png', title: 'Stylized Character 4' },
      { id: 10, image: 'https://static.tildacdn.net/tild3438-3232-4264-b662-343761396362/9-1.png', title: 'Stylized Character 5' },
      { id: 11, image: 'https://static.tildacdn.net/tild3038-6632-4461-b638-663364356539/10_1.png', title: 'Stylized Character 6' }
    ],
    '3d-weapons': [
      { id: 12, image: 'https://static.tildacdn.net/tild6336-6536-4336-a337-653132373634/image_2025-03-16_18-.png', title: 'Weapon 1' },
      { id: 13, image: 'https://static.tildacdn.net/tild3864-3836-4431-b562-646431623034/photo_2025-04-10_220.jpeg', title: 'Weapon 2' },
      { id: 14, image: 'https://static.tildacdn.net/tild3033-3030-4439-b862-623938336262/indomi-studios-indom.jpg', title: 'Weapon 3' },
      { id: 15, image: 'https://static.tildacdn.net/tild3336-3763-4163-b939-383231303035/photo_2025-04-10_220.jpeg', title: 'Weapon 4' }
    ],
    'environment': [
      { id: 16, image: 'https://static.tildacdn.net/tild6537-3238-4235-a663-613635373061/12.png', title: 'Environment 1' },
      { id: 17, image: 'https://static.tildacdn.net/tild6237-3061-4166-b166-383639363565/indomi-studio-holl-1.jpg', title: 'Environment 2' },
      { id: 18, image: 'https://static.tildacdn.net/tild3730-3864-4265-a534-653863643265/indomi-studio-ilya-i.jpg', title: 'Environment 3' }
    ],
    '3d-vehicles': [
      { id: 19, image: 'https://static.tildacdn.net/tild6165-3966-4465-b832-623263386436/image_2025-03-11_22-.png', title: 'Vehicle 1' },
      { id: 20, image: 'https://static.tildacdn.net/tild3339-3661-4138-b035-656464303430/indomi-studio-indomi.jpg', title: 'Vehicle 2' },
      { id: 21, image: 'https://static.tildacdn.net/tild6432-6562-4263-b561-343937643136/image_2025-04-09_17-.png', title: 'Vehicle 3' },
      { id: 22, image: 'https://static.tildacdn.net/tild3230-3635-4233-b737-666635373764/1724095338256.jpeg', title: 'Vehicle 4' },
      { id: 23, image: 'https://static.tildacdn.net/tild3762-6239-4564-a538-633932623532/indomi-studios-roman.jpg', title: 'Vehicle 5' }
    ],
    'illustrations': [
      { id: 24, image: 'https://static.tildacdn.net/tild3836-3961-4338-b139-366266616438/indomi-studio-indomi.jpg', title: 'Illustration 1' },
      { id: 25, image: 'https://static.tildacdn.net/tild6363-3238-4534-b638-656138306135/photo_2025-03-14_191.jpeg', title: 'Illustration 2' },
      { id: 26, image: 'https://static.tildacdn.net/tild6539-3933-4534-a433-613438313530/indomi-studio-netfli.jpg', title: 'Illustration 3' },
      { id: 27, image: 'https://static.tildacdn.net/tild6130-6562-4562-b731-353632326432/Mavka.png', title: 'Concept Art 1' },
      { id: 28, image: 'https://static.tildacdn.net/tild3538-3437-4532-a233-393038323734/indomi.png', title: 'Concept Art 2' },
      { id: 29, image: 'https://static.tildacdn.net/tild3932-3938-4363-b732-373038336630/61.png', title: 'Concept Art 3' },
      { id: 30, image: 'https://static.tildacdn.net/tild3331-6461-4466-a662-656165626161/3.png', title: 'Concept Art 4' }
    ]
  }

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: '3d-characters-realism', label: '3D Characters (Realism)' },
    { id: '3d-characters-stylized', label: '3D Characters (Stylized)' },
    { id: '3d-weapons', label: '3D Weapons' },
    { id: 'environment', label: 'Environment' },
    { id: '3d-vehicles', label: '3D Vehicles' },
    { id: 'illustrations', label: 'Illustrations & Concept Art' }
  ]

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return Object.values(portfolioItems).flat()
    }
    return portfolioItems[activeCategory] || []
  }

  return (
    <>
      <Navigation />
      <div className="portfolio-page">
        <div className="portfolio-hero">
          <div className="portfolio-hero-content">
            <h1 className="portfolio-hero-title">Our Portfolio</h1>
            <p className="portfolio-hero-subtitle">
              Showcasing our creative work across games, entertainment, and digital media
            </p>
          </div>
        </div>

        <div className="portfolio-content">
          <div className="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {getFilteredItems().map((item) => (
              <div key={item.id} className="portfolio-item">
                <div 
                  className="portfolio-item-image"
                  onClick={() => setLightboxImage(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-item-overlay">
                    <h3 className="portfolio-item-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
            <img 
              src={lightboxImage.image} 
              alt={lightboxImage.title}
              className="lightbox-image"
            />
            <div className="lightbox-title">
              {lightboxImage.title}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PortfolioPage