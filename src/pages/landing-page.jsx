import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Aboutmomo from "../components/about-momo";
import Howtobuy from "../components/how-to-buy";

const LandingPage = () => {
  return (
    <div className="bg-[#FF90E8] h-full py-2">
      <div className="bg-[#FF90E8] h-full">
        <Navbar />
      </div>
      <Hero />
      <Aboutmomo/>
      <Howtobuy/>
     
    </div>
  );
};

export default LandingPage;
