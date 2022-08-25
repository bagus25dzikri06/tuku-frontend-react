import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../assets/styles/detail.css'

const Detail = () => {
  const { id } = useParams()
  return (
    <>
      <h1 className="judul">Detail {id}</h1>
      <Link to='/123'>Detail</Link> | <Link to='/new'>Insert</Link>
      | <Link to='/?search=abc'>Search</Link>
    </>
  )
}

export default Detail