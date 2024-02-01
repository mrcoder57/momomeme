import React, { useState } from "react";

import momo from "../assets/momologo.png";
import { navlinks } from "../constants";
import send from "../assets/send.svg";
import twitter from "../assets/twitter.svg";
import menu from "../assets/menu.svg";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#FF90E8] flex items-center justify-between lg:mx-10 lg:mt-4 lg:p-2">
      <div className="flex items-center lg:ml-20 ml-3">
        <div className="lg:hidden mt-2">
          <button
            onClick={toggleMobileMenu}
            className="flex h-11 w-12 md:block"
          >
            <img src={menu} alt="menu" className="h-5 w-5 flex" />
          </button>
          {isMobileMenuOpen && (
            <ul className="absolute border shadow-md rounded-lg p-4 w-40 bg-white gap-2">
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
          )}
        </div>
        <img src={momo} alt="Logo" className="h-12 w-12" />
        <span className="text-lg font-bold ml-3">momo</span>
      </div>

      <div className="hidden md:hidden lg:flex items-center space-x-4 border border-black rounded-full p-2">
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

      <div className=" items-center space-x-4 hidden lg:flex">
        <button className="bg-white rounded-full h-8 w-8 border border-black">
          <img src={send} alt="send" className="h-full w-full p-1" />
        </button>
        <button className="bg-white rounded-full h-8 w-8 border border-black">
          <img src={twitter} alt="send" className="h-full w-full p-1" />
        </button>
        <button className="bg-white h-8 w-28 rounded-full capitalize border-r-2 border-b-2 border-black">
          get more
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
