import React from 'react'

const SellerRegister = () => {
  return (
    <>
      <form method="POST" class="needs-validation" novalidate="" autocomplete="off">
        <div class="mb-3">
          <input id="name" type="text" class="form-control" name="name" value="" placeholder="Name" required autofocus />
          <div class="invalid-feedback">Name is required</div>
        </div>

        <div class="mb-3">
          <input id="email" type="email" class="form-control" name="email" value="" placeholder="Email" required autofocus />
          <div class="invalid-feedback">Email is invalid</div>
        </div>

        <div class="mb-3">
          <input id="phone_number" type="text" class="form-control" name="phone_number" value="" placeholder="Phone Number" required autofocus />
          <div class="invalid-feedback">Phone Number is required</div>
        </div>

        <div class="mb-3">
          <input id="store_name" type="text" class="form-control" name="store_name" value="" placeholder="Store Name" required autofocus />
          <div class="invalid-feedback">Store Name is required</div>
        </div>

        <div class="mb-3">
          <input id="password" type="password" class="form-control" name="password" placeholder="Password" required />
          <div class="invalid-feedback">Password is required</div>
        </div>

        <div class="mb-3 w-100 text-end">
          <a href="forgot.html">Forgot Password?</a>
        </div>

        <div class="mb-3">
          <button type="submit" class="btn btn-primary ms-auto rounded-pill col-12">Register</button>
        </div>
      </form>
    </>
  )
}

export default SellerRegister