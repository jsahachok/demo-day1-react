import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppClass from './AppClass'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppClass />
  </React.StrictMode>
  // normal mode
  //   <App />
  //   <AppClass />
)