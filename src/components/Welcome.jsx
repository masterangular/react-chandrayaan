import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[4px] white-glassmorphism  font-semibold text-yellow-400 rounded-full text-lg ";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="relative">
      {" "}
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="flex w-full f justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white  py-1 text-justify">
              Exploring The World Lunar world of Crypto:The Rise
            </h1>
            <p className="text-transparent bg-clip-text text-5xl mt-2 font-bold  sm:text-5xl bg-[#ffbd03] ">
              CHANDRAYAAN TOKEN{" "}
            </p>
            <p className="text-full tracking-wider  indent-8 mt-5 ml-2 text-white font-light md:w-9/12 w-11/12 text-base">
              At Chandrayan Network, we are a leading crypto community firm
              dedicated to revolutionizing the digital landscape. With our
              next-gen exchange platform, secure wallets, and innovative
              crowdfunding solutions, we empower individuals and businesses to
              navigate the exciting world of cryptocurrencies. We are also
              passionate about the metaverse and offer unique opportunities to
              explore virtual realms. Our native token fuels our ecosystem,
              fostering growth and collaboration within the vibrant crypto
              community.
              <br />
              Join us on this transformative journey today!
            </p>

            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-20 flex-1 gap-8 tracking-widest">
              <div
                className={`uppercase hover:bg-gradient-to-r from-purple-400 to-pink-600 ${companyCommonStyles}`}
              >
                Reliability
              </div>
              <div
                className={`uppercase hover:bg-gradient-to-r from-purple-400 to-pink-600 ${companyCommonStyles}`}
              >
                Security
              </div>
              <div
                className={`uppercase hover:bg-gradient-to-r from-purple-400 to-pink-600 ${companyCommonStyles}`}
              >
                Chandrayaan
              </div>
              <div
                className={`uppercase hover:bg-gradient-to-r from-purple-400 to-pink-600 ${companyCommonStyles}`}
              >
                Web 3.0
              </div>
              <div
                className={`uppercase hover:bg-gradient-to-r from-purple-400 to-pink-600 ${companyCommonStyles}`}
              >
                Lower Fees
              </div>
              <div
                className={`uppercase hover:bg-gradient-to-r from-purple-400 to-pink-600 ${companyCommonStyles}`}
              >
                polygon
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
