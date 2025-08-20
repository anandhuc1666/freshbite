import React, { useState } from 'react'
import './Admin.css'
import { RiAdminFill } from "react-icons/ri";
import logo from "../components/Fresh.png"
import Dashbord from './Dashbord';

function Admin() {
    const [dash, setDash] = useState(true)
    return (
        <div className='admin-page'>
            <div className='admin'>
                <RiAdminFill className='admin-icons' style={{ fontSize: 30 }} onClick={() => setDash(!dash)} />
                <div className='nav-admin'>
                    <h1 className='name'>FreshBite</h1>
                    <img src={logo} alt="" className='com-loco' />
                    {dash && <Dashbord />}
                </div>

            </div>

        </div>
    )
}

export default Admin