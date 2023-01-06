import React from 'react'
import {CartProvider} from '../context/CartContext'
import Cart from './components/Brand/Cart/Cart'
import Header  from "./components/Brand/Header/Header.js";
import Orders from './components/Brand/Order/OrdersList/OrdersList'

const Order = () => {
  return (
    <CartProvider>
      <Cart></Cart>
      <Header></Header>        
      <Orders></Orders>
    </CartProvider>
  )
}

export default Order