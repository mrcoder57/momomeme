import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Aboutmomo from "../components/about-momo";
import Howtobuy from "../components/how-to-buy";
import Tokenomics from "../components/tokenomics";
import Momomap from "../components/momomap";
import Getmemo from "../components/getmemo";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="bg-[#FF90E8] h-full py-2 overflow-x-hidden">
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
     <Getmemo/>
     <Footer/>
    </div>
  );
};

export default LandingPage;
