import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Employee from './Employee'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Route,Routes} from "react-router-dom"

//APP.JSX will hold the customer facing frontend
//Employee.JSX will hold the Employee facing frontend 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<App/>}/>
    <Route path ="/employee" element={<Employee/>}/>
    </Routes>
    </BrowserRouter> 
  </React.StrictMode>,
)
