import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/storecontext";
export default function Fooditem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="Food_item">
      <div className="food_item_img_Container">
        <img src={image} className="food_item_img" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            className="add_icon"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="counter">
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              className="incremente"
            />
            <span>{cartItems[id]}</span>
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              className="decremente"
            />
          </div>
        )}
      </div>
      <div className="food_item_info">
        <div className="food_item_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className="food_item_description">{description}</p>
        <p className="food_item_price">{price}$</p>
      </div>
    </div>
  );
}
