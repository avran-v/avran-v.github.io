import React from "react"; 
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <header className="bg-indigo-950 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center justify-center">
          <a className="text-3xl title-font font-medium text-white mb-4 md:mb-0">
              Keerthi Veeramachaneni
          </a>
          <nav className="flex flex-wrap text-indigo-300 items-center justify-center">
            <Link to="/" className="ml-4 mr-5 hover:text-white">
                About
            </Link>
            <Link to="/projects" className="mr-5 hover:text-white">
              Projects
            </Link>
            <Link to="/now" className="mr-5 hover:text-white">
              Now
            </Link>
          </nav>
        </div>
      </header>
    );
  }