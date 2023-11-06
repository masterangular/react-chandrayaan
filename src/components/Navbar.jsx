import React, { useContext } from "react";

import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose, AiFillPlayCircle } from "react-icons/ai";

import { TransactionContext } from "../context/TransactionContext";
import logo1 from "../../images/cyt-removebg.png";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Welcome from "./Welcome";

const NavbarItem = ({ tittle, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{tittle}</li>;
};

const Navbar = () => {
  const linkItems = [
    { name: "home", link: "/" },
    { name: "whyus", link: "/" },
    { name: "services", link: "/" },
    { name: "roadmap", link: "/" },
    { name: "contact", link: "/" },
  ];

  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className=" w-full flex  mf:flex-row flex-row  md:justify-center justify-between items-center p-4 fixed  bg-gradient-to-r from-blue-500 to-green-500  z-10">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <a href="/" alt="">
          {" "}
          <img src={logo1} alt="logo1" className="w-20 cursor-pointer" />
        </a>
      </div>
      <ul className="text-white tracking-widest md:flex hidden list-none flex-row justify-between items-center flex-initial uppercase text-1xl ">
        {linkItems.map((link) => (
          <li
            key={link.name}
            className="md:ml-5 text-lg font-semibold hover:text-yellow-400 ml-3 duration-500 hover:underline underline-offset-4 "
          >
            <a href={link.link} className={({isActive})=>
            `duration-200 $ {isActive ? "text-orange-700" : "text-gray-700"}`}>
              {link.name}
            </a>
          </li>
        ))}
        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 ml-4  p-2 rounded-lg cursor-pointer bg-[#ffbd03] hover:bg-gradient-to-r from-purple-400 to-pink-600 tracking-widest"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold mr-2">
              Connect Wallet
            </p>
          </button>
        )}
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={48}
            className="text-yellow-500 md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt2
            fontSize={48}
            className="text-yellow-500 md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className=" uppercase z-10 fixed -top-2 -right-2 my-2 p-3 w-[72vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-start rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2 ">
              <AiOutlineClose
                fontSize={38}
                className="bg-red-500 rounded-lg font-bold"
                onClick={() => setToggleMenu(false)}
              />
            </li>
            {linkItems.map((link) => (
              <li
                key={link.name}
                className="md:ml-4 p-4 text-lg font-semibold cursor-pointer hover:text-yellow-400 -ml-2 hover:underline underline-offset-4 "
              >
                <a href={link.link} className="">
                  {link.name}
                </a>
              </li>
            ))}

            {/* {["Home",  "why us", "services", "roadmap","contact"].map((item, index) => (
                            <NavbarItem key={item + index} tittle={item} classProps="my-2 text-lg"/>
                        ))} */}

            {!currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5  p-3 rounded-lg cursor-pointer bg-[#ffbd03] hover:bg-gradient-to-r from-purple-400 to-pink-600"
              >
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-white text-base font-semibold ">
                  Connect Wallet
                </p>
              </button>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
