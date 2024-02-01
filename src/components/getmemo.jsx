import React from "react";
import { socials } from "../constants";

const Getmemo = () => {
  return (
    <div className="flex mt-[-100px] bg-[#FF90E8]">
      <div className=" flex flex-col items-center justify-center mx-auto">
        <h1 className=" mt-44 text-6xl font-bold text-center w-full">
          Missed $PEPE 
        </h1>
        <h1 className="mt-4 text-6xl font-bold text-center w-full">
           Get MOMO
        </h1>
        <div className=" flex flex-col items-center justify-center mx-auto mt-20">
        <button className=" lg:h-24 h-18 lg:w-[600px] w-[300px] rounded-full bg-yellow-400 text-center text-2xl ">
            Get Momo
        </button>
        </div>
        <div className=" flex flex-row gap-3">
          {socials.map((social) => (
            
            <div className=" h-10 w-10 bg-white rounded-full p-2 mt-5 border-black border-r-[3.5px] border-b-[3.5px]">
              <img src="" alt="" />
            </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default Getmemo;
