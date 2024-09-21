import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './React Hackathon/Signup'
import Dashboard from './React Hackathon/Dashboard'
import Login from './React Hackathon/LOGIN.JSX'
import Product1 from './React Hackathon/Product1'
import Card from './React Hackathon/cards'
import Cart from './React Hackathon/Cart'
import Header from './React Hackathon/Header'
// import Appbar from './React Hackathon/Appbar'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/product/:productId' element={<Product1/>}/>
        <Route path='/card'  element={<Card/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/header' element={< Header/>}/>
        

        {/* <Route path='/appbar' element={<Appbar/>}/> */}


      </Routes>
    </div>
  )
}

export default App
