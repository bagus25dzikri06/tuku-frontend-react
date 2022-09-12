import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Insert from '../views/Insert'
import ProductDetail from '../views/ProductDetail'
import ProductByCategory from '../views/ProductByCategory'

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="new" element={<Insert />} />
          <Route path="category" element={<ProductByCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default router