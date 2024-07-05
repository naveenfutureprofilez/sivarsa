import React, { useEffect } from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP } from "../Icons";
import weaving from "../images/weaving.png"
import previcon from "../images/previcon.png"
import sivarsalogo from "../images/sivarsalogo.png"
import nexticon from "../images/nexticon.png"
import messageus from "../images/messageus.png"
import { Link } from "react-router-dom";
export default function Page() {

  useEffect(() => {
    const cubes = document.getElementsByClassName('cube');
    Array.from(cubes).forEach(cube => {
       cube.style.transition = 'transform 1s';  
       cube.style.transform = 'rotateX(0deg) rotateY(90deg) rotateZ(0deg)';
     });
 }, []);  
  return (
    <div className="grid 111h-screen gap-1 grid-cols-3 grid-rows-4 bg-black">
      <div className="thumbnailBox h-full"></div>

      <div className="thumbnailBox h-full relative ">
          <div className="cube h-full relative bg-[#545454]" >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left  bg-[#171717] p-6">
               <p className="font-GoshaSans text-2xl text-[#F5F5F5CC]">Weaving software <br/> into magical journeys.</p>
               <div className="absolute bottom-8 right-8">
                <img src={weaving} />
               </div>
                </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
            </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4 min-h-[250px]"></div>

      <div className="thumbnailBox h-full bg-[#171717] p-4 min-h-[250px]"></div>

      <div className="thumbnailBox h-full relative min-h-[250px]">
          <div className="cube h-full relative" >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left  bg-[#393939]  p-6">
              <h2 className="font-GoshaSans text-8xl text-white ">Services <br /> Provided</h2>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
          </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4 min-h-[250px]"></div>


{/* Next and Previous */}
      <div className="relative thumbnailBox h-full bg-[#171717] p-4 min-h-[255px]">
        <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-5xl">
          Prev
        </div>
        <div className="absolute top-0 bottom-0 right-0">
          <img className="m-auto" src={previcon} />
        </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4 min-h-[250px] relative">
        <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">sivarsa</div>
        <div className="absolute top-5 right-5 right-0">
          <img src={messageus} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 m-auto"><img className="m-auto" src={sivarsalogo} /></div>
     
      </div>

      <div className="relative thumbnailBox h-full bg-[#171717] p-4 min-h-[255px]">
        <Link to={'/page2'} className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit text-5xl">
          Next
        </Link>
        <div className="absolute top-0 bottom-0 left-0">
          <img className="m-auto" src={nexticon} />
        </div>
      </div>
    </div>
  );
}
