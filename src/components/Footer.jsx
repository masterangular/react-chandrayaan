import React from "react";

import logo from "../../images/cyt-removebg.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { HiOutlineChevronRight } from "react-icons/hi";
import {
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
  BsInstagram,
  BsChevronRight,
} from "react-icons/bs";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="p-10 gradient-bg-footer flex md:justify-center justify-between items-center  text-gray-200">
      <div className="max-w-7xl max-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="mb-5">
            <img src={logo} alt="logo" className="w-32" />
            <p className="uppercase text-yellow-500 font-bold pt-5 sm:text-lg">
              Chandrayaan coin
            </p>
            <br />
            <p className="text-justify text-sm  text-ellipsis  overflow-hidden hover:text-clip  -ml-4">
              <a>
                Contact us today and be part of the fastest-growing world of
                trading. We offer multi-currency support, allowing you to invest
                or withdraw in USDT, Bitcoin, Ethereum, and bank. Additionally,
                you can earn referral bonuses by referring your friends and
                family, adding another layer of excitement to your investment
                journey.
              </a>
            </p>
          </div>
          <div className="mb-5 text-yellow-600 font-semibold  capitalize pb-5 ml-8">
            <h4 className="mb-5 underline underline-offset-8">Useful Links</h4>
            <ul className="text-white">
              <li className="pb-4">
                <a
                  href=""
                  className="hover:text-yellow-500 ml-5 hover:underline underline-offset-4 "
                >
                  Home{" "}
                </a>
                <BsChevronRight className="text-yellow-500 -mt-5 hover:underline underline-offset-4" />{" "}
              </li>
              <li className="pb-4">
                <a
                  href=""
                  className="hover:text-yellow-500 ml-5 hover:underline underline-offset-4 "
                >
                  WhyUs
                </a>
                <BsChevronRight className=" text-yellow-500 -mt-5" />
              </li>
              <li className="pb-4">
                <a
                  href=""
                  className="hover:text-yellow-500 ml-5 hover:underline underline-offset-4 "
                >
                  services
                </a>
                <BsChevronRight className=" text-yellow-500 -mt-5" />
              </li>
              <li className="pb-4">
                <a
                  href=""
                  className="hover:text-yellow-500 ml-5 hover:underline underline-offset-4 "
                >
                  roadmap
                </a>
                <BsChevronRight className=" text-yellow-500 -mt-5" />
              </li>
              <li className="pb-4">
                <a
                  href=""
                  className="hover:text-yellow-500 ml-5 hover:underline underline-offset-4 "
                >
                  contact
                </a>
                <BsChevronRight className=" text-yellow-500 -mt-5" />
              </li>
              <li className="pb-4">
                <a
                  href=""
                  className="hover:text-yellow-500 ml-5 hover:underline underline-offset-4 "
                >
                  Terms & Conditions
                </a>
                <BsChevronRight className=" text-yellow-500 -mt-5" />
              </li>
            </ul>
          </div>
          <div className="mb-5  text-yellow-600 font-bold capitalize ">
            <h4 className="mb-5 underline underline-offset-8">
              connect with our social network
            </h4>
            <ul className="text-gray-500 justify-end items-end flex-col   ">
              <li className="pb-4">
                <a
                  href=""
                  className="text-yellow-500 ml-7 hover:underline underline-offset-4 delay-500"
                >
                  Twitter
                  <BsTwitter className="text-yellow-500 -mt-5 " />
                </a>
              </li>
              <li className="pb-4">
                <a
                  href=""
                  className="text-green-500 ml-7 hover:underline underline-offset-4 delay-500"
                >
                  WhatsApp
                </a>
                <BsWhatsapp className="text-green-500 -mt-5" />
              </li>
              <li className="pb-4">
                <a
                  href=""
                  className="text-red-500  ml-7 hover:underline underline-offset-4 delay-500"
                >
                  Youtube
                </a>
                <BsYoutube className="text-red-800 -mt-5 " />
              </li>
              <li className="pb-4">
                <a
                  href=""
                  className="text-pink-500 ml-7 hover:underline underline-offset-4 delay-500"
                >
                  Instagram
                </a>
                <BsInstagram className="text-pink-600 -mt-5" />
              </li>
              <li></li>
            </ul>
          </div>
          <div className="mb-5 text-yellow-600 font-bold capitalize">
            <h4 className="pb-4 underline underline-offset-8">
              Join our news Letter
            </h4>
            <p className="mb-5  text-white">
              Join 25,000+ others and never miss out on new tips, how to and
              sell and more
            </p>
            <form className="flex flex-row flex-wrap">
              <input
                type="text"
                placeholder="email@example.com"
                className="text-gray-400  w-full p-2 focus:border-yellow-500 "
              />
              <button className=" w-full h-10 text-white capitalize font-semibold text-lg bg-yellow-500 hover:bg-yellow-600">
                subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@eaglecryptoclub2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
