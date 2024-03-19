import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/storecontext";
import Fooditem from "../Fooditem/Fooditem";
export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="FoodDisplay" id="FoodDisplay">
      <h2>Top Dishes new</h2>
      <div className="foodDisplay_list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Fooditem
                id={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
