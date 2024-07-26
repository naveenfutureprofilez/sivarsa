import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/web_tap.png";

export function FRAMEWORK(){
  return <> 
    <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
        <h2 className="font-neuebit  text-[25px] lg:text-[50px] leading-[24px] lg:leading-[50px] text-[#C7DFB8] mb-5">Frameworks </h2>
    </div>
  </> 
}
export function REACT(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717] flex justify-center items-center `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
           <div className="text-center">
              <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[84px] h-[50px] md:h-[60px] lg:h-[83px]"  width="84" height="83" viewBox="0 0 84 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.0289 48.5238C46.0459 48.5238 49.3023 45.2674 49.3023 41.2504C49.3023 37.2335 46.0459 33.9771 42.0289 33.9771C38.0119 33.9771 34.7555 37.2335 34.7555 41.2504C34.7555 45.2674 38.0119 48.5238 42.0289 48.5238Z" fill="#61DAFB"/>
                <path d="M42.0283 56.1523C63.5829 56.1523 81.0563 49.4806 81.0563 41.2507C81.0563 33.0208 63.5829 26.3491 42.0283 26.3491C20.4738 26.3491 3.00037 33.0208 3.00037 41.2507C3.00037 49.4806 20.4738 56.1523 42.0283 56.1523Z" stroke="#61DAFB" stroke-width="4.125"/>
                <path d="M29.1219 48.7013C39.8992 67.3681 54.4137 79.1646 61.541 75.0497C68.6683 70.9347 65.7095 52.4665 54.9322 33.7997C44.1549 15.1329 29.6404 3.33632 22.5131 7.45128C15.3857 11.5662 18.3446 30.0345 29.1219 48.7013Z" stroke="#61DAFB" stroke-width="4.125"/>
                <path d="M29.1234 33.7995C18.3461 52.4663 15.3872 70.9345 22.5145 75.0495C29.6418 79.1644 44.1564 67.3678 54.9337 48.7011C65.7109 30.0343 68.6698 11.566 61.5425 7.45106C54.4152 3.33611 39.9006 15.1327 29.1234 33.7995Z" stroke="#61DAFB" stroke-width="4.125"/>
                </svg>

              <div className="text-center text-[#61DAFB] text-sm md:text-base lg:text-lg">
                 React
              </div>
           </div>
       </div>
    </div>
  </>
} 

export function ANGULAR(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">       
           <div className="text-center">
            <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[78px] h-[50px] md:h-[60px] lg:h-[83px]"  width="78" height="83" viewBox="0 0 78 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.10352e-05 13.6745L38.3783 0.000488281L77.7901 13.4314L71.4086 64.2076L38.3783 82.5005L5.86473 64.4508L6.10352e-05 13.6745Z" fill="#E23237"/>
                <path d="M77.7905 13.4314L38.3788 0.000488281V82.5005L71.4091 64.2381L77.7905 13.4314Z" fill="#B52E31"/>
                <path d="M38.4387 9.63281L14.5247 62.8399L23.4582 62.688L28.2594 50.6851H49.7123L54.9693 62.8399L63.5077 62.9918L38.4387 9.63281ZM38.4997 26.6798L46.5824 43.5746H31.3889L38.4997 26.6798Z" fill="white"/>
              </svg>

              <div className="text-center text-[#E23237] text-sm md:text-base lg:text-lg">
              Angular
              </div>
           </div>
       </div>
    </div>
  </>
} 

export function VUE_JS(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">       
           <div className="text-center">
            <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[78px] h-[50px] md:h-[60px] lg:h-[83px]"  width="96" height="83" viewBox="0 0 96 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M76.5215 0.000488281H95.6519L47.8258 82.5005L-0.000244141 0.000488281H36.5867L47.8258 19.1309L58.8258 0.000488281H76.5215Z" fill="#41B883"/>
                <path d="M-0.000244141 0.000488281L47.8258 82.5005L95.6519 0.000488281H76.5215L47.8258 49.5005L18.8911 0.000488281H-0.000244141Z" fill="#41B883"/>
                <path d="M18.8912 0.000488281L47.826 49.7396L76.5217 0.000488281H58.826L47.826 19.1309L36.5869 0.000488281H18.8912Z" fill="#35495E"/>
               </svg>
              <div className="text-center text-[#41B883] text-sm md:text-base lg:text-lg">
              Vue.js
              </div>
           </div>
       </div>
    </div>
  </>
} 

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