import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">

  <div className="image-wrapper">
    <img
      src={product.image}
      alt={product.name}
      className="product-img"
    />
  </div>

  <h5>{product.name}</h5>

  <p>{product.description}</p>

  <h6 className="price">₹{product.price}</h6>

  <button
    className="add-btn"
    onClick={() => addToCart(product)}
  >
    Add To Cart
  </button>

</div>

  );
}
