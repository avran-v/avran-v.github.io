import React from 'react';

export default function Project({ title, content, github, image, devpost, demovid, subtitle }) {
  return (
    <div className="w-full mx-auto my-4 border rounded overflow-hidden shadow-lg bg-white flex flex-col md:flex-row">
      <div 
        className="w-full md:w-1/3 flex-none bg-cover text-center overflow-hidden" 
        style={{ backgroundImage: `url(${image})`, height: '13rem', backgroundSize: 'cover', backgroundPosition: 'center'}} 
        title="Project Image"
      >
      </div>
      <div className="w-full md:w-2/3 p-4 flex flex-col justify-between leading-normal text-center">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <div className="text-gray-600 text-md font-semibold mb-2">{subtitle}</div>
          <p className="text-gray-700 text-base">{content}</p>
        </div>
        <div className="flex justify-center md:justify-end items-center space-x-4">
          <a href={github} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          {devpost && (
            <a href={devpost} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
              Devpost
            </a>
          )}
            {demovid && (
            <a href={devpost} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
              Demo Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
}








