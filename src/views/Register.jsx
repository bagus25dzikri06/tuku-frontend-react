import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CustomerRegister from '../components/CustomerRegister'
import SellerRegister from '../components/SellerRegister'

const Register = () => {
  const [active, setActive] = useState('')
  useEffect(() => {
    setActive('customer')
  }, [])
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <>
      <section class="h-100">
        <div class="container h-100">
          <div class="row justify-content-sm-center h-100">
            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div class="text-center my-5">
                <img src='images/Group1206.jpg' width={119} height={50} />
              </div>
              <div>
                <div class="p-1">
                  <h1 class="fs-4 fw-bold mb-6 text-center">Please sign up with your account</h1>
                  {active === 'customer' ? (
                    <div className='mr-auto ml-auto mt-4 mb-4 text-center'>
                      <button
                        className='btn btn-danger rounded-0 text-white'
                        style={{ width: '100px' }}
                        onClick={() => setActive('customer')}
                      >
                        Customer
                      </button>
                      <button
                        className='btn btn-outline-secondary pr-5 text-reset text-black rounded-0'
                        style={{ width: '100px' }}
                        onClick={() => setActive('seller')}
                      >
                        Seller
                      </button>
                    </div>
                  ) : (
                    <div className='mr-auto ml-auto mt-4 mb-4 text-center'>
                      <button
                        className='btn btn-outline-secondary pr-5 text-reset text-black rounded-0'
                        style={{ width: '100px' }}
                        onClick={() => setActive('customer')}
                      >
                        Customer
                      </button>
                      <button
                        className='btn btn-danger rounded-0 text-white'
                        style={{ width: '100px' }}
                        onClick={() => setActive('seller')}
                      >
                        Seller
                      </button>
                    </div>
                  )}
                  {active === 'customer' ? (
                    <CustomerRegister />
                  ):(
                    <SellerRegister />
                  )}
                </div>
                <div class="py-3">
                  <div class="text-center">
                    Already have a Tuku account? <Link to='/login'>Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register