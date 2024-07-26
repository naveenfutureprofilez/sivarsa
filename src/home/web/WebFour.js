import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/web_tap.png";

export function DISCOVERY(){
  return <>
  <style>{`
    .discovery_bg1{background: linear-gradient(359.05deg, #171717 -1.19%, #31B10C 99.18%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative discovery_bg1   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#C7DFB8] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Discovery</h2>
        <div className="text-[#C7DFB8] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">We decode your needs and set the AI wheels in motion.</div>
    </div>
    </div>
  </>
} 

export function INTEGRATION(){
  return <>
  <style>{`
    .sourcing_bg1{background: linear-gradient(360deg, #171717 5%, #31B10C 99.99%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative sourcing_bg1 `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#C7DFB8] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Integration Planning</h2>
        <div className="text-[#C7DFB8] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Crafting a roadmap for seamless AI integration.</div>
    </div>
    </div>
  </>
} 

export function DEVELOPMENT(){
  return <>
  <style>{`
    .matching_bg1{background: linear-gradient(217.43deg, #171717 15%, #31B10C 100%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative matching_bg1   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#C7DFB8] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Development</h2>
        <div className="text-[#C7DFB8] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Tailoring AI solutions to fit your specific needs.</div>
    </div>
    </div>
  </>
} 

export function MONITORING(){
  return <>
  <style>{`
    .onboarding_bg1{background: linear-gradient(156.68deg, #171717 15%, #31B10C 100%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative onboarding_bg1 `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#C7DFB8] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Monitoring</h2>
        <div className="text-[#C7DFB8] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Implementing the solution and keeping an eagle eye on its performance.</div>
    </div>
    </div>
  </>
} 

// export function ONGOING_SUPPORT(){
//   return <>
//   <style>{`
//     .support_bg1{background: linear-gradient(360deg, #171717 0%, #31B10C 100%);} 
//   `}</style>
//     <div className={`thumbnailBox h-full relative support_bg1`}>
//         <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
//         <h2 className="relative font-neuebit text-[#C7DFB8] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Integration Planning</h2>
//         <div className="text-[#C7DFB8] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Crafting a roadmap for seamless AI integration.</div>
//     </div>
//     </div>
//   </>
// } 

export function WEB_TAP(){
  return <>
  <style>{`
    .bg-tanent {  }
  `}</style>
    <div style={{backgroundImage:`url(${tanentbg})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
        <h2 className="font-neuebit  text-4xl md:text-4xl lg:text-6xl xl:text-6xl leading-[40px]  xl:leading-[50px] text-[#C7DFB8]  mb-5">Web  <br></br> Wonder</h2>
    </div>
  </>
} 