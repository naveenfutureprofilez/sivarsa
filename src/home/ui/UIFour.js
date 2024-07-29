import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/tanentbg.png";

export function Layout({heading, text}){
  return <>
   <style>
{`
    .discovery_bg1 { 
        background: linear-gradient(rgba(68, 23, 172, 1), rgba(23, 23, 23, 1));
    }
`}
</style>
    <div className={`thumbnailBox h-full relative discovery_bg1   `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#CFB8E5] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">{heading}</h2>
        <div className="text-[#CFB8E5] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">{text}</div>
    </div>
    </div>
  </>
} 

export function Ui_DISCOVERY(){
  return <>
  <Layout heading={"Discovery"} text={"Digging deep into user needs and business goals."}/>     
  </>
}
export function Ui_Design(){
  return <>
  <Layout heading={"Design"} text={"Conducting user research to gather insights."}/>     
  </>
}
export function Ui_Development(){
  return <>
  <Layout heading={"Development"} text={"Creating wireframes, prototypes, and visual designs."}/>     
  </>
}
export function Ui_Testing(){
  return <>
  <Layout heading={"Testing"} text={"Conducting usability tests to refine designs"}/>     
  </>
} 

 