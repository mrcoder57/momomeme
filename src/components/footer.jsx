import React from "react";
import { socials,navlinks } from "../constants";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-20">
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <p className="text-lg font-bold">MOMO</p>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:items-end">
          <div className="mb-2 lg:mb-0 lg:mr-8">
          <ul className="">
              {navlinks.map((link, index) => (
               <li> <a
                  key={index}
                  href="#"
                  className="first-letter:capitalize hover:bg-gray-800 hover:text-white text-sm rounded-full p-1"
                >
                  {link.name}
                </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4">
          <div className=" flex flex-row gap-3">
          {socials.map((social) => (
            
            <div className=" h-10 w-10 bg-white rounded-full p-2 mt-5 border-black border-r-[3.5px] border-b-[3.5px]">
              <img src="" alt="" />
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
