import React from "react";
import { socials, navlinks } from "../constants";
import momo from "../assets/momoLogo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 mt-20 overflow-x-hidden w-full h-full">
      <div className="mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <div className="flex flex-row items-center lg:gap-20">
            <img src={momo} alt="Logo" className="lg:h-20 lg:w-20 h-20 w-20" />
            <span className="lg:text-6xl text-xl font-bold capitalize">
              WENWIFHAT
            </span>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:items-end mt-4 lg:mt-0">
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
             <p className="text-yellow-300 mt-2 lg:mt-0">
                Contract: 2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4
              </p>
          </div>
          <div className="flex flex-col mt-32 items-center justify-center mx-auto lg:mt-0 w-full lg:ml-64">
            <div className="flex flex-row gap-3 items-center justify-center">
              {socials.map((social, index) => (
                <div
                  key={index}
                  className="h-10 w-10 rounded-full p-2 mt-5 bg-gray-500"
                >
                  <img src={social.Image} alt="" />
                </div>
              ))}
            </div>
            <p className="text-white text-center font-semibold text-lg">
              Copyright © 2024 Official MoMo Token
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
