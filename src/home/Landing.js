import React from "react";
import { arrowblackRT, arrowblackDW} from "../Icons";
import weaving from "../images/weaving.png"
import { Link } from "react-router-dom";

export function PAGE_ONE_BOX2 () {
  return  <div className={`thumbnailBox h-full relative  bg-[#171717] `}>
      <div className=" text-white left  p-6">
        <p className="font-GoshaSans text-2xl text-[#F5F5F5CC]">Weaving software <br/> into magical journeys.</p>
        <div className="absolute bottom-8 right-8">
        <img alt="weaving" src={weaving} />
        </div>
    </div>
  </div>
}

export function PAGE_ONE_BOX4 () {
  return  <div className={`thumbnailBox h-full relative bg-[#393939] `}>
      <div className="cube h-full relative" >
          <div className=" text-white front"></div>
          <div className=" text-white back"></div>
          <div className=" text-white left  p-2 sm:p-3 md:p-4 lg:p-6">
            <h2 className="font-neuebit leading-normal text-xm  md:text-2xl lg:text-6xl xl:text-7xl leading-none text-white">Services <br/> Provided</h2>
          </div>
          <div className=" text-white right"></div>
          <div className=" text-white top"></div>
          <div className=" text-white bottom"></div>
      </div>
    </div>
}

export function PAGE_ONE_BOX7 () {
  return <Link to='/services/staffing' className={`block thumbnailBox h-full relative bg-[#FFC700] `}>
      <div className="text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">
        <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#9D5209] mb-2 sm:mb-3 md:mb-4 lg:mb-4">Staffing</h2>
        <p className="font-GoshaSans text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#9D5209]">We provide skilled professionals <br /> across  various domains</p>
        <div className="absolute bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackRT }}></div>
      </div>
  </Link>
}

export function PAGE_ONE_BOX9 () {
  return <div className={` thumbnailBox h-full relative bg-[#2D68FF]`}>
          <div className=" text-white front"></div>
          <div className=" text-white back"></div>
          <div className=" text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#A9D6DD] mb-5">Mobile Application</h2>
            <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#A9D6DD]">
              We can Craft powerful and <br /> dynamic solutions
            </p>
            <div className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackDW }}
            ></div>
          </div>
          <div className=" text-white right"></div>
          <div className=" text-white top"></div>
          <div className=" text-white bottom"></div>
  </div>
}

 