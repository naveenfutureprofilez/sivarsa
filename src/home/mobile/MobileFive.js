import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons"; 
import backendbg from "../../images/backend_power.png";

export function FRAMEWORK(){
    return <> 
      <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
          <h2 className="font-neuebit  text-[25px] lg:text-[50px] leading-[24px] lg:leading-[50px] text-[#68A9E9] mb-5">Frameworks </h2>
      </div>
    </> 
  }
export function REACT(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717] flex justify-center items-center `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
             <div className="text-center">
                <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[84px] h-[50px] md:h-[60px] lg:h-[83px]"   width="84" height="83" viewBox="0 0 84 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.0289 48.5236C46.0459 48.5236 49.3023 45.2672 49.3023 41.2502C49.3023 37.2332 46.0459 33.9768 42.0289 33.9768C38.0119 33.9768 34.7555 37.2332 34.7555 41.2502C34.7555 45.2672 38.0119 48.5236 42.0289 48.5236Z" fill="#61DAFB"/>
                    <path d="M42.0283 56.152C63.5829 56.152 81.0563 49.4804 81.0563 41.2505C81.0563 33.0205 63.5829 26.3489 42.0283 26.3489C20.4738 26.3489 3.00037 33.0205 3.00037 41.2505C3.00037 49.4804 20.4738 56.152 42.0283 56.152Z" stroke="#61DAFB" stroke-width="4.125"/>
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

  export function FLUTTER(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">       
             <div className="text-center">
             <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[68px] h-[50px] md:h-[60px] lg:h-[84px]" width="68" height="84" viewBox="0 0 68 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5746 54.8016L0.870483 42.0975L42.1205 0.85083H67.5254L13.5746 54.8016ZM67.5254 38.9131H42.1205L32.6041 48.4296L45.3082 61.1337" fill="#42A5F5" fill-opacity="0.8"/>
                <path d="M32.6041 73.8346L42.1205 83.351H67.5255L45.3083 61.1338" fill="#0D47A1"/>
                <path d="M19.9299 61.1406L32.614 48.4531L45.2981 61.1372L32.614 73.8247L19.9299 61.1406Z" fill="#42A5F5"/>
                <path d="M32.6139 73.8247L45.298 61.1406L47.0686 62.9112L34.3845 75.5953L32.6139 73.8247Z" fill="url(#paint0_linear_113_3078)"/>
                <path d="M32.6041 73.8345L51.4536 67.3224L45.3082 61.1304" fill="url(#paint1_linear_113_3078)"/>
                <defs>
                <linearGradient id="paint0_linear_113_3078" x1="38.9583" y1="67.4803" x2="40.7291" y2="69.251" gradientUnits="userSpaceOnUse">
                <stop offset="0.2" stop-opacity="0.15"/>
                <stop offset="0.85" stop-color="#616161" stop-opacity="0.01"/>
                </linearGradient>
                <linearGradient id="paint1_linear_113_3078" x1="32.6086" y1="67.4828" x2="51.4577" y2="67.4828" gradientUnits="userSpaceOnUse">
                <stop offset="0.2" stop-opacity="0.55"/>
                <stop offset="0.85" stop-color="#616161" stop-opacity="0.01"/>
                </linearGradient>
                </defs>
                </svg>
                <div className="text-center text-[#42A5F5] text-sm md:text-base lg:text-lg">
                   Flutter
                </div>
             </div>
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