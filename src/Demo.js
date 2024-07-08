import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [rotation, setRotation] = useState(0);
  const boxRefs = useRef([]);
  const [cubeSize, setCubeSize] = useState({ width: 0, height: 0 });

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

  const calculatePerspective = () => {
    // Calculate perspective based on cube size
    const maxCubeSize = Math.max(cubeSize.width, cubeSize.height);
    return `${maxCubeSize * 5}px`; // Adjust multiplier as needed for desired perspective effect
  };

  return (
    <div className="">
      <div className="grid grid-cols-3">
        {[...Array(9)].map((_, index) => (
          <div className="box" key={index} ref={(el) => (boxRefs.current[index] = el)} style={{ height: `${cubeSize.height}px` }}>
            <div className="scene" style={{ '--cube-width': `${cubeSize.width}px`, '--cube-height': `${cubeSize.height}px`, perspective: calculatePerspective() }}>
              <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
                <div className="face front">Front</div>
                <div className="face back">Back</div>
                <div className="face right">Right</div>
                <div className="face left">Left</div>
                <div className="face top">Top</div>
                <div className="face bottom">Bottom</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="nextButton" onClick={handleNext}>Next</button>
    </div>
  );
};

export default App;
