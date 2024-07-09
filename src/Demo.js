import React, { useState, useEffect, useRef } from 'react';
import latestwork from "./video/latestwork.mov";
import './App.css';
import oedgegrid from "./images/oedgegrid.svg";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft,PreBg,nextBg,sivarsaLogo,messageUs } from "./Icons";
import gavs from "./images/gavs.svg";
import hestus from "./images/hestus.svg";
import congn from "./images/congn.svg";

const App = () => {
  const [rotation, setRotation] = useState(0);
  const boxRefs = useRef([]);
  const [cubeSize, setCubeSize] = useState({ width: 0, height: 0 });
  const [rotating, setRotating] = useState(false);
  useEffect(() => {
    setRotating(true);
    setTimeout(() => {
      setRotating(false);
    }, 100);
  }, [rotation]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      setCubeSize({
        width: windowWidth / 3,
        height: windowHeight / 4
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setRotation(rotation + 90);
  };

  const handlePrev = () => {
    setRotation(rotation - 90);
  };

  const calculatePerspective = () => {
    const maxCubeSize = Math.max(cubeSize.width, cubeSize.height);
    return `${maxCubeSize * 300}px`;
  };

  return (
    <div className="">
      <div className="demo grid grid-cols-3">
          <div className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className={`${rotating ? "rotating" : ""} scene`} style={{ '--cube-width': `${cubeSize.width}px`, '--cube-height': `${cubeSize.height}px`, perspective: calculatePerspective() }}>
              <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
                <div className="face front ">
                  <div className="blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
                </div>
                <div className="face back"></div>
                <div className="face right">
                  <div className={`w-full h-full bg-[#252525] p-[30px] ${calculatePerspective()} `}>
                  <div className="text-white ">
                    <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#F5F5F5]">Latest <br/> Work</h2>
                    <div className="absolute bottom-4 right-4 latestvideo">
                      <video src={latestwork} controls="controls" autoplay="true" /> 
                    </div>
                  </div>
                  </div>
                </div>
                <div className="face left"></div>
              </div>
            </div>
          </div>
          <div className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className="scene" style={{ '--cube-width': `${cubeSize.width}px`, '--cube-height': `${cubeSize.height}px`, perspective: calculatePerspective() }}>
              <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
                <div className="face front">
                <div className="w-full w-full bg-[#545454] p-[20px]">
                  <div className="text-white ">
                      <p className="font-GoshaSans text-sm ms:text-xl lg:text-1xl xl:text-2xl text-[#F5F5F5CC]">Weaving software <br/> into magical <br/> journeys.</p>
                      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 right-2 sm:right-4 md:right-6 lg:right-8  w-20 sm:w-24 md:w-32 lg:w-32 xl:w-40     h-20 sm:h-24 md:h-32 lg:h-32 xl:h-40">
                      {/* <video src={cloud} width="600" height="300" controls="controls" autoplay="true" /> */}
                    </div>
                  </div>
                </div>
                </div>
                <div className="face back">
                  <div className="blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
                </div>
                <div className="face right">
                  <div className="blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
                </div>
                <div className="face left">
                  <div className="text-white p-[20px] w-full h-full  bg-[#6FF04A]">       
                      <h2 className="font-neuebit  text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#0B6222] mb-5">Web Development </h2>
                      <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#0B6222]">Take your business online <br /> with a premium website</p>
                      {/* <div className="absolute absolute bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{__html:arrowblackUP}}></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className="scene" style={{ '--cube-width': `${cubeSize.width}px`, '--cube-height': `${cubeSize.height}px`, perspective: calculatePerspective() }}>
              <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
                <div className="face front blank"></div>
                <div className="face left ">
                  <div className="blank text-white p-2 sm:p-3 md:p-4 lg:p-6 "></div>
                </div>
                <div className="face back">
                  <div className='w-full h-full bg-[#171717]' ></div>
                  <div className="text-white">
                    <div className="z-10  absolute bottom-1 left-6  font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-6xl leading-1 md:leading-1 lg:leading-9 xl:leading-10 text-[#F5F5F5] mb-5 sm:p-3 md:p-4 lg:p-6">
                    Our <br/> Journey
                    </div>
                  </div>
                </div>
                
                <div className="face right">
                  <div className="p-[20px] w-full flex items-center justify-center h-full bg-[#171717]  ">
                    <div className="text-white">
                        <div className="h-full flex items-center justify-center">
                        <img src={oedgegrid} alt="img"/>
                      </div>
                    </div> 
                  </div>
                </div>
                
              </div>
            </div>
          </div>




          {/* ========================= ROW 2 ========================= */}
          <div className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className={`${rotating ? "rotating" : ""} scene`} style={{ '--cube-width': `${cubeSize.width}px`, '--cube-height': `${cubeSize.height}px`, perspective: calculatePerspective() }}>
              <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
               <div className="face front blank"></div>
                <div className="face back blank"> </div>
                <div className="face right ">
                    <div className="bg-[#171717] flex items-center justify-center p-[20px] w-full h-full">
                      <div className="text-white bg-[#171717]">
                        <div className="h-full flex items-center justify-center">
                          <img src={gavs} alt="img"/>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="face left">
                    <div className="w-full h-full p-[20px] bg-[#FF7E2D] ">
                        <div className="text-white relative  ">       
                            <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#9D3001]  mb-5">AI Development </h2>
                            <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#9D3001]">Unleash the power of AI to <br /> transform your business</p>
                            <div className="absolute max-w-[50px] max-h-[50px] right-[30px] bottom-[30px] " dangerouslySetInnerHTML={{ __html: arrowblackUP }}></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className={`${rotating ? "rotating" : ""} scene`} style={{ '--cube-width': `${cubeSize.width}px`, '--cube-height': `${cubeSize.height}px`, perspective: calculatePerspective() }}>
              <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
               <div className="face front">
                    <div className="bg-[#393939] p-[20px] w-full h-full">
                      <div className="text-white ">
                        <h2 className="font-neuebit leading-normal text-xm  md:text-2xl lg:text-6xl xl:text-7xl leading-none text-white  ">Services <br /> Provided</h2>
                      </div>
                  </div>
               </div>
                <div className="face back blank">
                  <div className="bg-[#6FF04A]  w-full h-full p-[20px]">
                      <div className="text-white ">
                          <h2 className="relative font-neuebit text-[#0B6222] text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-8xl leading-none mb-1">1000 <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
                          <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#0B6222] mb-5">Coffees consumed</h3>
                      </div>
                  </div>
                </div>
                <div className="face right blank"></div>
                <div className="face left">
                    <div className="bg-[#393939] p-[20px] w-full h-full">
                      <div className="text-white ">
                        <h2 className="font-neuebit leading-normal text-xm  md:text-2xl lg:text-6xl xl:text-7xl leading-none text-white  ">Services <br /> Provided</h2>
                      </div>
                  </div>
               </div>
              </div>
            </div>
          </div>
          <div className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className={`${rotating ? "rotating" : ""} scene`} style={{ '--cube-width': `${cubeSize.width}px`, '--cube-height': `${cubeSize.height}px`, perspective: calculatePerspective() }}>
              <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
              <div className="face right blank"></div>
               <div className="face right">
                  <div className="bg-[#252525] p-[20px] w-full h-full flex items-center justify-center">
                    <div className="">
                      <div className="h-full flex items-center justify-center">
                      <img src={hestus} alt="img"/>
                      </div>
                    </div>
                  </div>
               </div>
                <div className="face back blank"></div>
                <div className="face left">
                    <div className="bg-[#f559c4] p-[20px] w-full h-full ">
                      <div className="text-white">       
                          <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#F3C7E7]  mb-5">Backend Services </h2>
                          <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F3C7E7]">Creating robust and scalable APIs <br></br> to connect your services.
                          </p>
                          <div className="absolute max-w-[50px] max-h-[50px] right-[30px] bottom-[30px]" dangerouslySetInnerHTML={{__html:arrowblackDW}}></div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          {/* ========================= ROW 3 ========================= */}
          <div className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className={`${rotating ? "rotating" : ""} scene`} style={{ '--cube-width': `${cubeSize.width}px`, '--cube-height': `${cubeSize.height}px`, perspective: calculatePerspective() }}>
              <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
               <div className="face front blank">
                  <div className="bg-[#FFC700] w-full h-full p-[20px]">
                    <div className="text-white ">
                      <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#9D5209] mb-2 sm:mb-3 md:mb-4 lg:mb-4">Staffing</h2>
                      <p className="font-GoshaSans text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#9D5209]">We provide skilled professionals <br /> across  various domains</p>
                      <div className="absolute bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackRT }}></div>
                    </div>
                  </div>
               </div>
                <div className="face back blank">
                    <div className="bg-[#763DF8] p-[20px] w-full h-full">
                      <div className="text-white ">
                            <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-8xl text-[#CFB8E5] leading-normal mb-1">9 <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
                            <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#CFB8E5] mb-5">Projects Delivered</h3>
                      </div>
                    </div>
                </div>
                <div className="face right blank "></div>
                <div className="face left blank"></div>
              </div>
            </div>
          </div>
          <div className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className={`${rotating ? "rotating" : ""} scene`} style={{ '--cube-width': `${cubeSize.width}px`, '--cube-height': `${cubeSize.height}px`, perspective: calculatePerspective() }}>
              <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
               <div className="face front blank"></div>
                <div className="face left">
                    <div className="bg-[#763DF8]  p-[20px] w-full h-full">
                        <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#CFB8E5] mb-5">UI & UX Design</h2>
                        <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#CFB8E5]">Ignite your brand’s potential <br/> with stunning, innovative <br/> design.</p>
                        <div className="absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackDW }}></div>
                    </div>
                </div>
                <div className="face right blank ">
                  <div className="bg-[#171717] p-[20px] flex items-center justify-center w-full h-full">
                      <div className="text-white">
                          <div className="h-full flex items-center justify-center">
                              <img src={congn} alt="img"/>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="face back blank">
                    <div className="bg-[#C7BDFA] p-[20px] w-full h-full">
                        <div className=" text-white">
                            <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-8xl text-[#763DF8] leading-normal mb-1">1k <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
                          <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#763DF8] mb-5">recruits</h3>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className={`${rotating ? "rotating" : ""} scene`} style={{ '--cube-width': `${cubeSize.width}px`, '--cube-height': `${cubeSize.height}px`, perspective: calculatePerspective() }}>
              <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
               <div className="face front blank">
                  <div className="bg-[#2D68FF] w-full h-full p-[20px]">
                    <div className="text-white ">
                      <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#A9D6DD] mb-5">Mobile Application</h2>
                      <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#A9D6DD]">
                        We can Craft powerful and <br /> dynamic solutions
                      </p>
                      <div
                        className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8"
                        dangerouslySetInnerHTML={{ __html: arrowblackDW }}
                      ></div>
                  </div>
                  </div>
               </div>
                <div className="face left blank"></div>
                <div className="face right blank "></div>
                <div className="face back blank">
                    <div className="bg-[#3b3b3b] p-[20px] w-full h-full">
                        <div className=" text-white">
                            <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-8xl text-[#fff] leading-normal mb-1">15 <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
                          <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#fff] mb-5">Lean Team</h3>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>


          <div className="box" onClick={handlePrev} style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className="w-full h-full relative">
                <div  className="p-[20px] ">
                  <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">Prev</div>
                  <div className="absolute top-0 bottom-0 right-0">
                    <div className="absolute top-0 bottom-0 right-0 h-full nextpreimg" dangerouslySetInnerHTML={{ __html: PreBg }}></div> 
                  </div>
                </div>
            </div>
          </div>

          <div className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className="w-full h-full relative">
              <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">sivarsa</div>
              <div className="messageusbtn absolute top-16  md:top-4  lg:top-2 xl:top-5 right-2 sm:right-3 md:right-4 lg:right-5"  dangerouslySetInnerHTML={{ __html: messageUs }}>
              </div>
              <div className="flex absolute bottom-0 left-0 right-0 m-auto justify-center sivrsalogo" dangerouslySetInnerHTML={{ __html: sivarsaLogo }}></div>
            </div>
          </div>

          <div onClick={handleNext} className="box" style={{ height: `${cubeSize.height}px`, perspective: calculatePerspective()  }}>
            <div className="w-full h-full relative">
                <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">Next</div>
                <div className="absolute top-0 bottom-0 left-0 h-full nextpreimg"
                dangerouslySetInnerHTML={{ __html: nextBg }}></div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default App;
