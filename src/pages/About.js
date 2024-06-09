import React from "react";
import header from '../assets/images/header.jpg';

const About = () => {
    return (
<div>
      <main>
        <div className="flex flex-col items-center mt-5">
          <img src={header} className="h-[24rem] mb-4 object-contain" alt="Header Image" /> 
          <p className="text-center">Welcome to my portfolio!</p>
        </div>
      </main>
    </div>
    );
  }

export default About;