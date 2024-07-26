import React from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/tanentbg.png";

export function Layout({heading,text}){
  return <>
  <style>{`
    .discovery_bg1{background: linear-gradient(180deg, rgba(23, 23, 23, 1), rgba(49, 177, 12, 1) 100%);} 
  `}</style>
    <div className={`thumbnailBox h-full relative discovery_bg1`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="relative font-neuebit text-[#C7DFB8] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">{heading}</h2>
        <div className="text-[#C7DFB8] opacity-80 text-[12] md:text-base  lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">{text}</div>
    </div>
    </div>
  </>
}
export function WebDiscovery(){
    return <>
    <Layout heading={"Discovery"} text={"We decode your needs and set the AI wheels in motion."}/>
    </>
  }
  export function WebIntegration(){
    return <>
    <Layout heading={"Integration Planning"} text={"Crafting a roadmap for seamless AI integration."}/>
    </>
  }
  export function WebDevelopment(){
    return <>
    <Layout heading={"Development"} text={"Tailoring AI solutions to fit your specific needs"}/>
    </>
  }
  export function WebMonitoring(){
    return <>
    <Layout heading={"Monitoring"} text={"Implementing the solution and keeping an eagle eye on its performance"}/>
    </>
  } 
 