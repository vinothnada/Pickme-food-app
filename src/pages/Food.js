import React from 'react'
import {CartProvider} from '../context/CartContext'
import Cart from './components/Brand/Cart/Cart'
import Header  from "./components/Brand/Header/Header.js";
import Meals from './components/Brand/Meal/MealsList/MealsList'

const Food = () => {
  return (
    <CartProvider>
      <Cart></Cart>
      <Header></Header>        
      <Meals></Meals>
    </CartProvider>
  )
}

export default Food