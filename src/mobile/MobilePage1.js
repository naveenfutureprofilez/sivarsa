import React, { useEffect, useState } from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft,PreBg,nextBg,sivarsaLogo,messageUs } from "../Icons";
import messageus from "../images/messageus.png"
import { Link } from "react-router-dom";
export default function MobilePage1() {

  const [rotate, setrotate] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setrotate(true)
    },100);
  },[])


  return (
    <div className="grid w-full h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">
      



      <div className="thumbnailBox h-full bg-[#171717] "></div>
      
      <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
        <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#6FF04A]">       
              <h2 className="font-neuebit  text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#0B6222] mb-5">Web Development </h2>
              <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#0B6222]">Take your business online <br /> with a premium website</p>
             <div
          className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8"
          dangerouslySetInnerHTML={{ __html: arrowblackUP }}
        ></div>

              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
        </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4 "></div>

      <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
        <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#FF7E2D]">       
              <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#9D3001]  mb-5">AI Development </h2>
              <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#9D3001]">Unleash the power of AI to <br /> transform your business</p>
              <div className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackUP }}></div>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
        </div>
      </div>

      <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
       <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#393939]">       
               <h2 className="font-neuebit leading-normal text-xm  sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl leading-none text-white "> Services <br></br> Provided </h2>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
        </div>
      </div>


      <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
       <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
       <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left  p-2 sm:p-3 md:p-4 lg:p-6 bg-[#F559C4]">       
              <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#F3C7E7]  mb-5">Backend Services </h2>
        <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F3C7E7]">Creating robust and scalable APIs to connect your services.
        </p>
        <div
          className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8"
          dangerouslySetInnerHTML={{ __html: arrowblackDW }}
        ></div>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
        </div>
      </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4 "></div>

      <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
      <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
       <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#763DF8]">       
              <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#CFB8E5] mb-5">UI & UX Design</h2>
               <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#CFB8E5]">Ignite your brand’s potential <br/> with stunning, innovative <br/> design.</p>
                <div className="absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackDW }}></div>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
        </div>
      </div>


       
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4 "></div>



      <Link to="/" className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
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
        <Link to="/mobile-web-devlopment" className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
          <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
            Next
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full nextpreimg"
          dangerouslySetInnerHTML={{ __html: nextBg }}></div>
        </Link>

    </div>
  );
}
