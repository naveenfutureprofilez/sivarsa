import React, { useEffect, useState } from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft,PreBg,nextBg,sivarsaLogo,messageUs,ourJourney } from "../Icons";
import messageus from "../images/messageus.png"
import { Link } from "react-router-dom";

export default function HomePage3() {
  const [rotate, setrotate] = useState(false)
    useEffect(()=>{
      setTimeout(()=>{
        setrotate(true)
      },100);
    },[])
  return (
    <div className="grid w-full h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">
    <div className="thumbnailBox h-full bg-[#171717] "></div>

<div className="thumbnailBox h-full bg-[#171717] "></div>


<div className={`${rotate ? "rotate" : ""} thumbnailBox h-full  relative `}>

  <div className="cube h-full relative " >
    <div className="wall text-white front">  
    </div>
    <div className="wall text-white back"></div>
    <div className="wall text-white left h-full   bg-[#171717] ">
    {/* <div className=" journeyimg" dangerouslySetInnerHTML={{ __html: ourJourney }}></div> */}
 
  <div className="z-10  absolute bottom-1 left-6  font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-6xl leading-1 md:leading-1 lg:leading-9 xl:leading-10 text-[#F5F5F5] mb-5 sm:p-3 md:p-4 lg:p-6">
  Our <br/> Journey
  </div>
    </div>

    <div className="wall text-white right"></div>
    <div className="wall text-white top"></div>
    <div className="wall text-white bottom"></div>
  </div>
</div>




<div className="thumbnailBox h-full bg-[#171717]  p-2 sm:p-3 md:p-4 lg:p-5 "></div>


<div className={`${rotate ? "rotate" : ""} thumbnailBox h-full bg-[#171717]  relative `}>

  <div className="cube h-full relative" >
    <div className="wall text-white front">  
    </div>
    <div className="wall text-white back"></div>
    <div className="wall text-white left  bg-[#6FF04A] p-2 sm:p-3 md:p-4 lg:p-6">
          <h2 className="relative font-neuebit text-[#0B6222] text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-8xl leading-none mb-1">1000 <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
        <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#0B6222] mb-5">Coffees consumed</h3>
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
    <div className="wall text-white left  bg-[#763DF8] p-2 sm:p-3 md:p-4 lg:p-6">
          <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-8xl text-[#CFB8E5] leading-normal mb-1">9 <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
      <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#CFB8E5] mb-5">Projects Delivered</h3>
    </div>

    <div className="wall text-white right"></div>
    <div className="wall text-white top"></div>
    <div className="wall text-white bottom"></div>
  </div>
</div>


<div className={`${rotate ? "rotate" : ""} thumbnailBox h-full bg-[#171717]  relative `}>

  <div className="cube h-full relative bg-[#545454]" >
    <div className="wall text-white front">  
    </div>
    <div className="wall text-white back"></div>
    <div className="wall text-white left  bg-[#C7BDFA] p-2 sm:p-3 md:p-4 lg:p-6">
        <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-8xl text-[#763DF8] leading-normal mb-1">1k <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
      <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#763DF8] mb-5">recruits</h3>
    </div>

    <div className="wall text-white right"></div>
    <div className="wall text-white top"></div>
    <div className="wall text-white bottom"></div>
  </div>
</div>



<div className={`${rotate ? "rotate" : ""} thumbnailBox h-full bg-[#171717]  relative `}>

  <div className="cube h-full relative bg-[#545454]" >
    <div className="wall text-white front">  
    </div>
    <div className="wall text-white back"></div>
    <div className="wall text-white left  bg-[#545454] p-2 sm:p-3 md:p-4 lg:p-6">
              <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-8xl text-[#F5F5F5] leading-normal mb-1">15 <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
          <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#F5F5F5] mb-5">Coffees consumed</h3>
    </div>

    <div className="wall text-white right"></div>
    <div className="wall text-white top"></div>
    <div className="wall text-white bottom"></div>
  </div>
</div>








  <Link to="/home/2" className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
            <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
              Prev
            </div>
            <div className="absolute top-0 bottom-0 right-0">
            
            <div
            className="absolute top-0 bottom-0 right-0 h-full nextpreimg"
            dangerouslySetInnerHTML={{ __html: PreBg }}></div>
            </div>
          </Link>
          <div className="thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6  relative">
            <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">sivarsa</div>
            <div className="messageusbtn absolute top-16  md:top-4  lg:top-2 xl:top-5 right-2 sm:right-3 md:right-4 lg:right-5"  dangerouslySetInnerHTML={{ __html: messageUs }}>
            </div>
  
            
            <div className="flex absolute bottom-0 left-0 right-0 m-auto justify-center sivrsalogo"  dangerouslySetInnerHTML={{ __html: sivarsaLogo }}></div>
        
          </div>
          <Link to="/home/4" className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
            <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
              Next
            </div>
            <div className="absolute top-0 bottom-0 left-0 h-full nextpreimg"
            dangerouslySetInnerHTML={{ __html: nextBg }}></div>
          </Link>
  </div>  
  )
}
