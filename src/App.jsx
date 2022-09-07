import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/routes/Home'
import ProductDetails from './components/routes/ProductDetails'
import Login from './components/routes/Login'
import SignUp from './components/routes/SignUp'
import Purchase from './components/routes/Purchase'
import { NavLink, Route, Routes } from 'react-router-dom'
import Header from './components/shared/Header'
import axios from 'axios'
import Cart from './components/routes/Cart'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Footer from './components/shared/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <main className='content' >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
