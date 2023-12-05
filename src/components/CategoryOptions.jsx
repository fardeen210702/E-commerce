import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { constants } from './Constants'
import { Link } from 'react-router-dom'
import Trendings from '../pages/Trendings'
import FilteredData from './FilteredData'

function CategoryOptions() {
    const [categoryItem, setCategoryItem] = useState('')
    const [arrayData, setArrayData] = useState([])
    const [value, setValue] = useState(false)





    async function getCatData(url) {
        try {

            const res = await axios.get(url)
            const products = await res.data.products
            console.log(products, 'data fetched');
            setArrayData(products)

        }
        catch (err) {
            console.log(err, "errror");
        }
    }

    console.log(arrayData, 'arrayData');

    useEffect(() => {
        if (categoryItem) {
            const catData = `https://dummyjson.com/products/category/${categoryItem}`
            getCatData(catData)

        }
    }, [categoryItem])



    return (
        <div className='category-container'>
            <div className='btns' onClick={() => setValue(!false)}>
                <button onClick={() => setCategoryItem('smartphones')} >{constants.SMARTPHONE}</button>
                <button onClick={() => setCategoryItem('laptops')}>{constants.LAPTOPS}</button>
                <button onClick={() => setCategoryItem('skincare')} >{constants.SKINCARE}</button>
                <button onClick={() => setCategoryItem('home-decoration')} > {constants.HOMEDECORATION}</button>
                <button onClick={() => setCategoryItem('groceries')} >{constants.GROCERIES}</button>

            </div>

            {
                value ? (
                    <div className="items-container">
                        {
                            arrayData.map((item) => {
                                return <Link to={`/singleproduct/${item.id}`} className='Link1' key={item.id}>
                                    <div className="trending-container" >
                                        <div className="image">
                                            <img src={item.thumbnail} alt="" />
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
                ) : (
                
                    <FilteredData />
                    
                )
            }



        </div>
    )
}

export default CategoryOptions