import './App.css';
import './test.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './home/Landing';
import MobilePage1 from './mobile/MobilePage1';
import HomePage2 from './home/HomePage2';
import HomePage3 from './home/HomePage3';
import HomePage4 from './home/HomePage4';
import HomePage5 from './home/HomePage5';
import HomePage6 from './home/HomePage6';


function App() {
  return (
    <Router basename="/">
     <Routes>
     <Route path="/" element={<Landing />} />
     <Route path="/home/2" element={<HomePage2 />} />
     <Route path="/home/3" element={<HomePage3 />} />
     <Route path="/home/4" element={<HomePage4 />} />
     <Route path="/home/5" element={<HomePage5 />} />
     <Route path="/home/6" element={<HomePage6 />} />
     <Route path="/mobile-web-devlopment" element={<MobilePage1 />} />
     </Routes>
  </Router>
  );
}

export default App;
