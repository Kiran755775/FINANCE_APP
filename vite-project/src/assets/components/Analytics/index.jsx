
import { FaPlus } from "react-icons/fa6";

import { MdKeyboardArrowDown } from "react-icons/md";
import Chart from "../Chart";
import { BiLogoFigma, BiPlusCircle } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

export default function Analytics(){

    return(
        <>
        <div className="flex justify-evenly  ">

   
                <div>
                    
                     
                  
                    <div className="flex justify-between  sm:px-2 py-2 sm:py-2 items-center px-2">
                        <p className="text-white text-sm sm:text-xs pl-1">Spending by</p>
                        <h1 className="text-white text-xl font-bold sm:text-lg ">Monthly <span className="inline-flex"><MdKeyboardArrowDown /></span></h1>
                    </div>
                    <Chart />
                    <div className="bg-[#0b1a33] h-15 sm:h-14 sm:mx-2 mx-3 rounded-2xl flex justify-between items-center p-3 mt-2">
                        <div className="flex justify-start items-center ml-2">
                            <h1 className="text-xl">🎯</h1>
                            <div className="pl-2">
                                <h1 className="text-white leading-loose">Budget</h1>
                                <p className="text-gray-400 text-sm">Sey tour budget goal</p>
                            </div>
                        </div>
                        
                            <FaPlus className="text-white text-xl"/>
                    </div>
                    <div className="bg-slate-200 shadow-sm h-[30.6vh] sm:h-[26vh] w-[100vw] sm:w-full mt-2 sm:mt-4 rounded-b-3xl rounded-t-3xl">
                        <div className="pt-3 sm:pt-2">
                                    <hr className="border-white border-t-4 sm:mx-28 mx-36 rounded-md"/>
                        </div>
                        <h1 className="text-xl sm:text-lg font-sans font-semibold pl-5 sm:pl-3 ">Bills Due</h1>
                        <div className="flex  justify-evenly  mt-2 sm:mt-2">
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
                            <div className="border-white border-2 w-[25vw] sm:w-[75px]  sm:p-1 rounded-2xl h-[20vh] sm:h-[15vh] flex flex-col justify-center items-center">
                                <BiPlusCircle className="text-3xl ml-2"/>
                                <h1 className="font-semibold sm:text-sm text-center">Add a Bill</h1>
                                
                            </div>
                        </div>
                        <hr className="border-black border-t-4 mx-36 sm:mx-24 mt-2 sm:mt-5  rounded-md "/>
                    </div>
                </div>
                    
                   
            </div>
                
                
        
            
        </>
    )
}
