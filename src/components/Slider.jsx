import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import fragrance from '../assets/fragrance.webp'
// import phone from '../assets/phone.webp'
// import laptop from '../assets/laptop.webp'
// import groceries from '../assets/groceries.jpeg'
// import homedecoration from '../assets/homedecoration.jpeg'
// import skincare from '../assets/skincare.jpeg'

function Slider() {
    const images = [
        'https://images.pexels.com/photos/207589/pexels-photo-207589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5209339/pexels-photo-5209339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
    const [count, setcount] = useState(0)

    function prevBtn() {
        setcount(count === images.length - 1 ? 0 : count + 1)
    }
    function nextBtn() {
        setcount(count === 0 ? images.length - 1 : count - 1)
    }


    return (
        <div className="slider">
            <div className="slider-container">
                <div className="btn1"  >
                    <i className="fa-solid fa-backward" onClick={prevBtn}></i>
                </div>
                <div className="image-slider">
                    {
                        images.map((elem, index) => (
                            count === index && (<>
                                <img src={elem} key={index} />
                                <div className="detailscontainer">
                                    <div className="info">
                                        <h2>Starting at ₹299/-</h2>
                                        <h4>Men and Women Accessories</h4>
                                    </div>
                                    <div className="wide-collection">
                                        <h3>Great Prices</h3>
                                        <i className="fa-solid fa-tag"></i> |
                                        <h3>Free Shipping </h3>
                                        <i className="fa-solid fa-plane-departure"></i>

                                    </div>
                                    <Link to='/shop' className="btn">
                                        <button>SHOP</button>
                                    </Link>

                                </div>
                            </>

                            )
                        ))
                    }

                </div>
                <div className="btn2" onClick={nextBtn}>
                    <i className="fa-solid fa-forward"></i>
                </div>
            </div>
        </div>

    )
}

export default Slider