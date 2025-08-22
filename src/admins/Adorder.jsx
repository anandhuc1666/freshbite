import React, { useEffect, useState } from 'react'
import './Adorder.css'
import axios from 'axios'
import Admin from './Admin'

function Adorder() {
    const[order,setOrder]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5005/orders`)
        .then(ress=>{
            setOrder(ress.data)
        })
        .catch(err=>console.log(err))
    },[])
    console.log(order)
  return (
  <>
  <Admin/>
    <div className='adorder'>
        <h1>Main Order's</h1>
        <div className="adorder-list">
            <table border={1} className='table-sheet'>
                <tr className='table-header'>
                    <th>Customer's</th>
                    <th>UserID</th>
                   <th>Food Name</th>
                   <th>Category</th>
                   <th>Price</th>
                   <th>Qty</th>
                </tr>
             {order.map((or, index) => (
              or.order.map((item, i) => (
                <tr key={`${index}-${i}`}>
                  <td>{or.username}</td>
                  <td>{or.userid}</td>
                  <td>{item.item}</td>
                  <td>{item.cat}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))
            ))}
                
            </table>
        </div>

    </div>
  </>
  )
}

export default Adorder