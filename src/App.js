import './App.css';
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Now from "./pages/Now";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About className="fade-in"/>} />
        <Route path="/projects" element={<Projects className="fade-in"/>}/>
        <Route path="/now" element={<Now className="fade-in"/>} />
      </Routes>
    </Router>
  );
}

export default App;
