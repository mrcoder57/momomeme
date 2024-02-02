import React from "react";
import { socials } from "../constants";
import top from "../assets/ybottom.png";
import SectionWrapper from "../hoc/sectionwrappper";
const Getmemo = () => {
  return (
    <div className="flex flex-col h-full w-full bg-[#FF90E8] mt-[-50px]">
      <div className=" h-full w-screen   mb-[100px]">
        <img src={top} alt="top" />
      </div>
      <div className=" flex flex-col items-center justify-center ">
        <h1 className=" mt-20 text-6xl font-bold text-center w-full">
          Missed $PEPE 
        </h1>
        <h1 className="mt-4 text-6xl font-bold text-center w-full">
           Get MOMO
        </h1>
        <div className=" flex flex-col items-center justify-center mx-auto mt-20">
        <button className=" lg:h-24 h-18 lg:w-[600px] w-[300px] rounded-full border-black border-r-[5.5px] border-b-[6.5px] hover:border-yellow-500 hover:bg-black hover:text-white  shadow-lg bg-yellow-400 text-center text-2xl ">
            Get Momo
        </button>
        </div>
        <div className=" flex flex-row gap-3">
          {socials.map((social) => (
            
            <div className=" h-14 w-14 bg-white rounded-full p-2 lg:mt-10 mt-5 border-black border-r-[3.5px] border-b-[3.5px]">
              <img src={social.Image} alt="" />
            </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Getmemo,"getmomo");
