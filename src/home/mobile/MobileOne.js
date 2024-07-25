import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import backendbg from "../../images/backend_power.png";

export function CRAFTING(){
  return <>
  <style>{`
    .captivate_bg{ background: linear-gradient(180.04deg, #1846BC 1.19%, #171717 82.21%);
;}
  `}</style>
    <div className={`thumbnailBox h-full relative captivate_bg `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="font-neuebit  text-[15px] md:text-2xl lg:text-3xl max-w-[97px] md:max-w-[150px] leading-[28px]  lg:leading-[32px]  text-[#83C7E6] mb-5">Crafting Apps  That Captivate</h2>
    </div>
    </div>
  </>
} 
 
export function MOBILEVIDEO_ONE(){
  return <>
  <style>{`
    .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
    .turn2 {background: linear-gradient(90deg, rgba(184, 141, 1, 1) 0%, rgba(23, 23, 23, 1) 100%);}
  `}</style>
    <div className={`thumbnailBox h-full relative `}>
      <video autoPlay playsInline loop muted src={'/Crafting.mp4'}
      className="absolute top-0 left-0 h-full w-full object-cover" > 
      </video>
    </div>
  </>
}
 
export function BACKEND_POWER(){
  return <>
    <div style={{backgroundImage:`url(${backendbg})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
        <h2 className="font-neuebit  text-4xl md:text-4xl lg:text-6xl xl:text-[60px] leading-[34px]  xl:leading-[44px] text-[#83C7E6]  mb-5">Backend <br></br>
                Power<br></br>
                house
        </h2>
    </div>
  </>
}