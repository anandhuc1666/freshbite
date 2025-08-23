import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Update() {
    const { prid } = useParams()
    const [state, setState] = useState({
        img: "",
        item: "",
        rate: "",
        cat: "",
        detail: "",
        price: "",
    })
    useEffect(() => {
        axios.get(`http://localhost:5005/productAll/` + prid)
            .then(ress => setState(ress.data))
            .catch(err => console.log(err))
    }, [])
    const handle = (e) => {
        e.preventDefault();
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const update = () => {
        axios.put(`http://localhost:5005/productAll/` + prid, state)
            .then(ress => setState(ress.data))
        toast.success("🤩 Item add successfully!", {
            position: "top-right",
            autoClose: 2000,
        })

            .catch(err => console.log(err))
    }
    return (
        <div className='pro-edit'>
            <h1>Update the product</h1>
            <input type="text" placeholder='Add new item : food name' value={state.item} name='item' className='pro-edit-list' onChange={handle} />
            <input type="text" placeholder='Add new item : details' value={state.detail} name='detail' className='pro-edit-list' onChange={handle} />
            <div className='send1'>
                <input type="text" placeholder='Add new item : price' value={state.price} name='price' className='pro-edit-price' onChange={handle} />
                <input type="text" placeholder='Add new item : images (URL:)' value={state.img} name='img' className='pro-edit-price' onChange={handle} />
            </div>
            <div className='send'>
                <input type="text" placeholder='Add new item : rating' value={state.rate} name='rate' className='pro-edit-price' onChange={handle} />
                <input type="text" placeholder='Add new item : Categories of Foods' value={state.cat} name="cat" className='pro-edit-price' onChange={handle} />
            </div>
            <button className='pro-btn' onClick={() => update()}>Upload</button>
            <ToastContainer />
        </div>
    )
}

export default Update