import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import ai_bg from "../../images/ai-bg.png";
import R_logo from "../../images/R_logo.png";
import Python_logo  from "../../images/Python-logo-notext.png";
 
export function LANGUAGES(){
  return <> 
    <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
        <h2 className="font-neuebit  text-[25px] lg:text-[50px] leading-[24px] lg:leading-[50px] text-[#F1C5AA] mb-5">Languages </h2>
    </div> 
  </> 
}
export function R_LANG(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717] flex justify-center items-center`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
           <div className="text-center">
           <img className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[84px] h-[50px] md:h-[60px] lg:h-[83px]"   src={R_logo} alt="Dynamic Image" />
              <div className="text-center text-[#1E64B6] text-sm md:text-base lg:text-lg">
              R
              </div>
           </div>
       </div>
    </div>
  </>
} 

export function PYTHON_LANG(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">       
           <div className="text-center">
           <img className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[84px] h-[50px] md:h-[60px] lg:h-[83px]"   src={Python_logo} alt="Dynamic Image" />
              <div className="text-center text-[#3772A2] text-sm md:text-base lg:text-lg">
              Python
              </div>
           </div>
       </div>
    </div>
  </>
} 

 
export function AI_TAP(){
  return <>
  <style>{`
    .bg-tanent {  }
  `}</style>
    <div style={{backgroundImage:`url(${ai_bg})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
        <h2 className="font-neuebit text-4xl md:text-4xl lg:text-6xl xl:text-6xl leading-[40px]  xl:leading-[50px] text-[#F1C5AA] mb-5">AI 
          <br></br> Service</h2>
    </div>
  </>
}