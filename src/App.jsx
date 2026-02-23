import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>

        <Footer/>


      </BrowserRouter>
    </CartProvider>
  );
}
