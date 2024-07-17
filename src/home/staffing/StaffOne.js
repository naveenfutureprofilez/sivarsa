import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";

export function TURNING(){
  return <>
  <style>{`
    .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
  `}</style>
    <div className={`thumbnailBox h-full relative turn `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="font-neuebit  text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl max-w-[300px] leading-none text-[#F5DCAE] mb-5">Turning Data into Magic Moments</h2>
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
    .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
  `}</style>
    <div className={`thumbnailBox h-full turn2 p-6 relative `}>
        <h2 className="font-neuebit text-base text-2xl md:text-2xl lg:text-4xl xl:text-6xl leading-none text-[#9D5209]  mb-5">Talent 
        on Tap</h2>
    </div>
  </>
}
 