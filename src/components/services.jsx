import React from 'react';
import { skills } from '../data/index';
const Services = () => {
  return (
    <div id='services' className='min-h-screen flex flex-col justify-center items-center px-4 xl:py-0 py-10'>
        <h2 className='text-4xl text-yellow-500 font-light mb-32 xl:mt-0 mt-12'>
        Service  </h2>
        <div className='w-full xl:w-[900px] lg:w-[800px] md:w-[600px] grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-18 xl:mb-0 mb-16' >
            {skills.map((skill, index) => (
  <div
    key={index}
    className="group flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg border border-transparent hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
  >
    <h3 className="text-xl text-yellow-500 font-semibold">{skill.name}</h3>
    <p className="text-gray-400 text-center mt-2">{skill.description}</p>
    
    <div className="flex gap-3 mt-4">
      {skill.icons.map((icon, iconIndex) => (
        <div key={iconIndex} className="relative group/icon">
          {/* Icon with hover effect */}
          <i 
            className={`bx ${icon} text-2xl text-yellow-500 hover:text-yellow-300 transition-colors duration-200`}
          ></i>
          
          {/* Tooltip for icon name */}
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {icon.split('bxl-')[1].toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  </div>
))}
        </div>
     </div>
  )
}

export default Services