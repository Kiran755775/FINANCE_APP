import { VscBellDot } from "react-icons/vsc";
import { FaCirclePlus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { IoIosWifi } from "react-icons/io";
import { FaBatteryFull } from "react-icons/fa";
import { IoHandLeftSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Chart from "../Chart";
import { BiLogoFigma, BiPlusCircle } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

export default function Payment(){
    const data = [
        {
          month_name: "Mar",
          earned: 30,
          spent: 34,
        },
        {
        month_name: "Apr",
        earned: 15,
        spent: 18,
          },
        {
        month_name: "May",
        earned: 57,
        spent: 62,
        },
        {
            month_name: "June",
            earned: 50,
            spent: 41,
          },
          {
          month_name: "Jul",
          earned: 48,
          spent: 55,
            },
          {
          month_name: "Aug",
          earned: 8,
          spent: 10,
          }
      ]
    return(
        <>
        <div className="flex justify-evenly  ">

        
            <div className="bg-[#3273db] sm:h-[80vh]  relative sm:top-24 sm:w-[18vw] sm:rounded-[30px]  w-[100vw] rounded-3xl">
                <div>
                    <div className="flex justify-between px-5 sm:px-2 py-2">
                        <p className="text-white text-[13px]  pl-2">9:41</p>
                        <div className="flex">
                            <GiNetworkBars className="text-white pr-1  text-md" />
                            <IoIosWifi className="text-white pr-1  text-md " />
                            <FaBatteryFull className="text-white pr-0  text-md "/>
                        </div>
                    </div> 
                    <div className="flex justify-between px-2 items-center ">
                        <div className="flex items-center">
                            <img src="https://www.gravatar.com/avatar/e8bb2833b097f4fdd0029598193c820d?s=64&d=identicon&r=PG" className="rounded-full h-9"/>
                            <div className="pl-2">
                                <p className="text-white sm:text-[8px] text-[12px]">Good Morning,</p>
                                <h1 className="text-white sm:text-[13px] text-[17px]  font-semibold ">Asal Design<span className="text-[#bab499]  pl-1"><IoHandLeftSharp className="-rotate-45 inline-flex"/></span></h1>
                            </div>
                            
                        </div>
                        <VscBellDot className="text-white sm:text-lg text-xl"/>
                    </div> 
                    <ul className="flex justify-between pt-4 sm:pt-3">
                        <li className="text-white sm:text-[13px] text-[16px] font-semibold ">oard</li>
                        <li className="text-white sm:text-[13px] text-[16px] font-semibold">Cards</li>
                        <li className="text-black sm:text-[13px] text-[16px] font-semibold bg-white rounded-full p-1 px-5 sm:px-5 ml-3">Analytics</li>
                        <li className="text-white sm:text-[13px] text-[16px] font-semibold pr-3">Reccuring</li>
                    </ul>
                    <div className="flex justify-between px-3 sm:px-2 py-10 sm:py-2 items-center">
                        <p className="text-white sm:text-xs">Spending by</p>
                        <h1 className="text-white text-3xl font-bold sm:text-lg ">Monthly <span className="inline-flex"><MdKeyboardArrowDown /></span></h1>
                    </div>
                    <Chart className="mx-auto"/>
                    <div className="bg-[#0b1a33] h-20 sm:h-14 sm:mx-2 mx-5 rounded-2xl flex justify-between items-center p-3">
                        <div className="flex justify-start items-center ml-2">
                            <h1 className="text-xl">🎯</h1>
                            <div className="pl-2">
                                <h1 className="text-white leading-loose">Budget</h1>
                                <p className="text-gray-400 text-sm">Sey tour budget goal</p>
                            </div>
                        </div>
                        
                            <FaPlus className="text-white text-xl"/>
                    </div>
                    <div className="bg-slate-200 shadow-sm h-62 w-full mt-4 rounded-b-3xl">
                        <div className="pt-5 sm:pt-2">
                                    <hr className="border-slate-200 border-t-4 sm:mx-28 mx-44 rounded-md"/>
                        </div>
                        <h1 className="text-2xl sm:text-lg font-sans font-semibold pl-3">Bills Due</h1>
                        <div className="flex  justify-evenly  mt-5 sm:mt-2">
                            <div className="border-white border-2 w-[25vw] sm:w-[75px] p-3 sm:p-2 rounded-2xl h-[20vh] sm:h-[15vh] items-center">
                                    <p className="text-gray-500 leading-loose sm:text-xs">13th Aug</p>
                                    <BiLogoFigma className="text-3xl ml-2 sm:text-xl"/>
                                    <h1 className="font-semibold">Figma</h1>
                                    <p className="text-gray-500 sm:text-xs">$55:00</p>
                            </div>
                            <div className="border-white border-2 w-[25vw] sm:w-[75px] p-3 sm:p-2 rounded-2xl h-[20vh] sm:h-[15vh] items-center">
                                <p className="text-gray-500 leading-relaxed sm:text-xs">15th Aug</p>
                                <FiGithub  className="text-3xl ml-2 sm:text-xl"/>
                                <h1 className="font-semibold">Figma</h1>
                                <p className="text-gray-500 sm:text-xs">$11:00</p>
                            </div>
                            <div className="border-white border-2 w-[25vw] sm:w-[75px] p-3 sm:p-1 rounded-2xl h-[20vh] sm:h-[15vh] flex flex-col justify-center items-center">
                                <BiPlusCircle className="text-3xl ml-2"/>
                                <h1 className="font-semibold sm:text-sm">Add a Bill</h1>
                                
                            </div>
                        </div>
                        
                        <hr className="border-black border-t-4 mx-36 mt-10 sm:mt-0  rounded-md "/>
                    </div>
                </div>
                    
                   
            </div>
                
        </div>        
        
            
        </>
    )
}
