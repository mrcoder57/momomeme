import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Aboutmomo from "../components/about-momo";
import Howtobuy from "../components/how-to-buy";
import Tokenomics from "../components/tokenomics";
import Momomap from "../components/momomap";
import Getmemo from "../components/getmemo";
import Footer from "../components/footer";
import { BrowserRouter } from "react-router-dom";

const LandingPage = () => {
  return (
    <BrowserRouter>
    <div className="bg-[#FF90E8] h-full overflow-x-hidden">
      <div className="bg-[#FF90E8] h-full">
        <Navbar />
      </div>
      <Hero />
      <Aboutmomo/>
      <Howtobuy/>
      <Tokenomics/>
     <div className="h-full w-full">
        <Momomap/>
     </div>
     <div className="h-full w-full">
     <Getmemo/>
     </div>
    
     <Footer/>
    </div>
    </BrowserRouter>
  );
};

export default LandingPage;
