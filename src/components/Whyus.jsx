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

const Whyus = () => (
  <div className="flex w-full justify-center items-center gradient-bg-welcome  ">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 ml-2 text-sm">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-yellow-400 uppercase text-3xl sm:text-5xl py-2 font-bold mb-10">
          why Chandrayaan
        </h1>

        <p className="text-left my-2 text-white font-light md:w-9/12 text-base w-full">
          Because of its decentralization, transparency, cheaper transaction
          fees, faster transactions, and global accessibility, it is a desired
          alternative to traditional.
        </p>
        <div className="grid sm:grid-cols-4 grid-cols-2 w-full mt-10 flex-1 gap-4 text-white ">
          <div
            className={
              "rounded-lg hover:bg-gradient-to-r from-purple-400 to-pink-600"
            }
          >
            <ServiceCard
              // color="bg-[#2952E3]"
              title="security guaranteed"
              icon={<BsGearFill fontSize={81} className="text-white " />}
              subtitle="“This running on the blockchain Chandrayaan COin ecosystem and Dapps (Decentralized Application).”"
            />
          </div>
          <div
            className={
              "rounded-lg hover:bg-gradient-to-r from-purple-400 to-pink-600 "
            }
          >
            <ServiceCard
              // color="bg-[#2952E3]"
              title="Transparent"
              icon={<FaThinkPeaks fontSize={81} className="text-white" />}
              subtitle="“Every Transaction interaction by a Smart Contract on Chandrayaan coin blockchain ledger.”"
            />
          </div>
          <div
            className={
              "rounded-lg hover:bg-gradient-to-r from-purple-400 to-pink-600"
            }
          >
            <ServiceCard
              // color="bg-[#2952E3]"
              title=" Smart Contract"
              icon={<BsLink45Deg fontSize={81} className="text-white" />}
              subtitle="“This concept is designed to transfer your money from wallet to wallet.”"
            />
          </div>
          <div
            className={
              "rounded-lg  hover:bg-gradient-to-r from-purple-400 to-pink-600"
            }
          >
            <ServiceCard
              // color="bg-[#2952E3]"
              title=" User Friendly"
              icon={<BsPersonSquare fontSize={81} className="text-white" />}
              subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Whyus;
