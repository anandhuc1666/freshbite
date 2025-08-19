import React, { useEffect, useState } from 'react'
import './Cart.css'
import axios from 'axios'

function Cart() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
     if(!user){
    return <h1>oops...!login now</h1>
  }
   const buy=(c)=>{
    let orders ={
        ...user,
        order:[
            ...user.order,
           {...c,quantity:1}
        ]
    }
  axios.put(`http://localhost:5005/users/${user.id}`,orders)
    .then((ress)=>{
        alert("order ready to buy")
        localStorage.setItem("user",JSON.stringify(orders))
        setUser(orders)
    })
    .catch(err=> console.log(err))
   }
const remove=(c)=>{
    let removed = user.cart.filter((f)=>f.id !== c.id)
    let carts = {
   ...user,
   cart: removed
    }
    axios.put(`http://localhost:5005/users/${user.id}`,carts)
    .then((ress)=>{
        alert('item removed')
        localStorage.getItem("user",JSON.stringify(carts))
        setUser(carts)
    })
    .catch(err=>console.log(err))
}

    return (
        <div className='carts'>
            <div className="carts-container">
                {
                    user?.cart?.map((c, index) => (
                        <div className="carts-list" key={index}>
                            <div className="carts-list-img-txt">
                                <img src={c.img} alt="img" className='fav-img' />
                                <h4>{c.item}</h4><p>₹ {c.price}</p>
                            </div>
                            <div className="carts-list-btn">
                                <button className='buys' onClick={()=>buy(c)}>Buy</button>
                                <button className='cancels' onClick={()=>remove(c)}>Cancel</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Cart