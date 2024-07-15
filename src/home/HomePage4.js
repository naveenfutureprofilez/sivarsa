import React, { useEffect, useState } from "react";
import{PreBg,nextBg,sivarsaLogo,messageUs }from "../Icons";
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

export function PAST_WORK() {
  return (
    <>
      <div className={`thumbnailBox h-full  bg-[#252525] relative `}>
          <div className="wall text-white left  p-2 sm:p-3 md:p-4 lg:p-6">
            <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#F5F5F5]">Past<br/> Work</h2>
            <div className="absolute bottom-2 right-2 max-w-[100px] latestvideo"><video src={latestwork} playsInline autoPlay /> </div>
          </div>
        </div>
    </>
  );
}


export function OED() {
  return (
    <>
      <div className={` thumbnailBox h-full bg-[#171717] relative flex items-center justify-center`}>
          <img src={oedgegrid} alt="img" />
      </div>
    </>
  );
}
export function GAVS() {
  return (
    <>
      <div className={` thumbnailBox h-full bg-[#171717] relative flex items-center justify-center`}>
          <img src={gavs} alt="img" />
      </div>
    </>
  );
}
export function HESTUS() {
  return (
    <>
      <div className={` thumbnailBox h-full bg-[#171717] relative flex items-center justify-center`}>
          <img src={hestus} alt="img" />
      </div>
    </>
  );
}
export function CONGO() {
  return (
    <>
      <div className={` thumbnailBox h-full bg-[#171717] relative flex items-center justify-center`}>
          <img src={congn} alt="img" />
      </div>
    </>
  );
}

 