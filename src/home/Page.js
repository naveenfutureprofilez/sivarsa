import React, { useEffect } from "react";
import { arrowblack, weaving,sivarsa } from "../Icons";
export default function Page() {

  useEffect(() => {
    const cubes = document.getElementsByClassName('cube');
    Array.from(cubes).forEach(cube => {
       cube.style.transition = 'transform 1s';  
       cube.style.transform = 'rotateX(0deg) rotateY(90deg) rotateZ(0deg)';
     });
 }, []);  
  return (
    <div className="grid h-screen gap-2 grid-cols-3 grid-rows-4 p-4 bg-black">
      <div className="thumbnailBox h-full bg-[#171717]"></div>

      {/* <div className="thumbnailBox h-full relative bg-[#171717] p-4">
        <h2 className="font-GoshaSans md:text-[28px] text-sm text-white">
          Weaving software into magical journeys.
        </h2>
        <div
          className="absolute bottom-2 right-1.5 w-40 h-40"
          dangerouslySetInnerHTML={{ __html: weaving }}
        ></div>
      </div> */}
      <div className="thumbnailBox h-full relative bg-[#171717] p-4">
          <div className="cube thumbnailBox h-full relative bg-[##545454] p-4" >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left">
                Weaving software into magical journeys.
                {/* <div className="weavingsoft" dangerouslySetInnerHTML={{ __html: weaving }}>

                </div> */}
                </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
            </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4"></div>

      <div className="thumbnailBox h-full bg-[#171717] p-4"></div>

      <div className="thumbnailBox h-full relative bg-[#171717] p-4 min-h-[250px]">
        <h2 className="font-GoshaSans text-8xl text-white ">
          Services <br></br> Provided
        </h2>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4"></div>

      <div className="thumbnailBox h-full bg-[#FFC700] p-4 relative">
        <h2 className="font-neuebit text-5xl text-[#9D5209]">Staffing</h2>
        <p className="font-GoshaSans text-xl text-[#9D5209]">
          We provide skilled <br></br> professionals across <br></br> various
          domains
        </p>
        <div
          className="absolute bottom-2 right-1.5"
          // dangerouslySetInnerHTML={{ __html: arrowblack }}
        ></div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4"></div>

      <div className="thumbnailBox h-full bg-[#2D68FF] p-4 relative">
        <h2 className="font-neuebit text-5xl text-[#A9D6DD]">
          Mobile Application
        </h2>
        <p className="font-GoshaSans text-xl text-[#A9D6DD]">
          We can Craft powerful and dynamic solutions
        </p>
        <div
          className="absolute bottom-2 right-1.5"
          // dangerouslySetInnerHTML={{ __html: arrowblack }}
        ></div>
      </div>

      <div className="relative thumbnailBox h-full bg-[#171717] p-4">
        <div className="absolute bottom-2 left-1.5 text-[#B5AAF3] font-neuebit text-5xl">
          Prev
        </div>
        <div className="absolute top-0 right-0"></div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4">
        <div className="font-GoshaSans text-xl text-[#fff]">sivarsa</div>
        <div></div>
        {/* <div dangerouslySetInnerHTML={{ __html: sivarsa }}></div> */}
      </div>

      <div className="relative thumbnailBox h-full bg-[#171717] p-4">
        <div className="absolute bottom-2 right-1.5 text-[#B5AAF3] font-neuebit text-5xl">
          Next
        </div>
        <div className="absolute top-0 right-0">

        </div>
      </div>
    </div>
  );
}
