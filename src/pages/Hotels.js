import React from 'react'
import {CartProvider} from '../context/CartContext'
import Cart from './components/Brand/Cart/Cart'
import Header  from "./components/Brand/Header/Header.js";
import Restaurants from './components/Brand/Restaurant/Restaurants/Restaurants'

const Hotels = () => {
  return (
    <CartProvider>
      <Cart></Cart>
      <Header></Header>        
      <Restaurants></Restaurants>
    </CartProvider>
  );
}

export default Hotels