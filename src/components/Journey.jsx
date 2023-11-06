import React from "react";
import {
  BsShieldFillCheck,
  BsGearFill,
  BsLink45Deg,
  BsPersonSquare,
} from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { FaThinkPeaks } from "react-icons/fa";
// import { Carousel } from 'flowbite-react';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import { Autoplay, Pagination, Navigation } from "swiper";

import cardList from "./data";

const slideNames = [
  { name: "Swathi", color: "hue-rotate-[240deg]" },
  { name: "MAnu", color: "hue-rotate-[20deg]" },
  { name: "ANiketh", color: "hue-rotate-[340deg]" },
  { name: "Aaradhya", color: "hue-rotate-[40deg]" },
  { name: "Swathi Rani", color: "hue-rotate-[310deg]" },
  { name: "Aari", color: "hue-rotate-[98deg]" },
  { name: "Ani", color: "hue-rotate-[2deg]" },
];

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-col  justify-center items-center  p-3 m-2 cursor-pointer hover:shadow-xl h-80  ">
    <div
      className={`w-20 h-20 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1 justify-center items-center ">
      <h3 className="mt-4 text-1xl font-bold text-yellow-400 uppercase items-center justify-center">
        {title}
      </h3>
      <p className=" text-white text-sm md:w-9/12 mt-2">{subtitle}</p>
    </div>
  </div>
);

const Journey = () => (
  <div className="flex w-full justify-center items-center gradient-bg-welcome  ">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 ml-2 text-sm">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-yellow-400 uppercase text-3xl sm:text-5xl py-2 font-bold mb-10">
          our roadmap
        </h1>

        <p className="text-left my-2 text-white font-light md:w-9/12 text-base w-full">
          Chandrayaan is the world’s leading Investing manifesto, with millions
          of registered users and an array of innovative investment tools.
        </p>
        <div className="mt-24 flex text-white items-center justify-center"></div>

        {/* COMING SOON EXCHANGES */}

        <h1 className="text-yellow-500 uppercase text-3xl sm:text-5xl py-2 font-bold mb-20 ml-20">
          coming soon exchanges
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
          {/* <div className="h-72 w-72 rounded-full"> */}
          {cardList.map((card) => (
            <div>
              <img className="h-48 w-48 rounded-full" src={card.img} alt="" />
            </div>
          ))}
          {/* <img className="h-full w-full rounded-full" src="../images/latoken.png" /> */}
        </div>
      </div>
    </div>
  </div>
);

export default Journey;
