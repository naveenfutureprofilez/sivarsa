import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import ai_bg from "../../images/ai-bg.png";

export function TURNING_WEB(){
  return <>
  <style>{`
    .turning{background: linear-gradient(0deg, #2B2210 12.06%, #7E4F10 197.46%);}
  `}</style>
    <div className={`thumbnailBox h-full relative turning `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="font-GoshaSans text-[15px] md:text-xl lg:text-[30px] max-w-[300px] leading-[28px]  lg:leading-[32px]  text-[#F1C5AA] mb-5">Turning Data into Magic Moments</h2>
    </div>
    </div>
  </>
} 
 
export function AIVIDEO_ONE(){
  return <>
  <style>{`
    .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
    .turn2 {background: linear-gradient(90deg, rgba(184, 141, 1, 1) 0%, rgba(23, 23, 23, 1) 100%);}
  `}</style>
    <div className={`thumbnailBox h-full relative `}>
      <video autoPlay playsInline loop muted src={'/AI_video.mp4'}
      className="absolute top-0 left-0 h-full w-full object-cover" > 
      </video>
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