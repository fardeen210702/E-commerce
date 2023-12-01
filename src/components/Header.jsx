import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header() {
   
   
    
    return (
        <div className='header'>
            <div className="upper-header">
                <Link to ='/home' className='Link'> 
                <div className="logo">
                    <p>CartNow</p>
                </div>
                </Link>
                
                <div className="login-sign">
                
                    <button className='signIn'>LOGIN</button>
                   <Link to='/cart'>
                   
                    <i className="fa-solid fa-cart-shopping"></i>
                   </Link>

                </div>

            </div>
            <div className="lower-header">
                <Nav/>
            </div>

        </div>
    )
}

export default Header