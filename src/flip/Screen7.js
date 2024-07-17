import React, { useEffect, useState } from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft,PreBg,nextBg,sivarsaLogo,messageUs } from "../Icons";
import Blank from "../contents/Blank";

import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';

import { PAGE_ONE_BOX2, PAGE_ONE_BOX4, PAGE_ONE_BOX7, PAGE_ONE_BOX9 } from "../home/Landing";
import { WEBDEV, AISERVICES, BACKEND_SERVICES, UX_SERVICE } from "../home/HomePage2";
import { OUR_JOURNRY, COFFEE, PROJECTS_DELIVERED, COFEE2, TEAMS} from "../home/HomePage3";
import { PAST_WORK,OED, GAVS, HESTUS,CONGO } from "../home/HomePage4";
import { CLIENT_WORDS, REVIEW1, REVIEW2, REVIEW3, REVIEW4} from "../home/HomePage5";
import { FOUNDER, TRANSFORMING, UNMATCHED } from "../home/HomePage6";

export default function Screen7() {

    const [rotate, setRotate] = useState(false);
     useEffect(() => {
      setRotate(true);
     },[]);
  
    return <>
      <div className="grid w-full overflow-hidden h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">

        {/* ROW 1 */}
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.4" flipSpeedFrontToBack="0.4"   flipDirection="vertical">
            <CLIENT_WORDS />
            <Blank />
        </ReactCardFlip>
             
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.4" flipSpeedFrontToBack="0.4"   flipDirection="vertical">
            <Blank />
            <FOUNDER />
        </ReactCardFlip>

        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.4" flipSpeedFrontToBack="0.4"   flipDirection="vertical">
            <REVIEW1 />
            <Blank />
        </ReactCardFlip>



        {/* ROW 2 */}
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.4" flipSpeedFrontToBack="0.4"   flipDirection="vertical">
            <Blank />
            <TRANSFORMING />
        </ReactCardFlip>
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.4" flipSpeedFrontToBack="0.4"   flipDirection="vertical">
            <REVIEW2 />
            <Blank />
        </ReactCardFlip>
            <Blank />


        {/* ROW 3 */}
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.4" flipSpeedFrontToBack="0.4"   flipDirection="vertical">
            <Blank />
            <Blank />
        </ReactCardFlip>

         <Blank />

        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.4" flipSpeedFrontToBack="0.4"   flipDirection="vertical">
            <REVIEW4 />
            <UNMATCHED />
        </ReactCardFlip>


        {/* BOTTOM */}
        <Link to="/services/6" className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
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
        <Link to="/" className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
          <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
            Next
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full nextpreimg" dangerouslySetInnerHTML={{ __html: nextBg }}></div>
        </Link>

      </div>
      </>
}
