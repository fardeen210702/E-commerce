import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useProductContext } from '../Context'


function Footer() {
    const {handleScroll} = useProductContext()

   
    return (
        <div className='footer'>
            <div className="footer-container">
                <h4>Copyright © {new Date().getFullYear()}. All rights are reserved</h4>
                <hr />
                <div className="footer-section">

                    <div className="footer-info-container">


                        <Link to='/home' className='Link'>

                        <p onClick={handleScroll}>About</p>
                            
                        </Link>
                        <Link to='/contact' className='Link' onClick={handleScroll}>

                            <p >Contact</p>
                        </Link>
                        <p onClick={handleScroll}>FAQs</p>
                        <Link to='/category' className='Link'  onClick={handleScroll}>
                            <p>Category</p>

                        </Link>


                    </div>


                    <div className="footer-info">
                        <div className="customer-service">
                            <h1>Customer Service</h1>
                            <p>Resolution Center</p>
                            <p>How to Shop</p>
                            <p>Payment</p>
                            <p>Free Shipping</p>
                        </div>
                        <div className="customer-service">
                            <h1>Information</h1>
                            <p>About</p>
                            <p>Blog</p>
                            <p>Career</p>
                            <p>Store Loaction</p>
                            
                        </div>
                        <div className="customer-service">
                            <h1>Help</h1>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>Contact Us</p>
                            <p>FAQs</p>
                            
                        </div>


                        <div className="footer-link-container">


                            <a href="https://www.linkedin.com/in/fardeen-mohammed-579518271/" target='_blank'><i className="fa-brands fa-linkedin">
                            </i></a>
                            <a href="https://github.com/fardeen210702" target='_blank'>

                                <i className="fa-brands fa-github"></i>
                            </a>


                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer