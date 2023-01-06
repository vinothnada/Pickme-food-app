import {Route, Routes} from "react-router-dom"
import Food from "./pages/Food.js";
import Order from "./pages/Order.js";
import Login from "./pages/Login/Login.js";
import Hotels from "./pages/Hotels";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/food/:id" element={<Food/>}/>
        <Route path="/orders" element={<Order/>}/>
      </Routes>
  );
}

export default App;
