import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Context } from './context.jsx'
import { FilterContext } from './FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
<FilterContext>

    <App />
</FilterContext>
    </Context>
  </React.StrictMode>,
)
