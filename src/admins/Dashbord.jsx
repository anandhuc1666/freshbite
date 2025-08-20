import React from 'react'
import './Dashbord.css'
import { Link, Route, Routes } from 'react-router-dom'

function Dashbord() {
    return (
        <div className='dashbord'>
            <div className="bord-list">
                <Link to={'/Admin/Products'} className='bord-link'><h4>📦Products</h4></Link>
                <h4>🛒Order</h4>
                <h4>👥Users</h4>
                <div className="bord-out">
                    <h3>Logout</h3>
                </div>
            </div>
        </div>
    )
}

export default Dashbord