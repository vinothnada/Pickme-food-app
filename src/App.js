import { Route, Routes } from "react-router-dom";
import Food from "./pages/Food.js";
import Order from "./pages/Order.js";
import Login from "./pages/Login/Login.js";
import RestaurantList from "./pages/Restaurants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/restaurants" element={<RestaurantList />} />
      <Route path="/food" element={<Food />} />
      <Route path="/food/:id" element={<Food />} />
      <Route path="/orders" element={<Order />} />
    </Routes>
  );
}

export default App;
