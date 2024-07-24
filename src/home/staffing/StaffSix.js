import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/tanentbg.png";

export function RECRUITMENT(){
    return <> 
      <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
          <h2 className="font-neuebit  text-[25px] lg:text-[50px] leading-[24px] lg:leading-[50px] text-[#CAAE57] mb-5">Recruitment <br></br>Platforms</h2>
      </div>
    </> 
  }
export function LINKEDIN(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717] flex justify-center items-center `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
             <div className="text-center">
                <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[80px] h-[50px] md:h-[60px] lg:h-[80px]" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9537 27.3507H3.39168C2.65663 27.3507 2.06104 27.9466 2.06104 28.6814V81.888C2.06104 82.623 2.65663 83.2186 3.39168 83.2186H19.9537C20.6887 83.2186 21.2843 82.623 21.2843 81.888V28.6814C21.2843 27.9466 20.6887 27.3507 19.9537 27.3507Z" fill="#0277B5"/>
                    <path d="M11.6786 0.900391C5.65239 0.900391 0.749756 5.7977 0.749756 11.8173C0.749756 17.8395 5.65239 22.7387 11.6786 22.7387C17.7 22.7387 22.5987 17.8392 22.5987 11.8173C22.5989 5.7977 17.7 0.900391 11.6786 0.900391Z" fill="#0277B5"/>
                    <path d="M62.0803 26.0291C55.4284 26.0291 50.5112 28.8886 47.5287 32.1378V28.6821C47.5287 27.9473 46.9331 27.3514 46.198 27.3514H30.337C29.6019 27.3514 29.0063 27.9473 29.0063 28.6821V81.8887C29.0063 82.6238 29.6019 83.2194 30.337 83.2194H46.8628C47.5979 83.2194 48.1934 82.6238 48.1934 81.8887V55.5638C48.1934 46.6929 50.603 43.237 56.7868 43.237C63.5214 43.237 64.0566 48.7772 64.0566 56.0202V81.889C64.0566 82.624 64.6522 83.2196 65.3873 83.2196H81.9192C82.6542 83.2196 83.2498 82.624 83.2498 81.889V52.7042C83.2498 39.5135 80.7346 26.0291 62.0803 26.0291Z" fill="#0277B5"/>
                </svg>
                <div className="text-center text-[#0277B5] text-sm md:text-base lg:text-lg">
                    LinkedIn
                </div>
             </div>
         </div>
      </div>
    </>
  } 

  export function INDEED(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">       
             <div className="text-center">
             <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[80px] h-[50px] md:h-[60px] lg:h-[80px]" width="56" height="83" viewBox="0 0 56 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.4071 35.4363C29.1648 39.6644 19.9377 31.7831 22.8123 22.9762C25.6998 14.1668 37.799 13.2644 41.9498 21.5531C44.5408 26.6397 42.5144 32.8685 37.4097 35.4466L37.4071 35.4363ZM26.3444 1.95935C34.829 -1.12666 44.5382 -0.966819 51.8034 5.34443C53.3322 6.60513 54.5439 8.21904 55.3199 10.0572C56.0444 12.4188 52.7418 9.81232 52.2984 9.47974C50.0013 7.90967 47.5211 6.64638 44.9017 5.70537C30.588 1.33029 17.0502 9.30443 8.6868 21.7104C5.27594 27.176 2.67204 33.1134 0.952427 39.3267C0.790005 40.0924 0.55024 40.8323 0.227974 41.5439C-0.145854 42.2426 0.0526611 39.649 0.0526611 39.5716C0.362036 36.9806 0.859614 34.4025 1.52993 31.8759C5.41 18.3562 14.0055 7.10271 26.3444 1.94646V1.95935ZM26.4656 74.134V44.0034C27.3241 44.0962 28.1284 44.1375 28.9895 44.1375C32.898 44.1504 36.7239 43.0753 40.0677 41.0618V74.1211C40.0677 76.957 39.5418 79.0376 38.2656 80.4091C36.9895 81.8039 35.1796 82.5722 33.2847 82.5026C31.4181 82.5722 29.6212 81.8039 28.3682 80.4091C27.1075 79.0247 26.4501 76.9312 26.4501 74.1365L26.4656 74.134Z" fill="#2684FF"/>
                </svg>

                <div className="text-center text-[#2684FF] text-sm md:text-base lg:text-lg">
                   Indeed
                </div>
             </div>
         </div>
      </div>
    </>
  } 
 
  export function GLASSDOOR(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
             <div className="text-center">
             <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[80px] h-[50px] md:h-[60px] lg:h-[80px]" width="84" height="83" viewBox="0 0 84 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_113_2795)">
                <path d="M41.9001 82.5002C64.6819 82.5002 83.1501 64.0319 83.1501 41.2502C83.1501 18.4684 64.6819 0.000183105 41.9001 0.000183105C19.1184 0.000183105 0.650146 18.4684 0.650146 41.2502C0.650146 64.0319 19.1184 82.5002 41.9001 82.5002Z" fill="#0CAA41"/>
                <path d="M50.7383 55.9858H27.1646C27.1646 59.2407 29.7991 61.8752 33.054 61.8752H50.7302C53.9851 61.8752 56.6196 59.2407 56.6196 55.9858V31.7836C56.6196 31.6628 56.523 31.5661 56.4021 31.5661H50.9397C50.8188 31.5661 50.7222 31.6628 50.7222 31.7836V55.9858H50.7383ZM50.7383 20.6252C53.9932 20.6252 56.6277 23.2597 56.6277 26.5146H33.062V50.7167C33.062 50.8376 32.9653 50.9343 32.8445 50.9343H27.3821C27.2612 50.9343 27.1646 50.8376 27.1646 50.7167V26.5146C27.1646 23.2597 29.7991 20.6252 33.054 20.6252H50.7383Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_113_2795">
                <rect width="82.5" height="82.5" fill="white" transform="translate(0.650146 0.000549316)"/>
                </clipPath>
                </defs>
                </svg>
                <div className="text-center text-[#0CAA41] text-sm md:text-base lg:text-lg">
                   Glassdoor
                </div>
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

 