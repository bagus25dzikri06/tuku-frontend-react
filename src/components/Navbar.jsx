import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { FiFilter, FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../assets/styles/navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">
              <img src='images/Group1206.svg' width={80} height={94} />
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-2 m-auto">
                    <li>
                      <div className="input-group" style={{width: '700px'}}>
                        <input className="form-control border rounded-pill" type="search" placeholder="Search" />
                        <span className="input-group-append">
                            <button className="btn btn-outline-secondary bg-white border rounded-pill ms-n5" type="button">
                                <BiSearch className="mb-1" />
                            </button>
                        </span>
                      </div>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary bg-white border ms-n5" type="button">
                        <FiFilter className='mb-1' />
                      </button>
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto">
                    <li>
                      <a href="#" className="nav-item nav-link btn-space">
                        <FiShoppingCart size={20} />
                      </a>
                    </li>
                    <li><Link to='/login' className="nav-item nav-link btn btn-lg btn-space btn-primary text-light rounded-pill">Login</Link></li>
                    <li><Link to='/register' className="nav-item nav-link btn bbtn-lg btn-space btn-outline-primary rounded-pill">Signup</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar