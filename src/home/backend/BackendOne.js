import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import backend_bg from "../../images/backend_bg.png";

export function BUILD_BACKEND(){
  return <>
  <style>{`
    .build_bg{background: linear-gradient(180deg, #B639C2 0%, #171717 80%);}
  `}</style>
    <div className={`thumbnailBox h-full relative build_bg `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="font-GoshaSans text-[15px] md:text-xl lg:text-[30px] max-w-[300px] leading-[28px]  lg:leading-[32px]  text-[#F3C7E8] mb-5">Building the Engines that Drive Your Applications</h2>
    </div>
    </div>
  </>
} 
 
export function BACKEND_VIDEO(){
  return <>
  <style>{`
    .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
    .turn2 {background: linear-gradient(90deg, rgba(184, 141, 1, 1) 0%, rgba(23, 23, 23, 1) 100%);}
  `}</style>
    <div className={`thumbnailBox h-full relative `}>
      <video autoPlay playsInline loop muted src={'/backend_video.mp4'}
      className="absolute top-0 left-0 h-full w-full object-cover" > 
      </video>
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