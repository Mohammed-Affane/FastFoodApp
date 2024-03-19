import React from "react";
import "./Explore.css";
import { menu_list } from "../../assets/assets";
export default function Explore({category,setcategory}) {
  return (
    <div className="ExploreMenu" id="ExploreMenu">
      <div className="ExploreMenu-text">
      <h3>Explore Our Menu</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum,
        incidunt, nesciunt doloribus amet, sed sint est possimus alias velit
      </p>
      </div>
      
      <ul className="menu_list">
        {menu_list.map((item,index) => {
          return (
            <li key={index} onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} />
              <h5>{item.menu_name}</h5>
            </li>
          );
        })}
      </ul>
      <hr/>
    </div>
  );
}
