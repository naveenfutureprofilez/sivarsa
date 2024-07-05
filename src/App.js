import './App.css';
import './test.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from './home/Page';
import Page2 from './home/Page2';
import Test from './Test';
import NewPage2 from './new/NewPage2';
import NewPage from './new/NewPage';

function App() {
  return (
    <Router basename="/">
     <Routes>
     <Route path="/" element={<Page />} />
     <Route path="/page2" element={<Page2 />} />
     <Route path="/test" element={<Test />} />


     <Route path="/1" element={<NewPage />} />
     <Route path="/2" element={<NewPage2 />} />
     </Routes>
  </Router>
  );
}

export default App;
