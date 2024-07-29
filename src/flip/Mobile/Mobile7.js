import React, { useContext, useEffect, useState } from "react";
import { PreBg, nextBg, sivarsaLogo, messageUs } from "../../Icons";
import ReactCardFlip from '../../Flip';
import { useNavigate } from 'react-router-dom'; 
import { TOOL, JOOMLA, XCODE, BACKEND_POWER } from "../../home/mobile/MobileSeven";
import Blank from "../../contents/Blank";
import { MyContext } from "../../context/Mycontext";
import { LANGUAGE, SWIFT, JAVASCRIPT, KOTLIN } from "../../home/mobile/MobileSix";
import { AWS, FIREBASE, PLATFORMS } from "../../home/mobile/MobileEight";

export default function Mobile7() {
   
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
        navigate("/services/mobile/8");
      };

      const handlePrev = () => {
        setDirection('vertical');
        setRotate(prevRotate => !prevRotate);
        navigate("/services/mobile/6");
      };

  return (
    <div className="grid w-full overflow-hidden h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">
      {shouldRatate ? (
        <>
          {/* ROW 1 */}

          {direction === 'vertical' ? 
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <PLATFORMS />
              <TOOL />
            </ReactCardFlip>
            :
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <LANGUAGE />
              <TOOL />
            </ReactCardFlip>
          }

          {direction === 'vertical' ? 
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <FIREBASE />
              <JOOMLA />
            </ReactCardFlip>
            :
            <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <Blank />
              <JOOMLA />
            </ReactCardFlip>
          }


          {direction === 'vertical' ? 
            <ReactCardFlip containerStyle={{ backgroundColor: '#171717' }}  isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <Blank />
              <Blank />
            </ReactCardFlip>
            :
            <ReactCardFlip containerStyle={{ backgroundColor: '#171717' }}  isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
            <SWIFT />
            <Blank />
          </ReactCardFlip>
          }
          


          

          {/* ROW 2 */}
          <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
            <Blank />
            <XCODE />
          </ReactCardFlip>

          {direction === 'vertical' ?
            // <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
            //   <JAVASCRIPT />
            // </ReactCardFlip>
              <Blank />
            :
            <ReactCardFlip containerStyle={{ backgroundColor: '#171717' }}  isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <JAVASCRIPT />
              <Blank />
            </ReactCardFlip>
          }

          {direction === 'vertical' ?
            <ReactCardFlip containerStyle={{ backgroundColor: '#171717' }} isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <AWS />
              <Blank />
            </ReactCardFlip>
            :
              <Blank />
          }
          



          {/* ROW 3 */}
          {direction === 'vertical' ?
            // <ReactCardFlip isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
            //   <KOTLIN />
            // </ReactCardFlip>
              <Blank />
            : 
            <ReactCardFlip containerStyle={{ backgroundColor: '#171717' }} isFlipped={rotate} flipSpeedBackToFront="2" flipSpeedFrontToBack="2" flipDirection={flipDirection}>
              <KOTLIN />
              <Blank />
            </ReactCardFlip>
          }
          
          <Blank />
          <BACKEND_POWER />

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
            <div className="messageusbtn absolute top-16 md:top-4 lg:top-2 xl:top-5 right-2 sm:right-3 md:right-4 lg:right-5" dangerouslySetInnerHTML={{ __html: messageUs }}></div>
            <div className="flex absolute bottom-0 left-0 right-0 m-auto justify-center sivrsalogo" dangerouslySetInnerHTML={{ __html: sivarsaLogo }}></div>
          </div>
          <div onClick={handleNext} className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
            <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
              Next
            </div>
            <div className="absolute top-0 bottom-0 left-0 h-full nextpreimg" dangerouslySetInnerHTML={{ __html: nextBg }}></div>
          </div>
        </>
      ) : (
        <Blank />
      )}
    </div>
  );
}
