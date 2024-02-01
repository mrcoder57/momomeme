import React from "react";

const Cards = ({ phase, bgcolor }) => {
  return (
    <div
      className=" flex border border-black border-b-[7.5px] border-r-[7.5px] h-64 w-64  mt-28 rounded-xl"
      style={{ background: bgcolor }}
    >
      <div className=" w-full p-2 ">
        <h1 className=" text-2xl"> Phase {phase}</h1>
        <hr className=" border border-black" />
        <ul type="cicle mt-3">
          <li className=" h-5 w-5  bg-yellow-300">
           Lorem, ipsum.
          </li>
          <li className="flex h-5 w-5  bg-yellow-300 mt-3">
           
            
          </li>
          <li className=" h-5 w-5  bg-yellow-300 mt-3">
           
          </li>
          <li className=" h-5 w-5  bg-yellow-300 mt-3">
          
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
