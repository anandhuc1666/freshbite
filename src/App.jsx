import React from 'react'
import Home from './components/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import ProductAll from './components/ProductAll.jsx'
import Fav from './components/Fav.jsx'
import Cart from './components/Cart.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import UserAcc from './components/UserAcc.jsx'
import ProductView from './components/ProductView.jsx'

function App() {
  return (
    <div>
      <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product' element={<ProductAll/>}/>
      <Route path='/Fav' element={<Fav/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/UserAcc' element={<UserAcc/>}/>
      <Route path='/Product/:ProductView' element={<ProductView/>}/>
     </Routes>
    </div>
  )
}

export default App