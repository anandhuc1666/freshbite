import React, { useEffect, useState } from 'react'
import './Cart.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    let navigate = useNavigate()
    if (!user) {
        return <h1>oops...!login now</h1>
    }
    const buy = () => {
        navigate('/Buy')
    }
    const remove = (c) => {
        let removed = user.cart.filter((f) => f.id !== c.id)
        let carts = {
            ...user,
            cart: removed
        }
        axios.put(`http://localhost:5005/users/${user.id}`, carts)
            .then((ress) => {

                toast.error("🗑️ item is remove", {
                    position: "top-right",
                    autoClose: 2000,
                });
                localStorage.setItem("user", JSON.stringify(carts))
                setUser(carts)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='carts'>
            <div className="carts-container">
                {
                    user.cart.map((c, index) => (
                        <div className="carts-list" key={index}>
                            <div className="carts-list-img-txt">
                                <img src={c.img} alt="img" className='fav-img' />
                                <h4>{c.item}</h4><p>₹ {c.price}</p>
                            </div>
                            <div className="carts-list-btn">
                                <button className='buys' onClick={() => buy(c)}>Buy</button>
                                <button className='cancels' onClick={() => remove(c)}>Cancel</button>
                            </div>
                        </div>
                    ))
                }

            </div>

            <ToastContainer />
        </div>
    )
}

export default Cart