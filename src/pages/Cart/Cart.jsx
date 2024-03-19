import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/storecontext";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const navigate=useNavigate();
  const { cartItems, food_list, removeFromCart,SubtotalF,PromoCodeF } = useContext(StoreContext);
  const handleClick=()=>{
    let promocode=document.getElementById("promoCode").value;
    let total=SubtotalF()+2;
    let result=PromoCodeF(promocode,total);
    return result;
  }
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantite</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id]) {
            return (
              <>
                <div className=" cart-items-title cart-items-item" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item.id)}>
                    x
                  </p>
                </div>
                <hr />
              
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
            <button onClick={()=>navigate("/order")}>Proced To Checkout</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" id="promoCode"/>
              <button onClick={handleClick} >Submit</button>
              <span>{}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
