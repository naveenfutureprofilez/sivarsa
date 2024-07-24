import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/tanentbg.png";

export function DISCOVERY(){
  return <>
  <style>{`
    .discovery_bg1{background: linear-gradient(180deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative discovery_bg1   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C5AA] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Discovery</h2>
        <div className="text-[#F1C5AACC] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Understanding your staffing needs and project requirements.</div>
    </div>
    </div>
  </>
} 

export function TALENT_SOURCING(){
  return <>
  <style>{`
    .sourcing_bg1{background: linear-gradient(180deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative sourcing_bg1   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C5AA] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Talent Sourcing</h2>
        <div className="text-[#F1C5AACC] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Identifying and screening the best candidates.</div>
    </div>
    </div>
  </>
} 

export function MATCHING(){
  return <>
  <style>{`
    .matching_bg1{background: linear-gradient(73.38deg, #171717 -1.6%, #B88D01 100%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative matching_bg1   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C5AA] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Matching</h2>
        <div className="text-[#F1C5AACC] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Aligning talent with your specific project goals.</div>
    </div>
    </div>
  </>
} 

export function ONBOARDING(){
  return <>
  <style>{`
    .onboarding_bg1{background: linear-gradient(285.59deg, #171717 0%, #B88D01 100%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative onboarding_bg1 `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C5AA] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Onboarding</h2>
        <div className="text-[#F1C5AACC] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Seamlessly integrating new team members into your workflow.</div>
    </div>
    </div>
  </>
} 

export function ONGOING_SUPPORT(){
  return <>
  <style>{`
    .support_bg1{background: linear-gradient(0deg, #171717 0%, #B88D01 99.99%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative support_bg1`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C5AA] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Ongoing Support</h2>
        <div className="text-[#F1C5AACC] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Identifying and screening the best candidates.</div>
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

 