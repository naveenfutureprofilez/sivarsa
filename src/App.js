import './App.css';
import './test.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './home/Landing';
import MobilePage1 from './mobile/MobilePage1';

function App() {
  return (
    <Router basename="/">
     <Routes>
     <Route path="/" element={<Landing />} />
     <Route path="/mobile-web-devlopment" element={<MobilePage1 />} />
     </Routes>
  </Router>
  );
}

export default App;
