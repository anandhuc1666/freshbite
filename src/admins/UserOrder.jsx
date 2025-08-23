import React, { useState,useEffect } from 'react'
import { TiPin } from "react-icons/ti";
import './UserOrder.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function UserOrder() {
    const{prod}=useParams()
    const[item,setItem]=useState([])
        useEffect(() => {
        axios.get(`http://localhost:5005/users/${prod}`)
        
            .then(ress => setItem(ress.data))
            .catch(err => console.log(err))
    }, [])
    console.log(item.cart)
  return (
    <div className='userorder'>
                <img src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png" alt=""  className='pic-cover'/>
        <div className="user-order-list-details"><TiPin className='pin'/>
         <div className="user-id-list">

           <h1>{item.name}</h1>
           <hr />
           <div className="user-online">
            <li>Email: <span>{item.email}</span></li>
           <li>Number: <span>{item.number}</span></li>
           <li>Status: <span>{item.status}</span></li>
           </div>
           <h2 className='user-name'>{item.name} Order's</h2>
         </div>
         <div className="user-id-order">
          {
            item &&
            item?.order?.map((o,index)=>(
                <div className="order-user" key={index}>
                    <img src={o.img} alt="" style={{width:50,height:50,border:'1px solid #111',borderRadius:'10px'}}/>
                    <h3>{o.item}</h3>
                    <h5>{o.cat}</h5>
                    <p>Qty: {o.quantity}</p>
                </div>
            ))
          }
         </div>
        </div>
    </div>
  )
}

export default UserOrder