import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { AiOutlineRight } from 'react-icons/ai'

const ProductByCategory = () => {
  const [ queryParams ] = useSearchParams()
  const category = queryParams.get('category')
  return (
    <div>
      <Navbar />
      <ul class="list-inline py-2 ms-2">
        <li class="list-inline-item">Home <AiOutlineRight /></li>
        <li class="list-inline-item">Category <AiOutlineRight /></li>
        <li class="list-inline-item">{category}</li>
      </ul>
      <div style={{
        margin: '20px 40px'
      }}>
        <h1>{category}</h1>
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
  )
}

export default ProductByCategory