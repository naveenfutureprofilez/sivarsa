import React from "react";
import UiSkill1 from "../../images/UiSkill1.png";
import UiSkill2 from "../../images/UiSkill2.png";
import UiSkill3 from "../../images/UiSkill3.png";
import UiSkill4 from "../../images/UiSkill4.png";


export function Ui_SKILL(){
    return <>
    <style>{`
      .bg-tanent {  }
    `}</style>
      <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
          <h2 className="font-neuebit  text-[40px] lg:text-[50px] leading-[40px]  xl:leading-[50px] text-[#CFB8E5] xl:text-[#CFB8E5] mb-5">Skills</h2>
      </div>
    </> 
  }
 
export function Layout({text1, text2, image}){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717]`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
            <h2 className="relative font-neuebit text-[#7030FF] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[30px] lg:leading-[50px] xl:leading-10  mb-3">{text1} <br className="hidden md:block"></br> {text2}</h2>
            <div className="md:absolute md:right-[30px] text-[#7030FF] text-lg lg:text-xl font-GoshaSans md:bottom-[20px]  xl:bottom-[40px] md:text-right"> 
                <img className="w-[40px] lg:w-[60px]" src={image} alt="Dynamic Image" />
            </div>
        </div>
    </div>
  </>
}
export function Research(){
  return <>
<Layout text1={"User"} text2={"Research"} image={UiSkill1}/>
  </> 
}
export function Wireframe(){
  return <>
<Layout text1={"Wireframes"} image={UiSkill2}/>
  </> 
}
export function Testing(){
  return <>
<Layout text1={"Usability"} text2={"Testing"} image={UiSkill3}/>
  </> 
}
export function Visual_Design(){
  return <>
<Layout text1={"Visual"} text2={"Design"} image={UiSkill4}/>
  </> 
}

 