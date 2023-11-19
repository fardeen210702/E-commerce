import React from 'react'
import {  useParams } from 'react-router-dom'
import { useProductContext } from '../context';
import Trendings from '../pages/Trendings'

import Product from '../components/Product';
import FilteredData from '../components/FilteredData';
function SingleProductPage() {



  const { products  } = useProductContext()
  const { id } = useParams()
  // console.log(id,'id');



  return (
    <> {
      products.map(elem => {
        return elem.id == id &&  <Product key={elem.id} {...elem}  />
        

      })

    }
    <FilteredData/>


    </>
  )
}

export default SingleProductPage