import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart(){

  const {cart,removeFromCart} =
  useContext(CartContext);

  const total =
  cart.reduce((sum,i)=>sum+i.price,0);

  if(cart.length===0)
    return <h3 className="text-center mt-5">
      Your Cart is Empty 🛒
    </h3>;

  return(
    <div className="container mt-5">

      <h2 className="mb-4">Shopping Cart</h2>

      {cart.map(item=>(
        <div
          key={item.id}
          className="card cart-card p-3 mb-3">

          <div className="d-flex justify-content-between">
            <div>
              <h5>{item.name}</h5>
              <p>₹{item.price}</p>
            </div>

            <button
              className="btn btn-danger"
              onClick={()=>removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>

        </div>
      ))}

      <h4>Total Items: {cart.length}</h4>
      <h4>Total Price: ₹{total}</h4>

    </div>
  );
}
