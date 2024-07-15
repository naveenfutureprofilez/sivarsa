import React, { useEffect, useState } from "react";
import {
  arrowblackRT,
  arrowblackDW,
  arrowblackUP,
  weavingSoft,
  PreBg,
  nextBg,
  sivarsaLogo,
  messageUs,
  ourJourney,
} from "../Icons";
import oedgegrid from "../images/oedgegrid.svg";
import gavs from "../images/gavs.svg";
import hestus from "../images/hestus.svg";
import congn from "../images/congn.svg";
import quoteicon from "../images/quoteicon.png";
import rabit from "../images/rabit.png";
import founderbg from "../images/founderbg.svg";
import boyicon from "../images/boyicon.png";
import menicon from "../images/menicon.png";
import { Link } from "react-router-dom";

export function FOUNDER() {
  return <div className={` thumbnailBox h-full bg-[#f5f5f5] relative p-6`}>
    <div className="text-white">
        <h2 className="font-neuebit relative z-10 text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-6xl leading-none text-[#F5F5F5] mb-5">
        Founders
      </h2>
      <div className="h-full absolute w-full top-0 left-0 founderbg">
        <img src={founderbg} alt="img" />
      </div>
    </div>
  </div>
}
export function TRANSFORMING() {
  return <div className={`thumbnailBox h-full bg-[#2d68ff] `}>
  <div className="cube h-full relative " >
    <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">
        <div className="position top-0 left-0">
          <img src={quoteicon} alt="img" />
        </div>
        <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
          <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5] mb-2">
            Transforming ideas into seamless <br /> software experiences
          </p>
          <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5]">
            Rishab
          </h3>
        </div>
      <div className="absolute bottom-0 right-0">
        <img src={boyicon} alt="img" />
      </div>
    </div>
  </div>
</div>
}
export function UNMATCHED() {
  return  <div className={`thumbnailBox h-full bg-[#763df8] relative `}>
      <div className="cube h-full relative p-6" >
          <div className="position top-0 left-0">
            <img src={quoteicon} alt="img" />
          </div>
          <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
            <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5] mb-2">
              Unmatched tech and <br /> design expertise. Our <br /> go-to firm!
            </p>
            <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5]">
              Rishab
            </h3>
          </div>
          <div className="absolute bottom-0 right-0">
            <img src={menicon} alt="img" />
          </div>
      </div>
  </div>
}



export default function HomePage6() {
  const [rotate, setrotate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setrotate(true);
    }, 100);
  }, []);

  return (
    <div className="grid w-full h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">
       

      



      <Link
        to="/home/5"
        className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 "
      >
        <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
          Prev
        </div>
        <div className="absolute top-0 bottom-0 right-0">
          <div
            className="absolute top-0 bottom-0 right-0 h-full nextpreimg"
            dangerouslySetInnerHTML={{ __html: PreBg }}
          ></div>
        </div>
      </Link>
      <div className="thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6  relative">
        <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">
          sivarsa
        </div>
        <div
          className="messageusbtn absolute top-16  md:top-4  lg:top-2 xl:top-5 right-2 sm:right-3 md:right-4 lg:right-5"
          dangerouslySetInnerHTML={{ __html: messageUs }}
        ></div>

        <div
          className="flex absolute bottom-0 left-0 right-0 m-auto justify-center sivrsalogo"
          dangerouslySetInnerHTML={{ __html: sivarsaLogo }}
        ></div>
      </div>
      <Link
        to="/"
        className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 "
      >
        <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
          Next
        </div>
        <div
          className="absolute top-0 bottom-0 left-0 h-full nextpreimg"
          dangerouslySetInnerHTML={{ __html: nextBg }}
        ></div>
      </Link>
    </div>
  );
}
