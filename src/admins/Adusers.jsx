import React, { useEffect, useState } from 'react'
import './Adusers.css'
import axios from 'axios'
import Admin from './Admin'
import { Link } from 'react-router-dom'

function Adusers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5005/users`)
            .then(ress => {
                const onlyUsers = ress.data.filter(u => u.role !== "admin");
                setUsers(onlyUsers)
            })
            .catch(err => console.log(err))
    }, [])

    const toggleBlock = async (id, status) => {
        const newStatus = status === "active" ? "blocked" : "active"

        await axios.patch(`http://localhost:5005/users/${id}`, { status: newStatus })

        setUsers(users.map(u =>
            u.id === id ? { ...u, status: newStatus } : u
        ))
    }


    return (
       <>
       <Admin/>
        <div className='adusers'>
            <h1>Customer's List</h1>
            <div className="adusers-lists">
                {
                    users.map((us, index) => (
                        <div className="adusers-list" key={index}>
                            <div className="user-1">
                            <Link to={`/Admin/Adorder/UserOrder/${us.id}`} style={{textDecoration:'none'}}><h2>{us.name}</h2><br /></Link>   
                                <ul>
                                    <li>{us.email}</li><br />
                                    <li>{us.number}</li><br />
                                    <li>{us.id}</li>
                                </ul>
                                <button
                                    onClick={() => toggleBlock(us.id, us.status)}
                                    style={{ background: us.status === "blocked" ? "red" : "rgb(79, 233, 100)", color: "white" }}
                                >
                                    {us.status === "blocked" ? "BLOCKED" : "ACTIVE"}
                                </button>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
       </>
    )
}

export default Adusers