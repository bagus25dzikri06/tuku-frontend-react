import React from 'react'
import { FaStar } from 'react-icons/fa'

const Card = () => {
  /*const style = { 
    backgroundColor: props.background 
  }
  const cardRed = { 
    backgroundColor: 'red' 
  }
  const cardBlue = { 
    backgroundColor: 'blue' 
  }
  return (
    <>
      <div style={props.background === 'red' ? cardRed : cardBlue}>
        <h1>Card {`RP. ${props.harga}`}</h1>
      </div>
      <button onClick={() => props.kirimData('halo')}>Kirim Data</button>
    </>
  )*/
  return (
    <>
      <div class="card" style={{width: '265px'}}>
          <img src="images/gez-xavier-mansfield-b34E1vh1tYU-unsplash1.jpg" class="card-img-top" alt="..." />
          <div class="card-body text-start">
              <h4 class="card-title">Men's formal suit - Black & White</h4>
              <h5 class="card-subtitle">$ 40.0</h5>
              <p class="card-text">Zalora Cloth</p>
              <p>
                <FaStar color='#FFBA49' />
                <FaStar color='#FFBA49' />
                <FaStar color='#FFBA49' />
                <FaStar color='#FFBA49' />
                <FaStar color='#FFBA49' />(10)
              </p>
          </div>
      </div>
    </>
  )
}

export default Card;