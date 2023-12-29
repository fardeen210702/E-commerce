import React from 'react'
import { useCartContext } from '../CartContext'

function CartComponent(elem) {
    const { id, name, price, count, image } = elem
    const {handleDeleteProduct}=  useCartContext()
    return (<>
       
        <div className='cart-detail-1'>
            <div className="cart-names">
                <div className="cart-title">
                    <img src={image} width='60px' alt="" />
                    <h6>{name}</h6>
                </div>
                <div className="cart-amount">
                    {count}
                </div>
                <div className="cart-total">
                    {price * count}
                </div>
                <div className="delete">
                <i class="fa-solid fa-trash" onClick={()=>handleDeleteProduct(id)}></i>
                </div>

            </div>
            <hr />


        </div>
    </>
    )
}

export default CartComponent