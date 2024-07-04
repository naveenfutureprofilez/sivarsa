import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from './home/Page';
import Page2 from './home/Page2';

function App() {
  return (
    <Router basename="/">
     <Routes>
     <Route path="/" element={<Page />} />
     <Route path="/hello" element={<Page2 />} />
     </Routes>
  </Router>
  );
}

export default App;
