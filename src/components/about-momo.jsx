import React from "react";
import top from "../assets/topbotton.png";
import about from "../assets/aboutmomo.png";
import momo from "../assets/momoo.png";
import bottom from "../assets/bottom.png";

const Aboutmomo = () => {
  return (
    <div className=" flex flex-col bg-white">
      <div className=" h-full w-full lg:mt-[-120px]">
        <img src={top} alt="top" />
      </div>
      <div className=" flex lg:h-[350px] lg:w-[1000px] w-[350px] items-center justify-center mx-auto mt-5">
        <img src={about} alt="about momo" />
      </div>
      <div className=" flex lg:h-[350px] lg:w-[450px] mx-auto items-center justify-center lg:mt-[-200px]">
        <img src={momo} alt="" />
      </div>
      <div className=" flex bg-[#FFC900] h-full lg:w-[600px] w-[300px] mx-auto p-2 items-center justify-center border-b-2 border-r-2 border-black rounded-xl">
        <p>
          <span className=" font-semibold">More Than Just a Meme –</span> At
          Momo, we believe in the transformative power of memes to bring delight
          and exhilaration to the world of crypto. Our mission is to build a
          token that transcends mere hype, fostering a vibrant community
          centered around values like transparency, inclusivity, and
          good-natured fun. Join us in shaping the future of finance with a
          touch of humor and a whole lot of heart.
        </p>
      </div>
      <div className=" h-full w-full lg:mb-[-120px]">
        <img src={bottom} alt="top" />
      </div>
    </div>
  );
};

export default Aboutmomo;
