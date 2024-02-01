import React from "react";
import { cardData } from "../constants";
import Cards from "./cards";
import dialog from "../assets/Dialog.png"
import momo from "../assets/momoo.png";
const Howtobuy = () => {
  return (
    <div className=" flex flex-col mx-12 mt-[250px] ">
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
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-4 mt-32">
          <Cards image={"image"} bgcolor={"#23A094"} margintop={50} />
          <Cards image={"image"} bgcolor={"#FFC900"} margintop={40} />
          <Cards image={"image"} bgcolor={"#F1F333"} margintop={30} />
          <Cards image={"image"} bgcolor={""} margintop={10} />
        </div>
        <div
          className=" grid grid-cols-1 lg:grid-cols-2"
        >
          <img src={momo} alt=""  className=" h-[400px] w-[400px] scale-x-[-1]"/>
          <img src={dialog} alt="" className=" h-[400px] w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Howtobuy;
