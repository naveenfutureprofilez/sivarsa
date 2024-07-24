import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/tanentbg.png";

export function RETENTION(){
  return <>
    <div className={`thumbnailBox h-full relative  bg-[#F5BB0B;] `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#9D5209] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">95 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl">%</sup></h2>
        <div className="md:absolute md:right-[30px] text-[#9D5209] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Retention <br className="hidden md:block"></br> Rate</div>
    </div>
    </div>
  </>
} 
 
export function PROFESSIONAL(){
  return <>
  <style>{`
    .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
    .turn2 {background: linear-gradient(90deg, rgba(184, 141, 1, 1) 0%, rgba(23, 23, 23, 1) 100%);}
  `}</style>
    <div className={`thumbnailBox h-full relative bg-[#CAAE57]`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="relative font-neuebit text-[#9D5209] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">1k</h2>
            <div className="md:absolute md:right-[30px] text-[#9D5209] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Professionals <br className="hidden md:block"></br>
            Placed</div>
        </div>
    </div>
  </>
}
 
export function CLIENT_SERVED(){
  return <>
  
    <div className={`thumbnailBox h-full  relative bg-[#F2D904]`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#9D5209] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">100 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl ">+</sup></h2>
                <div className="md:absolute md:right-[30px] text-[#9D5209] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Clients
                 <br className="hidden md:block"></br> Served</div>
          </div>
    </div>
  </>
}

export function TALENT_TAP(){
  return <>
  <style>{`
    .bg-tanent {  }
  `}</style>
    <div style={{backgroundImage:`url(${tanentbg})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
        <h2 className="font-neuebit  text-4xl md:text-4xl lg:text-6xl xl:text-6xl leading-[40px]  xl:leading-[50px] text-[#9D5209]  mb-5">Talent<br></br>
        on Tap</h2>
    </div>
  </>
}

 