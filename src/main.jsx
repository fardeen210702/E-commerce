import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterContext } from './FilterContext.jsx'
import { Context } from './context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
<FilterContext>

    <App />
</FilterContext>
    </Context>
  </React.StrictMode>,
)
