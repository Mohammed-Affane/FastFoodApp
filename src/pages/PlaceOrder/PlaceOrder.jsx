import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/storecontext";
export default function PlaceOrder() {
  const{SubtotalF}=useContext(StoreContext);
  return (
    <form className="placeorder">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-feeds">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Adress" />
        <input type="text" placeholder="Street" />
        <div className="multi-feeds">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-feeds">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Contry" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>${SubtotalF()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${SubtotalF()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${SubtotalF()===0?0:SubtotalF()+2}</b>
            </div>
          </div>
            <button >Proced To Payment</button>
        </div>
        
      </div>
    </form>
  );
}
