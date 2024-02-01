import React from "react";
import top from "../assets/topbotton.png";
import momo from "../assets/tokenmomo.png";

import bottom from "../assets/bottom.png";
import { tags } from "../constants";

const Tokenomics = () => {
  return (
    <div className=" flex flex-col bg-white">
      <div className=" h-full w-full lg:mt-[-150px] mt-[-70px]">
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
      <div className=" flex flex-row items-center justify-center mt-10">
        {tags.map((tag) => (
          <button className=" bg-white h-8 w-32 rounded-full border-black border-b-[3.5px]  border-r-[3.5px] mx-5">
            <div className={`h-5 w-5 bg-${tag.color}-500 rounded-full ml-2 flex flex-row`}>
              <span className=" ml-5"> {tag.name}</span>
            </div>
          </button>
        ))}
      </div>
      <div className=" flex  h-full lg:w-[600px] w-[400px] mx-auto items-center justify-center mt-12 rounded-xl">
        <img src={momo} alt="" />
      </div>
      <div className=" h-full w-full lg:mb-[-120px] mb-[40px]">
        <img src={bottom} alt="top" />
      </div>
    </div>
  );
};

export default Tokenomics;
