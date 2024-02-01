import React, { useState } from "react";
import { Link } from "react-router-dom";

import momo from "../assets/momoLogo.png";
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
    <nav className="bg-[#FF90E8] fixed flex items-center justify-between mr-10 w-full">
      <div className="flex items-center lg:ml-10 ">
        <div className="lg:hidden mt-2">
          <button
            onClick={toggleMobileMenu}
            className="flex h-11 w-12 md:block"
          >
            <img src={menu} alt="menu" className="h-10 w-10 ml-3 flex" />
          </button>
          {isMobileMenuOpen && (
            <ul className="absolute border shadow-md rounded-lg p-1 text-xs w-40 bg-[#FF90E8] gap-2 capitalize">
              {navlinks.map((link, index) => (
                <li>
                  {" "}
                  <Link
                    key={index}
                    to={`${link.link}`}
                    className=" first-letter:capitalize hover:bg-gray-800 transition-all ease-in-out duration-300 hover:text-white rounded-full p-1 text-xl font-semibold"

                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              
              <li><button className="bg-white h-14 w-36 rounded-full hover:border-white hover:bg-gray-800 hover:text-white capitalize border-r-[5px] border-b-[5px] border-black">
                get memo
              </button></li>
            </ul>

          )}
        </div>
        <img src={momo} alt="Logo" className="lg:h-20 lg:w-20 h-14 w-14" />
        <span className="lg:text-3xl text-xl font-bold ml-3 capitalize">WENWIFHAT</span>
      </div>

      <div className="hidden md:hidden lg:flex items-center space-x-4 border border-black rounded-full p-2">
        {navlinks.map((link, index) => (
          <Link
            key={index}
            to={`${link.link}`}
            className="first-letter:capitalize hover:bg-gray-800 hover:text-white text-sm rounded-full p-1"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className=" items-center space-x-4 hidden lg:flex mr-5">
        <button className=" rounded-full flex h-12 w-12 border hover:border-white border-black align-center justify-center ">
          <img
            src={send}
            alt="send"
            className="h-10 w-10 bg-white  hover:text-white rounded-full p-1 mt-[2px] "
          />
        </button>
        <button className=" rounded-full flex h-12 w-12 border hover:border-white border-black align-center justify-center ">
          <img
            src={twitter}
            alt="send"
            className="h-10 w-10 bg-white rounded-full p-1 mt-[2px] "
          />
        </button>
        <button className="bg-white h-14 w-36 rounded-full hover:border-white hover:bg-gray-800 hover:text-white capitalize border-r-[5px] border-b-[5px] border-black">
          get memo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
