import React, { useEffect } from 'react'
import './Addash.css'
import Admin from './Admin'
import { useState } from 'react'
import axios from 'axios'

function Addash() {
    const [user, setUser] = useState([])
    const [count, setCount] = useState([])
    const [status, setStatus] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5005/users`)
            .then(ress => {
                setUser(ress.data)
                setCount(ress.data.length)
                setStatus(ress.data.status)
            })
            .catch(err => console.log(err))
    }, [])
    let active = user?.filter((r) => r?.status == "active").length

    let Block = user.filter((f) => f?.status === "blocked").length

    return (
        <>
        <Admin />
            <div className='addash'>
                <div className="custom-users">
                    <div className="customer-list">
                        <h1> Coustomer's</h1>
                        <div className="count-user">
                            <h4>No.{count}</h4>
                        </div>
                    </div>
                    <div className="customer-list">
                           <h2>Blocked User's</h2>
                           <div className="count-user">
                            <h4 style={{color:'green'}}>No.{active}</h4>
                        </div>
                    </div>
                     <div className="customer-list">
                        <h2>Blocked User's</h2>
                         <div className="count-user">
                             
                            <h4 style={{color:'red'}}>No.{Block}</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addash