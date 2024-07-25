import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons"; 
import backendbg from "../../images/backend_power.png";
import joomla_icon from "../../images/Joomla_icon.png";
import xcode_icon from "../../images/xcode_icon.png";

export function TOOL(){
    return <> 
      <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
          <h2 className="font-neuebit  text-[25px] lg:text-[50px] leading-[24px] lg:leading-[50px] text-[#83C7E6] mb-5">Tools </h2>
      </div>
    </> 
  }
export function JOOMLA(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717] flex justify-center items-center `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
             <div className="text-center">
                 
                <img className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[83px] h-[50px] md:h-[60px] lg:h-[83px]" src={joomla_icon} alt="Dynamic Image" />
                
                <div className="text-center text-[#50F091] text-sm md:text-base lg:text-lg">
                Joomla
                </div>
             </div>
         </div>
      </div>
    </>
  } 

  export function XCODE(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">       
             <div className="text-center">
                <img className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[81px] h-[50px] md:h-[60px] lg:h-[83px]" src={xcode_icon} alt="Dynamic Image"  />
                <div className="text-center text-[#01C3F2] text-sm md:text-base lg:text-lg">
                Xcode
                </div>
             </div>
         </div>
      </div>
    </>
  }  
  export function BACKEND_POWER(){
    return <>
      <div style={{backgroundImage:`url(${backendbg})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
          <h2 className="font-neuebit  text-4xl md:text-4xl lg:text-6xl xl:text-[60px] leading-[34px]  xl:leading-[44px] text-[#83C7E6]  mb-5">Backend <br></br>
                  Power<br></br>
                  house
          </h2>
      </div>
    </>
  }