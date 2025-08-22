import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Register() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        number: "",
        email: "",
        password: "",
        role:"user",
        status:"active",
        cart: [],
        fav: [],
        order: []
    })
    const handle = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault();
        if(!form.name||!form.email||!form.password){
  return
}
   axios.post("http://localhost:5005/users",form)
        .then((response)=>{
             navigate("/Login")
            console.log(response.data)
        })
        .then(err=>console.log(err))
    }
    return (
        <div className='register'>
            <img src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png" alt="" className='pic-curve1' />
            <form action="" className="register-box" onSubmit={submit}>
                <h3>Register Now!</h3>
                <div className="users-box">
                    <input type="text" className='users-input' value={form.name} name='name' placeholder='Your Name' onChange={handle} />
                </div>
                <div className="users-box">
                    <input type="number" className='users-input' value={form.number} name='number' placeholder='Your Number' onChange={handle} />
                </div>
                <div className="users-box">
                    <input type="email" className='users-input' value={form.email} name='email' placeholder='Your Email' onChange={handle} />
                </div>
                <div className="users-box">
                    <input type="password" className='users-input' value={form.password} name='password' placeholder='Password' onChange={handle} />
                </div>
                <div className="users-box">
                    <button type='submit' className='signupBtn' onClick={()=>submit(e)}>Register</button>
                </div>
                <div className="users-box">
                    <h5>Have already an account? <Link to={'/Login'} className='login-txt'><span>Login here</span></Link></h5>

                </div>
            </form>
        </div>
    )
}

export default Register