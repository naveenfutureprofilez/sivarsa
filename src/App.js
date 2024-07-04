import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from './home/Page';

function App() {
  return (
    <Router basename="/">
     <Routes>
     <Route path="/" element={<Page />} />
     </Routes>
  </Router>
  );
}

export default App;
