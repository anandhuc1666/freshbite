import React, { useEffect, useState } from 'react'
import './Proedit.css'
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Proedit() {
  const [item, setItem] = useState({
    img: "",
    item: "",
    rate: "",
    cat: "",
    detail: "",
    price: "",
  })

  const handle = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5005/productAll", item) 
      .then(res => {
        console.log("Product added:", res.data)
          toast.error(" Item removed successfully!", {
                  position: "top-right",
                  autoClose: 2000,
                });
        setItem({ img: "", item: "", rate: "", cat: "", detail: "", price: "" }) 
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='pro-edit'>
      <h1>Add new products</h1>
      <input type="text" placeholder='Add new item : food name' value={item.item} name='item' className='pro-edit-list' onChange={handle} />
      <input type="text" placeholder='Add new item : details' value={item.detail} name='detail' className='pro-edit-list' onChange={handle} />
      <div className='send1'>
        <input type="text" placeholder='Add new item : price' value={item.price} name='price' className='pro-edit-price' onChange={handle} />
        <input type="text" placeholder='Add new item : images (URL:)' value={item.img} name='img' className='pro-edit-price' onChange={handle} />
      </div>
      <div className='send'>
        <input type="text" placeholder='Add new item : rating' value={item.rate} name='rate' className='pro-edit-price' onChange={handle} />
        <input type="text" placeholder='Add new item : Categories of Foods' value={item.cat} name="cat" className='pro-edit-price' onChange={handle} />
      </div>
      <button className='pro-btn' onClick={submit}>Upload</button>
      <ToastContainer />
    </div>
  )
}


export default Proedit