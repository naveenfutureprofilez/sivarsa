import { useEffect, useState } from "react";
import HomePage2 from './HomePage2';
import HomePage3 from './HomePage3';
export default function Screen2() {
   
   const [load, setLoad] = useState(false);
   useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
   }, []);

  return (
    <>
       {load ? <HomePage2 /> : <HomePage3 />}
    </>
  );
}
 