import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios'
import { MdModeEdit, MdDelete } from "react-icons/md";
import Proedit from './Proedit';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from './Admin';

function Products() {
  const [select, setSelect] = useState([])
  const [editProduct, setEditProduct] = useState(null) // store product to edit

  useEffect(() => {
    axios.get(`http://localhost:5005/productAll`)
      .then(res => setSelect(res.data))
      .catch(err => console.log(err))
  }, [])

  // Delete product
  const remove = (id) => {
    axios.delete(`http://localhost:5005/productAll/${id}`)
      .then(() => {
        toast.success("🗑️ Item removed successfully!", {
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

  // Update product after editing
  const updateProduct = (updatedProduct) => {
    axios.put(`http://localhost:5005/productAll/${updatedProduct.id}`, updatedProduct)
      .then(() => {
        setSelect(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p))
        setEditProduct(null) // close modal/form
        toast.success("✏️ Product updated successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
      })
      .catch(err => {
        toast.error("❌ Failed to update product", {
          position: "top-right",
          autoClose: 2000,
        });
        console.log(err);
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
                <p>₹ {i.price}</p>
                <div className="Ad-product-edit">
                  <MdModeEdit className='Ad-edit' onClick={() => setEditProduct(i)} />
                  <MdDelete className='Ad-edit' onClick={() => remove(i.id)} />
                </div>
              </div>
            ))
          }
        </div>

        {/* Show Proedit only if editProduct is selected */}
        {editProduct && (
          <Proedit 
            product={editProduct} 
            onSave={updateProduct} 
            onCancel={() => setEditProduct(null)} 
          />
        )}

        <ToastContainer />
      </div>
    </>
  )
}

export default Products
