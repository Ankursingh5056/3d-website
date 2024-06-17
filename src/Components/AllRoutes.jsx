import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Design from '../Pages/Design'
import Buyer from '../Pages/Buyer'
import Seller from '../Pages/Seller'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/design' element={<Design/>}/>
      <Route path='/buyer' element={<Buyer/>}/>
      <Route path='/seller' element={<Seller/>}/>
    </Routes>
  )
}

export default AllRoutes
