import React, { useEffect, useState } from 'react'
import Home from './components/Home.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import ProductAll from './components/ProductAll.jsx'
import Fav from './components/Fav.jsx'
import Cart from './components/Cart.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import UserAcc from './components/UserAcc.jsx'
import ProductView from './components/ProductView.jsx'
import Buy from './components/Buy.jsx'
import About from './components/About.jsx'
import Admin from './admins/Admin.jsx'
import Oops from './components/Oops.jsx'
import Products from './admins/Products.jsx'
function App() {
  const [nav, setNav] = useState(true)
  const [admin, setAdmin] = useState(false)
  let location = useLocation()

  useEffect(() => {
    if (location.pathname === '/Login') {
      setAdmin(false)

      setNav(false)
    } else if (location.pathname === '/Register') {
      setAdmin(false)

      setNav(false)
    } else if (location.pathname.includes('Admin')) {
      setNav(false)
      setAdmin(true)
    }
    else {
      setAdmin(false)

      setNav(true)
    }
  })
  return (
    <div>
      {nav && <Nav />}
      {admin && <Admin />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<ProductAll />} />
        <Route path='/Fav' element={<Fav />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/UserAcc' element={<UserAcc />} />
        <Route path='/Product/:ProductView' element={<ProductView />} />
        <Route path='/Buy' element={<Buy />} />
        <Route path='/About' element={<About />} />
        {/* <Route path='/Admin' element={<Admin />} /> */}
        <Route path='/Admin/Products' element={<Products />} />
        {/* <Route path='/*' element={<Oops />} /> */}
      </Routes>
    </div>
  )
}

export default App