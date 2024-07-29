import React, { useContext, useEffect, useState } from "react";
import {  PreBg,nextBg,sivarsaLogo,messageUs } from "../../Icons";
import ReactCardFlip from '../../Flip';
import { Link, useNavigate } from 'react-router-dom';
import { PAGE_ONE_BOX2, PAGE_ONE_BOX4, PAGE_ONE_BOX7, PAGE_ONE_BOX9 } from "../../home/Landing";
import { RECRUITMENT, LINKEDIN, INDEED, GLASSDOOR, TALENT_TAP  } from "../../home/staffing/StaffSix";
import Blank from "../../contents/Blank";
import { MyContext } from "../../context/Mycontext";
import { OFFERING, PERMANENT_EMP, CONTRACT_EMP, PARTTIME_EMP } from "../../home/staffing/StaffFive";
import { SCREENING, HACKERRANK, CODILITY  } from "../../home/staffing/StaffSeven";

export default function Staffing6(){

  const { direction, setDirection, shouldRatate, setShouldRatate } = useContext(MyContext);
  const [flipDirection, setFlipDirection] = useState(direction);

    const [rotate, setRotate] = useState(false);
     useEffect(() => { 
      setRotate(true);
      setShouldRatate(true);
     },[]);

     const navigate = useNavigate();
     const handleNext = () => {
        setDirection('vertical-reverse');
        setRotate(prevRotate => !prevRotate);
        navigate("/services/staffing/7");
      };

      const handlePrev = () => {
        setDirection('vertical');
        setRotate(prevRotate => !prevRotate);
        navigate("/services/staffing/5");
      };
  
    return <>
      {shouldRatate ?
        <div className="grid w-full overflow-hidden h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">
          {/* ROW 1 */}
          

          { direction === 'vertical' ?
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
                <SCREENING />
                <RECRUITMENT />
            </ReactCardFlip>
            :
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
                <OFFERING />
                <RECRUITMENT />
            </ReactCardFlip>
          }
          <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <Blank />
              <LINKEDIN />
          </ReactCardFlip>
          <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <HACKERRANK />
              <Blank />
          </ReactCardFlip>


          {/* ROW 2 */}
          { direction === 'vertical' ?
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
                <Blank />
                <Blank />
            </ReactCardFlip>
            :
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <CONTRACT_EMP />
              <Blank />
          </ReactCardFlip>
          }


          { direction === 'vertical' ?
              <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
                <CODILITY />
                <INDEED />
              </ReactCardFlip>
            :
              <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
                  <Blank />
                  <INDEED />
              </ReactCardFlip>
          }

          <Blank />




          {/* ROW 3 */}
          {direction === 'vertical' ?
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
                <Blank />
                <GLASSDOOR/>
            </ReactCardFlip>
            :
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
                <Blank/>
                <GLASSDOOR />
            </ReactCardFlip>
          }

          {direction === 'vertical' ?
                <Blank/>
          : <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <PARTTIME_EMP />
              <Blank/>
            </ReactCardFlip>
          }
          <TALENT_TAP />


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
