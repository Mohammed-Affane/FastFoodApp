import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
export default function LoginPopup({ setShowlogin }) {
  const [Currstate, setCurrstate] = useState("Sign Up");
  return (
    <div className="LoginPopup">
      <form className="login-popup-container" method="post">
        <div className="login-popup-title">
          <h2>{Currstate}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {Currstate !== "Sign Up" ? (
            <>
              <input type="email" placeholder="Your email" required />
              <input type="password" placeholder="Password" required />
            </>
          ) : (
            <>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your email" required />
              <input type="password" placeholder="Password" required />
            </>
          )}

          <button type="submit">
            {Currstate === "Sign Up" ? "create Account" : "Login"}
          </button>
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            ipsum.
          </p>
        </div>
        {Currstate !== "Sign Up" ? (
          <p>
            Create New Account <span onClick={()=>setCurrstate("Sign Up")} >Click here</span>
          </p>
        ) : (
          <p>
            Alraedy Have Account? <span onClick={()=>setCurrstate("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
}
