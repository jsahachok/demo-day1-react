import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppClass from './AppClass'
import WorkShop from './workshop/WorkShop'
import Assignment from './Assignment/Assignment'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  //   <AppClass />
  // </React.StrictMode>
  // normal mode
  //   <App />
  //   <AppClass />
  // <WorkShop/>
  <Assignment />
)
