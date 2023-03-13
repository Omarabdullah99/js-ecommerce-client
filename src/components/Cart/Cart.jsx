import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
// <div className="empty-cart">
//         <BsCartX />
//         <span>No Products in the Cart.</span>
//         <button className="return-cta">RETURN TO SHOP </button>
// </div>
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <span className="text">Close</span>
            <MdClose />
          </span>
        </div>

        <>
          <CartItem />
          <div className="cartfooter">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
               <div className="text total">1234</div>
            </div>
            <div className="button">
              <div className="checkout-cta">Checkout</div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
