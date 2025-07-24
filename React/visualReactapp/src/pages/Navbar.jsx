import React from 'react'
import About from './about'
import Contact from './Contact'
import Home from './home'
import { Link } from 'react-router'
import mainstyle from  './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={mainstyle.header}>
        <ul className={mainstyle.unlist}>
            <li className={mainstyle.li}><Link to="/">Home</Link></li>
         
           <li className={mainstyle.li}><Link to="/about">About</Link></li>
          
           <li className={mainstyle.li}><Link to="/contact">Contact</Link></li>

               <li className={mainstyle.li}><Link to="/product">Product</Link></li>
           
               <li className={mainstyle.li}><Link to="/product/add">Add Product</Link></li>

          </ul>
    </div>
  )
}

export default Navbar
