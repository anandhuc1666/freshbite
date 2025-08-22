import React, { useEffect, useState } from 'react'
import './Buy.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function Buy() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [counts, setCounts] = useState(1)
  useEffect(() => {
    if (!user?.id) return;
    axios.get(`http://localhost:5005/users/${user.id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, [])

  const add = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }))
  }

  const sub = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1)
    }))
  }
  const order = (p, qty) => {
     
    let orders = {
      ...user,
      order: [
        ...user.order,
        { ...p, quantity: qty }
      ]
    }
    let Neworders = {
      userid:user.id,
      username:user.name,
      usernumber:user.number,
      useremail:user.email,
      order: [
        { ...p, quantity: qty }
      ]
    }
    axios.put(`http://localhost:5005/users/${user.id}`, orders)

      .then(res => {
        toast("📦 your order is conform 🎊");
        localStorage.setItem("user", JSON.stringify(orders))
        setUser(orders)
      })
      .catch(err => console.log(err))
    axios.post(`http://localhost:5005/orders`, Neworders)
      .then(res => {
        console.log("ORDERED");
        
      })
      .catch(err => console.log(err))
  }
  return (

    <div className="user-buy">
      {
        user?.cart?.map((p, index) => {
          const qty = counts[p.id] || 1;
          return (
            <div className="user-buy-items" key={index}>
              <div className="user-item-name">
                <h2>food: {p.item}</h2>
                <h4>Rate: {p.rate}🌟</h4>
                <h4>Cart: {p.cat}</h4>
              </div>
              <div className="user-number-item">
                <button className='count' onClick={() => add(p.id)}>+</button>
                <h3>{qty}</h3>
                <button className='count' onClick={() => sub(p.id)}>-</button>
              </div>
              <div className="user-item-rate">
                <h2>Total: {qty * p.price}</h2>
                <button className='conform' onClick={() => order(p, qty)}>Conform</button>
                <ToastContainer />
              </div>
            </div>

          )
        })

      }

    </div>
  )
}

export default Buy