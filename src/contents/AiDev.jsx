import React from 'react'
import {arrowblackUP } from "../Icons";

export default function AiDev() {
  return (
    <>
      <div className={`thumbnailBox h-full bg-[#FF7E2D] `} >
         <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#9D3001]  mb-5">AI Development </h2>
            <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#9D3001]">Unleash the power of AI to <br /> transform your business</p>
            <div className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackUP }}></div>
         </div>
      </div>
    </>
  )
}
