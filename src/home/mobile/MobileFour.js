import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons"; 
import backendbg from "../../images/backend_power.png";


export function DISCOVERY(){
    return <>
    <style>{`
      .discovery_bg1{background: linear-gradient(359.05deg, #171717 -6.47%, #1846BC 99.18%);} 
    `}</style>
      <div className={`thumbnailBox h-full relative discovery_bg1   `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#83C7E6] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Discovery</h2>
          <div className="text-[#83C7E6] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Unearthing your vision and goals.</div>
      </div>
      </div>
    </>
  } 
  
  export function DESIGN(){
    return <>
    <style>{`
      .sourcing_bg1{background: linear-gradient(360deg, #171717 0%, #1846BC 99.99%);} 
    `}</style>
      <div className={`thumbnailBox h-full relative sourcing_bg1   `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#83C7E6] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Design</h2>
          <div className="text-[#83C7E6] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Crafting intuitive and engaging interfaces.</div>
      </div>
      </div>
    </>
  } 
  
  export function DEVELOPMENT(){
    return <>
    <style>{`
      .matching_bg1{background: linear-gradient(186.09deg, #171717 4.83%, #1846BC 100%);} 
    `}</style>
      <div className={`thumbnailBox h-full relative matching_bg1   `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#83C7E6] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Development</h2>
          <div className="text-[#83C7E6] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Building robust and scalable apps.</div>
      </div>
      </div>
    </>
  } 
  
  export function TESTING(){
    return <>
    <style>{`
      .onboarding_bg1{background: linear-gradient(10.96deg, #171717 15.79%, #1846BC 91.44%);} 
    `}</style>
      <div className={`thumbnailBox h-full relative onboarding_bg1 `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#83C7E6] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Testing</h2>
          <div className="text-[#83C7E6] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Rigorous testing to ensure flawless performance.</div>
      </div>
      </div>
    </>
  } 
  
  export function DEPLOYMENT(){
    return <>
    <style>{`
      .support_bg1{background: linear-gradient(360deg, #171717 0%, #1846BC 100%);} 
    `}</style>
      <div className={`thumbnailBox h-full relative support_bg1`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#83C7E6] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">Deployment</h2>
          <div className="text-[#83C7E6] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">Launching and providing ongoing support.</div>
      </div>
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