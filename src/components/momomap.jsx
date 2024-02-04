import React from "react";
import Cards from "./mapcard";
import map from "../assets/List.png"
import bottom from "../assets/bottom.png";
import top from "../assets/ybottom.png";
import SectionWrapper from "../hoc/sectionwrappper";
const Momomap = () => {
  return (
    <div className="h-full bg-[#FFC900] ">
     <div className=" h-full w-full lg:mt-[-150px] mt-[-10px]">
        <img src={bottom} alt="top" />

        
      </div>
      <div className=""> 
        <div className="flex flex-col">
          <div className=" mt-36">
            <h1 className="text-6xl first-letter:capitalize font-bold lg:ml-[100px]">
              MEMO
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col w-full">
            <h1 className="text-5xl first-letter:capitalize lg:ml-[200px] font-bold">
              MAP
            </h1>
            <p className="text-sm ml-10 mt-6">
              Ready to own some Momo tokens? Follow these straightforward steps
              to purchase your Momo tokens and join the Momo community
            </p>
           
          </div>
          <hr className=" border border-black " />
          <div className="mx-4 lg:mx-8 h-[120%] lg:w-[90%] w-screen mt-16">
            <img src={map} alt="" />
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-5 mb-20 mx-auto lg:ml-24 gap-5">
            <Cards phase={1} bgcolor={"#23A094"} />
            <Cards phase={2} bgcolor={"#FF7051"} />
            <Cards phase={3} bgcolor={"#F1F333"} />
            <Cards phase={4} bgcolor={"#FF90E8"} />
          </div>
        </div>
      </div>
      {/* <div className=" h-full w-full lg:mt-[120px] mt-[250px]">
        <img src={top} alt="top"  className=" scale-x-[-1]"/>
      </div> */}
    </div>
  );
};

export default SectionWrapper(Momomap,"map");
