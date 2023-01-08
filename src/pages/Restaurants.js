import React from "react";
import { CartProvider } from "../context/CartContext";
import Cart from "./components/Brand/Cart/Cart";
import Header from "./components/Brand/Header/Header.js";
import RestaurantList from "./components/Brand/Restaurant/Restaurants/RestaurantList";

const Restaurants = () => {
  return (
    <CartProvider>
      <Cart></Cart>
      <Header></Header>
      <RestaurantList></RestaurantList>
    </CartProvider>
  );
};

export default Restaurants;
