import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import why_ai from "../../images/why_ai.png";
 
  
export function BOOST_1(){
  return <>
    <div className={`thumbnailBox h-full relative bg-[#AC550C]   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C6A9] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Efficiency Boost</h2>
        <div className="text-[#F1C6A9] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Automate the mundane, embrace the extraordinary.</div>
    </div>
    </div>
  </>
} 

export function BOOST_2(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#F66004]   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C6A9] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Efficiency Boost</h2>
        <div className="text-[#F1C6A9] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Automate the mundane, embrace the extraordinary.</div>
    </div>
    </div>
  </>
} 

export function BOOST_3(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#CF8A54] `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C6A9] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Efficiency Boost</h2>
        <div className="text-[#F1C6A9] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Automate the mundane, embrace the extraordinary.</div>
    </div>
    </div>
  </>
} 
export function WHY_AI(){
  return <> 
    <div style={{backgroundImage:`url(${why_ai})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
        <h2 className="font-neuebit text-4xl md:text-4xl lg:text-6xl xl:text-6xl leading-[40px]  xl:leading-[50px] text-[#F1C5AA] mb-5">Why us</h2>
    </div>
  </>
}