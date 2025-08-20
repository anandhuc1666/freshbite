import React, { useEffect, useState } from 'react'
import './UserAcc.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
function UserAcc() {
const[users,setUser]=useState(null)
let user = JSON.parse(localStorage.getItem("user"))
let navigate=useNavigate()
useEffect(()=>{
       let user = JSON.parse(localStorage.getItem("user"))
       if(!user){
        navigate('/Login')
       }else{
        setUser(user)
       }

},[navigate])
const LogOut =()=>{
    localStorage.removeItem("user")
    navigate("/Login")
}

    return (
        <div className='useracc'>
            <div className="userbox">
                        <div className="useraccid">
                            <img src="http://t0.gstatic.com/images?q=tbn:ANd9GcTExSUq7HD0xgej_MmuSvc9BMor-dlcvkTMjG9-ce_qBdrFjkJZVtxzmuAKbwK_2X7EbRZCuukB" alt="" style={{ height: '200px' }} />
                            <div className="useraccid-details">
                                <div className="user-id">
                                    <h3>Name: {users?.name}</h3>
                                    <h5>Number: {users?.number}</h5>
                                    <h5>Email: {users?.email}</h5>
                                </div>
                                <button onClick={()=>LogOut()}>Logout</button>
                            </div>
                        </div>
          
                <div className="userprodect">

                    {
                        user?.order?.map((o, index) => (
                            <div className="useritems" key={index}>
                                <div className="product-img">
                                    <img src={o.img} alt="" className='user-order-img' />
                                </div>
                                <div className="product-details">
                                    <h3>Item: <span style={{ fontSize: 11 }}>{o.item}</span> </h3>
                                    <h5>price: ₹ {o.price}</h5>
                                    <h4>Qty:{o.quantity}</h4>
                                </div>
                                <h3 className='total'>total:₹ <span>{o.quantity*o.price}</span></h3>
                            </div>
                        ))
                    } 


                </div>
            </div>
        </div>
    )
}

export default UserAcc