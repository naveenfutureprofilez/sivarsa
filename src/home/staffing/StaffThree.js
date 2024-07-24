import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/tanentbg.png";
import SKILL_CATEGORY1 from "../../images/websites-favorite-rate.png";
import SKILL_CATEGORY2 from "../../images/search-coding.png";
import SKILL_CATEGORY3 from "../../images/business-product-startup.png";
import SKILL_CATEGORY4 from "../../images/global.png";

export function SKILL(){
    return <>
    <style>{`
      .bg-tanent {  }
    `}</style>
      <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
          <h2 className="font-neuebit  text-[40px] lg:text-[50px] leading-[40px]  xl:leading-[50px] text-[#CAAE57] xl:text-[#F1C5AA] mb-5">Skills</h2>
      </div>
    </> 
  }
 
export function SKILL_CATEGORY_1(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717]`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="relative font-neuebit text-[#F5BB0B] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Technical <br className="hidden md:block"></br> Expertise</h2>
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
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
              <h2 className="relative font-neuebit text-[#F5BB0B] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Flexible   <br className="hidden md:block"></br> Staffing</h2>
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
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
              <h2 className="relative font-neuebit text-[#F5BB0B] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Domain  <br className="hidden md:block"></br> Specialists</h2>
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
              <h2 className="relative font-neuebit text-[#F5BB0B] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Global  <br className="hidden md:block"></br> Reach</h2>
              <div className="md:absolute md:right-[30px] text-[#9D5209] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                  <img className="w-[40px] lg:w-[60px]" src={SKILL_CATEGORY4} alt="Dynamic Image" />
              </div>
          </div>
      </div>
    </>
  }
   
export function TALENT_TAP(){
  return <>
  <style>{`
    .bg-tanent {  }
  `}</style>
    <div style={{backgroundImage:`url(${tanentbg})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
        <h2 className="font-neuebit  text-4xl md:text-4xl lg:text-6xl xl:text-6xl leading-[40px]  xl:leading-[50px] text-[#9D5209]  mb-5">Talent<br></br>
        on Tap</h2>
    </div>
  </>
}

 