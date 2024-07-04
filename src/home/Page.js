import React, { useEffect } from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft } from "../Icons";
import weaving from "../images/weaving.png"
import previcon from "../images/previcon.png"
import sivarsalogo from "../images/sivarsalogo.png"
import nexticon from "../images/nexticon.png"
import messageus from "../images/messageus.png"
export default function Page() {

  useEffect(() => {
    const cubes = document.getElementsByClassName('cube');
    Array.from(cubes).forEach(cube => {
       cube.style.transition = 'transform 1s';  
       cube.style.transform = 'rotateX(0deg) rotateY(90deg) rotateZ(0deg)';
     });
 }, []);  
  return (
    <div className="grid 111h-screen gap-1 grid-cols-3 grid-rows-4 bg-black">
      <div className="thumbnailBox h-full"></div>

      <div className="thumbnailBox h-full relative ">
          <div className="cube h-full relative bg-[#545454]" >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left  bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6">
               <p className="font-GoshaSans text-sm ms:text-xl lg:text-1xl xl:text-2xl text-[#F5F5F5CC]">Weaving software <br/> into magical <br/> journeys.</p>
              
               <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 right-2 sm:right-4 md:right-6 lg:right-8  w-20 sm:w-24 md:w-32 lg:w-32 xl:w-40     h-20 sm:h-24 md:h-32 lg:h-32 xl:h-40" dangerouslySetInnerHTML={{ __html: weavingSoft }}></div>
               </div>
               
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
            </div>
      </div>

   

      <div className="thumbnailBox h-full bg-[#171717]  min-h-[250px]"></div>

      <div className="thumbnailBox h-full bg-[#171717] min-h-[250px]"></div>

      <div className="thumbnailBox h-full relative min-h-[250px]">
          <div className="cube h-full relative" >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left  bg-[#393939] p-2 sm:p-3 md:p-4 lg:p-6">
              <h2 className="font-GoshaSans text-xm  md:text-2xl lg:text-4xl xl:text-5xl text-white  ">Services <br /> Provided</h2>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
          </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] min-h-[250px]"></div>

      <div className="thumbnailBox h-full relative min-h-[250px]">
        <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#FFC700]">
               <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl text-[#9D5209] mb-5">Staffing</h2>
               <p className="font-GoshaSans text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#9D5209]">We provide skilled <br /> professionals across <br /> various domains</p>
               <div className="absolute bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackRT }}></div>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
          </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] min-h-[250px]"></div>

      <div className="thumbnailBox h-full relative min-h-[250px]">
        <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#2D68FF]">       
          <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl text-[#A9D6DD] mb-5">Mobile Application</h2>
        <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#A9D6DD]">
          We can Craft powerful and <br /> dynamic solutions
        </p>
        <div
          className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8"
          dangerouslySetInnerHTML={{ __html: arrowblackDW }}
        ></div>

              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
          </div>
      </div>



      <div className="thumbnailBox h-full bg-[#171717] min-h-[250px]"></div>
      
      <div className="thumbnailBox h-full relative min-h-[250px]">
        <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#6FF04A]">       
              <h2 className="font-neuebit  text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl text-[#0B6222] mb-5">Web Development </h2>
              <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#0B6222]">Take your business online <br /> with a premium website</p>
             <div
          className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8"
          dangerouslySetInnerHTML={{ __html: arrowblackUP }}
        ></div>

              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
        </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4 min-h-[250px]"></div>

      <div className="thumbnailBox h-full relative min-h-[250px]">
        <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#FF7E2D]">       
              <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl text-[#9D3001]  mb-5">AI Development </h2>
              <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#9D3001]">Unleash the power of AI to <br /> transform your business</p>
              <div className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackUP }}></div>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
        </div>
      </div>

      <div className="thumbnailBox h-full relative min-h-[250px]">
       <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#393939]">       
               <h2 className="font-GoshaSans text-xm  md:text-2xl lg:text-4xl xl:text-5xl text-white "> Services <br></br> Provided </h2>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
        </div>
      </div>


      <div className="thumbnailBox h-full relative min-h-[250px]">
       <div className="thumbnailBox h-full relative min-h-[250px]">
       <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left  p-2 sm:p-3 md:p-4 lg:p-6 bg-[#F559C4]">       
              <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl text-[#F3C7E7] mb-5">Backend Services </h2>
        <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#F3C7E7]">Creating robust and scalable APIs to connect your services.
        </p>
        <div
          className="absolute absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8"
          dangerouslySetInnerHTML={{ __html: arrowblackDW }}
        ></div>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
        </div>
      </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4 min-h-[250px]"></div>

      <div className="thumbnailBox h-full relative min-h-[250px]">
      <div className="thumbnailBox h-full relative min-h-[250px]">
       <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#763DF8]">       
              <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl text-[#CFB8E5] mb-5">UI & UX Design</h2>
               <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#CFB8E5]">Ignite your brand’s potential <br/> with stunning, innovative <br/> design.</p>
                <div className="absolute  bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackDW }}></div>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
        </div>
      </div>


       
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-4 min-h-[250px]"></div>



{/* Next and Previous */}
      <div className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 min-h-[255px]">
        <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
          Prev
        </div>
        <div className="absolute top-0 bottom-0 right-0">
          <img className="m-auto" src={previcon} />
        </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 min-h-[250px] relative">
        <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">sivarsa</div>
        <div className="absolute top-16  md:top-4  lg:top-2 xl:top-5 right-2 sm:right-3 md:right-4 lg:right-5">
          <img src={messageus} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 m-auto"><img className="m-auto" src={sivarsalogo} /></div>
     
      </div>

      <div className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 min-h-[255px]">
        <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
          Next
        </div>
        <div className="absolute top-0 bottom-0 left-0">
          <img className="m-auto" src={nexticon} />
        </div>
      </div>
    </div>
  );
}
