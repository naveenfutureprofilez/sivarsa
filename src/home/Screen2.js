import React, { useEffect, useState } from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft,PreBg,nextBg,sivarsaLogo,messageUs } from "../Icons";
import messageus from "../images/messageus.png"
import { Link } from "react-router-dom";
import cloud from "../video/cloud.mov"
import latestwork from "../video/latestwork.mov"
import oedgegrid from "../images/oedgegrid.svg";
import rabit from "../images/rabit.png";
import quoteicon from "../images/quoteicon.png";
import gavs from "../images/gavs.svg";
import hestus from "../images/hestus.svg";

export default function Screen2() {
 
    const [flipClass, setFlipClass] = useState('');

    const [count, setCount] = useState(1);
    const updateFlip = (v) => {
      if(count > 4) {
        return false
      }
      setCount(count + 1);
      setFlipClass(`flip-${count + 1}`);
    };

    const prevupdateFlip = (v) => {
     
      setCount(count - 1);
      setFlipClass(`flip-${count - 1}`);
    };

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        const box = document.querySelector('.box');
        setWidth(box.offsetWidth);
        setHeight(box.offsetHeight);
    },[]);
    
    return (
      <>
      <style>{`
          .container{margin:auto;margin-top:20px; 
          perspective:1000px; perspective-origin:${width/2}px ${height/2}px;width:${width}px;height: ${height}px;}
          .menu-parent{position:relative;
          width:${width}px; height:${height}px; transform-style:preserve-3d;transition:all 500ms;}
          .menu-parent div{position:absolute;width:${width}px;height:${height}px;}
          
          .one{transform:translateZ(${width/2}px) rotateY(0deg);
          transform-origin:center left; color:#fff;}
          
          .two{transform:translateX(${width}px) translateZ(${width/2}px) rotateY(90deg);
          transform-origin:center left; }
          
          .three{transform:translateX(${width}px) translateZ(-${width/2}px) rotateY(180deg);
          transform-origin:center left;color:#fff;}
          
          .four{transform:translateX(${width}px) translateZ(-${width/2}px) rotateY(270deg);
          transform-origin:center left;color:#fff;}

          .five {transform:translateX(${width}px) translateZ(-${width/2}px) rotateY(180deg);
          transform-origin:center left;color:#fff;}
          
          .flip-1{transform:rotateY(0);}
          .flip-2{transform:rotateY(-90deg);}
          .flip-3{transform:rotateY(-180deg);}
          .flip-4 {transform:rotateY(-270deg);}
          .flip-5 {transform:rotateY(-180deg);}

      `}</style>

      <div className={`grid w-full gap-1 grid-cols-3 h-screen  grid-col-custome grid-rows-custome bg-black`}>
        <div className={`thumbnailBox relative menu-parent flip-1 box ${flipClass}`} >
          
          {count > 3 ? 
          <>
            <div className="four text-white left bg-[#252525] p-2 sm:p-3 md:p-4 lg:p-6">
            <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#F5F5F5]">Latest <br/> Work</h2>
            {/* <div className="absolute bottom-2 right-2 latestvideo">
              <video src={latestwork} controls="controls" autoplay="true" /> 
            </div> */}
            </div>
            <div className="five text-white left  bg-[#F5F5F5] p-2 sm:p-3 md:p-4 lg:p-6">
                <h2 className="font-neuebit  text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#171717] mb-5">
                Client <br /> words
              </h2>
              <div className="absolute max-w-[150px] bottom-0 right-0">
                <img src={rabit} alt="img" />
              </div>
            </div> 
          </> : <>
            <div className="one blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
            <div className="two blank text-white p-2 sm:p-3 md:p-4 lg:p-6"></div>
            <div className="three blank text-white p-2 sm:p-3 md:p-4 lg:p-6"></div>
          </>  }
        </div>
        
        <div className={`thumbnailBox relative menu-parent flip-1 box ${flipClass}`} >
          {count > 3 ? <> 
            <div className="four blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
            <div className="five blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
           
          </> : <>
            <div className="one text-white front  bg-[#545454] p-2 sm:p-3 md:p-4 lg:p-6">
              <p className="font-GoshaSans text-sm ms:text-xl lg:text-1xl xl:text-2xl text-[#F5F5F5CC]">Weaving software <br/> into magical <br/> journeys.</p>
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 right-2 sm:right-4 md:right-6 lg:right-8  w-20 sm:w-24 md:w-32 lg:w-32 xl:w-40     h-20 sm:h-24 md:h-32 lg:h-32 xl:h-40">
              {/* <video src={cloud} width="600" height="300" controls="controls" autoplay="true" /> */}
              </div>
            </div>
            <div className="two text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#6FF04A]">       
                  <h2 className="font-neuebit  text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#0B6222] mb-5">Web Development </h2>
                  <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#0B6222]">Take your business online <br /> with a premium website</p>
                  {/* <div className="absolute absolute bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{__html:arrowblackUP}}></div> */}
            </div>
            <div className="three blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
          </>}
        </div>

        <div className={`thumbnailBox relative menu-parent flip-1 box ${flipClass}`} >
          {count > 3 ? 
          <>
          <div className="four text-white left  bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6">
                <div className="h-full flex items-center justify-center">
                <img src={oedgegrid} alt="img"/>
              </div>
          </div> 
          <div className="five text-white left  bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6">
            <div className=" relative ">
            <div className="position top-0 left-0">
              <img src={quoteicon} alt="img" />
            </div>
            <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
              <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5] mb-2">
                Their AI and design <br /> solutions transformed our <br />{" "}
                business. Highly <br /> recommended!
              </p>
              <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5]">
                Hestus
              </h3>
            </div>
          </div>
          </div>
          </> : 
          <>
            <div className="one blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
            <div className="two blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
            <div className="three text-white left h-full bg-[#171717] ">
              <div className="z-10  absolute bottom-1 left-6  font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-6xl leading-1 md:leading-1 lg:leading-9 xl:leading-10 text-[#F5F5F5] mb-5 sm:p-3 md:p-4 lg:p-6">
              Our <br/> Journey
              </div>
            </div>
          </>}
        </div>
       
       


        {/* row 2 */}
        <div className={`thumbnailBox relative menu-parent flip-1 box ${flipClass}`} >
          
          {count > 3 ? 
          <>
            <div className="wall text-white left  bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6">
                <div className="h-full flex items-center justify-center">
                <img src={gavs} alt="img"/>
              </div>
            </div>
            <div className="five blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
             
          </> : <>
            <div className="one blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
            <div className="two text-white relative left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#FF7E2D]">       
                <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#9D3001]  mb-5">AI Development </h2>
                <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#9D3001]">Unleash the power of AI to <br /> transform your business</p>
                <div className="absolute max-w-[50px] max-h-[50px] right-[30px] bottom-[30px] " dangerouslySetInnerHTML={{ __html: arrowblackUP }}></div>
            </div>
            <div className="three blank text-white p-2 sm:p-3 md:p-4 lg:p-6"></div>
          </>  }
        </div>
        
        <div className={`thumbnailBox relative menu-parent flip-1 box ${flipClass}`} >
          {count > 3 ? <> 
            <div className="four blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
            <div className="five text-white left  bg-[#171717]  p-2 sm:p-3 md:p-4 lg:p-6">
            <div className=" relative ">
                    <div className="position top-0 left-0">
                      <img src={quoteicon} alt="img" />
                    </div>
                    <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
                      <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5] mb-2">
                        Unmatched tech and design <br /> expertise. Our go-to firm!
                      </p>
                      <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5]">
                        Petco
                      </h3>
                    </div>
                  </div>
            </div>
           
          </> : <>
            <div className="one text-white left  bg-[#393939] p-2 sm:p-3 md:p-4 lg:p-6">
              <h2 className="font-neuebit leading-normal text-xm  md:text-2xl lg:text-6xl xl:text-7xl leading-none text-white  ">Services <br /> Provided</h2>
            </div>
            <div className="two blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
            <div className="three text-white left  bg-[#6FF04A] p-2 sm:p-3 md:p-4 lg:p-6">
                <h2 className="relative font-neuebit text-[#0B6222] text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-8xl leading-none mb-1">1000 <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
                <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#0B6222] mb-5">Coffees consumed</h3>
            </div>
          </>}
        </div>

        <div className={`thumbnailBox relative menu-parent flip-1 box ${flipClass}`} >
          {count > 3 ? 
          <>
        <div className="four text-white left  bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6">
            <div className="h-full flex items-center justify-center">
            <img src={hestus} alt="img"/>
          </div>
        </div>
          <div className="five blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
          </> : 
          <>
            <div className="one blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
            <div className="two text-white left  p-2 sm:p-3 md:p-4 lg:p-6 bg-[#F559C4]">       
                <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#F3C7E7]  mb-5">Backend Services </h2>
                <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F3C7E7]">Creating robust and scalable APIs <br></br> to connect your services.
                </p>
                <div className="absolute max-w-[50px] max-h-[50px] right-[30px] bottom-[30px]" dangerouslySetInnerHTML={{__html:arrowblackDW}}></div>
            </div>
            <div className="three blank text-white left h-full bg-[#171717] "></div>
          </>}
        </div>
       



        <div onClick={prevupdateFlip}  className="relative thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 ">
          <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
            Prev
          </div>
          <div className="absolute top-0 bottom-0 right-0">
            <div className="absolute top-0 bottom-0 right-0 h-full nextpreimg" dangerouslySetInnerHTML={{ __html: PreBg }}></div> 
          </div>
        </div>
        <div className="thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6  relative">
          <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">sivarsa</div>
          <div className="messageusbtn absolute top-16  md:top-4  lg:top-2 xl:top-5 right-2 sm:right-3 md:right-4 lg:right-5"  dangerouslySetInnerHTML={{ __html: messageUs }}>
          </div>
          <div className="flex absolute bottom-0 left-0 right-0 m-auto justify-center sivrsalogo" dangerouslySetInnerHTML={{ __html: sivarsaLogo }}></div>
        </div>
        <div onClick={updateFlip} className=" cursor-pointer relative thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 ">
          <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
            Next
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full nextpreimg"
          dangerouslySetInnerHTML={{ __html: nextBg }}></div>
        </div>
      </div>
      </>

    );
}
