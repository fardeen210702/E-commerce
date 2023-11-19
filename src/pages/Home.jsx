import React from 'react'
import ShipDetails from '../components/ShipDetails'
import PopularProducts from '../components/PopularProducts'
import Slider from '../components/Slider'
import ShopNow from '../components/ShopNow'

function Home() {
  return (
    <div>
      <Slider/>
      <ShipDetails/>
      <ShopNow/>
      <PopularProducts/>

    </div>
  )
}

export default Home