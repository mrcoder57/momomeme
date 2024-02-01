import React from "react";
import top from "../assets/topbotton.png";
import momo from "../assets/tokenmomo.png";


import { tags } from "../constants";

const Tokenomics = () => {
  return (
    <div className=" flex flex-col bg-white ">
      <div className=" h-full w-full lg:mt-[-150px] mt-[-40px]">
        <img src={top} alt="top" />
      </div>
      <div className=" flex  justify-center mx-auto mt-5">
        <h2 className=" text-4xl capitalize text-center font-bold">
          TOKENOMICS
        </h2>
      </div>
      <div className=" flex flex-col  justify-center mx-auto mt-10 gap-2">
        <h5 className=" text-center text-xl">Token total supply</h5>
        <h2 className=" text-2xl text-center font-semibold">
          2,099,991,041,457.75
        </h2>
      </div>
      <div className=" flex lg:flex-row flex-wrap-reverse items-center justify-center mt-10 gap-3">
        {tags.map((tag) => (
          <div className="bg-white flex-row h-8  rounded-full border-black border-b-[3.5px] border-l border-t border-r-[3.5px] mx-5 text-sm flex">
          <button className="h-5 w-full  rounded-full ml-2 flex flex-row p-1"
         
          >
            <span  style={{backgroundColor:tag.color}} className=" h-5 w-5 rounded-full"></span>
             <span className="ml-2"> {tag.name}</span>
             <span className="ml-2 font-semibold">- {tag.percent}%</span>
             </button>
          </div>
         
         
        ))}
      </div>
      <div className=" flex  h-full lg:w-[600px] w-[400px] mx-auto items-center justify-center mt-12 rounded-xl mb-16 lg:mb-[200px]">
        <img src={momo} alt="" />
      </div>
     
    </div>
  );
};

export default Tokenomics;
