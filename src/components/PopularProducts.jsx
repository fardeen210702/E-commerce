import React from 'react'
import { Link } from 'react-router-dom'
import { useProductContext } from '../context'
function PopularProducts() {
    const {popularItems,isLoading,handleScroll} = useProductContext()
    if(isLoading){
        return <div className="loading">
            <h1>Loading...</h1>
        </div>
    }

   
  return (
    <div className='popular-item-container'>
        <div className="headline">
            <h1>POPULAR TODAY!!!</h1>
            <p>These are the most liked/ loved Products of our Site</p>
        </div>
        

    <div className="items-container" onClick={handleScroll}>

        {
            popularItems.map((item)=>{
                return <Link to={`/singleproduct/${item.id}`} className='Link1' key={item.id}>
                <div className="trending-container" >
                    <div className="image">
                        <img src={item.thumbnail}  alt="" />
                    </div>
                    <div className="image-info">
                        <h3>{item.title}</h3>
                        <h3>Price: {item.price}$</h3>
                    </div>
                    <Link to='/cart' className='Add-to-cart' >
              <button>Add To Cart</button>
              </Link>

                </div>
                    </Link>



})
}
        
</div>

    </div>
  )
}

export default PopularProducts