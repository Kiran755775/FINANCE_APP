import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";

import { FaCircleMinus } from "react-icons/fa6";
import { SiGooglelens } from "react-icons/si";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
export default function Dashboard() {
  const currentDateTime = new Date().toLocaleString();
  const transactions =
    JSON.parse(localStorage.getItem("transactionHistory")) || [];
    const [searchTerm, setSearchTerm] = useState('');

    
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    
    const filteredTransactions = transactions.filter(transaction =>
      transaction.inputTextValue.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <div className="">
        <div className="text-white text-center sm:pt-5 sm:mb-5  mb-1 ">
          <h1 className="sm:text-lg text-sm sm:leading-none leading-loose">
            Balance
          </h1>
          <h1 className="sm:text-4xl text-2xl font-bold mb-5 sm:mb-0">
            $365,500
          </h1>
        </div>
        <div className="bg-[#070f2e] sm:h-[46vh] h-[64vh] sm:rounded-b-[30px] rounded-t-2xl rounded-3xl ">
          <div className="flex justify-between items-center sm:p-2  py-2 px-3 ">
            <h1 className="text-lg">
              🎉
              <span className="text-white sm:text-xs text-sm pl-1 ">
                You have saved $10 in the last 10 days
              </span>
            </h1>
            <IoIosArrowForward className="text-white" />
          </div>
          <div className="bg-slate-200 sm:h-[45vh]  rounded-t-xl ">
            <div className="px-2">
              <div className="pt-4">
                <hr className="border-white border-t-4 sm:mx-28 mx-36 rounded-md" />
              </div>

              <h1 className="text-[#070f2e] font-bold pl-3 sm:p-3 sm:py-0 text-xl sm:text-base">
                Recent Send
              </h1>
            </div>
            <ul
              className="flex justify-evenly items-start my-2 sm:my-2 w-full overflow-auto "
              style={{
                overflow: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {transactions.map((transaction, index) => (
                <li key={index} className="flex flex-col items-center w-32">
                  <div className="flex items-center justify-center w-20 h-20">
                    <img
                      src="https://www.gravatar.com/avatar/e8bb2833b097f4fdd0029598193c820d?s=64&d=identicon&r=PG"
                      className="rounded-full w-12 h-12 object-cover "
                      alt="User Avatar"
                    />
                  </div>
                  <h1
                    className="text-center text-sm  truncate"
                    style={{ width: "100%" }}
                  >
                    {transaction.inputTextValue}
                  </h1>
                </li>
              ))}
            </ul>

            <h1 className="text-[#070f2e] font-bold px-5  text-2xl">
              Current Activity
            </h1>
            <div className="flex justify-evenly items-center my-2 sm:my-0">
      <div className="relative border-slate-300 border-2 sm:w-56 w-80 sm:h-8 h-12 rounded-3xl my-2 ml-3 flex items-center px-2">
        <input
          type="text"
          placeholder="Search Transaction"
          className="w-full h-full pl-10 pr-2 rounded-3xl focus:outline-none bg-transparent"
          onChange={handleSearchChange}
        />
        <FaSearch className="absolute left-3 text-gray-500" />
      </div>
      <CiFilter className="sm:text-xl text-3xl" />
    </div>
            <ul className=" overflow-scroll h-[38vh]">
              {filteredTransactions.map((transaction, index) => (
                <li key={index}>
                  <div className="flex justify-evenly items-center mt-4 ">
                    <FaCircleMinus className="sm:text-3xl text-5xl" />
                    <div>
                      <h1 className="font-bold sm:text-xs text-lg">
                        {transaction.inputTextValue}
                      </h1>
                      <p className="text-gray-600 font-semibold sm:text-xs text-sm">
                        {currentDateTime}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-red-600 font-bold sm:text-xs pl-12 text-lg text-right">
                        {transaction.inputValue}
                      </h1>
                      <p className="text-gray-600 font-semibold sm:text-xs text-sm pl-10 sm:pl-8">
                        Transfer Out
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-[#3273db] flex items-center justify-between sm:w-40 w-48 sm:h-9 h-11 rounded-3xl sm:p-1 p-2  sm:bottom-24 bottom-4 left-24 sm:left-[45vw]  mx-auto fixed">
              <SiGooglelens className="text-white" />
              <h1 className="text-white">New Payment</h1>
              <Link to="/payments">
                <FaPlus className="text-white cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="fixed bottom-1 left-0 w-[20vw] ml-40 border-black border-t-4 rounded-md" />
    </>
  );
}
