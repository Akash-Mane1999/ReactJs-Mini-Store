import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {

  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4">

      <h4 className="text-white fw-bold">🛒 MiniStore</h4>

      <div className="ms-auto">
        <NavLink to="/" className="text-white me-4">
          Home
        </NavLink>

        <NavLink to="/products" className="text-white me-4">
          Products
        </NavLink>

        <NavLink to="/cart" className="btn btn-warning">
          Cart ({cart.length})
        </NavLink>
      </div>

    </nav>
  );
}
