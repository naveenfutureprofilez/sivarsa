import React from "react";
import WebSkill1 from "../../images/WebSkill1.png";
import WebSkill2 from "../../images/WebSkill2.png";
import WebSkill3 from "../../images/WebSkill3.png";
import WebSkill4 from "../../images/WebSkill4.png";

export function Skill(){
    return <>
    <style>{`
      .bg-tanent {  }
    `}</style>
      <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
          <h2 className="font-neuebit  text-[40px] lg:text-[50px] leading-[40px]  xl:leading-[50px] text-[#C7DFB8] mb-5">Skills</h2>
      </div>
    </> 
  }
 
export function Responsive(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717]`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="relative font-neuebit text-[#39F417] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Responsive  <br></br> Web Design</h2>
            <div className="md:absolute md:right-[30px] text-[#39F417] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                <img className="w-[40px] lg:w-[60px]" src={WebSkill1} alt="Dynamic Image" />
            </div>
        </div>
    </div>
  </>
}
export function ECom(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
              <h2 className="relative font-neuebit text-[#39F417] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">E-Com  <br></br> Solutions</h2>
              <div className="md:absolute md:right-[30px] text-[#39F417] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                  <img className="w-[40px] lg:w-[60px]" src={WebSkill2} alt="Dynamic Image" />
              </div>
          </div>
      </div>
    </>
  }
  export function Custom(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
              <h2 className="relative font-neuebit text-[#39F417] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">Custom Web <br></br> Development</h2>
              <div className="md:absolute md:right-[30px] text-[#39F417] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                  <img className="w-[40px] lg:w-[60px]" src={WebSkill3} alt="Dynamic Image" />
              </div>
          </div>
      </div>
    </>
  }
  export function CMS(){
    return <> 
      <div className={`thumbnailBox h-full relative bg-[#171717]`}>
          <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
              <h2 className="relative font-neuebit text-[#39F417] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">CMS </h2>
              <div className="md:absolute md:right-[30px] text-[#39F417] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                  <img className="w-[40px] lg:w-[60px]" src={WebSkill4} alt="Dynamic Image" />
              </div>
          </div>
      </div>
    </>
  }
