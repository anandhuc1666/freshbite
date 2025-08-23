import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios'
import { MdModeEdit, MdDelete } from "react-icons/md";
import Proedit from './Proedit';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from './Admin';
import { Link } from 'react-router-dom';

function Products() {
  const [select, setSelect] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5005/productAll`)
      .then(res => setSelect(res.data))
      .catch(err => console.log(err))
  }, [])

  const remove = (id) => {
    axios.delete(`http://localhost:5005/productAll/${id}`)
      .then(() => {
        toast.error("🗑  Item removed successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        setSelect(prev => prev.filter(p => p.id !== id))
      })
      .catch(err => {
        toast.error("❌ Failed to remove item", {
          position: "top-right",
          autoClose: 2000,
        });
        console.log(err)
      })
  }

  return (
    <>
      <Admin />
      <div className='A-product'>
        <h2>Product</h2>
        <div className="Allproducts">
          {
            select.map((i) => (
              <div className="Ad-product-lists" key={i.id}>
                <div className="Ad-product-imgs">
                  <img src={i.img} alt="" style={{ width: 100, height: 100 }} />
                </div>
                <h4>{i.item}</h4>
                <p>{i.detail}</p>
                <p>₹ {i.price}</p>
                <div className="Ad-product-edit">
                  <Link to={`/Admin/Products/Update/${i.id}`}><MdModeEdit className='Ad-edit' onClick={() => setEditProduct(i)} /></Link>
                  
                  <MdDelete className='Ad-edit' onClick={() => remove(i.id)} />
                </div>
              </div>
            ))
          }
        </div>

          <Proedit />

        <ToastContainer />
      </div>
    </>
  )
}

export default Products
