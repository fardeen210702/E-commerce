import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='Navbar'>
        <Link to='/home' className='Link'>
            HOME
        </Link>
     
        <Link to='/shop' className='Link'>
            SHOP
        </Link>
        <Link to='/contact' className='Link'>
            CONTACT
        </Link>
        <Link to='/trending' className='Link'>
            TRENDING
        </Link>
       
        


    </div>
  )
}

export default Nav