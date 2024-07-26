import React, { useContext, useEffect, useState } from "react";
import {  PreBg,nextBg,sivarsaLogo,messageUs } from "../../Icons";
import ReactCardFlip from '../../Flip';
import { Link, useNavigate } from 'react-router-dom';
import { PAGE_ONE_BOX2, PAGE_ONE_BOX4, PAGE_ONE_BOX7, PAGE_ONE_BOX9 } from "../../home/Landing";
import {  BOOST_1, BOOST_2, BOOST_3, WEB_TAP  } from "../../home/web/WebNine";  
import Blank from "../../contents/Blank";
import { MyContext } from "../../context/Mycontext";
import { Efficiency1, Efficiency2, Efficiency3 } from "../../home/web/WebNine";
import { WEB_TAP } from "../../home/web/WebOne";

export default function Web9(){

  const { direction, setDirection, shouldRatate, setShouldRatate } = useContext(MyContext);
  const [flipDirection, setFlipDirection] = useState(direction);

    const [rotate, setRotate] = useState(false);
     useEffect(() => { 
      setRotate(true);
      setShouldRatate(true);
     },[]);

     const navigate = useNavigate();
     const handleNext = () => {
        setDirection('vertical');
        setRotate(prevRotate => !prevRotate);
        navigate("/services/2");
      };

      const handlePrev = () => {
        setDirection('vertical');
        setRotate(prevRotate => !prevRotate);
        navigate("/services/web/8");
      };
  
      return <>
      {shouldRatate ?
        <div className="grid w-full overflow-hidden h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">
          
          {/* ROW 1 */}
          <WEB_TAP />
          <Blank />
          <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <Blank />
              <WEB_TAP />
          </ReactCardFlip>
          <Blank />
          <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <Blank />
              <BOOST_1 />
          </ReactCardFlip>
        

         

         

          {/* ROW 2 */}
          <Blank />
          <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <Blank />
              <BOOST_2 />
          </ReactCardFlip>
          <Blank />
         
          {/* ROW 3 */}
          <Blank />
          <Blank />
          <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <PAGE_ONE_BOX9 />
              <BOOST_3 />
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
       : 
         <div className="grid w-full overflow-hidden h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">
           <Blank />
           <Blank />
           <Blank />
           <Blank />
           <Blank />
           <Blank />
           <Blank />
           <Blank />
           <Blank />
           <Blank />
           <Blank />
           <Blank />
         </div>
       }
      </>
}
