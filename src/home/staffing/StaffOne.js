import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/tanentbg.png";

export function TURNING(){
  return <>
  <style>{`
    .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
  `}</style>
    <div className={`thumbnailBox h-full relative turn `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="font-neuebit  text-[15px] md:text-2xl lg:text-3xl  max-w-[180px] leading-[28px]  lg:leading-[32px]  text-[#F5DCAE] mb-5">Turning Data into Magic Moments</h2>
    </div>
    </div>
  </>
} 
 
export function STAFFINGVIDEO_ONE(){
  return <>
  <style>{`
    .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
    .turn2 {background: linear-gradient(90deg, rgba(184, 141, 1, 1) 0%, rgba(23, 23, 23, 1) 100%);}
  `}</style>
    <div className={`thumbnailBox h-full relative `}>
      <video autoPlay playsInline loop muted src={'/staffing_1.mp4'}
      className="absolute top-0 left-0 h-full w-full object-cover" > 
      </video>
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