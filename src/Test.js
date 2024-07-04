import React, { useEffect } from 'react'

export default function Test() {

   useEffect(() => {
      const cubes = document.getElementsByClassName('cube');
      Array.from(cubes).forEach(cube => {
         cube.style.transition = 'transform 1s';  
         cube.style.transform = 'rotateX(0deg) rotateY(90deg) rotateZ(0deg)';
       });
   }, []);

  return (
    <div className='bg-black min-h-screen flex justify-center items-center'>
      <div>
         <div className="flex">
         <div class="flex">
          <div class="cube">
            <div class="wall text-white front">Front</div>
            <div class="wall text-white back">Back</div>
            <div class="wall text-white left">Left</div>
            <div class="wall text-white right">Right</div>
            <div class="wall text-white top">Top</div>
            <div class="wall text-white bottom">Bottom</div>
          </div>
        </div>

          <div className="cube">
            <div className="wall text-white front"></div>
            <div className="wall text-white back">Back</div>
            <div className="wall text-white left">Left</div>
            <div className="wall text-white right"></div>
            <div className="wall text-white top">Top</div>
            <div className="wall text-white bottom">Bottom</div>
          </div>
          <div className="cube">
            <div className="wall text-white front">Front</div>
            <div className="wall text-white back">Back</div>
            <div className="wall text-white left">Left</div>
            <div className="wall text-white right">Right</div>
            <div className="wall text-white top">Top</div>
            <div className="wall text-white bottom">Bottom</div>
          </div>
        </div>
         <div className="flex">
          <div className="cube">
            <div className="wall text-white front"></div>
            <div className="wall text-white back">Back</div>
            <div className="wall text-white left">Left</div>
            <div className="wall text-white right"></div>
            <div className="wall text-white top">Top</div>
            <div className="wall text-white bottom">Bottom</div>
          </div>
          <div className="cube">
            <div className="wall text-white front">Front</div>
            <div className="wall text-white back">Back</div>
            <div className="wall text-white left">Left</div>
            <div className="wall text-white right">Right</div>
            <div className="wall text-white top">Top</div>
            <div className="wall text-white bottom">Bottom</div>
          </div>
          <div className="cube">
            <div className="wall text-white front"></div>
            <div className="wall text-white back">Back</div>
            <div className="wall text-white left">Left</div>
            <div className="wall text-white right"></div>
            <div className="wall text-white top">Top</div>
            <div className="wall text-white bottom">Bottom</div>
          </div>
        </div>
         

      </div>
    </div>
  )
}
