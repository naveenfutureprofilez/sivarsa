import React from "react"; 
  
export function Layout({ color }) {
    return (
      <div style={{ backgroundColor: color }} className="thumbnailBox h-full relative">
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">       
          <h2 className="relative font-neuebit text-[#C7DFB8] text-[25px] md:text-[32px] lg:text-[40px] xl:text-[50px] leading-[24px] lg:leading-[50px] xl:leading-10 mb-2 lg:mb-5">
            Efficiency Boost
          </h2>
          <div className="text-[#C7DFB8] opacity-80 text-[12px] md:text-base lg:text-xl leading-[18px] md:leading-[20px] lg:leading-[24px] font-GoshaSans max-w-[265px]">
            Automate the mundane, embrace the extraordinary.
          </div>
        </div>
      </div>
    );
  }
  
  export function Efficiency1() {
    return <Layout color="#6C7D35" />;
  }
  export function Efficiency2() {
    return <Layout color="#4D7541" />;
  }
  export function Efficiency3() {
    return <Layout color="#47501E" />;
  }
  
   