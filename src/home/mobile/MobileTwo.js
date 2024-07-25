import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import backendbg from "../../images/backend_power.png";

export function USER_SATISFACTION(){
  return <>
    <div className={`thumbnailBox h-full relative  bg-[#101D68] `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#83C7E6] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">98 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl">%</sup></h2>
        <div className="md:absolute md:right-[30px] text-[#83C7E6] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">User <br className="hidden md:block"></br> Satisfaction</div>
    </div>
    </div>
  </>
} 
 
export function APP_LAUNCHED(){
  return <>
  
    <div className={`thumbnailBox h-full  relative bg-[#10498E]`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#83C7E6] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">4 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl ">+</sup></h2>
                <div className="md:absolute md:right-[30px] text-[#83C7E6] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Apps  <br className="hidden md:block"></br> Launched</div>
          </div>
    </div>
  </>
}
export function DOWNLOAD(){
  return <>
  <style>{`
    .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
    .turn2 {background: linear-gradient(90deg, rgba(184, 141, 1, 1) 0%, rgba(23, 23, 23, 1) 100%);}
  `}</style>
    <div className={`thumbnailBox h-full relative bg-[#0387C3]`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="relative font-neuebit text-[#83C7E6] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">100k</h2>
            <div className="md:absolute md:right-[30px] text-[#83C7E6] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Downloads</div>
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