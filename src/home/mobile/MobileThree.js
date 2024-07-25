import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons"; 
import backendbg from "../../images/backend_power.png";
import SKILL_CATEGORY1 from "../../images/nativeapp.png";
import SKILL_CATEGORY2 from "../../images/custom_mobile.png";
import SKILL_CATEGORY3 from "../../images/cross-platform.png";
import SKILL_CATEGORY4 from "../../images/app_store.png";

export function SKILL(){
    return <>
    <style>{`
      .bg-tanent {  }
    `}</style>
      <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
          <h2 className="font-neuebit  text-[40px] lg:text-[50px] leading-[40px]  xl:leading-[50px] text-[#89C9E5] xl:text-[#F1C5AA] mb-5">Skills</h2>
      </div>
    </> 
  }
 
export function SKILL_CATEGORY_1(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717]`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="relative font-neuebit text-[#23A3FF] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Native App  <br></br> Development</h2>
            <div className="md:absolute md:right-[30px] text-[#9D5209] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                <img className="w-[40px] lg:w-[60px]" src={SKILL_CATEGORY1} alt="Dynamic Image" />
            </div>
        </div>
    </div>
  </>
}
 
export function SKILL_CATEGORY_2(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 opacity-80 ">       
              <h2 className="relative font-neuebit text-[#23A3FF] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Custom <br></br> Mobile Apps </h2>
              <div className="md:absolute md:right-[30px] text-[#9D5209] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                  <img className="w-[40px] lg:w-[60px]" src={SKILL_CATEGORY2} alt="Dynamic Image" />
              </div>
          </div>
      </div>
    </>
  }
 
  export function SKILL_CATEGORY_3(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 opacity-60">       
              <h2 className="relative font-neuebit text-[#23A3FF] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Cross-Platform   <br></br> Solutions</h2>
              <div className="md:absolute md:right-[30px] text-[#9D5209] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                  <img className="w-[40px] lg:w-[60px]" src={SKILL_CATEGORY3} alt="Dynamic Image" />
              </div>
          </div>
      </div>
    </>
  }
 
  export function SKILL_CATEGORY_4(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]`}>
          <div className="wall text-white opacity-40 left p-2 sm:p-3 md:p-4 lg:p-6 ">       
              <h2 className="relative font-neuebit text-[#23A3FF] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">App Store  <br></br> Optimization</h2>
              <div className="md:absolute md:right-[30px] text-[#9D5209] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                  <img className="w-[40px] lg:w-[60px]" src={SKILL_CATEGORY4} alt="Dynamic Image" />
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