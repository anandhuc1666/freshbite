import React, { useEffect, useState } from 'react'
import './Fav.css'
import axios from 'axios'
import { toast, ToastContainer, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Fav() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  if (!user) {
    return <h1>oops...!login now</h1>
  }
  const cart = (p) => {
    let itemexist = user.cart.find(f => f.id === p.id)
    if (itemexist) {
      return alert("item on there!")
    }
    let carts = {
      ...user,
      cart: [
        ...user.cart,
        p
      ]
    }
    axios.put(`http://localhost:5005/users/${user.id}`, carts)
      .then(ress => {
        localStorage.setItem("user", JSON.stringify(carts))
         toast.success("🛒  Item add successfully!", {
                  position: "top-right",
                  autoClose: 2000,
                });
        setUser(carts)
      })
      .catch(err => console.log('404', err))
  }
  const remove = (p) => {
    let updatedFav = user.fav.filter(f => f.id !== p.id);


    let updatedUser = {
      ...user,
      fav: updatedFav
    };

    axios.put(`http://localhost:5005/users/${user.id}`, updatedUser)
      .then(() => {
        localStorage.setItem("user", JSON.stringify(updatedUser));
           toast.error("❌ Failed to remove item", {
               position: "top-right",
               autoClose: 2000,
             });
        setUser(updatedUser);
      })
      .catch(err => {

        console.log(err);
      })
    window.location.reload()
  };
  return (
    <div className='fav'>
      <img src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png" alt="" className='pic-curve1' />
      <div className="fav-container">
        {
          user?.fav?.map((p, index) => (
            <div className="fav-list" key={index}>
              <div className="fav-list-img-txt"> <img src={p.img} alt="img" className='fav-img' /><h4>{p.item}</h4><p> ₹  {p.price}</p></div>
              <div className="fav-list-btn">
                <button className='cart' onClick={() => cart(p)}>Cart</button>
                <button className='cancel' onClick={() => remove(p)}>Cancel</button>
              </div>
            </div>
          ))
        }
      </div>

      <ToastContainer />
    </div>
  )
}

export default Fav