import twitter from "../assets/twitter.svg"
import telegram from "../assets/send.svg"
import icon3 from "../assets/icon3.svg"
import icon4 from "../assets/icon4.svg"
import icon5 from "../assets/icon5.svg"




export const navlinks = [
  { name: "home", link: "hero" },
  { name: "about", link: "about" },
  { name: "how to buy", link: "how" },
  { name: "bridge", link: "" },
  { name: "tokenomics", link: "tokenomics" },
  { name: "momomap", link: "map" },
];

export const socials=[
    { name:"twitter", Image:twitter},
    { name:"twitter", Image:telegram},
    { name:"twitter", Image:icon3},
    { name:"twitter", Image:icon4},
    { name:"twitter", Image:icon5},
]
export const cardData = [
    {
      image: 'path-to-image1.jpg',
      bgcolor: '#23A094',
      margintop: '20px',
    },
    {
      image: 'path-to-image2.jpg',
      bgcolor: '#FFC900',
      margintop: '30px',
    },
    {
        image: 'path-to-image2.jpg',
        bgcolor: '#F1F333',
        margintop: '40px',
      },
      {
        image: 'path-to-image2.jpg',
        bgcolor: '#F1F333',
        margintop: '50px',
      },
   
  ];
  export const tags=[
    {name:"Early Investors", color:"green",percent:25},
    {name:"Liquidity", color:"red",percent:20},
    {name:"Marketing", color:"green",percent:25},
    {name:"Airdrop", color:"blue",percent:20},
    {name:"Teams Token", color:"red",percent:10},
  ]
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };
  export const marqueeVariants = {
    animate: {
      x: [-1035, 1080],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };
  export const marqueeVarReverse = {
    animate: {
      x: [1080, -1080],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };
  export const contactmotion = {
    whileHover: {
      y: [0, 30], // Rotate from 0 to 360 degrees
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.3,
        ease: "linear",
      },
    },
  };
  //"left", "tween", 0.5, 0.8

  export const slideIn = (direction) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: "tween",
          delay: 0.5,
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };
  };