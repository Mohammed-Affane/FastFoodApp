import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
function App() {
  const [ShowLogin, setShowlogin] = useState(false);
  return (
    <>
      {ShowLogin === true ? (
        <LoginPopup setShowlogin={setShowlogin} ShowLogin={ShowLogin} />
      ) : (
        ""
      )}
      <div className="container">
        <Header ShowLogin={ShowLogin} setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
