import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


function LoginBtn() {
  const { loginWithRedirect, logout,isAuthenticated,user } = useAuth0()
  
  return (
    <>
  
    {
      isAuthenticated ? (<button className='signIn button'onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
      </button>): (<button className='signIn' onClick={() =>loginWithRedirect()}>LOGIN</button>)
    
    }
      <span className='userName'> {
      isAuthenticated && <img src={user.picture} alt="" width='30px' height='30px'/> }</span>
      
    </>
  )
}

export default LoginBtn