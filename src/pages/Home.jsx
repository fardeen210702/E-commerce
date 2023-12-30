import React, { useEffect, useState } from 'react'
import ShipDetails from '../components/ShipDetails'
import PopularProducts from '../components/PopularProducts'
import Slider from '../components/Slider'
import ShopNow from '../components/ShopNow'

function Home() {

  // login snippet code------------->
// const [showlogin, setShowLogin] = useState(false)
// useEffect(() => {
//   setTimeout(() => {
//     setShowLogin(true)
//   }, 2000);
// }, [])

  return (
    <>
     {/* <div className="snippet">
        <h1>HEY THERE 👋</h1>
        <p>LOGIN to get better Expeirence!!!</p>
        <div className="btns">
        <button className='signIn' onClick={()=>setShowLogin(false)}> LOGIN</button>
        <LoginBtn  />
      
        </div>
       </div>   LOGIN SNIPPET <-------------*/} 
       
    
    
      <Slider/>
      <ShipDetails/>
      <ShopNow/>
      <PopularProducts/>

    </>
  )
}

export default Home