import { VscBellDot } from "react-icons/vsc";

import { GiNetworkBars } from "react-icons/gi";
import { IoIosWifi } from "react-icons/io";
import { FaBatteryFull } from "react-icons/fa";
import { IoHandLeftSharp } from "react-icons/io5";

import Dashboard from "../Dashboard";
import Analytics from "../Analytics";
import { useState } from "react";
const featuresList =[

    {
        id:1,
        name:"Dashboard",
        description:<Dashboard/>
    },
    {
        id:2,
        name:"Cards"
    },
    {
        id:3,
        name:"Analytics",
        description:<Analytics/>
    },
    {
        id:4,
        name:"Recurring"
    }
]
export default function Overview(){
    
    const [selectId,setSelectId]= useState(featuresList[0].id);
    
    
    return(
        <>
        <div className="flex justify-evenly ">
            <div className="bg-[#3273db] sm:h-[80vh]   sm:top-24 sm:w-[18vw] sm:rounded-[30px]  h-[100vh] w-[100vw]  relative overflow-auto " >
                <div>
                    <div className=" sticky top-0 left-0 right-0 z-10 bg-[#3273db] h-[21vh]">
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
                        <ul className="flex justify-between pt-4 m-2  ">
                        {featuresList.map((eachItem) => (
                            <li className={`text-white sm:text-[13px] text-[16px] font-semibold cursor-pointer rounded-2xl p-1    ${eachItem.id === selectId ? 'bg-white' : ''}  ${eachItem.id === selectId ? 'text-yellow-800' : ''} `} key={eachItem.id} onClick={()=>setSelectId(eachItem.id)}>
                                {eachItem.name}
                            </li>
                        ))}
                        </ul>
                    </div> 
                    
                    {featuresList.map((eachItem) =>
                    eachItem.id === selectId ? (
                        <div key={eachItem.id} >
                            {eachItem.description}
                        </div>
                    ) : null
                )}
                
                    
                    
                    
                   
                </div>
                
                
        
            </div>
        </div>
        </>
    )
}
