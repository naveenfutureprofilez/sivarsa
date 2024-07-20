import React, { useEffect, useState } from "react";
import {
  arrowblackRT,
  arrowblackDW,
  arrowblackUP,
  weavingSoft,
  PreBg,
  nextBg,
  sivarsaLogo,
  messageUs,
  ourJourney,
} from "../Icons";
import oedgegrid from "../images/oedgegrid.svg";
import gavs from "../images/gavs.svg";
import hestus from "../images/hestus.svg";
import congn from "../images/congn.svg";
import quoteicon from "../images/quoteicon.png";
import rabit from "../images/rabit.png";
import founderbg from "../images/founderbg.svg";
import boyicon from "../images/boyicon.png";
import menicon from "../images/menicon.png";
import { Link } from "react-router-dom";


export function CLIENT_WORDS() {
  return <>
    <div className={`thumbnailBox h-full bg-gray-100 relative `}>
      <div className="cube h-full relative p-4 " >
        <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#171717] mb-5">
          Client <br /> words
        </h2>
        <div className="absolute bottom-1 right-1">
          <img src={rabit} alt="img" />
        </div>
      </div>
    </div>
  </>
}
export function REVIEW1() {
  return <>
    <div className={`thumbnailBox h-full bg-[#212121] relative `}>
        <div className="text-white p-2 sm:p-3 md:p-4 lg:p-6">
            <div className="position top-0 left-0">
              <img src={quoteicon} alt="img" />
            </div>
            <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
              <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-normal xl:text-lg leading-none text-[#F5F5F5] mb-2 max-w-[400px]">
                Their AI and design solutions transformed our  
                business. Highly recommended!
              </p>
              <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-normal xl:text-lg leading-none text-[#F5F5F5]">
                Hestus
              </h3>
            </div>
        </div>
    </div>
  </>
}
export function REVIEW2() {
  return <>
       <div className={` thumbnailBox h-full bg-[#212121] relative p-4`}>
          <div className="position top-0 left-0 ">
            <img src={quoteicon} alt="img" />
          </div>
          <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
            <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-normal xl:text-lg leading-none text-[#F5F5F5] mb-2 max-w-[400px]">
              Unmatched tech and design expertise. <br></br> Our go-to firm!
            </p>
            <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-normal xl:text-lg leading-none text-[#F5F5F5]">
              Petco
            </h3>
          </div>
    </div>  
  </>
}


export function REVIEW3() {
  return <>
        <div className={` thumbnailBox h-full bg-[#212121] relative `}>
        <div className="cube h-full relative p-6" >
          <div className=" relative ">
            <div className="position top-0 left-0">
              <img src={quoteicon} alt="img" />
            </div>
            <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
              <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-normal xl:text-lg leading-none text-[#F5F5F5] mb-2 max-w-[400px]">
                Exceptional AI solutions and innovative designs. 
                Exceeded expectations!
              </p>
              <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-normal xl:text-lg leading-none text-[#F5F5F5]">
                Samatha T.
              </h3>
            </div>
          </div>
        </div>
      </div>
  </>
}


export function REVIEW4() {
  return <>
        <div className={` thumbnailBox h-full bg-[#212121]  relative `}>
          <div className="text-white p-6">
            <div className="position top-0 left-0">
              <img src={quoteicon} alt="img" />
            </div>
            <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
              <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-normal xl:text-lg leading-none text-[#F5F5F5] mb-2 max-w-[400px]">
                Professional, responsive, and creative. Perfect blend of tech and design!
              </p>
              <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-normal xl:text-lg leading-none text-[#F5F5F5]">
                James K
              </h3>
            </div>
          </div>
        </div>
  </>
}
 