import React from 'react'
import {arrowblackUP } from "../Icons";

export default function WebDev() {
  return (
    <>
      <div className={`thumbnailBox h-full bg-[#6FF04A] `} >
         <div className="text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
               <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#0B6222] mb-5">Web Development </h2>
               <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#0B6222]">Take your business online <br /> with a premium website</p>
            <div className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8"
               dangerouslySetInnerHTML={{ __html: arrowblackUP }}></div>
         </div>
      </div>
    </>
  )
}
