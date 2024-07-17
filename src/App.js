import './App.css';
// import './cube.css';
import './flip.css';
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

                  
                  {/* dummy */}
                  <Route path="/editor" element={<Editor />} />
              </Routes>
          </MyProvider>
        </Router>
  );
}

export default App;
