import React, { useEffect, useState } from "react";
import { arrowblackRT, arrowblackDW,arrowblackUP,weavingSoft,PreBg,nextBg,sivarsaLogo,messageUs,ourJourney,instagram,twitter,gmail,whatsapp,linkedin } from "../Icons";
import oedgegrid from "../images/oedgegrid.svg"
import gavs from "../images/gavs.svg"
import hestus from "../images/hestus.svg"
import congn from "../images/congn.svg"
import quoteicon from "../images/quoteicon.png"
import rabit from "../images/rabit.png"
import founderbg from "../images/founderbg.svg"
import boyicon from "../images/boyicon.png"
import menicon from "../images/menicon.png"
import ourjourney from "../images/ourjourney.png"
import cloud from "../video/cloud.mov"
import { Link } from "react-router-dom";
export default function Landing() {

  const [rotate, setrotate] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setrotate(true)
    },100);
  },[])


  return (
    <div className="grid w-full h-screen gap-1 grid-cols-3 grid-rows-custome bg-black">
      <div className="thumbnailBox h-full"></div>

      <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
          <div className="cube h-full relative bg-[#545454]" >
              <div className="wall text-white front">  
              </div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left  bg-[#545454] p-2 sm:p-3 md:p-4 lg:p-6">
              <p className="font-GoshaSans text-sm ms:text-xl lg:text-1xl xl:text-2xl text-[#F5F5F5CC]">Weaving software <br/> into magical <br/> journeys.</p>
              
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 right-2 sm:right-4 md:right-6 lg:right-8  w-20 sm:w-24 md:w-32 lg:w-32 xl:w-40     h-20 sm:h-24 md:h-32 lg:h-32 xl:h-40">
              <video src={cloud} width="600" height="300" controls="controls" autoplay="true" />
              </div>
               </div>
               
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
          </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] "></div>

      <div className="thumbnailBox h-full bg-[#171717] "></div>

      <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
          <div className="cube h-full relative" >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left  bg-[#393939] p-2 sm:p-3 md:p-4 lg:p-6">
              <h2 className="font-neuebit leading-normal text-xm  md:text-2xl lg:text-6xl xl:text-7xl leading-none text-white  ">Services <br /> Provided</h2>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
          </div>
      </div>

      <div className="thumbnailBox h-full"></div>

      <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
        <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#FFC700]">
               <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#9D5209] mb-2 sm:mb-3 md:mb-4 lg:mb-5">Staffing</h2>
               <p className="font-GoshaSans text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#9D5209]">We provide skilled <br /> professionals across <br /> various domains</p>
               <div className="absolute bottom-2 xm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-8 right-2 sm:right-4 md:right-5 lg:right-7 xl:right-8" dangerouslySetInnerHTML={{ __html: arrowblackRT }}></div>
              </div>
              <div className="wall text-white right"></div>
              <div className="wall text-white top"></div>
              <div className="wall text-white bottom"></div>
          </div>
      </div>

      <div className="thumbnailBox h-full bg-[#171717] "></div>

      <div className={`${rotate ? "rotate" : ""} thumbnailBox h-full relative `}>
        <div className="cube h-full relative " >
              <div className="wall text-white front"></div>
              <div className="wall text-white back"></div>
              <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 bg-[#2D68FF]">       
          <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#A9D6DD] mb-5">Mobile Application</h2>
        <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#A9D6DD]">
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






{/* Next Screen 4 */}

  {/* <div className="thumbnailBox h-full bg-[#171717] "></div>

  <div className="thumbnailBox h-full bg-[#171717] "></div>

  <div className="thumbnailBox h-full bg-[#171717] relative ">
    <div className="block h-full journeyimg " dangerouslySetInnerHTML={{ __html: ourJourney }}></div>
    <div className="z-10  absolute bottom-1 left-6  font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-6xl leading-1 md:leading-1 lg:leading-9 xl:leading-10 text-[#F5F5F5] mb-5">
    Our <br/> Journey
    </div>
  
  </div>


<div className="thumbnailBox h-full bg-[#171717] "></div>

<div className="thumbnailBox h-full bg-[#6FF04A]  p-2 sm:p-3 md:p-4 lg:p-5">
  <h2 className="relative font-neuebit text-[#0B6222] text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-9xl leading-none mb-1">1000 <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
  <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#0B6222] mb-5">Coffees consumed</h3>
</div>

<div className="thumbnailBox h-full bg-[#171717] "></div>



<div className="thumbnailBox h-full bg-[#763DF8]  p-2 sm:p-3 md:p-4 lg:p-5">
  <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-9xl text-[#CFB8E5] leading-normal mb-1">9 <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
  <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#CFB8E5] mb-5">Projects Delivered</h3>
</div>


<div className="thumbnailBox h-full bg-[#C7BDFA]  p-2 sm:p-3 md:p-4 lg:p-5">
  <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-9xl text-[#763DF8] leading-normal mb-1">1k <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
  <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#763DF8] mb-5">recruits</h3>
</div>


<div className="thumbnailBox h-full bg-[#545454]  p-2 sm:p-3 md:p-4 lg:p-5">
  <h2 className="relative font-neuebit text-base sm:text-1xl md:text-3xl lg:text-6xl xl:text-9xl text-[#F5F5F5] leading-normal mb-1">15 <span className="absolute top-0 sm:top-1 md:top-5 lg:top-6 xl:top-7 text-xl md:text-3xl lg:text-4xl xl:text-5xl">+</span></h2>
  <h3 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-3xl leading-none text-[#F5F5F5] mb-5">Coffees consumed</h3>
</div> */}


{/* end */}






{/* Next Screen 15 */}

{/* <div className="thumbnailBox h-full bg-[#171717] ">
  <h2 className="font-neuebit text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#CFB8E5] mb-5">Latest <br/> Work</h2>
</div>


<div className="thumbnailBox h-full bg-[#171717] ">

</div>


<div className="thumbnailBox h-full bg-[#171717] ">
  <div className="h-full flex items-center justify-center">
    <img src={oedgegrid} alt="img"/>
  </div>
</div>


<div className="thumbnailBox h-full bg-[#171717] ">
  <div className="h-full flex items-center justify-center">
    <img src={gavs} alt="img"/>
  </div>
</div>

<div className="thumbnailBox h-full bg-[#171717] ">

</div>



<div className="thumbnailBox h-full bg-[#171717] ">
  <div className="h-full flex items-center justify-center">
    <img src={hestus} alt="img"/>
  </div>
</div>


<div className="thumbnailBox h-full bg-[#171717] ">

</div>


<div className="thumbnailBox h-full bg-[#171717] ">
  <div className="h-full flex items-center justify-center">
    <img src={congn} alt="img"/>
  </div>
</div>

<div className="thumbnailBox h-full bg-[#171717] ">

</div> */}


{/* end */}



{/* Next Screen 6 */}
{/* <div className="relative thumbnailBox h-full bg-[#F5F5F5] p-2 sm:p-3 md:p-4 lg:p-6">
    <h2 className="font-neuebit  text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#171717] mb-5">Client <br/> words</h2>
  <div className="absolute bottom-1 right-1">
      <img src={rabit} alt="img" />
  </div>
</div>

<div className="thumbnailBox h-full bg-[#171717] ">

</div>


<div className="thumbnailBox h-full bg-[#171717]  p-2 sm:p-3 md:p-4 lg:p-6">
  <div className=" relative ">
    <div className="position top-0 left-0">
      <img src={quoteicon} alt="img"/>
    </div>
    <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
  <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5] mb-2">Their AI and design <br/> solutions transformed our <br/> business. Highly <br/> recommended!</p>
  <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5]">Hestus</h3>
  </div>
  </div>
</div>

<div className="thumbnailBox h-full bg-[#171717] ">

</div>

<div className="thumbnailBox h-full bg-[#171717]  p-2 sm:p-3 md:p-4 lg:p-6">
  <div className=" relative ">
    <div className="position top-0 left-0">
      <img src={quoteicon} alt="img"/>
    </div>
    <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
  <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5] mb-2">Unmatched tech and design <br/> expertise. Our go-to firm!</p>
  <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5]">Petco</h3>
  </div>
  </div>
</div>

<div className="thumbnailBox h-full bg-[#171717] ">

</div>


<div className="thumbnailBox h-full bg-[#171717]  p-2 sm:p-3 md:p-4 lg:p-6">
  <div className=" relative ">
    <div className="position top-0 left-0">
      <img src={quoteicon} alt="img"/>
    </div>
    <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
  <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5] mb-2">Exceptional AI solutions and <br/> innovative designs. <br/> Exceeded expectations!</p>
  <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5]">Samatha T.</h3>
  </div>
  </div>
</div>


<div className="thumbnailBox h-full bg-[#171717] ">

</div>

<div className="thumbnailBox h-full bg-[#171717]  p-2 sm:p-3 md:p-4 lg:p-6">
  <div className=" relative ">
    <div className="position top-0 left-0">
      <img src={quoteicon} alt="img"/>
    </div>
    <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
  <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5] mb-2">Professional, responsive, <br/> and creative. Perfect blend <br/> of tech and design!</p>
  <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5]">James K</h3>
  </div>
  </div>
</div> */}



{/* end */}



{/* Next Screen 7 */}
{/* <div className="thumbnailBox h-full bg-[#171717] ">

</div>


<div className="thumbnailBox h-full bg-[#f5f5f5] ">
<h2 className="absolute font-neuebit  text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-6xl leading-none text-[#F5F5F5] mb-5">Founders</h2>
 <div className="h-full founderbg">
  <img src={founderbg} alt="img" />
 </div>

</div>


<div className="thumbnailBox h-full bg-[#171717] ">

</div>


<div className="relative thumbnailBox h-full bg-[#2D68FF]  p-2 sm:p-3 md:p-4 lg:p-6">
  <div className=" relative ">
    <div className="position top-0 left-0">
      <img src={quoteicon} alt="img"/>
    </div>
    <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
  <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5] mb-2">Transforming ideas into seamless <br/> software experiences</p>
  <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5]">Rishab</h3>
  </div>
  </div>
  <div className="absolute bottom-0 right-0">
      <img src={boyicon} alt="img"/>
    </div>
</div>


<div className="thumbnailBox h-full bg-[#171717] ">

</div>

<div className="thumbnailBox h-full bg-[#171717] ">

</div>

<div className="thumbnailBox h-full bg-[#171717] ">

</div>

<div className="thumbnailBox h-full bg-[#171717] ">

</div>


<div className="relative thumbnailBox h-full bg-[#763DF8]  p-2 sm:p-3 md:p-4 lg:p-6">
  <div className=" relative ">
    <div className="position top-0 left-0">
      <img src={quoteicon} alt="img"/>
    </div>
    <div className="ps-0 md:ps-3 lg:ps-4 xl:ps-5">
  <p className="font-GoshaSans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5] mb-2">Unmatched tech and <br/> design expertise. Our <br/> go-to firm!</p>
  <h3 className="font-italianno  italic text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F5]">Rishab</h3>
  </div>
  </div>
  <div className="absolute bottom-0 right-0">
      <img src={menicon} alt="img"/>
    </div>
</div> */}

{/* end */}

     
{/* Next Screen 8 */}
{/* <div className="thumbnailBox h-full bg-[#212121] p-5 ">
  <h2 className="font-neuebit  text-base sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl leading-none text-[#F5F5F5] mb-5">Drop a <br></br> Message</h2>
</div>

<div className="thumbnailBox h-full bg-[#212121] p-5 ">
  <div className="flex h-full items-start"  dangerouslySetInnerHTML={{ __html: instagram }}></div>
</div>

<div className="thumbnailBox h-full bg-[#212121] p-5 ">
  <div className="flex h-full items-start"  dangerouslySetInnerHTML={{ __html: twitter }}></div>
</div>

<div className="thumbnailBox h-full bg-[#212121] p-5 ">
  <div className="flex h-full items-start"  dangerouslySetInnerHTML={{ __html: gmail }}></div>
</div>

<div className="thumbnailBox h-full bg-[#212121] p-5 ">
  <div className="flex h-full items-start"  dangerouslySetInnerHTML={{ __html: whatsapp }}></div>
</div>

<div className="thumbnailBox h-full bg-[#212121] p-5 ">
  <div className="flex h-full items-start"  dangerouslySetInnerHTML={{ __html: linkedin }}></div>
</div>


<div className="thumbnailBox h-full bg-[#212121] p-2 md:p-3 lg:p-4 xl:p-5 ">
  <div className="flex flex-col flex-wrap h-full items-start content-start justify-end">
  <p className="font-GoshaSans text-sm  xl:text-base leading-none text-[#F5F5F54D] mb-2">Contact: +91-9259108248</p>

  <p className="font-GoshaSans text-sm  xl:text-base leading-none text-[#F5F5F54D] text-[#F5F5F54D]" >Address: C1-1201, 12th Floor, JKG Palm <br/> Court, Sector 16C, Noida, UP, 201301, India</p>
   
  </div>
</div>


<div className="thumbnailBox h-full bg-[#212121] p-5 ">
</div>

<div className="thumbnailBox h-full bg-[#212121] p-2 md:p-3 lg:p-4 xl:p-5 ">
  <div className="flex flex-col flex-wrap h-full items-start content-start justify-end">
  <p className="font-GoshaSans  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none text-[#F5F5F54D]" mb-1>Privacy Policy</p>

  <p className="font-GoshaSans text-sm  xl:text-base leading-none text-[#F5F5F54D] mb-2">Terms & <br/> Conditions</p>


<p className="font-GoshaSans text-sm  xl:text-base leading-none text-[#F5F5F54D] mb-2">Made with passion by © <br/> 2024 Sivarsa Technologies <br/> LLP. All rights reserved.</p>


   
  </div>
  </div> */}

{/* end */}


        <Link to="/" className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
          <div className="absolute bottom-6 left-5 text-[#B5AAF3] font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
            Prev
          </div>
          <div className="absolute top-0 bottom-0 right-0">
          
          <div
          className="absolute top-0 bottom-0 right-0 h-full nextpreimg"
          dangerouslySetInnerHTML={{ __html: PreBg }}></div>
          </div>
        </Link>
        <div className="thumbnailBox h-full bg-[#171717] px-2 sm:px-3 md:px-4 lg:px-6 pb-0  relative">
          <div className="absolute top-5 left-5 right-0 font-GoshaSans text-xl text-[#fff]">sivarsa</div>
          <div className="messageusbtn absolute top-16  md:top-4  lg:top-2 xl:top-5 right-1 sm:right-3 md:right-4 lg:right-5"  dangerouslySetInnerHTML={{ __html: messageUs }}>
          </div>

          
          <div className="flex justify-center items-end m-auto justify-center sivrsalogo overflow-hidden"  dangerouslySetInnerHTML={{ __html: sivarsaLogo }}></div>
      
        </div>
        <Link to="/home/2" className="relative thumbnailBox h-full bg-[#171717] p-2 sm:p-3 md:p-4 lg:p-6 ">
          <div className="absolute bottom-6 right-5 text-[#B5AAF3] font-neuebit font-neuebit text-xl md:text-3xl lg:text-4xl xl:text-5xl z-10">
            Next
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full nextpreimg"
          dangerouslySetInnerHTML={{ __html: nextBg }}></div>
        </Link>
    </div>





  );
}
