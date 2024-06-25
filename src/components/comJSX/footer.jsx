import React from 'react'
import '../comCSS/footer.css'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <div className='footerContainer'>
      <h2>
        All Rights Reserved By Hackunia's Administration
      </h2>
      <h4>
        Copyright @2024
      </h4>
      <h6>
        For Queries <Link to={'/Contact-Hackunia'}> Contact Us </Link>
      </h6>
    </div>
  )
}

export default footer