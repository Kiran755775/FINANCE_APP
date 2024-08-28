import { GiNetworkBars } from "react-icons/gi";
import { IoIosWifi } from "react-icons/io";
import { FaBatteryFull } from "react-icons/fa";
import { IoHandLeftSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="bg-gradient-to-b from-[#04214a] via-[#0f3973] to-[#050f1f] sm:h-[80vh]  relative sm:top-24 sm:w-[18vw] rounded-[30px]    w-[100vw]  h-[100vh] ">
          <div>
            <div className="flex justify-between px-5 py-2 ">
              <p className="text-white text-[13px]  pl-2">9:41</p>
              <div className="flex">
                <GiNetworkBars className="text-white pr-1  text-md" />
                <IoIosWifi className="text-white pr-1  text-md " />
                <FaBatteryFull className="text-white pr-0  text-md " />
              </div>
            </div>
            <h1 className="text-center text-white text-base">
              Welcome to Montek
              <span className="text-[#bab499]  pl-1">
                <IoHandLeftSharp className="-rotate-45 inline-flex" />
              </span>
            </h1>

            <img
              src="https://shivalikbank.com/public/frontendassets/images/dabit-card2.png"
              className=" sm:h-72  h-[40vh] w-full  object-cover mt-10 sm:mt-1"
            />

            <h1 className="text-white sm:text-4xl text-5xl font-semibold   p-2 mb-5 sm:mb-0">
              Better Homes, Smarter, For Your Finance.
            </h1>
            <div className="text-center mt-5 sm:mt-0">
              <Link to="/overview">
                <button className="text-center bg-white text-[17px] text-blue-950 w-11/12 h-14 sm:h-10 mx-auto  rounded-3xl my-1 font-semibold cursor-pointer">
                  {" "}
                  Lets Go!{" "}
                </button>
              </Link>
            </div>

            <hr className="border-t-4 border-white sm:mx-20 mx-36 mt-10 rounded-sm" />
          </div>
        </div>
      </div>
    </>
  );
}
