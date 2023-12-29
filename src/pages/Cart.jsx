import React from 'react'
import { useCartContext } from '../CartContext'
import CartComponent from '../components/CartComponent'


function Cart() {
  const {cart} = useCartContext()
  // console.log(cart,'cartaatta');
  
  return (
    <>
     
    <div className="cart-container">
      <div className="cart-details">
        <div className="cart-names">
          <h4>Product</h4>
          <h4> Quantity</h4>
          <h4>Total</h4>
          <h4>Remove</h4>

        </div>
        <hr />
        <div className="carts-added">
          {
            cart.map((elem)=>{
              return <CartComponent key={elem.id} {...elem}/>
            })
          }
         
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart