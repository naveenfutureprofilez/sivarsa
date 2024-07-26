import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/web_tap.png";

export function UPTIME(){
    return <>
      <div className={`thumbnailBox h-full relative  bg-[#C0E143] `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#0B6222] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">99 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl">%</sup></h2>
          <div className="md:absolute md:right-[30px] text-[#0B6222] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Uptime <br className="md:block"></br> Guaranteed</div>
      </div>
      </div>
    </>
  } 
   
  export function MONTHLY(){
    return <>
    <style>{`
      .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
      .turn2 {background: linear-gradient(90deg, rgba(184, 141, 1, 1) 0%, rgba(23, 23, 23, 1) 100%);}
    `}</style>
      <div className={`thumbnailBox h-full relative bg-[#0B6222]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
              <h2 className="relative font-neuebit text-[#C7DFB8] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">500k</h2>
              <div className="md:absolute md:right-[30px] text-[#C7DFB8] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Monthly <br className="hidden md:block"></br>              
              Visitors</div>
          </div>
      </div>
    </>
  }
   
  export function DELIVERED(){
    return <>
    
      <div className={`thumbnailBox h-full  relative bg-[#97B97F]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="relative font-neuebit text-[#0B6222] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">6 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl ">+</sup></h2>
                  <div className="md:absolute md:right-[30px] text-[#0B6222] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Websites 
                   <br className="hidden md:block"></br> Delivered</div>
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