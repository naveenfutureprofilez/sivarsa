import React, { useEffect, useState } from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft,PreBg,nextBg,sivarsaLogo,messageUs } from "../Icons";
import messageus from "../images/messageus.png"
import { Link } from "react-router-dom";
import cloud from "../video/cloud.mov"

export default function HomePage2() {
    const [rotate, setrotate] = useState(false);
    const [rotation, setRotation] = useState(0);
    
    
    useEffect(() => {
      const cubes = document.querySelectorAll('.cube');
      cubes.forEach(cube => {
          cube.style.transform = `rotateX(0deg) rotateY(${rotation}deg) rotateZ(0deg)`;
      });
    }, [rotation]);

    const Next = () => {
      setRotation(rotation + 90);
    }
    const prev = () => {
      setRotation(rotation - 90);
    }
  
    return (
      <>
      <div className="grid  w-full h-screen  grid-cols-3 grid-rows-custome bg-black">
      
      <div className={`thumbnailBox h-full relative `}>
          <div className="cube h-full relative" >
              <div className="wall text-white front"></div>
              <div className="wall text-white right"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6"></div>
          </div>
      </div>
      <div className={`thumbnailBox h-full relative `}>
      <div className="cube h-full relative bg-[#545454]" >
              <div className="wall text-white front  bg-[#545454] p-2 sm:p-3 md:p-4 lg:p-6">
                  <p className="font-GoshaSans text-sm ms:text-xl lg:text-1xl xl:text-2xl text-[#F5F5F5CC]">Weaving software <br/> into magical <br/> journeys.</p>
                  <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 right-2 sm:right-4 md:right-6 lg:right-8  w-20 sm:w-24 md:w-32 lg:w-32 xl:w-40     h-20 sm:h-24 md:h-32 lg:h-32 xl:h-40">
                  <video src={cloud} width="600" height="300" controls="controls" autoplay="true" />
                  </div>
               </div>
              <div className="wall text-white right">
                  <div className="cube h-full relative " >
                      <div className="wall text-white front">F</div>
                      <div className="wall text-white back">B</div>
                      <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#6FF04A]">       
                        <h2 className="font-neuebit  text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#0B6222] mb-5">Web Development </h2>
                        <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#0B6222]">Take your business online <br /> with a premium website</p>
                      <div className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8"
                      dangerouslySetInnerHTML={{ __html: arrowblackUP }}></div>
                  </div>
              </div>
              </div>
              <div className="wall text-white left">  LEFT
              </div>
              <div className="wall text-white back">BACK</div>
          </div>
      </div>

      <div className={`thumbnailBox h-full relative `}>
          <div className="cube h-full relative" >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6"></div>
              <div className="wall text-white right"></div>
          </div>
      </div>
      <div className={`thumbnailBox h-full relative `}>
          <div className="cube h-full relative" >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6"></div>
              <div className="wall text-white right"></div>
          </div>
      </div>
      <div className={`thumbnailBox h-full relative `}>
          <div className="cube h-full relative " >
              <div className="wall text-white left"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white front bg-gray p-2 sm:p-3 md:p-4 lg:p-6">
              <h2 className="font-neuebit leading-normal text-xm  md:text-2xl lg:text-6xl xl:text-7xl leading-none text-white  ">Services <br /> Provided</h2>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
          </div>
      </div>

      <div className={`thumbnailBox h-full relative `}>
          <div className="cube h-full relative" >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6"></div>
              <div className="wall text-white right"></div>
          </div>
      </div>

      <div className={`thumbnailBox h-full relative `}>
        <div className="cube h-full relative " >
              <div className="wall text-white left"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white front p-2 sm:p-3 md:p-4 lg:p-6 bg-yellow">
               <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#9D5209] mb-2 sm:mb-3 md:mb-4 lg:mb-4">Staffing</h2>
               <p className="font-GoshaSans text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#9D5209]">We provide skilled professionals <br /> across  various domains</p>
               <div className="absolute bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackRT }}></div>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
          </div>
      </div>

      <div className={`thumbnailBox h-full relative `}>
          <div className="cube h-full relative" >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6"></div>
              <div className="wall text-white right"></div>
          </div>
      </div>

      <div className={`thumbnailBox h-full relative `}>
        <div className="cube h-full relative " >
              <div className="wall text-white left"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white front p-2 sm:p-3 md:p-4 lg:p-6 bg-blue">       
          <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#A9D6DD] mb-5">Mobile Application</h2>
        <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#A9D6DD]">
          We can Craft powerful and <br /> dynamic solutions
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
  
      
          
      <div onClick={prev}  className="relative thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 ">
        <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
          Prev
        </div>
        <div className="absolute top-0 bottom-0 right-0">
          <div className="absolute top-0 bottom-0 right-0 h-full nextpreimg" dangerouslySetInnerHTML={{ __html: PreBg }}></div> 
        </div>
      </div>

      <div className="thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6  relative">
        <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">sivarsa</div>
        <div className="messageusbtn absolute top-16  md:top-4  lg:top-2 xl:top-5 right-2 sm:right-3 md:right-4 lg:right-5"  dangerouslySetInnerHTML={{ __html: messageUs }}>
        </div>
        <div className="flex absolute bottom-0 left-0 right-0 m-auto justify-center sivrsalogo" dangerouslySetInnerHTML={{ __html: sivarsaLogo }}></div>
      </div>
      <div onClick={Next} className=" cursor-pointer relative thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 ">
        <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
          Next
        </div>
        <div className="absolute top-0 bottom-0 left-0 h-full nextpreimg"
        dangerouslySetInnerHTML={{ __html: nextBg }}></div>
      </div>
      </div>
      </>

    );
}
