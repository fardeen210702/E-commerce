import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Context } from './Context.jsx'
import { FilterContext } from './FilterContext.jsx'
import { CartContext } from './CartContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-1g6ylxn6df8ld7nz.us.auth0.com"
    clientId="MhIP1i2P9JmbXyPDtJyImMQVLY63QwVJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      
    <Context>
      <FilterContext>
        <CartContext>

          <App />
        </CartContext>
      </FilterContext>
    </Context>
  </Auth0Provider>
     

)
