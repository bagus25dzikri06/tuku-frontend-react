import React from 'react'
import { Link } from 'react-router-dom'
const Insert = () => {
  return (
    <>
      <h1>Insert</h1>
      <Link to='/123'>Detail</Link> | <Link to='/new'>Insert</Link>
      | <Link to='/?search=abc'>Search</Link>
    </>
  )
}

export default Insert