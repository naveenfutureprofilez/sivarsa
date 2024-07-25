import React, { useEffect, useState } from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft,PreBg,nextBg,sivarsaLogo,messageUs } from "../Icons";
import { Link } from "react-router-dom";

export function WEBDEV(){
  return <Link to="/services/web"> 
  <div className={` overflow-hidden thumbnailBox h-full relative bg-[#6FF04A] `}>
      <div className="wall text-white p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="font-neuebit text-base sm:text-1xl md:text-xl lg:text-3xl xl:text-4xl leading-none text-[#0B6222]">Web Development </h2>
        <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-base xl:text-lg leading-none text-[#0B6222]">Unleash the power of AI to <br /> transform your business</p>
        <div className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackUP }}></div>
      </div>
      </div>
  </Link>
}
export function AISERVICES(){
  return <div className={`thumbnailBox h-full relative bg-[#FF7E2D] `}>
      <div className="wall text-white p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="font-neuebit text-base sm:text-1xl md:text-xl lg:text-3xl xl:text-4xl leading-none text-[#9D3001]">AI Development </h2>
        <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-base xl:text-lg leading-none text-[#9D3001]">Unleash the power of AI to <br /> transform your business</p>
        <div className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackUP }}></div>
      </div>
  </div>
}

export function BACKEND_SERVICES(){
  return <div className={`thumbnailBox h-full relative bg-[#F559C4]`}>
    <div className="wall text-white left  p-2 sm:p-3 md:p-4 lg:p-6 ">       
      <h2 className="font-neuebit text-base sm:text-1xl md:text-xl lg:text-3xl xl:text-4xl leading-none text-[#F3C7E7]">Backend Services </h2>
      <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-base xl:text-lg leading-none text-[#F3C7E7]">Creating robust and scalable APIs <br></br> to connect your services.</p>
      <div className="absolute absolute bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{__html:arrowblackDW}}></div>
    </div>
  </div>
}
 
export function UX_SERVICE(){
  return <div className={`thumbnailBox h-full bg-[#763DF8] relative `}>
        <div className="text-white p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="font-neuebit text-base sm:text-1xl md:text-xl lg:text-3xl xl:text-4xl leading-none text-[#CFB8E5">UI & UX Design</h2>
          <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-base xl:text-lg leading-none text-[#CFB8E5]">Ignite your brand’s potential <br/> with stunning, innovative <br/> design.</p>
          <div className="absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackDW }}></div>
        </div>
  </div>
}
 