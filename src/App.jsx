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
// import AdminApp from './admins/AdminApp.jsx'
import Admin from './admins/Admin.jsx'
// import Oops from './components/Oops.jsx'
import Products from './admins/Products.jsx'
import Proedit from './admins/Proedit.jsx'
import Adorder from './admins/Adorder.jsx'
import Adusers from './admins/Adusers.jsx'
import Oops from './components/Oops.jsx'
import Addash from './admins/Addash.jsx'

function App() {
  const [nav, setNav] = useState(true)
  const [admin, setAdmin] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  let location = useLocation()

  useEffect(() => {
    if (location.pathname === '/Login') {
      setAdmin(false)

      setNav(false)
    } else if (location.pathname === '/Register') {
      // setAdmin(false)

      setNav(false)
    }
    else if (location.pathname.includes('Admin')) {
      setNav(false)
      // setAdmin(true)
    }
    else {
      // setAdmin(false)
      setNav(true)
    }
  })
  return (
    <div>
      {nav && <Nav />}
      {admin && <Admin />}
      <Routes>
        <Route path='/' element={user?.role === 'user' ? <Home /> : <Oops />} />
        <Route path='/Product' element={user?.role === 'user' ? <ProductAll /> : <Oops />} />
        <Route path='/Fav' element={user?.role === 'user' ? <Fav /> : <Oops />} />
        <Route path='/Cart' element={user?.role === 'user' ? <Cart /> : <Oops />} />
        <Route path='/Register' element={user?.role === 'user' ? <Register /> : <Oops />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/UserAcc' element={user?.role === 'user' ? <UserAcc /> : <Oops />} />
        <Route path='/Product/:ProductView' element={user?.role === 'user' ? <ProductView /> : <Oops />} />
        <Route path='/Buy' element={user?.role === 'user' ? <Buy /> : <Oops />} />
        <Route path='/About' element={user?.role === 'user' ? <About /> : <Oops />} />
        <Route path='/Admin' element={user?.role === 'admin' ? <Admin /> : <Oops />} />
        <Route path='/Admin/Products' element={user?.role === 'admin' ? <Products /> : <Oops />} />
        <Route path='/Admin/Products/Proedit' element={user?.role === 'admin' ? <Proedit /> : <Oops />} />
        <Route path='/Admin/Adorder' element={user?.role === 'admin' ? <Adorder /> : <Oops />} />
        <Route path='/Admin/Adusers' element={user?.role === 'admin' ? <Adusers /> : <Oops />} />
        <Route path='/Admin/Addash' element={user?.role === 'admin' ? <Addash /> : <Oops />} />
        <Route path='*' element={<Oops />} />
      </Routes>
    </div>
  )
}

export default App