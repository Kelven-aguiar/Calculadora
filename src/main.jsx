import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './main/Calculator'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
    <Calculator />
    </div> 
  </React.StrictMode>,
)
