import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="id">
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-yellow-500 py-2 text-3xl sm:text-5xl  uppercase font-bold -mt-5  tracking-wide">
            Services that we continue
            <br />
            to improve
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base mt-10 mb-10">
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-[#2952E3]"
            title="Security guarantee"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="The crypto market gave users a new type of trust in transactions and storage of assets without the need to trust 
specific members of the network. We want to bring this confidence-building mechanism to a new level in a global 
system, where all guarantees are secured by real assets, and the security arrangements are transparent for 
everyone."
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="Research and Development"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Fastest transactions"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            subtitle="Fast transaction speeds are an untapped opportunity for those who want to accelerate profits, that’s why Mercycoin chooses Mercycoin. Mercycoin transaction is really the next frontier allowing users to seize market opportunities faster."
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="ITO Token Offering"
            icon={<FaCoins fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Chandrayaan Coin Consulting"
            icon={<FaCoins fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Payment Integration"
            icon={<FaCoins fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Services;
