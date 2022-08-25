import React from 'react';

const Card = (props) => {
  /*const style = { 
    backgroundColor: props.background 
  }*/
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
  )
}

export default Card;