import './App.css';
// import './cube.css';
// import './flip.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MobilePage1 from './mobile/MobilePage1';
import Test from './Test';
import Demo from './Demo';

import Aos1 from './aos/Aos1';
import Aos2 from './aos/Aos2';
import Aos3 from './aos/Aos3';

import Screen from './flip/Screen';
import Screen2 from './flip/Screen2';
import Screen3 from './flip/Screen3';
import Screen4 from './flip/Screen4';
import Screen5 from './flip/Screen5';
import Screen6 from './flip/Screen6';
import Screen7 from './flip/Screen7';
import Editor from './Editor';
import { MyProvider } from './context/Mycontext';
import Staffing1 from './flip/staffing/Staffing1';
import Staffing2 from './flip/staffing/Staffing2';
import Staffing3 from './flip/staffing/Staffing3';
import Staffing4 from './flip/staffing/Staffing4';
import Staffing5 from './flip/staffing/Staffing5';
import Staffing6 from './flip/staffing/Staffing6';
import Staffing7 from './flip/staffing/Staffing7';
import Staffing8 from './flip/staffing/Staffing8';
import Mobile1 from './flip/Mobile/Mobile1';
import Mobile2 from './flip/Mobile/Mobile2';
import Mobile3 from './flip/Mobile/Mobile3';
import Mobile4 from './flip/Mobile/Mobile4';
import Mobile5 from './flip/Mobile/Mobile5';
import Mobile6 from './flip/Mobile/Mobile6';
import Mobile7 from './flip/Mobile/Mobile7';
import Mobile8 from './flip/Mobile/Mobile8';
import Mobile9 from './flip/Mobile/Mobile9';
import Web1 from './flip/Web/Web1';
import Web2 from './flip/Web/Web2';
import Web3 from './flip/Web/Web3';
import Web4 from './flip/Web/Web4';
import Web5 from './flip/Web/Web5';
import Web6 from './flip/Web/Web6';
import Web7 from './flip/Web/Web7';
import Web8 from './flip/Web/Web8';
import Web9 from './flip/Web/Web9';
import AI1 from './flip/ai/AI1';
import AI2 from './flip/ai/AI2';
import AI3 from './flip/ai/AI3';
import AI4 from './flip/ai/AI4';
import AI5 from './flip/ai/AI5';
import AI6 from './flip/ai/AI6';
import AI7 from './flip/ai/AI7';
import AI8 from './flip/ai/AI8';
import AI9 from './flip/ai/AI9';
import AI10 from './flip/ai/AI10';
import Backend1 from './flip/backend/Backend1';
import Backend2 from './flip/backend/Backend2';
import Backend3 from './flip/backend/Backend3';
import Backend4 from './flip/backend/Backend4';
import Backend5 from './flip/backend/Backend5';
import Backend6 from './flip/backend/Backend6';
import Backend7 from './flip/backend/Backend7';
import Backend8 from './flip/backend/Backend8';
import Backend9 from './flip/backend/Backend9';
import Backend10 from './flip/backend/Backend10';
import UI1 from './flip/ui/UI1';
import UI2 from './flip/ui/UI2';
import UI3 from './flip/ui/UI3';
import UI4 from './flip/ui/UI4';
import UI5 from './flip/ui/UI5';
import UI6 from './flip/ui/UI6';
import UI7 from './flip/ui/UI7';



function App() {
  return (
    <Router basename="/">
          <MyProvider>
              <Routes>
                  <Route path="/mobile-web-devlopment" element={<MobilePage1 />} />
                  <Route path="/demo" element={<Demo />} />
                  <Route path="/test" element={<Test />} />

                  <Route path="/aos1" element={<Aos1 />} />
                  <Route path="/aos2" element={<Aos2 />} />
                  <Route path="/aos3" element={<Aos3 />} /> 

                  <Route path="/" element={<Screen />} />
                  <Route path="/services/2" element={<Screen2 />} />
                  <Route path="/services/3" element={<Screen3 />} />
                  <Route path="/services/4" element={<Screen4 />} />
                  <Route path="/services/5" element={<Screen5 />} />
                  <Route path="/services/6" element={<Screen6 />} />
                  <Route path="/services/7" element={<Screen7 />} />

                  {/* Staffing */}
                  <Route path="/services/staffing" element={<Staffing1 />} />
                  <Route path="/services/staffing/2" element={<Staffing2 />} />
                  <Route path="/services/staffing/3" element={<Staffing3 />} />
                  <Route path="/services/staffing/4" element={<Staffing4 />} />
                  <Route path="/services/staffing/5" element={<Staffing5 />} />
                  <Route path="/services/staffing/6" element={<Staffing6 />} />
                  <Route path="/services/staffing/7" element={<Staffing7 />} />
                  <Route path="/services/staffing/8" element={<Staffing8 />} />

                  {/* Mobile Applications */}
                  <Route path="/services/mobile" element={<Mobile1 />} />
                  <Route path="/services/mobile/2" element={<Mobile2 />} />
                  <Route path="/services/mobile/3" element={<Mobile3 />} />
                  <Route path="/services/mobile/4" element={<Mobile4 />} />
                  <Route path="/services/mobile/5" element={<Mobile5 />} />
                  <Route path="/services/mobile/6" element={<Mobile6 />} />
                  <Route path="/services/mobile/7" element={<Mobile7 />} />
                  <Route path="/services/mobile/8" element={<Mobile8 />} />
                  <Route path="/services/mobile/9" element={<Mobile9 />} />

                  {/* Web Applications */}
                  <Route path="/services/web" element={<Web1 />} />
                  <Route path="/services/web/2" element={<Web2 />} />
                  <Route path="/services/web/3" element={<Web3 />} />
                  <Route path="/services/web/4" element={<Web4 />} />
                  <Route path="/services/web/5" element={<Web5 />} />
                  <Route path="/services/web/6" element={<Web6 />} />
                  <Route path="/services/web/7" element={<Web7 />} />
                  <Route path="/services/web/8" element={<Web8 />} />
                  <Route path="/services/web/9" element={<Web9 />} />

                  {/* AI Services */}
                  <Route path="/services/ai" element={<AI1 />} />
                  <Route path="/services/ai/2" element={<AI2 />} />
                  <Route path="/services/ai/3" element={<AI3 />} />
                  <Route path="/services/ai/4" element={<AI4 />} />
                  <Route path="/services/ai/5" element={<AI5 />} />
                  <Route path="/services/ai/6" element={<AI6 />} />
                  <Route path="/services/ai/7" element={<AI7 />} />
                  <Route path="/services/ai/8" element={<AI8 />} />
                  <Route path="/services/ai/9" element={<AI9 />} />
                  <Route path="/services/ai/10" element={<AI10 />} />

                   {/* Backend Services */}
                   <Route path="/services/backend" element={<Backend1 />} />
                  <Route path="/services/backend/2" element={<Backend2 />} />
                  <Route path="/services/backend/3" element={<Backend3 />} />
                  <Route path="/services/backend/4" element={<Backend4 />} />
                  <Route path="/services/backend/5" element={<Backend5 />} />
                  <Route path="/services/backend/6" element={<Backend6 />} />
                  <Route path="/services/backend/7" element={<Backend7 />} />
                  <Route path="/services/backend/8" element={<Backend8 />} />
                  <Route path="/services/backend/9" element={<Backend9 />} />
                  <Route path="/services/backend/10" element={<Backend10 />} />

                  {/* UI & UX services */}
                  <Route path="/services/ui" element={<UI1 />} />
                  <Route path="/services/ui/2" element={<UI2 />} />
                  <Route path="/services/ui/3" element={<UI3 />} />
                  <Route path="/services/ui/4" element={<UI4 />} />
                  <Route path="/services/ui/5" element={<UI5 />} />
                  <Route path="/services/ui/6" element={<UI6 />} />
                  <Route path="/services/ui/7" element={<UI7 />} />

                  {/* dummy */}
                  <Route path="/editor" element={<Editor />} />
              </Routes>
          </MyProvider>
        </Router>
  );
}

export default App;
