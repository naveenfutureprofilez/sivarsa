import React, { useContext, useEffect, useState } from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft,PreBg,nextBg,sivarsaLogo,messageUs } from "../Icons";
import Blank from "../contents/Blank";

import ReactCardFlip from '../Flip';
import { Link, useNavigate } from 'react-router-dom';

import { WEBDEV, AISERVICES, BACKEND_SERVICES, UX_SERVICE } from "../home/HomePage2";
import { OUR_JOURNRY, COFFEE, PROJECTS_DELIVERED, COFEE2, TEAMS} from "../home/HomePage3";
import { PAST_WORK,OED, GAVS, HESTUS,CONGO } from "../home/HomePage4";
import { MyContext } from "../context/Mycontext";

export default function Screen4() {

      const { direction, setDirection } = useContext(MyContext);
      const [flipDirection, setFlipDirection] = useState(direction);

      const [rotate, setRotate] = useState(false);
      useEffect(() => {
        setRotate(true);
      },[]);

      const navigate = useNavigate();
     const handleNext = () => {
        setDirection("vertical");
        setRotate(prevRotate => !prevRotate);
        navigate("/services/5");
      };

      const handlePrev = () => {
        setDirection("vertical-reverse");
        setRotate(prevRotate => !prevRotate);
        navigate("/services/3");
      };
  
    return <>
      <div className="grid w-full overflow-hidden h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">

        {/* ROW 1 */}
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.9" flipSpeedFrontToBack="0.9"  flipDirection={flipDirection}>
            <Blank />
            <PAST_WORK />
        </ReactCardFlip>
        <Blank /> 
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.9" flipSpeedFrontToBack="0.9" flipDirection={flipDirection}>
            <Blank />
            <OED />
        </ReactCardFlip>

        {/* ROW 2 */}
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.9" flipSpeedFrontToBack="0.9" flipDirection={flipDirection}>
            <Blank />
            <GAVS />
        </ReactCardFlip>
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.9" flipSpeedFrontToBack="0.9" flipDirection={flipDirection}>
            {direction === 'vertical' ?  <COFFEE />  :  <Blank /> }
            <Blank />
        </ReactCardFlip>
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.9" flipSpeedFrontToBack="0.9" flipDirection={flipDirection}>
            <Blank />
            <HESTUS />
        </ReactCardFlip>


        {/* ROW 3 */}
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.9" flipSpeedFrontToBack="0.9"   flipDirection={flipDirection}>
            {direction === 'vertical' ? <PROJECTS_DELIVERED /> :  <Blank /> }
            <Blank />
        </ReactCardFlip>
         
        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.9" flipSpeedFrontToBack="0.9"   flipDirection={flipDirection}>
        {direction === 'vertical' ? <COFEE2 /> :  <Blank /> }
            <CONGO />
        </ReactCardFlip>

        <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="0.9" flipSpeedFrontToBack="0.9"   flipDirection={flipDirection}>
            {direction === 'vertical' ?   <TEAMS /> :  <Blank /> }
            <Blank />
        </ReactCardFlip>
         
        {/* BOTTOM */}
        <div onClick={handlePrev} className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
          <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
            Prev
          </div>
          <div className="absolute top-0 bottom-0 right-0">
            <div className="absolute top-0 bottom-0 right-0 h-full nextpreimg" dangerouslySetInnerHTML={{ __html: PreBg }}></div>
          </div>
        </div>
        
        <div className="thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 relative">
          <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">sivarsa</div>
          <div className="messageusbtn absolute top-16  md:top-4  lg:top-2 xl:top-5 right-2 sm:right-3 md:right-4 lg:right-5"  dangerouslySetInnerHTML={{ __html: messageUs }}>
          </div>
          <div className="flex absolute bottom-0 left-0 right-0 m-auto justify-center sivrsalogo"  dangerouslySetInnerHTML={{ __html: sivarsaLogo }}></div>
        </div>

        <div onClick={handleNext} className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
          <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
            Next
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full nextpreimg" dangerouslySetInnerHTML={{ __html: nextBg }}></div>
        </div>

      </div>
      </>
}
