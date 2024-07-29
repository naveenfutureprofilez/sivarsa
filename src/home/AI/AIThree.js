import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import ai_bg from "../../images/ai-bg.png";
import SKILL_CATEGORY1 from "../../images/chatbot.png";
import SKILL_CATEGORY2 from "../../images/data_analytic.png";
import SKILL_CATEGORY3 from "../../images/user_interest.png";
import SKILL_CATEGORY4 from "../../images/process_automation.png";

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
            <h2 className="relative font-neuebit text-[#F36601] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Chatbot  <br className="hidden md:block"></br>Integration</h2>
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
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 opacity-80">       
              <h2 className="relative font-neuebit text-[#F36601] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Data  <br className="hidden md:block"></br> Analytics</h2>
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
              <h2 className="relative font-neuebit text-[#F36601] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">User Interest   <br className="hidden md:block"></br> Prediction</h2>
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
              <h2 className="relative font-neuebit text-[#F36601] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Process   <br className="hidden md:block"></br> Automation</h2>
              <div className="md:absolute md:right-[30px] text-[#9D5209] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                  <img className="w-[40px] lg:w-[60px]" src={SKILL_CATEGORY4} alt="Dynamic Image" />
              </div>
          </div>
      </div>
    </>
  }
   


  export function AI_TAP(){
    return <>
    <style>{`
      .bg-tanent {  }
    `}</style>
      <div style={{backgroundImage:`url(${ai_bg})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
          <h2 className="font-neuebit text-4xl md:text-4xl lg:text-6xl xl:text-6xl leading-[40px]  xl:leading-[50px] text-[#F1C5AA] mb-5">AI 
            <br></br> Service</h2>
      </div>
    </>
  }