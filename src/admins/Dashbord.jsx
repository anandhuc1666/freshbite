import React, { useState } from 'react'
import './Dashbord.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Products from './Products'
import Adorder from './Adorder'

function Dashbord() {
    const navigate = useNavigate()
    const[product,setProduct]=useState(false)
 const LogOut =()=>{
    localStorage.removeItem("user")
    navigate("/Login")
}
    return (
        <div className='dashbord'>
            <div className="bord-list">
                <Link to={'/Admin/Addash'} className='bord-link'><h4>Dashbord</h4></Link>  
                <Link to={'/Admin/Products'} className='bord-link'><h4>📦Products</h4></Link>
               {product && <Products/>}
               <Link to={'/Admin/Adorder'} className='bord-link'><h4>🛒Order</h4></Link>
               <Link to={'/Admin/Adusers'} className='bord-link'><h4>👥Users</h4></Link>
                
                
                <div className="bord-out">
                    <button onClick={()=>LogOut()}>Logout</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashbord