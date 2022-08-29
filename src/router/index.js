import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Insert from '../views/Insert'
import ProductDetail from '../views/ProductDetail'

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="new" element={<Insert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default router