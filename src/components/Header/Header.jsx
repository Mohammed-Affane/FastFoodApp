import React, { useContext, useState } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storecontext";
export default function Header({ ShowLogin, setShowlogin }) {
  const [Menu, Setmenu] = useState("home");
  const { countcarditem } = useContext(StoreContext);
  return (
    <div className="header">
      <div className="logo_container">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="logo" />
        </Link>
      </div>
      <ul className="nav">
        <Link
          to="/"
          className={Menu === "home" ? "active" : ""}
          onClick={() => Setmenu("home")}
        >
          home
        </Link>
        <li
          className={Menu === "menu" ? "active" : ""}
          onClick={() => Setmenu("menu")}
        >
          <a href="#ExploreMenu">menu</a>
        </li>
        <li
          className={Menu === "mobileapp" ? "active" : ""}
          onClick={() => Setmenu("mobileapp")}
        >
          <a href="#AppDownload">App Download</a>
        </li>
        <li
          className={Menu === "contactus" ? "active" : ""}
          onClick={() => Setmenu("contactus")}
        >
          <a href="#Footer">contact us</a>
        </li>
      </ul>
      <div className="tools">
        <img src={assets.search_icon} className="search_icon" />
        <div className="nav-card">
          <Link to="/cart">
            <img src={assets.basket_icon} className="bag_icon" />
          </Link>
          <div className={countcarditem()===0?"":"dot"}>{countcarditem()>0?countcarditem():""}</div>
        </div>

        <button
          className="btn btn-signin"
          onClick={() => {
            setShowlogin(true);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
