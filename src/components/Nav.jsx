import React, { useEffect, useState } from 'react'
import { MdFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import logo from "../components/Fresh.png"
import './Nav.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Nav() {
    const[user,setUser]=useState(JSON.parse(localStorage.getItem("user")))
    const[count,setCount]=useState(0)

    useEffect(()=>{
        axios.get(`http://localhost:5005/users/${user.id}`)
        .then(res=>setCount(user?.fav?.length))
        .catch(err=>console.log(err))
        setUser(count)
    },[])
    return (
        <div className='nav'>
            <div className="nav-header1">
                <img src={logo} alt="" className='nav-header1'/>
            </div>
            <div className="nav-header2">
                <Link to={'/'} className='loco'><h3>Home</h3></Link>
                <Link to={'/Product'}  className='loco'><h3>Products</h3></Link>
                <Link to={'/About'} className='loco'><h3>About</h3></Link>
            </div>
            <div className="nav-header3">
                <div className="fsv-count">
                    <p>{count}</p>
                </div>
                <Link to={'/Fav'} style={{textDecoration:'none',color:'black'}}><MdFavorite style={{ fontSize: '1.7em' }}/></Link>
                <Link to={'/Cart'}><FaCartShopping style={{ fontSize: '1.7em',color:'black' }} /></Link>
                <Link to={'/UserAcc'}><MdAccountCircle style={{ fontSize: '1.7em',color:'black' }} /></Link>  
            </div>
        </div>
    )
}

export default Nav