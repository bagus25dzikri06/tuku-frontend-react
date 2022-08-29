import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import '../assets/styles/promo.module.css'

const Promo = ({ deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 40
    }
  }
  const images = ['images/CardPromotion.png', 'images/CardPromotion2.png']
  return (
    <>
      <div className="font-sans" style={{
          margin: '20px 40px'
      }}>
          <Carousel
            partialVisible
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            showDots
          >
            {images.map((each, index) => {
              return (
                <div key={index}>
                  <img src={each} width={456} height={180} />
                </div>
              );
            })}
          </Carousel>
      </div>
    </>
  )
}

export default Promo