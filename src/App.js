import './App.css';
import './test.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from './home/Page';
import Test from './Test';

function App() {
  return (
    <Router basename="/">
     <Routes>
     <Route path="/" element={<Page />} />
     <Route path="/test" element={<Test />} />
     </Routes>
  </Router>
  );
}

export default App;
