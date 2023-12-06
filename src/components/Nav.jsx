import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav({value,setValue}) {

    
    return (
    <>

        {  value&& 
        <div className='Navbar'> 
         {/* onClick={()=>setValue(!value)}   add this to navbar if want to set value to false */}

            <Link to='/home' className='Link'>
                HOME
            </Link>

            <Link to='/shop' className='Link'>
                SHOP
            </Link>
            <Link to='/contact' className='Link'>
                CONTACT
            </Link>
            <Link to='/category' className='Link'>
                CATEGORY
            </Link>
            <Link to='/trending' className='Link'>
                TRENDING
            </Link>



        </div>
            }
    </>
    )
}

export default Nav