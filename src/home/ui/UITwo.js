import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import backendbg from "../../images/backend_power.png";
 
export function Client_Retention(){
  return <>
    <div className={`thumbnailBox h-full relative  bg-[#A964E5] `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#CFB8E5] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">98 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl">%</sup></h2>
        <div className="md:absolute md:right-[30px] text-[#CFB8E5] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Client <br className="hidden md:block"></br> Retention</div>
    </div>
    </div>
  </>
} 
export function Happy_Users(){
  return <>
    <div className={`thumbnailBox h-full relative  bg-[#734FA3] `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#CFB8E5] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">20K</h2>
        <div className="md:absolute md:right-[30px] text-[#CFB8E5] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Happy <br className="hidden md:block"></br> Users</div>
    </div>
    </div>
  </>
} 
export function Projects_Completed(){
  return <>
    <div className={`thumbnailBox h-full relative  bg-[#6B2BA3] `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#CFB8E5] text-[54px] md:text-[100px] lg:text-[100px] xl:text-[120px] leading-[66px] xl:leading-10  mb-1">3 <sup className="-top-4  md:-top-9  lg:-top-12 -left-1 md:-left-2 text-2xl  md:text-3xl lg:text-4xl">+</sup></h2>
        <div className="md:absolute md:right-[30px] text-[#CFB8E5] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right">Projects <br className="hidden md:block"></br> Completed</div>
    </div>
    </div>
  </>
} 
 