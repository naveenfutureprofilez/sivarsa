import React, { useERETENTIONffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import tanentbg from "../../images/tanentbg.png";

export function COLLABORATION(){
    return <> 
      <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
          <h2 className="font-neuebit  text-[25px] lg:text-[50px] leading-[24px] lg:leading-[50px] text-[#CAAE57] mb-5">Collaboration  <br></br>Tools</h2>
      </div>
    </> 
  }
export function TRELLO(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717] flex justify-center items-center `}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
             <div className="text-center">
                <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[83px] h-[50px] md:h-[60px] lg:h-[83px]"  width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6377 15.6952V62.1015C10.6377 64.9503 12.9451 67.2577 15.7939 67.2577H31.2627C34.1115 67.2577 36.4189 64.9503 36.4189 62.1015V15.6952C36.4189 12.8464 34.1115 10.539 31.2627 10.539H15.7939C12.9451 10.539 10.6377 12.8464 10.6377 15.6952ZM46.7314 15.6952V41.4765C46.7314 44.3253 49.0389 46.6327 51.8877 46.6327H67.3564C70.2053 46.6327 72.5127 44.3253 72.5127 41.4765V15.6952C72.5127 12.8464 70.2053 10.539 67.3564 10.539H51.8877C49.0389 10.539 46.7314 12.8464 46.7314 15.6952ZM10.6377 0.226471C4.94262 0.226471 0.325195 4.84647 0.325195 10.539V72.414C0.325195 78.109 4.9452 82.7265 10.6377 82.7265H72.5127C78.2078 82.7265 82.8252 78.1065 82.8252 72.414V10.539C82.8252 4.84389 78.2052 0.226471 72.5127 0.226471H10.6377Z" fill="#007AC2"/>
                    </svg>

                <div className="text-center text-[#007AC2] text-sm md:text-base lg:text-lg">
                  Trello
                </div>
             </div>
         </div>
      </div>
    </>
  } 

  export function SLACK(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">       
             <div className="text-center">
             <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[80px] h-[50px] md:h-[60px] lg:h-[83px]"  width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68.3208 38.6712C71.8802 38.6712 74.7656 35.7857 74.7656 32.2264C74.7656 28.667 71.8799 25.7816 68.3206 25.7816C64.761 25.7816 61.875 28.6672 61.875 32.2269V38.6712H68.3208ZM50.2734 38.6712C53.8331 38.6712 56.7188 35.7855 56.7188 32.2258V14.18C56.7188 10.6203 53.8331 7.73468 50.2734 7.73468C46.7138 7.73468 43.8281 10.6203 43.8281 14.18V32.2258C43.8281 35.7855 46.7138 38.6712 50.2734 38.6712Z" fill="#2EB67D"/>
                <path d="M14.1791 43.83C10.6198 43.83 7.73438 46.7155 7.73438 50.2748C7.73438 53.8342 10.6201 56.7196 14.1794 56.7196C17.739 56.7196 20.625 53.8339 20.625 50.2743V43.83H14.1791ZM32.2266 43.83C28.6669 43.83 25.7812 46.7157 25.7812 50.2753V68.3212C25.7812 71.8808 28.6669 74.7665 32.2266 74.7665C35.7862 74.7665 38.6719 71.8808 38.6719 68.3212V50.2753C38.6719 46.7157 35.7862 43.83 32.2266 43.83Z" fill="#E01E5A"/>
                <path d="M43.8291 68.3211C43.8291 71.8805 46.7145 74.7659 50.2739 74.7659C53.8333 74.7659 56.7187 71.8802 56.7187 68.3209C56.7187 64.7613 53.833 61.8753 50.2734 61.8753H43.8291V68.3211ZM43.8291 50.2737C43.8291 53.8334 46.7148 56.7191 50.2744 56.7191H68.3203C71.8799 56.7191 74.7656 53.8334 74.7656 50.2737C74.7656 46.7141 71.8799 43.8284 68.3203 43.8284H50.2744C46.7148 43.8284 43.8291 46.7141 43.8291 50.2737Z" fill="#ECB22E"/>
                <path d="M38.6708 14.1795C38.6708 10.6201 35.7854 7.73468 32.226 7.73468C28.6667 7.73468 25.7812 10.6204 25.7812 14.1797C25.7812 17.7394 28.6669 20.6253 32.2266 20.6253H38.6708V14.1795ZM38.6708 32.2269C38.6708 28.6672 35.7851 25.7816 32.2255 25.7816H14.1797C10.62 25.7816 7.73438 28.6672 7.73438 32.2269C7.73438 35.7865 10.62 38.6722 14.1797 38.6722H32.2255C35.7851 38.6722 38.6708 35.7865 38.6708 32.2269Z" fill="#36C5F0"/>
                </svg>


                <div className="text-center text-[#ECB22E] text-sm md:text-base lg:text-lg">
                   Slack
                </div>
             </div>
         </div>
      </div>
    </>
  } 
 
  export function JIRA(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
             <div className="text-center">
             <svg className="inline-block mb-2 xl:mb-4 w-[50px] md:w-[60px] lg:w-[83px] h-[50px] md:h-[60px] lg:h-[83px]" width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M81.8372 39.4171L45.133 3.91672L41.5752 0.475586L13.9456 27.1988L1.31301 39.4171C-0.00407544 40.6926 -0.00407544 42.7586 1.31301 44.0341L26.5558 68.4488L41.5752 82.9756L69.2047 56.2524L69.6325 55.8387L81.8372 44.0341C83.1546 42.7586 83.1546 40.6926 81.8372 39.4171ZM41.5752 53.922L28.9651 41.7256L41.5752 29.5291L54.1853 41.7256L41.5752 53.922Z" fill="#2684FF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5754 29.5298C33.3195 21.5434 33.2792 8.60824 41.4855 0.574097L13.8896 27.2537L28.909 41.7805L41.5754 29.5298Z" fill="url(#paint0_linear_113_3642)"/>
                <defs>
                <linearGradient id="paint0_linear_113_3642" x1="39.3237" y1="17.1917" x2="18.2885" y2="26.376" gradientUnits="userSpaceOnUse">
                <stop offset="0.18" stop-color="#0052CC"/>
                <stop offset="1" stop-color="#2684FF"/>
                </linearGradient>
                </defs>
                </svg>

                <div className="text-center text-[#2684FF] text-sm md:text-base lg:text-lg">
                   Jira
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

 