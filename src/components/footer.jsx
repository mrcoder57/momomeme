import React from "react";
import { socials, navlinks } from "../constants";
import momo from "../assets/momoLogo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-20 overflow-x-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between overflow-x-hidden">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className=" flex flex-row items-center lg:gap-11">
            <img src={momo} alt="Logo" className="lg:h-20 lg:w-20 h-20 w-20" />
            <span className="lg:text-3xl text-xl font-bold capitalize">
              WENWIFHAT
            </span>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:items-end">
            <div className="mb-2 lg:mb-0 lg:mr-8">
              <div className="flex flex-wrap-reverse capitalize items-center justify-end">
                {navlinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="first-letter:capitalize hover:bg-gray-800 hover:text-white text-sm rounded-full p-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex space-x-4 items-center justify-center mx-auto">
            <div className=" flex flex-row gap-3 items-center justify-center">
              {socials.map((social) => (
                <div className=" h-10 w-10 rounded-full p-2 mt-5 ">
                  <img src={social.Image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
