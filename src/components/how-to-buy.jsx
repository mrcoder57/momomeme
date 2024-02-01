import React from "react";
import { cardData } from "../constants";
import Cards from "./cards";
import dialog from "../assets/Dialog.png";
import momo from "../assets/momoo.png";
import r from "../assets/R.png";
import Last from "../assets/last.png";
import sol from "../assets/solscan.png";
import ghost from "../assets/ghost.png";
import bottom from "../assets/bottom.png";
const Howtobuy = () => {
  return (
    <div className=" flex flex-col  ">
      <div className=" h-full w-full   mb-[100px]">
        <img src={bottom} alt="top" />
      </div>
      <div className=" flex flex-col ">
        <div>
          <h1 className=" text-6xl first-letter:capitalize font-bold lg:ml-[100px]">
            HOW
          </h1>
        </div>
        <div className=" flex lg:flex-row flex-col w-full ">
          <h1 className=" text-5xl  first-letter:capitalize lg:ml-[200px] font-bold ">
            TO BUY
          </h1>
          <p className=" text-sm ml-10 mt-6">
            Ready to own some Momo tokens? Follow these straightforward steps to
            purchase your Momo tokens and join the Momo community
          </p>
          <hr className=" border border-black" />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 mt-32 gap-4 lg:ml-20">
          <Cards image={ghost} bgcolor={"#23A094"} margintop={40} />
          <Cards image={sol} bgcolor={"#FFC900"} margintop={20} />
          <Cards image={r} bgcolor={"#F1F333"} margintop={0} />
          <Cards image={Last} bgcolor={""} margintop={-20} />
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 mb-28 mt-16">
          <img
            src={momo}
            alt=""
            className=" h-[400px] lg:h-[600px]  lg:w-[600px] w-[400px] scale-x-[-1]"
          />
          <img src={dialog} alt="" className=" h-[400px] w-[400px] lg:h-[600px]  lg:w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Howtobuy;
