import React, { useContext } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="w-full flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    {/* <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div> */}
    <div className="w-full ml-5 flex flex-col flex-1">
      <h3 className="w-full mt-2font-bold text-yellow-400 uppercase items-center justify-center">
        {title}
      </h3>
      <p className="w-full mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

// const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
//   const gifUrl = useFetch({ keyword });

//   return (
//     <div className="bg-[#181918] m-4 flex flex-1
//       2xl:min-w-[450px]
//       2xl:max-w-[500px]
//       sm:min-w-[270px]
//       sm:max-w-[300px]
//       min-w-full
//       flex-col p-3 rounded-md hover:shadow-2xl"
//     >
//       <div className="flex flex-col items-center w-full mt-3">
//         <div className="display-flex justify-start w-full mb-6 p-2">
//           <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
//             <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
//           </a>
//           <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
//             <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
//           </a>
//           <p className="text-white text-base">Amount: {amount} ETH</p>
//           {message && (
//             <>
//               <br />
//               <p className="text-white text-base">Message: {message}</p>
//             </>
//           )}
//         </div>
//         <img
//           src={gifUrl || url}
//           alt="nature"
//           className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
//         />
//         <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
//           <p className="text-[#37c7da] font-bold">{timestamp}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const Transactions = () => {
  // const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    // <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
    //   <div className="flex flex-col md:p-12 py-12 px-4">
    //     {currentAccount ? (
    //       <h3 className="text-white text-3xl text-center my-2">
    //         Latest Transactions
    //       </h3>
    //     ) : (
    //       <h3 className="text-white text-3xl text-center my-2">
    //         Connect your account to see the latest transactions
    //       </h3>
    //     )}

    //     <div className="flex flex-wrap justify-center items-center mt-10">
    //       {[...dummyData, ...transactions].reverse().map((transaction, i) => (
    //         <TransactionsCard key={i} {...transaction} />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="flex w-full justify-center items-center gradient-bg-transactions  ">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 ml-2 text-sm">
        <div className=" flex-1 flex flex-col justify-center items-center">
          <h1 className=" text-yellow-500 py-2 text-3xl sm:text-5xl  uppercase font-bold -mt-5  tracking-wide">
            staking and rewards system
          </h1>
          {/* <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base mt-10 mb-10">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p> */}

          <div className="w-full flex-1 flex flex-col justify-start items-center">
            <ServiceCard
              // color="bg-[#2952E3]"
              title="How rewards are going to distributed ?"
              // icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
              subtitle="As a reward for their active participation and contribution to the network's security, validators receive
additional CYN tokens. Staking thus provides an opportunity for CYN token holders to earn passive
income while supporting the decentralized nature of the ecosystem.
The blockchain technology used by CYN through the PoS consensus mechanism ensures a secure,
efficient, and decentralized ecosystem that aligns with the project's mission of providing a stable and
censorship-resistant store of value, free from the limitations of traditional financial systems."
            />
            <ServiceCard
              color="bg-[#8945F8]"
              title="How are staking rewards allocated to stakers ?"
              // icon={<BiSearchAlt fontSize={21} className="text-white" />}
              subtitle="Tokens to be given out as staking rewards for the first five years of the network life are fixed. This reward is divided per checkpoint and the amount to be shared with all stakers is absolute. The reward rate will be higher during lower bonding rates and vice-versa otherwise.The staking reward gets distributed proportionally to all stakers; proposer and signers, with the exception of proposer getting a bonus."
            />
            <ServiceCard
              color="bg-[#F84550]"
              title="Fastest transactions"
              // icon={<RiHeart2Fill fontSize={21} className="text-white" />}
              subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
            />

            <ServiceCard
              color="bg-[#F84550]"
              title="Chandrayaan Coin Consulting"
              // icon={<FaCoins fontSize={21} className="text-white" />}
              subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
