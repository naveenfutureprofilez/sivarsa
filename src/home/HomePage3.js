import React  from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft,PreBg,nextBg,sivarsaLogo,messageUs,ourJourney } from "../Icons";
import messageus from "../images/messageus.png"
import { Link } from "react-router-dom";

export function OUR_JOURNRY(){
  return <div className={` thumbnailBox h-full w-full bg-[#171717] max-h-[24vh]  relative overflow-hidden `}>
    <div className="ourJourney-logo" dangerouslySetInnerHTML={{ __html: ourJourney }}></div>
    <div className="z-10  absolute bottom-1 left-6  font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-6xl leading-1 md:leading-1 lg:leading-9 xl:leading-10 text-[#F5F5F5] mb-5 sm:p-3 md:p-4 lg:p-6">
    Our Journey
    </div>
</div> 
}

export function COFFEE(){
  return <div className={` thumbnailBox h-full bg-[#6FF04A] relative `}>
    <div className="text-white left p-2 sm:p-3 md:p-4 lg:p-6">
          <h2 className="relative font-neuebit text-[#0B6222] text-base sm:text-1xl md:text-3xl lg:text-4xl xl:text-7xl leading-none mb-1">1000 <span className="absolute top-0 sm:top-1 md:top-4 lg:top-4 xl:top-5 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
        <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#0B6222] mb-5">Coffees consumed</h3>
    </div>
</div>
}

export function PROJECTS_DELIVERED(){
  return <div className={`thumbnailBox h-full  bg-[#763DF8] relative `}>
    <div div className="text-white p-3">
      <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-4xl xl:text-7xl text-[#CFB8E5] leading-normal mb-1">9 <span className="absolute top-0 sm:top-1 md:top-4 lg:top-4 xl:top-5 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
      <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#CFB8E5] mb-5">Projects Delivered</h3>
  </div>
</div>
}

export function COFEE2(){
  return <div className={` thumbnailBox h-full bg-[#C7BDFA] relative `}>
    <div className="text-white  p-2 sm:p-3 md:p-4 lg:p-6">
        <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-4xl xl:text-7xl text-[#763DF8] leading-normal mb-1">1k <span className="absolute top-0 sm:top-1 md:top-4 lg:top-4 xl:top-5 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
      <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#763DF8] mb-5">recruits</h3>
    </div>
</div>
}


export function TEAMS(){
  return <div className={` thumbnailBox h-full bg-[#545454] relative `}>
      <div className="wall text-white back"></div>
      <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">
          <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-4xl xl:text-7xl text-[#F5F5F5] leading-normal mb-1">15 <span className="absolute top-0 sm:top-1 md:top-4 lg:top-4 xl:top-5 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
          <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#F5F5F5] mb-5">LEAN TEAMs</h3>
      </div>
  </div>
}