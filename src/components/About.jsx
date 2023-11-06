import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { FaEmpire, FaBusinessTime, FaBitcoin } from "react-icons/fa";

const ServiceCard = ({ image, color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start  p-3 m-2 cursor-pointer hover:shadow-xl h-30">
    <div
      className={`w-20 h-20 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="flex flex-col flex-1 justify-center items-center ">
      <h3 className=" text-1xl font-bold text-yellow-400 uppercase items-center justify-center">
        {title}
      </h3>
      <p className="text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const About = () => (
  <div className="column-2">
    <div className="flex w-full justify-center items-center gradient-bg-welcome">
      <div className="flex mf:flex-row flex-col items-center justify-center md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-center items-center">
          <img src="images/businessman.png" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-yellow-400 font-11 text-3xl sm:text-5xl py-2 capitalize -ml-2 ">
            why important to choose us:
          </h1>
          <p className="text-justify  my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Why to choose CYN TOKEN? CYN TOKEN Global Network world of
            Decentralized market, CYN TOKEN gives you greater choices,
            independence, and opportunities. We are here to help you with your
            journey of million of dreams.
          </p>
          <ServiceCard
            // color="bg-[#2952E3]"
            title="Deep Expertise and Focus on Quality"
            icon={<FaBusinessTime fontSize={81} className="text-white" />}
            subtitle="We are having expert team with great experience in investment services. Our ambition is to deliver more capital gains to our clients with the highest quality and security standards."
          />
          <ServiceCard
            // color="bg-[#8945F8]"
            title="Actively Managed"
            icon={<FaEmpire fontSize={81} className="text-white" />}
            subtitle="Your investments deserve experienced investment experts. This is why, with Mercycoin, you are investing exclusively in actively managed financial investments."
          />
          <ServiceCard
            // color="bg-[#F84550]"
            // image = {<img src="images/quality.webp" />}
            title="Quality"
            icon={<BsCheckCircleFill fontSize={81} className="text-white" />}
            subtitle="A meticulous thought process behind every decision and a constant striving for perfection, guides Mercycoin to deliver the best possible experience for all of our users."
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
