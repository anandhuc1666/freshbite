import React, { useEffect, useState } from 'react'
import './ProductView.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductView() {
    const{ProductView}=useParams()
    const[item,setItem]=useState({})
    useEffect(()=>{
          axios.get(`http://localhost:5005/productAll${ProductView}`)
          console.log(ProductView)
          .then(ress=>setItem(ress.data))
          .catch(err=>console.log(err))
    },[])
  return (
    <div>
        {
            item.map((p,index)=>(
                <div className="view">
                    <img src={p.img} alt="" />
                    <p>{p.item}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ProductView