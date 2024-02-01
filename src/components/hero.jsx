import React from "react";
import heading from "../assets/Heading 1.png";
import momo from "../assets/momo.png";
import { socials } from "../constants";

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-1 lg:mx-28 mt-24 mb-20">
      <div className=" flex flex-col ml-10 ">
        <div className="  ">
          <img src={heading} alt="" className=" h-16 w-20 ml-[200px]" />
          <h1 className=" text-[60px] font-bold mt-[-35px]"> $ MoMo</h1>
        </div>
        <div className=" h-full lg:w-96 w-[320px]">
          <p className=" text-sm mt-5 ">
            Welcome to the Momo family, where fun meets finance! Momo is not
            just a meme; it's a movement, a community- driven token that brings
            people together in the world of decentralized finance. Buckle up and
            get ready for a thrilling ride to the moon with Momo!
          </p>
          <div className=" flex flex-row gap-3">
          {socials.map((social) => (
            
            <div className=" h-10 w-10 bg-white rounded-full p-2 mt-5 border-black border-r-[3.5px] border-b-[3.5px]">
              <img src="" alt="" />
            </div>
          ))}
          </div>
        </div>
      </div>
      <div className="flex lg:h-[450px] lg:w-[400px] h-[300px] w-[250px] lg:mt-[-50px] items-center justify-center">
        <img src={momo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
