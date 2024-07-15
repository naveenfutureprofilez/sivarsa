import React, { useEffect, useState } from "react";
import { PreBg,nextBg,sivarsaLogo,messageUs } from "../Icons";
import Blank from "../contents/Blank";

import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';

import { PAGE_ONE_BOX4 } from "../home/Landing";
import { WEBDEV, AISERVICES, BACKEND_SERVICES, UX_SERVICE } from "../home/HomePage2";
import { OUR_JOURNRY, COFFEE, PROJECTS_DELIVERED, COFEE2, TEAMS} from "../home/HomePage3";

export default function Screen3() {

    const [rotate, setRotate] = useState(false);
     useEffect(() => {
      setRotate(true);
     },[]);
  
    return <>
      <div className="grid w-full overflow-hidden h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">

        {/* ROW 1 */}
        <Blank />
        <ReactCardFlip isFlipped={rotate} flipDirection="horizontal">
            <WEBDEV />
            <Blank />
        </ReactCardFlip>
        <ReactCardFlip isFlipped={rotate} flipDirection="horizontal">
            <Blank />
            <OUR_JOURNRY />
        </ReactCardFlip>

        {/* ROW 2 */}
        <ReactCardFlip isFlipped={rotate} flipDirection="horizontal">
            <AISERVICES />
            <Blank />
        </ReactCardFlip>
        <ReactCardFlip isFlipped={rotate} flipDirection="horizontal">
            <PAGE_ONE_BOX4 />
            <COFFEE />
        </ReactCardFlip>
        <ReactCardFlip isFlipped={rotate} flipDirection="horizontal">
            <BACKEND_SERVICES />
            <Blank />
        </ReactCardFlip>


        {/* ROW 3 */}
        <ReactCardFlip isFlipped={rotate} flipDirection="horizontal">
            <Blank />
            <PROJECTS_DELIVERED />
        </ReactCardFlip>
         
        <ReactCardFlip isFlipped={rotate} flipDirection="horizontal">
            <UX_SERVICE />
            <COFEE2 />
        </ReactCardFlip>

        <ReactCardFlip isFlipped={rotate} flipDirection="horizontal">
            <Blank />
            <TEAMS />
        </ReactCardFlip>
         

        {/* BOTTOM */}
        <Link to="/services/2" className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
          <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
            Prev
          </div>
          <div className="absolute top-0 bottom-0 right-0">
            <div className="absolute top-0 bottom-0 right-0 h-full nextpreimg" dangerouslySetInnerHTML={{ __html: PreBg }}></div>
          </div>
        </Link>
        <div className="thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 relative">
          <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">sivarsa</div>
          <div className="messageusbtn absolute top-16  md:top-4  lg:top-2 xl:top-5 right-2 sm:right-3 md:right-4 lg:right-5"  dangerouslySetInnerHTML={{ __html: messageUs }}>
          </div>
          <div className="flex absolute bottom-0 left-0 right-0 m-auto justify-center sivrsalogo"  dangerouslySetInnerHTML={{ __html: sivarsaLogo }}></div>
        </div>
        <Link to="/services/4" className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
          <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
            Next
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full nextpreimg" dangerouslySetInnerHTML={{ __html: nextBg }}></div>
        </Link>
      </div>
      </>
}
