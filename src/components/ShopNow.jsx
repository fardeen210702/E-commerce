import { Link } from 'react-router-dom'
import '../App.css'
import { useProductContext } from '../Context'
// import data from '../pages/data'
import image1 from '../assets/image1.jpeg'
function ShopNow() {
  const {handleScroll} = useProductContext()

    return (
        <div className='shopnow' onClick={handleScroll}>
            <div className="shop-container">
                <div className="information">
                    <div className="info-cont">
                        <h1>CHECK OUT NOW!!!</h1>
                        <p>CartNow has brought you new high quality items for best Prices so without wasting much time just jump into the product section and buy the best items with best discounts</p>
                            <Link to='/shop' className='shop-link'>

                                SHOP NOW
                             
                            </Link>
                    </div>

                </div>
                <div className="image-info">
                    <figure>
                        <img src={image1} alt="" />
                    </figure>

                </div>

            </div>

        </div>
    )
}

export default ShopNow