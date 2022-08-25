import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Insert from '../views/Insert'
import Detail from '../views/Detail'

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":id" element={<Detail />} />
          <Route path="new" element={<Insert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default router