import React, { useEffect, useState } from 'react'
import './ProductView.css'
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductView() {
    const navigate = useNavigate()
    const { ProductView } = useParams()
    const [item, setItem] = useState()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    useEffect(() => {
        axios.get(`http://localhost:5005/productAll/${ProductView}`)
            .then(ress => setItem(ress.data))
            .catch(err => console.log(err))
    }, [])
    const cart = (item) => {
        let checkitem = user.cart.find((c) => c.id === item.id)
        console.log(cart)
        if (checkitem) {
          alert('item on the cart')
        }
        let carts = {
            ...user,
            cart: [
                ...user.cart,
                { ...item, quantity: 1 }
            ]
        }
        axios.put(`http://localhost:5005/users/${user.id}`, carts)
            .then(ress => {
                toast.success("🛒  Item add successfully!", {
                    position: "top-right",
                    autoClose: 2000,
                });
                localStorage.setItem("user", JSON.stringify(carts))
                setUser(carts)
            })
            .catch(err => console.log(err))
    }
    const back =()=>{
        navigate('/product')
    }
    return (
        <div className='productview'>
            <div className="product-imgs">
                <div className="product-img-col">
                    <div className="product-box1"><img src={item?.img} alt="" style={{ height: '300px', width: 370 }} /></div>
                    <div className="product-img-col2">
                        <div className="product-box2"><img src={item?.img1} alt="" style={{ width: 185, height: 150 }} /></div>
                        <div className="product-box3"><img src={item?.img2} alt="" style={{ width: 185, height: 150 }} /></div>
                    </div>
                    <div className="product-box4"><img src={item?.img3} alt="" style={{ width: 185, height: 300 }} /></div>
                </div>
                <div className="detail">
                    <p>{item?.area}</p>
                </div>
                <div className="product-imgs-btns">
                    <button className='buy' onClick={() => cart(item)}>Cart</button>
                    <button className='icancel' onClick={back}>Cancel</button>
                </div>
            </div>
            <div className="product-details">
                <div className="product-detail-list">
                    <div className="p-list-1">
                        <h2>Food: <span style={{ fontSize: 25 }}>{item?.item}</span> </h2>
                        <h3>Price: ₹  <span>{item?.price}</span></h3>
                    </div>
                    <div className="p-list-2">
                        <h3>Rate: <span>{item?.rate}🌟</span></h3>
                        <h3>Item: <span>{item?.detail}</span></h3>
                    </div>
                    <div className="p-list-3">
                        <p></p>
                    </div>

                </div>
            </div>
            <div className="allproduct-lists"></div>
            <ToastContainer />
        </div>
    )
}

export default ProductView