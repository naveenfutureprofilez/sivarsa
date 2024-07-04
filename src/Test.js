import React, { useEffect } from 'react'

export default function Test() {


   useEffect(() => {
      const cube = document.querySelector('.cube');
      if(cube){
         cube.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
      }
   }, []);

  return (
    <div className='bg-black min-h-screen flex justify-center items-center'>
      <div className="container">
          <div className="cube">
            <div className="wall text-white front">Front</div>
            <div className="wall text-white back">Back</div>
            <div className="wall text-white left">Left</div>
            <div className="wall text-white right">Right</div>
            <div className="wall text-white top">Top</div>
            <div className="wall text-white bottom">Bottom</div>
          </div>
        </div>
    </div>
  )
}
