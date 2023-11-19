import React from 'react'

function ShipDetails() {
  return (
    <div className='shipDetails'>
        <div className="ship-container">
            
            <div className="first-detail">
            <i className="fa-solid fa-plane-departure"></i>
            <p>Free <br />Shipping</p>
            </div>
            <div className="first-detail">
            <i className="fa-solid fa-wallet"></i>
            <p>Money <br /> Gurantee</p>
            </div>
            <div className="first-detail">
            <i className="fa-solid fa-shield-halved"></i>
            <p>Payment <br /> Method</p>
            </div>
            <div className="first-detail">
            <i className="fa-solid fa-headphones"></i>
            <p>Online <br /> Support</p>
            </div>
            <div className="first-detail">
            <i className="fa-solid fa-clock"></i>
            <p>Fast <br />Delivery</p>
            </div>

        </div>
        
    </div>
  )
}

export default ShipDetails