import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Explore from "../../components/ExploreMenu/Explore";
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
export default function Home() {
  const [category,setcategory]=useState("All");
  return (
    <div>
      <Hero />
      
      <Explore category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
}
