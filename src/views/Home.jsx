import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import logo from '../logo.svg'
import styles from '../assets/styles/Home.module.css'
//import Navbar from '../components/Navbar'

const Home = () => {
  const [queryParams] = useSearchParams()
  const search = queryParams.get('search')
  const sort = queryParams.get('sort')
  const type = queryParams.get('type')
  const showAlert = () => {
    alert('123')
  }
  return (
    <>
      <h1 className={styles.title}>Home {search} {sort} {type}</h1>
      <img src={logo} style={{ width: '200px' }} alt=""/>
      <img src='https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png' style={{ width: '200px' }} alt=""/>
      <br />
      <button className="btn btn-success" onClick={() => showAlert()}>Alert</button>
      <br />
      <Link className="btn btn-danger"to='/123'>Detail</Link> | <Link to='/new'>Insert</Link>
      | <Link to='/?search=abc&sort=name&type=asc'>Search</Link>
    </>
  )
}

/*const Home = () => {
  return (
    <>
      <Navbar />
    </>
  )
}*/

export default Home