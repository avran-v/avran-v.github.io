import React from "react";
import { Link } from "react-router-dom";

const Now = ({ className }) => {
  return (
    <div className={className}>
      <main className="min-h-screen bg-sage">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
            ← Back
          </Link>
          
          <div className="bg-sage rounded-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Now</h1>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">What I'm doing now</h2>
                <p>
                  Currently a senior at Georgia Tech studying Computer Science with a focus on AI and software engineering.
                  I'm working on research projects and building tools that make a real impact.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Currently Learning</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Advanced machine learning techniques</li>
                  <li>Full-stack web development</li>
                  <li>Computer vision and AI</li>
                  <li>Software design patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Recent Projects</h2>
                <p>
                  Check out my <Link to="/projects" className="text-blue-600 hover:text-blue-800">projects page</Link> for 
                  a complete overview of what I've been working on.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Now;
