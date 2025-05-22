import React from 'react';
import { skills } from '../data/index';
const Services = () => {
  return (
    <div id='services' className='min-h-screen flex flex-col justify-center items-center px-4 xl:py-0 py-10'>
        <h2 className='text-4xl text-yellow-500 font-light mb-32 xl:mt-0 mt-12'>
        Service  </h2>
        <div className='w-full xl:w-[900px] lg:w-[800px] md:w-[600px] grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-18 xl:mb-0 mb-16' >
            {skills.map((skill, index) => (
                <div key={index} className='flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <h3 className='text-xl text-yellow-500 font-semibold'>{skill.name}</h3>
                    <p className='text-gray-400 text-center mt-2'>{skill.description}</p>
                    <div className='flex gap-2 mt-4'>
                        {skill.icons.map((icon, index) => (
                            <i key={index} className={`bx ${icon} text-yellow-500 text-2xl`}></i>
                        ))}
                    </div>
                </div>
             ))}
        </div>
     </div>
  )
}

export default Services