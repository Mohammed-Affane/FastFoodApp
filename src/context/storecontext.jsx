import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvide = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    if (!cartItems[id]) {
      setCartItems((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const SubtotalF = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product.id === item);

        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const promocodes = [{ "OFF50": 50, "OFF70": 70 }];

  const PromoCodeF = (code, total) => {
    let promotion=0;
    promocodes.forEach((element) => {
      if (code==="OFF50") {
        promotion = parseFloat((total * element[code]) / 100);
      } else if (code === "OFF70") {
        promotion = parseFloat((total * element[code]) / 100);
      }
    });
    console.log(promotion);
    return promotion;
  };

  const countcarditem = () => {
    let count = 0;
    for (const item in cartItems) {
      count += cartItems[item];
    }
    return count;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    SubtotalF,
    countcarditem,
    PromoCodeF,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvide;
