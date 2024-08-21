import { VscBellDot } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { SiGooglelens } from "react-icons/si";
import { FaPlus } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { IoIosWifi } from "react-icons/io";
import { FaBatteryFull } from "react-icons/fa";
import { IoHandLeftSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Overview(){
    return(
        <>
        <div className="flex justify-evenly ">
            <div className="bg-[#3273db] sm:h-[80vh]  relative sm:top-24 sm:w-[18vw] sm:rounded-[30px] h-[100vh]  w-[100vw] rounded-3xl ">
                <div>
                    <div className="flex justify-between px-5 py-2">
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
                                <h1 className="text-white sm:text-[5px] text-[17px] sm:text-base font-semibold ">Asal Design<span className="text-[#bab499]  pl-1"><IoHandLeftSharp className="-rotate-45 inline-flex"/></span></h1>
                            </div>
                            
                        </div>
                        <VscBellDot className="text-white sm:text-lg text-xl"/>
                    </div> 
                    <ul className="flex justify-between pt-4">
                        <li className="text-black sm:text-[13px] text-[16px] font-semibold bg-white rounded-full p-1 px-3 sm:px-5 ml-3">Dashboard</li>
                        <li className="text-white sm:text-[13px] text-[16px] font-semibold">Cards</li>
                        <Link to="/payment"><li className="text-white sm:text-[13px] text-[16px] font-semibold">Analytics</li></Link>
                        <li className="text-white sm:text-[13px] text-[16px] font-semibold">Rec</li>
                    </ul>
                    <div className="text-white text-center sm:pt-5 sm:mb-5 pt-1 mb-1">
                        <h1 className="sm:text-lg text-sm sm:leading-none leading-loose">Balance</h1>
                        <h1 className="sm:text-4xl text-2xl font-bold mb-5 sm:mb-0">$365,500</h1>
                    </div>
                    <div className="bg-[#070f2e] sm:h-[46vh] h-[64vh] sm:rounded-b-[30px] rounded-t-2xl rounded-3xl ">
                        <div className="flex justify-between items-center sm:p-2  py-2 px-2 ">
                            <h1 className="text-lg">🎉<span className="text-white sm:text-xs text-sm pl-1 ">You have saved $10 in the last 10 days</span></h1>
                            <IoIosArrowForward className="text-white"/>
                        </div>
                        <div className="bg-slate-200 sm:h-[45vh] h-[61.8vh] rounded-b-3xl rounded-t-xl">
                            <div className="px-2">
                                <div className="pt-3">
                                    <hr className="border-white border-t-4 sm:mx-28 mx-36 rounded-md"/>
                                </div>
                                
                                <h1 className="text-[#070f2e] font-bold pl-3 sm:p-3 sm:py-0 text-xl sm:text-base">Recent Send</h1>
                            </div>
                            <ul className="flex justify-evenly my-2 sm:my-2">
                                <li><img src="https://www.gravatar.com/avatar/e8bb2833b097f4fdd0029598193c820d?s=64&d=identicon&r=PG" className="rounded-full sm:h-9 h-13"/><h1 className="sm:text-xs text-md text-center">Agneys</h1></li>
                                <li><img src="https://www.gravatar.com/avatar/e8bb2833b097f4fdd0029598193c820d?s=64&d=identicon&r=PG" className="rounded-full sm:h-9 h-13"/><h1 className="sm:text-xs text-md text-center">Isyana</h1></li>
                                <li><img src="https://www.gravatar.com/avatar/e8bb2833b097f4fdd0029598193c820d?s=64&d=identicon&r=PG" className="rounded-full sm:h-9 h-13"/><h1 className="sm:text-xs text-md text-center">Nurdin</h1></li>
                                <li><img src="https://www.gravatar.com/avatar/e8bb2833b097f4fdd0029598193c820d?s=64&d=identicon&r=PG" className="rounded-full sm:h-9 h-13"/><h1 className="sm:text-xs text-md text-center">Budi</h1></li>
                                <li><img src="https://www.gravatar.com/avatar/e8bb2833b097f4fdd0029598193c820d?s=64&d=identicon&r=PG" className="rounded-full sm:h-9 h-13"/><h1 className="sm:text-xs text-md text-center">Broto</h1></li>
                            </ul>
                            <h1 className="text-[#070f2e] font-bold px-3  text-2xl">Current Activity</h1>
                            <div className="flex justify-evenly items-center my-2 sm:my-0">
                                <div className="border-slate-300 border-2 sm:w-56 w-80 sm:h-8 h-12 rounded-3xl my-2 ml-3 pl-2 pt-2 flex place-items-center py-2">
                                    <h1 ><FaSearch /></h1>
                                    <h1 className="font-extralight sm:text-xs text-lg pl-3">Search Transaction</h1>
                                </div>
                                <CiFilter className="sm:text-xl text-3xl"/>
                            </div>
                            <div className="flex justify-evenly items-center sm:mt-4 mb-6">
                                <FaCirclePlus className="sm:text-3xl text-5xl"/>
                                <div>
                                    <h1 className="font-bold sm:text-xs text-lg">Davis Vetrovs</h1>
                                    <p className="text-gray-600 font-semibold sm:text-xs text-sm">9:04am-Aug 5th 2023</p>
                                </div>
                                <div>
                                    <h1 className="text-green-600 font-bold sm:text-xs pl-12  text-lg">+$143.23</h1>
                                    <p className="text-gray-600 font-semibold sm:text-xs text-sm sm:pl-0 pl-2">Incoming transfers</p>
                                </div>
                            </div>
                            <div className="flex justify-evenly items-center mt-4">
                                <FaCircleMinus className="sm:text-3xl text-5xl"/>
                                <div>
                                    <h1 className="font-bold sm:text-xs text-lg">James Faulkner</h1>
                                    <p className="text-gray-600 font-semibold  sm:text-xs text-sm">12:00pm-Aug 11th 2023</p>
                                </div>
                                <div>
                                    <h1 className="text-red-600 font-bold sm:text-xs pl-12 text-lg">-$921.21</h1>
                                    <p className="text-gray-600 font-semibold  sm:text-xs text-sm  pl-10 sm:pl-8">Transfer Out</p>
                                </div>
                            </div>
                            <hr className="border-black border-t-4 mx-36 mt-5 sm:mx-24 rounded-md "/>
                            <div className="bg-[#3273db] flex items-center justify-between sm:w-40 w-48 sm:h-9 h-11 rounded-3xl sm:p-1 p-2  sm:bottom-20 bottom-24 mx-auto fixed">
                                <SiGooglelens className="text-white"/>
                                <h1 className="text-white">New Payment</h1>
                                <FaPlus  className="text-white"/>
                                
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    
                   
                </div>
                
                
        
            </div>
        </div>
        </>
    )
}
