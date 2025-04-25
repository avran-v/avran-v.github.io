import React from "react";

const About = ({ className }) => {
    return (
<div className={className}>
      <main>
        <div className="flex flex-col items-center mt-5">
          <img src="assets/header.jpg" className="h-[24rem] mb-4 object-contain" alt="Header Image" /> 
          <p className="text-center">Hi, I'm Keerthi Veeramachaneni, a 3rd year computer science student at the Georgia Institute of Technology!</p>
          <p className="text-center">I'm currently expanding my skills in the realms of <b>software development</b> and <b>research.</b></p>
          <div class="px-6 pt-4 pb-2 mb-4">
          <p className="text-center mb-2">Interests:</p>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">computing education</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">application design</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">artificial intelligence</span>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:aveerama3@gatech.edu" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <img src="/assets/emailicon.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com/avran-v" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <img src="/assets/githubicon.png" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/keerthi-neni/" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedinicon.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </main>
    </div>
    );
  }

export default About;