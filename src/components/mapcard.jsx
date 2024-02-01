import React from "react";

const Cards = ({ phase, bgcolor }) => {
  return (
    <div
      className=" flex border border-black border-b-[4.5px] border-r-[3.5px] h-64 w-52  mt-28 rounded-xl"
      style={{ background: bgcolor }}
    >
      <div className=" w-full p-2 ">
        <h1 className=" text-2xl"> Phase {phase}</h1>
        <ul type="cicle">
          <li className=" h-5 w-5  bg-yellow-300">
            {" "}
            <span className=" flex ml-6">some points</span>
          </li>
          <li className="flex h-5 w-5  bg-yellow-300 mt-3">
            {" "}
            <span className=" flex ml-6">some points</span>
          </li>
          <li className=" h-5 w-5  bg-yellow-300 mt-3">
            {" "}
            <span className=" flex ml-6">some points</span>
          </li>
          <li className=" h-5 w-5  bg-yellow-300 mt-3">
            {" "}
            <span className=" flex ml-6">some points</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
