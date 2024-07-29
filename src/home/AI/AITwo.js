import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import ai_bg from "../../images/ai-bg.png";

export function ACCURACY(){
    return <>
      <div className={`thumbnailBox h-full relative  bg-[#763802] `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="relative font-neuebit text-[#F1C5AA] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">91 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl">%</sup></h2>
          <div className="md:absolute md:right-[30px] text-[#F1C5AA] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Accuracy <br className="md:block"></br> Improvement</div>
      </div>
      </div>
    </>
  } 
   
  export function TRUSTED(){
    return <>
    <style>{`
      .turn {background: linear-gradient(90deg, rgba(23, 23, 23, 1) 0%, rgba(184, 141, 1, 1) 100%);}
      .turn2 {background: linear-gradient(90deg, rgba(184, 141, 1, 1) 0%, rgba(23, 23, 23, 1) 100%);}
    `}</style>
      <div className={`thumbnailBox h-full relative bg-[#C47422]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
          <h2 className="font-GoshaSans text-[22px] md:text-xl lg:text-[40px] max-w-[300px] leading-[28px]  lg:leading-[32px]  text-[#F1C5AA] mb-5"> Trusted by   <br></br>
          Global Brands</h2>
          </div>
      </div>
    </>
  }
   
  export function DELIVERED(){
    return <>
    
      <div className={`thumbnailBox h-full  relative bg-[#E56D16]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="relative font-neuebit text-[#F1C5AA] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">5 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl ">+</sup></h2>
                  <div className="md:absolute md:right-[30px] text-[#F1C5AA] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">AI Projects <br className="hidden md:block"></br> Delivered</div>
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