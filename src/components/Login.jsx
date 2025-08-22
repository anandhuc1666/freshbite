import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" })
    const handle = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password)
            return
        axios.get(`http://localhost:5005/users?email=${form.email}&password=${form.password}`)
            .then((response) => {
                if (response.data.length > 0) {
                    const user = response.data[0];
                    localStorage.setItem("user", JSON.stringify(user));
                    if (user.role === "admin") {
                        navigate('/Admin')
                    } else if(user.status === "active"){
                       navigate('/')
                    }
                }
                else {
                    alert("Invalid email or password");
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='login'>
            <img src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png" alt="" className='pic-curve1' />
            <div className="login-box">
                <img src="https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png" alt="" className='pic1' />
                <h3>Login</h3>
                <div className="user-box">
                    <input type="email" placeholder='Your Email' className='user-input' value={form.email} name='email' onChange={handle} />
                </div>
                <div className="user-box">
                    <input type="password" placeholder='Your Password' className='user-input' value={form.password} name='password' onChange={handle} />
                </div>
                <div className="user-box" style={{ marginTop: 10 }}>
                    <button className='login-btn' onClick={submit}>Login</button>
                </div>
                <div className="user-box">
                    <h5>I don't have an account  <Link to={'/Register'} className='signup-txt'><samp> SignUp</samp></Link> </h5>

                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>
    )
}

export default Login