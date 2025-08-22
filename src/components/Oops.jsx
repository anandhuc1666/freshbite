import React from 'react'
import './Oops.css'
import { Link } from 'react-router-dom'
function Oops() {
  return (
    <div className='oops'>
     <div className="oops-box">
      404 ERROR
      <p>back to login? <Link to={'/Login'}> Login</Link></p>
     </div>
    </div>
  )
}

export default Oops