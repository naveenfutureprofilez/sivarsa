import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/tanentbg.png";

export function OFFERING(){
    return <> 
      <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
          <h2 className="font-neuebit  text-[25px] lg:text-[50px] leading-[40px]  xl:leading-[50px] text-[#CAAE57] mb-5">Offerings</h2>
      </div>
    </> 
  }
export function PERMANENT_EMP(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#F5BB0B]  `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#9D5209] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Permanent <br></br> Employees</h2> 
      </div>
      </div>
    </>
  } 
 
  export function CONTRACT_EMP(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#CAAE57]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#9D5209] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Contract <br></br> Employees</h2> 
      </div>
      </div>
    </>
  } 
  export function PARTTIME_EMP(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#F2D904]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#9D5209] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Part time  <br></br> Employees</h2> 
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

 