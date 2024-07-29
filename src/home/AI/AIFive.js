import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import ai_bg from "../../images/ai-bg.png";
import Tensorflow_logo from "../../images/Tensorflow_logo.png";
import PYTORCH from "../../images/PyTorch_logo_icon.png";

export function FRAMEWORK(){
  return <> 
    <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
        <h2 className="font-neuebit  text-[25px] lg:text-[50px] leading-[24px] lg:leading-[50px] text-[#F1C5AA] mb-5">Frameworks </h2>
    </div>
  </> 
}
export function TENSOR_FLOW(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717] flex justify-center items-center `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
           <div className="text-center">
              <img className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[84px] h-[50px] md:h-[60px] lg:h-[83px]"   src={Tensorflow_logo} alt="Dynamic Image" />

             <div className="text-center text-[#E55B2D] text-sm md:text-base lg:text-lg">
                 TensorFlow
              </div>
           </div>
       </div>
    </div>
  </>
} 

export function PYTORCH_AI(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">       
           <div className="text-center">
           <img className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[84px] h-[50px] md:h-[60px] lg:h-[83px]"   src={PYTORCH} alt="Dynamic Image" />
              <div className="text-center text-[#EE4C2C] text-sm md:text-base lg:text-lg">
              PyTorch
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