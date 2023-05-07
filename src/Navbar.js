import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex  justify-center space-x-7 font-mono text-blue-500 '>
    <Link to="/">Home</Link>
    <Link to="/page">Page</Link>
    <Link to="/don">Don</Link>
    <Link to="/form">Form</Link>
    </div>
  )
}

export default Navbar