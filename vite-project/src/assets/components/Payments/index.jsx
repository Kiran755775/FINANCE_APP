import { GiNetworkBars } from "react-icons/gi";
import { IoIosWifi } from "react-icons/io";
import { FaBatteryFull } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { TbDots } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import  { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
export default function Payments(){
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);
    const [inputValue,setInputValue]= useState("");
    const [inputTextValue,setInputTextValue]= useState("");
    const handleInputChange = (event) => {
        setInputTextValue((event.target.value).slice(0,10));
    };

    const handleButtonClick = (value) => {
            setInputValue(prev => prev + value);
        }
    const handleBackspace = () => {
            setInputValue(prev => prev.slice(0, -1)); 
        };
    const [history,setHistory]= useState(JSON.parse(localStorage.getItem("transactionHistory"))||[])
    const sendButton=()=>{
        if(inputTextValue!=="" && inputValue!==""){
            const newTransaction= {inputTextValue,inputValue}
            const updatedHistory = [...history, newTransaction];
            setInputTextValue("")
            setInputValue("")
            setHistory(updatedHistory);
            localStorage.setItem('transactionHistory', JSON.stringify(updatedHistory));
        }
        
    }
    return(
        <>
            <div className="flex justify-evenly ">
                <div className="bg-[#3273db] sm:h-[80vh]  relative sm:top-24 sm:w-[18vw] sm:rounded-[30px] h-[100vh]  w-[100vw] rounded-3xl ">
                    <div className="relative">
                        <div className="flex justify-between px-5 py-2">
                            <p className="text-white text-[13px]  pl-2">9:41</p>
                            <div className="flex">
                                <GiNetworkBars className="text-white pr-1  text-md" />
                                <IoIosWifi className="text-white pr-1  text-md " />
                                <FaBatteryFull className="text-white pr-0  text-md "/>
                            </div>
                        </div> 
                        <div className="bg-white sm:h-[75vh]   sm:w-[17vw] sm:rounded-[30px]  h-[94vh] mx-auto  w-[97vw] rounded-3xl relative">
                            <div className="flex justify-between px-2 py-2">
                                <Link to="/overview">
                                    <IoIosArrowDropleft className="text-3xl sm:text-2xl cursor-pointer"/>
                                </Link>
                                <TbDots  className="text-3xl sm:text-2xl"/>
                            </div>
                            <div className="p-2">
                                <p className="text-gray-500 font-semibold">Send To</p>
                                <input type="text" className="focus:outline-none text-2xl font-semibold  sm:w-full " ref={inputRef}  value={inputTextValue} onChange={handleInputChange} />
                                <p className="text-gray-500 font-semibold">**4291</p>
                            </div>
                            <div className="flex justify-between px-2 items-center my-5 sm:my-3">
                                <input type="text" className="focus:outline-none text-5xl sm:text-3xl  w-[60vw] sm:w-full  text-left" ref={inputRef}  value={inputValue}/>
                                <p className="text-lg font-semibold">USD</p>
                            </div>
                            <div className="bg-[#edebeb] h-8 mx-auto  rounded-3xl w-[95vw] flex justify-between px-3 place-items-center sm:w-full">
                                <p className="font-semibold text-sm">Notes</p>
                                <p className="font-semibold text-sm">Add</p>
                            </div>
                            
                            
                            <div className="grid grid-cols-3 gap-5 mt-5 sm:mt-2">
                                <div className="row" style={{ display: 'contents' }}>
                                    <button className="cursor-pointer text-black text-3xl font-semibold" onClick={()=>handleButtonClick("1")}>1</button>
                                    <button className="cursor-pointer text-black text-3xl font-semibold" onClick={()=>handleButtonClick("2")}>2</button>
                                    <button className="cursor-pointer text-black text-3xl font-semibold" onClick={()=>handleButtonClick("3")}>3</button>
                                </div>
                                <div className="row" style={{ display: 'contents' }}>
                                    <button className="cursor-pointer text-black text-3xl font-semibold" onClick={()=>handleButtonClick("4")}>4</button>
                                    <button className="cursor-pointer text-black text-3xl font-semibold" onClick={()=>handleButtonClick("5")}>5</button>
                                    <button className="cursor-pointer text-black text-3xl font-semibold" onClick={()=>handleButtonClick("6")}>6</button>
                                </div>
                                <div className="row" style={{ display: 'contents' }}>
                                    <button className="cursor-pointer text-black text-3xl font-semibold" onClick={()=>handleButtonClick("7")}>7</button>
                                    <button className="cursor-pointer text-black text-3xl font-semibold" onClick={()=>handleButtonClick("8")}>8</button>
                                    <button className="cursor-pointer text-black text-3xl font-semibold" onClick={()=>handleButtonClick("9")}>9</button>
                                </div>
                                <div className="row " style={{ display: 'contents' }}>
                                    <button className="cursor-pointer text-black text-3xl font-semibold col-start-2" onClick={()=>handleButtonClick("0")}>0</button>
                                    <button className="cursor-pointer text-black text-3xl font-semibold col-start-3" onClick={()=>handleBackspace()}>
                                        <IoIosArrowBack className="ml-10"/>
                                    </button>
                                </div>
                            </div>
                            <Link to="/overview"><button className="text-white bg-gray-800 sm:w-full w-[92vw] mx-auto h-12 sm:h-10 sm:ml-0 ml-3  rounded-3xl mt-8" onClick={()=>sendButton()}>Send</button></Link>
                            <hr className="absolute bottom-5 left-0 right-0 border-black border-t-4 mx-32 rounded-lg sm:mx-20" />
                        </div>

                    </div> 
                </div>
            </div>
        </>
    )
}