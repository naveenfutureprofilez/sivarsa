import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/tanentbg.png";

export function CreatingInterface(){
  return <>
  <style>
{`
    .captivate_bg { 
        background: linear-gradient(rgba(68, 23, 172, 1), rgba(23, 23, 23, 1));
    }
`}
</style>
    <div className={`thumbnailBox h-full relative captivate_bg `}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
        <h2 className="font-neuebit  text-[15px] md:text-2xl lg:text-3xl max-w-[97px] md:max-w-[150px] leading-[28px]  lg:leading-[32px]  text-[#CFB8E5] mb-5">Creating Interfaces People Love</h2>
    </div>
    </div>
  </>
}
export function Design(){
  return <>
  <style>
{`
    .captivate_bg { 
        background: linear-gradient(rgba(68, 23, 172, 1), rgba(23, 23, 23, 1));
    }
`}
</style>
    <div className={`thumbnailBox captivate_bg h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
        <h2 className="font-neuebit  text-4xl md:text-4xl lg:text-6xl xl:text-[60px] leading-[34px]  xl:leading-[44px] text-[#CFB8E5]  mb-5">Design <br></br>
                UI & UX
        </h2>
    </div>
  </>
}