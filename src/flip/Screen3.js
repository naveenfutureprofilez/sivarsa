import React, { useContext, useEffect, useState } from "react";
import { PreBg,nextBg,sivarsaLogo,messageUs } from "../Icons";
import Blank from "../contents/Blank";
import ReactCardFlip from '../Flip';

// import ReactCardFlip from 'react-card-flip';
import { Link, useNavigate } from 'react-router-dom';

import { PAGE_ONE_BOX4 } from "../home/Landing";
import { WEBDEV, AISERVICES, BACKEND_SERVICES, UX_SERVICE } from "../home/HomePage2";
import { OUR_JOURNRY, COFFEE, PROJECTS_DELIVERED, COFEE2, TEAMS} from "../home/HomePage3";
import { MyContext } from "../context/Mycontext";
import { PAST_WORK,OED, GAVS, HESTUS,CONGO } from "../home/HomePage4";
import BlankScreen from "./BlankScreen";

export default function Screen3() {

    const { direction, setDirection, shouldRatate, setShouldRatate } = useContext(MyContext);
      const [flipDirection, setFlipDirection] = useState(direction);
      const [rotate, setRotate] = useState(false);

      useEffect(() => {
          setRotate(true);
          setShouldRatate(true)
      },[]);

      const navigate = useNavigate();
      const handleNext = () => {
        setDirection("vertical-reverse");
        setRotate(prevRotate => !prevRotate);
        navigate("/services/4");
      };

    const handlePrev = () => {
      setDirection('vertical');
      setRotate(prevRotate => !prevRotate);
      navigate("/services/2");
    };

    return <>
        {shouldRatate ? 
        <div className="grid w-full overflow-hidden h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">

          {/* ROW 1 */}

          {direction === 'vertical' ? 
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
              <PAST_WORK /> 
              <Blank />
            </ReactCardFlip>
          : 
          <Blank /> 
          }


          {direction === 'vertical' ? 
            <Blank />
              : 
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
              <WEBDEV /> 
              <Blank />
            </ReactCardFlip>
          }


          {direction === 'vertical' ? 
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
              <OED />
              <OUR_JOURNRY />
            </ReactCardFlip>
                : 
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
              <Blank />
              <OUR_JOURNRY />
            </ReactCardFlip>
          }


          {/* ROW 2 */}
          {direction === 'vertical' ? 
              <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
                <GAVS />
                <Blank />
              </ReactCardFlip>
                : 
              <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
                <AISERVICES />
                <Blank />
            </ReactCardFlip>
          }

          <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
          {direction === "vertical-reverse" ?  <PAGE_ONE_BOX4 /> :  <Blank /> }
              <COFFEE />
          </ReactCardFlip>

            {direction === 'vertical' ?
              <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
                <HESTUS />
                <Blank />
              </ReactCardFlip>
            :
              <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
                <BACKEND_SERVICES />
                <Blank />
              </ReactCardFlip>
            }
                    








          {/* ROW 3 */}
          <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
              <Blank />
              <PROJECTS_DELIVERED />
          </ReactCardFlip>
          
          {direction === 'vertical' ? 
              <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
                <CONGO /> 
                <COFEE2 />
              </ReactCardFlip>
                : 
                <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
                <UX_SERVICE /> 
                <COFEE2 />
            </ReactCardFlip>
          }

          <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront={'1.5'} flipSpeedFrontToBack={'1.5'}    flipDirection={flipDirection}>
              <Blank />
              <TEAMS />
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
          <BlankScreen />
        }
      </>
}
