import React, { useEffect } from 'react'
// import "../src/test.css"

export default function Test() {

  useEffect(() => {
    const cube = document.querySelector('.cube');
    setTimeout(() => {
      cube.classList.add('rotate');
    }, 1000); // Delay to ensure the cube is rendered before rotation starts
  }, []);

  return (
    <div className="scene">
      <div className="cube">
        <div className="cube-face cube-face--front">Front</div>
        <div className="cube-face cube-face--back">Back</div>
        <div className="cube-face cube-face--left">Left</div>
        <div className="cube-face cube-face--right">Right</div>
        <div className="cube-face cube-face--top">Top</div>
        <div className="cube-face cube-face--bottom">Bottom</div>
      </div>
    </div>
  )
}
