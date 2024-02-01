import React from "react";
import { motion } from "framer-motion";
import heading from "../assets/Heading 1.png";
import momo from "../assets/momo.png";
import { socials } from "../constants";

const Hero = () => {
  const socialIconsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-28 mt-28 mb-20">
      <div className="flex flex-col ml-10">
        <div className="flex items-center mt-14 ">
          
          <h1 className="text-6xl font-bold ml-4 mt-2">$ MoMo</h1>
          <img src={heading} alt="" className="h-16 w-20 mt-[-38px] " />
        </div>
        <div className="mt-5  lg:w-full w-full ml-[-12px]">
          <p className="text-xl ">
            Welcome to the Momo family, where fun meets finance! Momo is not
            just a meme; it's a movement, a community-driven token that brings
            people together in the world of decentralized finance. Buckle up and
            get ready for a thrilling ride to the moon with Momo!
          </p>
          <motion.div
            className="flex flex-row gap-3 mt-5"
            variants={socialIconsVariants}
            initial="hidden"
            animate="visible"
          >
            {socials.map((social, index) => (
              <div
                key={index}
                className="h-14 w-14 bg-white rounded-full p-2 border border-black border-r-[3.5px] border-b-[3.5px]"
              >
                <img src={social.Image} alt={social.name} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src={momo}
          alt=""
          className="lg:h-[550px] lg:w-[500px] h-[400px] w-[300px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
