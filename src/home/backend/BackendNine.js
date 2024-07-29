import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/web_tap.png";
 
  
export function BOOST_1(){
  return <>
    <div className={`thumbnailBox h-full relative bg-[#6C7D35]   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#C7DFB8] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Efficiency Boost</h2>
        <div className="text-[#C7DFB8] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Automate the mundane, embrace the extraordinary.</div>
    </div>
    </div>
  </>
} 

export function BOOST_2(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#4D7541]   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#C7DFB8] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Efficiency Boost</h2>
        <div className="text-[#C7DFB8] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Automate the mundane, embrace the extraordinary.</div>
    </div>
    </div>
  </>
} 

export function BOOST_3(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#47501E] `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#C7DFB8] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Efficiency Boost</h2>
        <div className="text-[#C7DFB8] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Automate the mundane, embrace the extraordinary.</div>
    </div>
    </div>
  </>
} 
export function WEB_TAP(){
  return <>
  <style>{`
    .bg-tanent {  }
  `}</style>
    <div style={{backgroundImage:`url(${tanentbg})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
        <h2 className="font-neuebit  text-4xl md:text-4xl lg:text-6xl xl:text-6xl leading-[40px]  xl:leading-[50px] text-[#C7DFB8]  mb-5">Web  <br></br> Wonder</h2>
    </div>
  </>
} 