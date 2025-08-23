import React, { useEffect, useMemo, useState } from 'react'
import './ProductAll.css'
import axios from 'axios'
import { MdAccountCircle, MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductAll() {
  const [icorn, setIcron] = useState([])
  const [product, setProduct] = useState([])
  const [item, setItem] = useState("")
  const [select, setSelect] = useState("food")
  const[user,setUser]=useState(JSON.parse(localStorage.getItem("user")))
  useEffect(() => {
    axios.get("http://localhost:5005/product")
      .then(i => setIcron(i.data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get("http://localhost:5005/productAll")
      .then(p => setProduct(p.data))
      .catch(err => console.log(err))
  },[])
  const filteredItem = useMemo(() => {
    if (!product) return [];

    const itemText = item.toLowerCase();
    const selectText = select.toLowerCase();

    return product.filter((p) => {
      const matchSearch = p.item?.toLowerCase().includes(itemText);
      const matchSelect =
        selectText === "food" || p.cat?.toLowerCase() === selectText;

      return matchSearch && matchSelect
    })
  }, [product, item, select])
const fav =(p)=>{
  let itemexist = user.fav.find(f=>f.id===p.id)
  if(itemexist){
    return   toast.error("😍 item already on there!", {
                position: "top-right",
                autoClose: 800,
            });
  }
  let fave ={
    ...user,
    fav:[
        ...user.fav,
       {...p,quantity:1}
    ]
    
  }
  axios.put(`http://localhost:5005/users/${user.id}`,fave)
  .then(ress=>{
    
    localStorage.setItem("user",JSON.stringify(fave))
    setUser(fave)
     toast.success("🤩 Item add successfully!", {
                position: "top-right",
                autoClose: 2000,
            });
  })
  .catch(err=>console.log(err))
 setTimeout(()=>{
   window.location.reload()
 },2000)
}

  return (
    <div className='product'>
      <div className="product-banner">
        <h2>Inspiration for your first order</h2>
        <div className="banner-product-icron">
          {
            icorn.map((p, k) => (
              <img src={p.img} alt="" key={k} />
            ))
          }
        </div>
      </div>
      <div className="product-search-items">
        <input type="text" placeholder='Search your item' className='search' onChange={(e) => setItem(e.target.value)} />
        <select name="select" id="" className='select' onChange={(e) => setSelect(e.target.value)}>
          <option value="food">Select foods</option>
          <option value="veg">Pure Veg</option>
          <option value="burger">Burger</option>
          <option value="pizza">Pizza</option>
        </select>
      </div>
      <div className="product-items-lists">
        {
          filteredItem.map((p, k) => (
            <div className="product-item-list" key={k}>
              <MdFavorite style={{position:'absolute',marginLeft:320,fontSize: '1.5em',color:'red',marginTop:5}}onClick={()=>fav(p)} />
             <Link to={`/Product/${p.id}`}><img src={p.img} alt="" className='product-item-img' /></Link>
              <div className="product-item-name">
                <h4>{p.item}</h4>
                <h6>{p.rate} <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="0.8rem" height="0.8rem" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 fauQLv"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg></h6>
              </div>
              <div className="product-item-details">
                <p>{p.detail}</p>
                <h5><span>₹ {p.price}</span> for one</h5>
              </div>
            </div>
          ))
        }


      </div>
      <ToastContainer />
    </div>
  )
}

export default ProductAll