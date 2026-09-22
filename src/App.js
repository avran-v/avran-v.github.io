import './App.css';
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Now from "./pages/Now";
import Navbar from "./components/Navbar";

function AppRoutes({ onToggleTheme }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route
          exact
          path="/"
          element={
            <About
              onToggleTheme={() => onToggleTheme()}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects
              onToggleTheme={() => onToggleTheme()}
            />
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

function App() {
  const [isThemeInverted, setIsThemeInverted] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("theme-inverted", isThemeInverted);

    return () => {
      document.body.classList.remove("theme-inverted");
    };
  }, [isThemeInverted]);

  return (
    <Router>
      <Navbar />
      <AppRoutes onToggleTheme={() => setIsThemeInverted((currentValue) => !currentValue)} />
    </Router>
  );
}

export default App;
