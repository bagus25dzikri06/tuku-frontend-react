import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import '../assets/styles/category.module.css'

const Category = ({deviceType}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const images = [
    'images/Group1230.svg', 'images/Group1231.svg',
    'images/Group1232.svg', 'images/Group1233.svg', 
    'images/Group1235.svg', 'images/Group1236.svg', 'images/Group1237.svg',
    'images/Group1238.svg', 'images/Group1239.svg', 'images/Group1240.svg',
    'images/Group1241.svg', 'images/Group1242.svg', 'images/Group1243.svg',
    'images/Group1244.svg', 'images/Group1245.svg'
  ]
  return (
    <>
      <div style={{
          margin: '20px 40px'
      }}>
          <Carousel
            partialVisible
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            removeArrowOnDeviceType={['desktop', 'mobile']}
            showDots
          >
            {images.map((each, index) => {
              return (
                <div key={index}>
                  <img src={each} width={206} height={220} />
                </div>
              );
            })}
          </Carousel>
      </div>
    </>
  )
}

export default Category