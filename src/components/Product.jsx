import { Link } from "react-router-dom"
import Image from '../components/Image';
import Rating from '../components/Rating';
import { useState } from "react";
import { useCartContext } from "../CartContext";
import { useProductContext } from "../Context";




function Product(elem) {
  const {handleScroll} = useProductContext()
  const {addData} = useCartContext()
  const [count, setCount] = useState(0)
  const {id, title, price, rating, images, stock, description, brand } = elem
  const increment = () => {
    count < 1 ? setCount(count + 1) : setCount(1)
  }
  const decrement = () => {
    count < stock ? setCount(count + 1) : setCount(stock)
  }
  return (
    <>
      <div className="single-product-container" key={id}>
        <div className="top-container">
          <i className="fa-solid fa-chevron-left"></i>
          <Link to='/' className='Link'>
            Home
          </Link>
          <span>  /  {title}</span>

        </div>
        <div className="inner-container">
          <div className="left-container">
            <Image images={images} />
          </div>
          <div className="right-container">
            <div className="right-info">
              <h1>{title}</h1>
              {/* <p className='product-detail'><span>Rating : </span></p> */}
              <Rating rating={rating} />
              <p className='product-detail'><span>Stock : </span>{stock > 0 ? 'Available' : 'Out of Stock'}</p>
              <p className='product-detail '>
                <del>
                  <span> MRP : </span>
                  <span className="red"> {price + 150}$</span>
                </del>

              </p>
              <p className='product-detail deal'><span>Deal of the day :</span> {price}$</p>

              <p className='product-detail'>{description}</p>

              <p className='product-detail'><span>Brand : </span>{brand}</p>
              <hr />




            </div>
            <div className="add-to-cart">
              <button onClick={increment}>-</button>
              {count}
              <button onClick={decrement}>+</button>
            </div>
            <Link to='/cart' className="addtocart" onClick={()=>addData(id,count,elem)} >
              <button onClick={handleScroll}>Add To Cart</button>
            </Link>


          </div>
        </div>
      </div>
    </>
  )
}

export default Product