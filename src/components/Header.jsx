import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header() {
    const [value, setValue] = useState(false)

  function hanldeDisplay(){
    setValue(!value)
  }

   
    
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
                   <div className="menubar" >
            <i class="fa-solid fa-bars" onClick={()=>hanldeDisplay()}></i>
        </div>

                </div>

            </div>
            <div className="lower-header">
                <Nav value = {value} setValue={setValue}/>
            </div>

        </div>
    )
}

export default Header