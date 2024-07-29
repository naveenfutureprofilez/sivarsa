import React, { useEffect, useState } from "react";
import {  arrowblackUP } from "../../Icons";
import ai_bg from "../../images/ai-bg.png";
import google_cloud from "../../images/google-cloud-icon.png"; 
 
export function PLATFORMS(){ 
  return <> 
    <div  className={`thumbnailBox h-full p-2 sm:p-3 md:p-4 lg:p-6 relative  bg-[#171717]`}>
        <h2 className="font-neuebit  text-[25px] lg:text-[50px] leading-[24px] lg:leading-[50px] text-[#F1C5AA] mb-5">Platforms </h2>
    </div>
  </> 
}
export function GOOGLE_AI(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717] flex justify-center items-center`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6 ">       
           <div className="text-center">
             <img className="inline-block mb-2 xl:mb-4 w-[50px] lg:w-[83px] h-[40px] lg:h-[66px]"   src={google_cloud} alt="Dynamic Image" />
              <div className="text-center text-[#FFCA28] text-sm md:text-base lg:text-lg">
              Google AIgoogle_cloud
              </div>
           </div>
       </div>
    </div>
  </>
} 

export function AWS_AI(){
  return <> 
    <div className={`thumbnailBox h-full relative bg-[#171717]  flex justify-center items-center`}>
        <div className="wall text-white left p-2 sm:p-3 md:p-4 lg:p-6">       
           <div className="text-center">
            <svg className="inline-block mb-2 xl:mb-4 w-[67px] lg:w-[111px] h-[40px] lg:h-[66px]"  width="111" height="66" viewBox="0 0 111 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.2021 23.9704C31.2021 25.3286 31.349 26.4298 31.6059 27.2373C31.8996 28.0449 32.2666 28.9259 32.7805 29.8803C32.9641 30.1739 33.0375 30.4676 33.0375 30.7246C33.0375 31.0916 32.8173 31.4587 32.3401 31.8258L30.0275 33.3675C29.6971 33.5877 29.3667 33.6979 29.0731 33.6979C28.706 33.6979 28.3389 33.5143 27.9719 33.184C27.458 32.6333 27.0175 32.046 26.6504 31.4587C26.2833 30.8347 25.9162 30.1372 25.5125 29.293C22.6493 32.6701 19.0519 34.3586 14.7205 34.3586C11.637 34.3586 9.17762 33.4776 7.37895 31.7157C5.58029 29.9537 4.6626 27.6044 4.6626 24.6678C4.6626 21.5477 5.76382 19.0149 8.00298 17.1061C10.2421 15.1973 13.2154 14.2429 16.9963 14.2429C18.2444 14.2429 19.5291 14.353 20.8873 14.5365C22.2455 14.7201 23.6404 15.0137 25.1087 15.3441V12.6645C25.1087 9.87469 24.5214 7.92919 23.3834 6.79126C22.2088 5.65332 20.2266 5.10271 17.4001 5.10271C16.1153 5.10271 14.7939 5.24954 13.4357 5.57991C12.0775 5.91027 10.756 6.31406 9.47128 6.82796C8.88396 7.08492 8.44347 7.23175 8.18652 7.30516C7.92957 7.37858 7.74603 7.41528 7.5992 7.41528C7.08529 7.41528 6.82834 7.04821 6.82834 6.27735V4.47868C6.82834 3.89136 6.90176 3.45087 7.08529 3.19392C7.26883 2.93697 7.5992 2.68001 8.1131 2.42306C9.39787 1.76233 10.9396 1.21171 12.7382 0.771224C14.5369 0.294026 16.4457 0.0737812 18.4646 0.0737812C22.8328 0.0737812 26.0264 1.06488 28.082 3.04709C30.1009 5.02929 31.1287 8.03931 31.1287 12.0771V23.9704H31.2021ZM16.2989 29.5499C17.5102 29.5499 18.7583 29.3297 20.0798 28.8892C21.4012 28.4487 22.5759 27.6411 23.567 26.5399C24.1543 25.8425 24.5948 25.0716 24.815 24.1906C25.0353 23.3096 25.1821 22.2451 25.1821 20.9971V19.4553C24.1176 19.1984 22.9796 18.9782 21.805 18.8313C20.6304 18.6845 19.4924 18.6111 18.3545 18.6111C15.8951 18.6111 14.0964 19.0883 12.8851 20.0794C11.6737 21.0705 11.0864 22.4654 11.0864 24.3007C11.0864 26.026 11.5269 27.3108 12.4446 28.1917C13.3256 29.1094 14.6103 29.5499 16.2989 29.5499ZM45.775 33.5143C45.1143 33.5143 44.6738 33.4042 44.3801 33.1473C44.0865 32.927 43.8295 32.4131 43.6093 31.7157L34.983 3.34075C34.7628 2.6066 34.6526 2.1294 34.6526 1.87245C34.6526 1.28513 34.9463 0.954762 35.5336 0.954762H39.1309C39.8284 0.954762 40.3056 1.06488 40.5625 1.32184C40.8562 1.54208 41.0764 2.05599 41.2967 2.75343L47.4635 27.0538L53.1899 2.75343C53.3735 2.01928 53.5937 1.54208 53.8874 1.32184C54.181 1.10159 54.6949 0.954762 55.3557 0.954762H58.2923C58.9897 0.954762 59.4669 1.06488 59.7606 1.32184C60.0542 1.54208 60.3112 2.05599 60.458 2.75343L66.2578 27.3475L72.6082 2.75343C72.8284 2.01928 73.0854 1.54208 73.3423 1.32184C73.636 1.10159 74.1132 0.954762 74.7739 0.954762H78.1877C78.775 0.954762 79.1054 1.24842 79.1054 1.87245C79.1054 2.05599 79.0687 2.23952 79.032 2.45977C78.9953 2.68001 78.9219 2.97367 78.775 3.37746L69.9285 31.7524C69.7083 32.4865 69.4513 32.9637 69.1577 33.184C68.864 33.4042 68.3868 33.551 67.7628 33.551H64.6059C63.9085 33.551 63.4313 33.4409 63.1376 33.184C62.844 32.927 62.587 32.4498 62.4402 31.7157L56.7505 8.03931L51.0976 31.6789C50.9141 32.4131 50.6938 32.8903 50.4002 33.1473C50.1065 33.4042 49.5926 33.5143 48.9319 33.5143H45.775ZM92.9441 34.5054C91.0354 34.5054 89.1266 34.2852 87.2912 33.8447C85.4558 33.4042 84.0242 32.927 83.0698 32.3764C82.4825 32.046 82.0787 31.6789 81.9319 31.3486C81.7851 31.0182 81.7116 30.6511 81.7116 30.3208V28.4487C81.7116 27.6778 82.0053 27.3108 82.5559 27.3108C82.7762 27.3108 82.9964 27.3475 83.2167 27.4209C83.4369 27.4943 83.7673 27.6411 84.1343 27.788C85.3824 28.3386 86.7406 28.7791 88.1722 29.0727C89.6405 29.3664 91.0721 29.5132 92.5404 29.5132C94.8529 29.5132 96.6516 29.1094 97.8997 28.3019C99.1477 27.4943 99.8084 26.3197 99.8084 24.8146C99.8084 23.7868 99.4781 22.9426 98.8174 22.2451C98.1566 21.5477 96.9086 20.9236 95.1099 20.3363L89.7873 18.6845C87.1077 17.8402 85.1255 16.5922 83.9141 14.9403C82.7028 13.3252 82.0787 11.5265 82.0787 9.61773C82.0787 8.07602 82.4091 6.71784 83.0698 5.5432C83.7306 4.36856 84.6115 3.34075 85.7128 2.53318C86.814 1.68891 88.062 1.06488 89.5303 0.624394C90.9986 0.183904 92.5404 0.000366211 94.1555 0.000366211C94.9631 0.000366211 95.8073 0.0370737 96.6149 0.147196C97.4592 0.257319 98.23 0.404149 99.0009 0.550979C99.735 0.734516 100.432 0.918054 101.093 1.1383C101.754 1.35854 102.268 1.57879 102.635 1.79903C103.149 2.09269 103.516 2.38635 103.736 2.71672C103.956 3.01038 104.067 3.41416 104.067 3.92807V5.65332C104.067 6.42418 103.773 6.82796 103.222 6.82796C102.929 6.82796 102.451 6.68113 101.827 6.38747C99.735 5.43308 97.3858 4.95588 94.7795 4.95588C92.6872 4.95588 91.0354 5.28625 89.8974 5.98369C88.7595 6.68113 88.1722 7.74565 88.1722 9.25066C88.1722 10.2785 88.5392 11.1595 89.2734 11.8569C90.0075 12.5543 91.3657 13.2518 93.3112 13.8758L98.5237 15.5276C101.167 16.3719 103.075 17.5466 104.213 19.0516C105.351 20.5566 105.902 22.2818 105.902 24.1906C105.902 25.769 105.572 27.2006 104.947 28.4487C104.287 29.6967 103.406 30.798 102.268 31.6789C101.13 32.5966 99.7717 33.2574 98.1933 33.7346C96.5415 34.2485 94.8162 34.5054 92.9441 34.5054Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M99.8823 52.3449C87.8055 61.2648 70.2593 66.0001 55.1726 66.0001C34.0291 66.0001 14.9779 58.1814 0.588559 45.1869C-0.549372 44.1591 0.478437 42.7642 1.83661 43.5718C17.4006 52.6018 36.5986 58.0712 56.4573 58.0712C69.8555 58.0712 84.5752 55.2815 98.1203 49.5551C100.139 48.6374 101.864 50.8766 99.8823 52.3449Z" fill="#FF9900"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M104.911 46.6179C103.369 44.6357 94.7059 45.6635 90.7782 46.1407C89.6036 46.2875 89.4201 45.2597 90.4846 44.4889C97.3855 39.6435 108.728 41.0384 110.05 42.6535C111.371 44.3053 109.682 55.6479 103.222 61.0806C102.231 61.9249 101.276 61.4844 101.717 60.3832C103.185 56.7492 106.452 48.5634 104.911 46.6179Z" fill="#FF9900"/>
              </svg>

              <div className="text-center text-[#FF9900] text-sm md:text-base lg:text-lg">
              AWS SageMaker
              </div>
           </div>
       </div>
    </div>
  </>
} 

 
export function AI_TAP(){
  return <>
  <style>{`
    .bg-tanent {  }
  `}</style>
    <div style={{backgroundImage:`url(${ai_bg})`}} className={`thumbnailBox h-full bg-tanent  p-2 sm:p-3 md:p-4 lg:p-6 relative bg-repeat bg-cover `}>
        <h2 className="font-neuebit text-4xl md:text-4xl lg:text-6xl xl:text-6xl leading-[40px]  xl:leading-[50px] text-[#F1C5AA] mb-5">AI 
          <br></br> Service</h2>
    </div>
  </>
}