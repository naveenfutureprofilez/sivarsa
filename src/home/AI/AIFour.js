import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import ai_bg from "../../images/ai-bg.png";

export function DISCOVERY(){
  return <>
  <style>{`
    .discovery_bg1{background: linear-gradient(0deg, #2B2210 12.06%, #7E4F10 197.46%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative discovery_bg1   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C5AA] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Discovery</h2>
        <div className="text-[#F1C5AA] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">We decode your needs and set the AI wheels in motion.</div>
    </div>
    </div>
  </>
} 

export function INTEGRATION(){
  return <>
  <style>{`
    .sourcing_bg1{background: linear-gradient(180deg, #2B2210 0%, #7E4F10 99.99%, #2B2210 100%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative sourcing_bg1 `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C5AA] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Integration Planning</h2>
        <div className="text-[#F1C5AA] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Crafting a roadmap for seamless AI integration.</div>
    </div>
    </div>
  </>
} 

export function DEVELOPMENT(){
  return <>
  <style>{`
    .matching_bg1{background: linear-gradient(180deg, #2B2210 0%, #7E4F10 99.99%, #2B2210 100%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative matching_bg1   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C5AA] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Development</h2>
        <div className="text-[#F1C5AA] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Tailoring AI solutions to fit your specific needs.</div>
    </div>
    </div>
  </>
} 

export function MONITORING(){
  return <>
  <style>{`
    .onboarding_bg1{background: linear-gradient(159.64deg, #2B2210 18.24%, #7E4F10 98.68%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative onboarding_bg1 `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#F1C5AA] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Monitoring</h2>
        <div className="text-[#F1C5AA] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Implementing the solution and keeping an eagle eye on its performance.</div>
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