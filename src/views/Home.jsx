import React from 'react'
import Navbar from '../components/Navbar'
import Promo from '../components/Promo'
import Category from '../components/Category'
import Card from '../components/Card'

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Promo />
        <h1>Category</h1>
        <p>What are you currently looking for?</p>
        <Category />
        <h1>New</h1>
        <p>You've never seen it before</p>
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
          <div className="row row-cols-1 row-cols-md-5 g-3 py-3">
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
          </div>
        </div>
        <h1>Popular</h1>
        <p>Find clothes that are trending recently</p>
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

export default Home