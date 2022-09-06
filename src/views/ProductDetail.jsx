import React from 'react'
import Navbar2 from '../components/Navbar2'
import Card from '../components/Card'
import ProductChoose from '../components/ProductChoose'
import ProductPhoto from '../components/ProductPhoto'
import { AiOutlineRight } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
//import { Link, useParams } from 'react-router-dom'
//import '../assets/styles/detail.css'

const ProductDetail = () => {
  return (
    <>
      {/*<h1 className="judul">Detail {id}</h1>
      <Link to='/123'>Detail</Link> | <Link to='/new'>Insert</Link>
      | <Link to='/?search=abc'>Search</Link>*/}
      <div className="overflow-hidden">
        <Navbar2 />
        <ul class="list-inline py-2 ms-2">
            <li class="list-inline-item">Home <AiOutlineRight /></li>
            <li class="list-inline-item">Category <AiOutlineRight /></li>
            <li class="list-inline-item">Shoes</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <ProductPhoto />
          </div>
          <div className="col-6">
            <ProductChoose />
          </div>
        </div>
        <h2>Informasi Produk</h2>
        <div className='py-3'>
          <h4>Condition</h4>
          <h4>New</h4>
        </div>
        <div className='py-3'>
          <h4>Description</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.

  Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. 
  Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.

  Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.

  In ultricies rutrum tempus. Mauris vel molestie orci.</p>
        </div>
        <h2>Product Review</h2>
        <div className="row">
          <div className="col-2">
            <h1><span style={{
              fontSize: '100px'
            }}>5.0</span>/10</h1>
            <p>
              <FaStar color='#FFBA49' size={30}/>
              <FaStar color='#FFBA49' size={30}/>
              <FaStar color='#FFBA49' size={30}/>
              <FaStar color='#FFBA49' size={30}/>
              <FaStar color='#FFBA49' size={30}/>
            </p>
          </div>
          <div className="col-1 py-4">
            <ul class="list-unstyled">
              <li><FaStar color='#FFBA49' /> 5</li>
              <li><FaStar color='#FFBA49' /> 4</li>
              <li><FaStar color='#FFBA49' /> 3</li>
              <li><FaStar color='#FFBA49' /> 2</li>
              <li><FaStar color='#FFBA49' /> 1</li>
            </ul>
          </div>
          <div className="col-2 py-4">
            <ul class="list-unstyled">
              <li>
                <div class="progress" style={{width: '100%'}}></div>
              </li>
            </ul>
          </div>
          <div className="col-7 py-4">
            <ul class="list-unstyled">
              <li>4</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
            </ul>
          </div>
        </div>
        <h1>You can also like this</h1>
        <p>You’ve never seen it before!</p>
        <div style={{
            margin: '20px 40px'
        }}>
          <div className="row row-cols-1 row-cols-md-5 g-3 py-3">
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
          </div>
          <div className="row row-cols-1 row-cols-md-5 g-3 py-3">
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail