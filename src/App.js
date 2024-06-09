import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Now from "./pages/Now";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/now" element={<Now />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
