import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
                  <h1 class="fs-4 fw-bold mb-6 text-center">Please login with your account</h1>
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
                  <form method="POST" class="needs-validation" novalidate="" autocomplete="off">
                    <div class="mb-3">
                      <input id="email" type="email" class="form-control" name="email" value="" placeholder="Email" required autofocus />
                      <div class="invalid-feedback">
                        Email is invalid
                      </div>
                    </div>

                    <div class="mb-3">
                      <input id="password" type="password" class="form-control" name="password" placeholder="Password" required />
                      <div class="invalid-feedback">
                        Password is required
                      </div>
                    </div>

                    <div class="mb-3 w-100 text-end">
                      <a href="forgot.html">
                        Forgot Password?
                      </a>
                    </div>

                    <div class="mb-3">
                      <button type="submit" class="btn btn-primary ms-auto rounded-pill col-12">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <div class="py-3">
                  <div class="text-center">
                    Don't have a Tuku account? <Link to='/register'>Register</Link>
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

export default Login