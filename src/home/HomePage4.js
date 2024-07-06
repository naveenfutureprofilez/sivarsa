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
import latestwork from "../video/latestwork.mov"
import { Link } from "react-router-dom";

export default function HomePage4() {
  const [rotate, setrotate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setrotate(true);
    }, 100);
  }, []);

  return (
    <div className="grid w-full h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">

<div className={`${rotate ? "rotate" : ""} thumbnailBox h-full bg-[#171717]  relative `}>
  <div className="cube h-full relative bg-[#545454]" >
    <div className="wall text-white front">  
    </div>
    <div className="wall text-white back"></div>
    <div className="wall text-white left  bg-[#252525] p-2 sm:p-3 md:p-4 lg:p-6">
      <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#F5F5F5]">Latest <br/> Work</h2>
      <div className="absolute bottom-2 right-2 latestvideo"><video src={latestwork} controls="controls" autoplay="true" /> </div>
    </div>

    <div className="wall text-white right"></div>
    <div className="wall text-white top"></div>
    <div className="wall text-white bottom"></div>
  </div>
</div>



<div className="thumbnailBox h-full bg-[#171717] "></div>


<div className={`${rotate ? "rotate" : ""} thumbnailBox h-full bg-[#171717]  relative `}>

  <div className="cube h-full relative bg-[#545454]" >
    <div className="wall text-white front">  
    </div>
    <div className="wall text-white back"></div>
    <div className="wall text-white left  bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6">
          <div className="h-full flex items-center justify-center">
          <img src={oedgegrid} alt="img"/>
        </div>
    </div>

    <div className="wall text-white right"></div>
    <div className="wall text-white top"></div>
    <div className="wall text-white bottom"></div>
  </div>
</div>





<div className="thumbnailBox h-full bg-[#171717] ">
  <div className="h-full flex items-center justify-center">
    <img src={gavs} alt="img"/>
  </div>
</div>

<div className="thumbnailBox h-full bg-[#171717] ">

</div>



<div className="thumbnailBox h-full bg-[#171717] ">
  <div className="h-full flex items-center justify-center">
    <img src={hestus} alt="img"/>
  </div>
</div>


<div className="thumbnailBox h-full bg-[#171717] ">

</div>


<div className="thumbnailBox h-full bg-[#171717] ">
  <div className="h-full flex items-center justify-center">
    <img src={congn} alt="img"/>
  </div>
</div>

<div className="thumbnailBox h-full bg-[#171717] ">

</div> 




      <Link
        to="/home/3"
        className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 "
      >
        <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
          Prev
        </div>
        <div className="absolute top-0 bottom-0 right-0">
          <div
            className="absolute top-0 bottom-0 right-0 h-full nextpreimg"
            dangerouslySetInnerHTML={{ __html: PreBg }}
          ></div>
        </div>
      </Link>
      <div className="thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6  relative">
        <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">
          sivarsa
        </div>
        <div
          className="messageusbtn absolute top-16  md:top-4  lg:top-2 xl:top-5 right-2 sm:right-3 md:right-4 lg:right-5"
          dangerouslySetInnerHTML={{ __html: messageUs }}
        ></div>

<div className="flex justify-center items-end m-auto justify-center sivrsalogo overflow-hidden"  dangerouslySetInnerHTML={{ __html: sivarsaLogo }}></div>
      </div>
      <Link
        to="/home/5"
        className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 "
      >
        <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
          Next
        </div>
        <div
          className="absolute top-0 bottom-0 left-0 h-full nextpreimg"
          dangerouslySetInnerHTML={{ __html: nextBg }}
        ></div>
      </Link>
    </div>
  );
}
