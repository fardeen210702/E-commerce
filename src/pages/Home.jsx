import React from 'react'
import ShipDetails from '../components/ShipDetails'
import PopularProducts from '../components/PopularProducts'
import Slider from '../components/Slider'
import ShopNow from '../components/ShopNow'

function Home() {
  return (
    <>
      <Slider/>
      <ShipDetails/>
      <ShopNow/>
      <PopularProducts/>

    </>
  )
}

export default Home