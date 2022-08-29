import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { BsCircleFill } from 'react-icons/bs'
import '../assets/styles/productChoose.css'

const ProductChoose = () => {
  let [ count, setCount ] = useState(0)

  const incrementCount = () => {
    count = count + 1
    setCount(count)
  }
  const decrementCount = () => {
    count = count - 1
    setCount(count)
  }

  return (
    <>
      <div>
        <h2>Nike CruzrOne (Bright Crimson)</h2>
        <p>Nike</p>
        <p>
          <FaStar color='#FFBA49' />
          <FaStar color='#FFBA49' />
          <FaStar color='#FFBA49' />
          <FaStar color='#FFBA49' />
          <FaStar color='#FFBA49' />(10)
        </p>
        <p><b>Price</b></p>
        <h1><b>$ 20.0</b></h1>
        <p><b>Color</b></p>
        <p>
          <BsCircleFill color='#1A1A1A' size={40} className='me-2'/>
          <BsCircleFill color='#D84242' size={40} className='me-2'/>
          <BsCircleFill color='#4290D8' size={40} className='me-2'/>
          <BsCircleFill color='#42D86C' size={40} className='me-2'/>
        </p>
        <div className="row">
          <div className="col-md-6">
            <p><b>Size</b></p>
            <div>
              <button onClick={decrementCount} className='me-4'>-</button>
              {count}
              <button onClick={incrementCount} className='ms-4'>+</button>
            </div>
          </div>
          <div className="col-md-6">
            <p><b>Jumlah</b></p>
            <div>
              <button onClick={decrementCount} className='me-4'>-</button>
              {count}
              <button onClick={incrementCount} className='ms-4'>+</button>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-6">
            <a href="#" className="nav-item nav-link btn btn-lg btn-space btn-outline-primary rounded-pill">Chat</a>
          </div>
          <div className="col-md-6">
            <a href="#" className="nav-item nav-link btn btn-lg btn-space btn-outline-primary rounded-pill">Add Bag</a>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-12">
            <a href="#" className="nav-item nav-link btn btn-lg btn-space btn-primary text-light rounded-pill">Buy Now</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductChoose