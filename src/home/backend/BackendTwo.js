import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import backend_bg from "../../images/backend_bg.png";

export function UPTIME_BACK(){
    return <>
      <div className={`thumbnailBox h-full relative  bg-[#F19AD9] `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#AD3284] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">97 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl">%</sup></h2>
          <div className="md:absolute md:right-[30px] text-[#AD3284] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Server <br className="md:block"></br> Uptime</div>
      </div>
      </div>
    </>
  } 
   
  export function SERVED_BACK(){
    return <>
    
      <div className={`thumbnailBox h-full  relative bg-[#F559C4]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="relative font-neuebit text-[#F3C7E7] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">9 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl ">+</sup></h2>
                  <div className="md:absolute md:right-[30px] text-[#F3C7E7] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Clients    <br className="hidden md:block"></br> Served</div>
            </div>
      </div>
    </>
  }
  export function TECH_BACK(){
    return <>
    
      <div className={`thumbnailBox h-full  relative bg-[#BA51BA]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="relative font-neuebit text-[#F3C7E7] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">50 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl ">+</sup></h2>
                  <div className="md:absolute md:right-[30px] text-[#F3C7E7] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Technologies  <br className="hidden md:block"></br> Mastered</div>
            </div>
      </div>
    </>
  }

  export function BACKEND_TAP(){
    return <>
    <style>{`
      .bg-tanent {  }
    `}</style>
      <div style={{backgroundImage:`url(${backend_bg})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
          <h2 className="font-neuebit  text-4xl md:text-4xl lg:text-6xl xl:text-6xl leading-[40px]  xl:leading-[50px] text-[#F3C7E7]  mb-5">Backend  <br></br>
          Power
        <br></br> house</h2>
      </div>
    </>
  }